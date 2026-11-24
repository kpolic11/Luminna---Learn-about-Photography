import React, { useEffect, useMemo, useRef } from 'react';

/**
 * A plaster head, lit by one lamp, rendered with real shading:
 * Lambert light on a height-map, cast shadows by ray-marching, and an area light
 * (several samples over a disc) so a large source really gives soft shadow edges.
 *
 * az: 0° = lamp beside the camera … 90° = at the side (frame left) … 180° = behind the head
 * el: lamp height in degrees (−30 below … 75 above)
 * size: 0 (bare bulb) … 4 (huge softbox)
 */
const W = 200;
const H = 250;
const SX = 1 / 80; // pixels → model units
const g = (x: number, s: number) => Math.exp(-(x * x) / (s * s));

function buildHeight(): Float32Array {
  const h = new Float32Array(W * H);
  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      const u = (i - W / 2) * SX; // −1.25 … 1.25
      const v = (j - H * 0.42) * SX; // head centre a little above the middle
      let z = 0;
      // skull + face (ellipsoid)
      const e = 1 - (u / 0.6) ** 2 - ((v + 0.02) / 0.78) ** 2;
      if (e > 0) z = 0.6 * Math.sqrt(e);
      // jaw narrows towards the chin
      if (e > 0) {
        const t = Math.max(0, Math.min(1, (v - 0.05) / 0.7));
        const sm = t * t * (3 - 2 * t);
        z *= 1 - 0.3 * sm * Math.min(1, (u / 0.5) ** 2);
      }
      if (z > 0) {
        // brow ridge, eye sockets, eyeballs, cheekbones
        z += 0.05 * g(v + 0.2, 0.05) * g(u, 0.42);
        z -= 0.055 * (g(u - 0.21, 0.11) + g(u + 0.21, 0.11)) * g(v + 0.08, 0.08);
        z += 0.03 * (g(u - 0.21, 0.045) + g(u + 0.21, 0.045)) * g(v + 0.08, 0.04);
        z += 0.04 * (g(u - 0.3, 0.12) + g(u + 0.3, 0.12)) * g(v - 0.08, 0.1);
        // nose: a ridge that grows towards the tip, then the nostrils
        const ramp = v < -0.12 ? 0 : v < 0.2 ? (v + 0.12) / 0.32 : Math.max(0, 1 - (v - 0.2) / 0.06);
        z += 0.13 * ramp * g(u, 0.05 + 0.035 * ramp);
        // lips and chin
        z += 0.035 * g(u, 0.13) * (g(v - 0.36, 0.03) + 0.8 * g(v - 0.42, 0.03));
        z -= 0.02 * g(u, 0.12) * g(v - 0.39, 0.012);
        z += 0.04 * g(u, 0.14) * g(v - 0.6, 0.06);
      }
      // neck and shoulders
      if (v > 0.55 && Math.abs(u) < 0.27) z = Math.max(z, 0.32 * Math.sqrt(1 - (u / 0.27) ** 2));
      // shoulders: a broad, rounded bust
      {
        const s = 1 - (u / 1.12) ** 2 - ((v - 1.55) / 0.68) ** 2;
        if (s > 0) z = Math.max(z, 0.42 * Math.sqrt(s));
      }
      h[j * W + i] = z;
    }
  }
  return h;
}

// fixed sample pattern over a unit disc (golden-angle spiral)
const DISC: [number, number][] = Array.from({ length: 14 }, (_, k) => {
  const r = Math.sqrt((k + 0.5) / 14);
  const a = k * 2.39996;
  return [r * Math.cos(a), r * Math.sin(a)];
});

function lightVec(az: number, el: number): [number, number, number] {
  const a = (az * Math.PI) / 180;
  const e = (el * Math.PI) / 180;
  // x: towards frame right, y: down, z: towards the camera
  return [-Math.sin(a) * Math.cos(e), -Math.sin(e), Math.cos(a) * Math.cos(e)];
}

function render(ctx: CanvasRenderingContext2D, h: Float32Array, az: number, el: number, size: number) {
  const img = ctx.createImageData(W, H);
  const radius = [0.015, 0.12, 0.28, 0.5, 0.8][size];
  const L0 = lightVec(az, el);
  // build an orthonormal basis around L0 to spread the area-light samples
  const up: [number, number, number] = Math.abs(L0[1]) > 0.9 ? [1, 0, 0] : [0, 1, 0];
  const bx = [L0[1] * up[2] - L0[2] * up[1], L0[2] * up[0] - L0[0] * up[2], L0[0] * up[1] - L0[1] * up[0]];
  const bl = Math.hypot(bx[0], bx[1], bx[2]);
  const B1 = [bx[0] / bl, bx[1] / bl, bx[2] / bl];
  const B2 = [L0[1] * B1[2] - L0[2] * B1[1], L0[2] * B1[0] - L0[0] * B1[2], L0[0] * B1[1] - L0[1] * B1[0]];
  const samples = (size === 0 ? DISC.slice(0, 1) : DISC).map(([p, q]) => {
    const r = size === 0 ? 0 : radius;
    const v = [L0[0] + r * (p * B1[0] + q * B2[0]), L0[1] + r * (p * B1[1] + q * B2[1]), L0[2] + r * (p * B1[2] + q * B2[2])];
    const n = Math.hypot(v[0], v[1], v[2]);
    return [v[0] / n, v[1] / n, v[2] / n] as [number, number, number];
  });
  const at = (x: number, y: number) => {
    const xi = x | 0;
    const yi = y | 0;
    if (xi < 0 || yi < 0 || xi >= W || yi >= H) return 0;
    return h[yi * W + xi];
  };
  const back = L0[2] < 0 ? Math.min(1, -L0[2] * 1.4) : 0;
  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      const z = h[j * W + i];
      const isBody = z > 0.0005;
      // normal from the height map
      const dzdx = (at(i + 1, j) - at(i - 1, j)) / (2 * SX);
      const dzdy = (at(i, j + 1) - at(i, j - 1)) / (2 * SX);
      let nx = -dzdx;
      let ny = -dzdy;
      let nz = 1;
      const nl = Math.hypot(nx, ny, nz);
      nx /= nl;
      ny /= nl;
      nz /= nl;
      let light = 0;
      for (const L of samples) {
        const lam = nx * L[0] + ny * L[1] + nz * L[2];
        if (lam <= 0) continue;
        // march towards the lamp: occluded if the surface rises above the ray
        let vis = 1;
        const lxy = Math.hypot(L[0], L[1]);
        if (lxy > 0.02) {
          const stepPx = 2;
          const dx = (L[0] / lxy) * stepPx;
          const dy = (L[1] / lxy) * stepPx;
          const dz = (L[2] / lxy) * stepPx * SX;
          let x = i + dx;
          let y = j + dy;
          let rz = z + dz;
          for (let s = 0; s < 70; s++) {
            if (rz > 0.75 || x < 0 || y < 0 || x >= W || y >= H) break;
            if (at(x, y) > rz + 0.004) {
              vis = 0;
              break;
            }
            x += dx;
            y += dy;
            rz += dz;
          }
        }
        light += lam * vis;
      }
      light /= samples.length;
      let r: number, gr: number, b: number;
      if (isBody) {
        // plaster: warm white, a little bounce light from the room in the shadows
        const fill = 0.07 + 0.05 * nz;
        let k = Math.min(1, fill + 0.95 * light);
        // rim light when the lamp is behind
        if (back > 0) {
          const nxy = Math.hypot(nx, ny) || 1;
          const lxy2 = Math.hypot(L0[0], L0[1]) || 1;
          const facing = Math.max(0, (nx * L0[0] + ny * L0[1]) / (nxy * lxy2));
          k += back * Math.pow(1 - nz, 3) * (0.35 + 0.65 * facing) * 1.6;
        }
        k = Math.min(1, k);
        r = 242 * k;
        gr = 232 * k;
        b = 216 * k;
      } else {
        // the wall behind: lit by the same lamp, darker material
        let k = 0.22 + 0.5 * light;
        if (back > 0) k = Math.max(k, 0.12 + 0.75 * back);
        r = 96 * k + 14;
        gr = 92 * k + 13;
        b = 88 * k + 12;
      }
      const o = (j * W + i) * 4;
      img.data[o] = r;
      img.data[o + 1] = gr;
      img.data[o + 2] = b;
      img.data[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}

export const PlasterHead: React.FC<{ az: number; el: number; size: number; label?: string }> = ({ az, el, size, label }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const height = useMemo(buildHeight, []);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const id = requestAnimationFrame(() => render(ctx, height, az, el, size));
    return () => cancelAnimationFrame(id);
  }, [az, el, size, height]);
  return <canvas ref={ref} width={W} height={H} role="img" aria-label={label} className="w-full h-auto rounded-xl bg-stone-800" style={{ imageRendering: 'auto' }} />;
};

/** A small top-down map: head, nose towards the camera, lamp on its circle. */
export const LampMap: React.FC<{ az: number; size: number; camera: string }> = ({ az, size, camera }) => {
  const a = (az * Math.PI) / 180;
  const R = 52;
  const lx = 70 - R * Math.sin(a);
  const ly = 64 + R * Math.cos(a);
  return (
    <svg viewBox="0 0 140 140" className="w-full max-w-[150px]" aria-hidden="true">
      <circle cx={70} cy={64} r={R} fill="none" stroke="#57534e" strokeDasharray="3 4" />
      <ellipse cx={70} cy={64} rx={15} ry={17} fill="#e7e2d8" />
      <path d="M66 79 L70 87 L74 79 Z" fill="#e7e2d8" />
      <rect x={60} y={126} width={20} height={11} rx={2} fill="#a8a29e" />
      <circle cx={70} cy={131} r={3.5} fill="#1c1917" />
      <text x={86} y={135} fontSize={9} fill="#a8a29e">
        {camera}
      </text>
      <line x1={lx} y1={ly} x2={70} y2={64} stroke="#e0b062" strokeOpacity={0.5} strokeDasharray="2 3" />
      <circle cx={lx} cy={ly} r={5 + size * 2.5} fill="#e0b062" />
    </svg>
  );
};
