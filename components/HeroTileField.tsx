"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

type Tile = {
  id: string;
  label: string;
  src: string;
  // Position as % of container
  x: number;
  y: number;
  // Size in px (desktop baseline)
  size: number;
  // Base rotation degrees
  r: number;
  // Depth tier: 1 front, 2 mid, 3 back
  z: 1 | 2 | 3;
  // Optional: crop off edge
  crop?: boolean;
};

type Props = {
  tiles: Tile[];
  className?: string;
};

/**
 * Rareloop-style hero tile field:
 * - Ghost background tiles (faint scattered squares)
 * - Foreground tile objects with depth tiers
 * - Staggered column layout (no horizontal row alignment)
 * - Subtle drift animation per tile
 * - Cursor parallax
 */
export function HeroTileField({ tiles, className }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  // Cursor position normalised to [-0.5, 0.5]
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Spring for smooth premium feel
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });

  const [hovered, setHovered] = React.useState<string | null>(null);

  const onMove = React.useCallback(
    (e: React.PointerEvent) => {
      const el = ref.current;
      if (!el) return;

      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;

      mx.set(nx);
      my.set(ny);
    },
    [mx, my]
  );

  const onLeave = React.useCallback(() => {
    mx.set(0);
    my.set(0);
    setHovered(null);
  }, [mx, my]);

  // Ghost tiles - faint background squares
  const ghosts = React.useMemo(() => makeGhostTiles(18, 1337), []);

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`relative h-full w-full overflow-hidden ${className ?? ""}`}
    >
      {/* Ghost background field - larger, more visible like Rareloop */}
      <div className="pointer-events-none absolute inset-0">
        {ghosts.map((g) => (
          <motion.div
            key={g.id}
            className="absolute rounded-[28px] border border-foreground/[0.04] bg-foreground/[0.02] dark:border-white/[0.06] dark:bg-white/[0.025]"
            style={{
              left: `${g.x}%`,
              top: `${g.y}%`,
              width: g.size,
              height: g.size,
              transform: `rotate(${g.r}deg)`,
            }}
            animate={{
              y: [0, g.driftY, 0],
              x: [0, g.driftX, 0],
            }}
            transition={{
              duration: g.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: g.delay,
            }}
          />
        ))}
      </div>

      {/* Foreground tiles */}
      <div className="absolute inset-0">
        {tiles.map((t, idx) => (
          <HeroTile
            key={t.id}
            tile={t}
            idx={idx}
            sx={sx}
            sy={sy}
            tiles={tiles}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}

function HeroTile({
  tile,
  idx,
  sx,
  sy,
  tiles,
  hovered,
  setHovered,
}: {
  tile: Tile;
  idx: number;
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
  tiles: Tile[];
  hovered: string | null;
  setHovered: (v: string | null) => void;
}) {
  const tier = tile.z;
  const parallax = tier === 1 ? 16 : tier === 2 ? 10 : 6;
  const isHovered = hovered === tile.id;

  // Neighbour push: if a tile is hovered, others move slightly away
  const push = React.useMemo(() => {
    if (!hovered || hovered === tile.id) return { px: 0, py: 0 };
    const h = tiles.find((x) => x.id === hovered);
    if (!h) return { px: 0, py: 0 };

    const dx = tile.x - h.x;
    const dy = tile.y - h.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const radius = 25;
    if (dist > radius) return { px: 0, py: 0 };

    const strength = (1 - dist / radius) * 8;
    const ux = dx / (dist || 1);
    const uy = dy / (dist || 1);

    return { px: ux * strength, py: uy * strength };
  }, [hovered, tile.id, tile.x, tile.y, tiles]);

  // Tile drift loop (deterministic from idx)
  const driftX = (idx % 2 === 0 ? 1 : -1) * (3 + (idx % 4));
  const driftY = (idx % 3 === 0 ? -1 : 1) * (2 + (idx % 3));
  const driftR = (idx % 2 === 0 ? 1 : -1) * 0.6;

  // Shadow profiles - enhanced on hover
  const baseShadow =
    tier === 1
      ? "0 32px 70px rgba(0,0,0,0.5)"
      : tier === 2
      ? "0 26px 55px rgba(0,0,0,0.42)"
      : "0 20px 45px rgba(0,0,0,0.35)";

  const hoverShadow =
    tier === 1
      ? "0 40px 90px rgba(0,0,0,0.6)"
      : tier === 2
      ? "0 34px 75px rgba(0,0,0,0.52)"
      : "0 28px 60px rgba(0,0,0,0.45)";

  const highlight =
    "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.35)";

  return (
    <motion.div
      className="absolute select-none cursor-pointer"
      style={{
        left: `${tile.x}%`,
        top: `${tile.y}%`,
        width: tile.size,
        height: tile.size,
        marginLeft: -(tile.size / 2),
        marginTop: -(tile.size / 2),
        zIndex: isHovered ? 50 : tier === 1 ? 30 : tier === 2 ? 20 : 10,
      }}
      onPointerEnter={() => setHovered(tile.id)}
      onPointerLeave={() => setHovered(null)}
      animate={{
        y: isHovered ? -12 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Shadow layer - deepens on hover */}
      <motion.div
        className="absolute inset-0 rounded-[28px]"
        style={{
          transform: `rotate(${tile.r}deg)`,
          opacity: tile.crop ? 0.85 : 1,
        }}
        animate={{
          x: [0, driftX, 0],
          y: [0, driftY, 0],
          boxShadow: isHovered ? hoverShadow : baseShadow,
        }}
        transition={{
          x: { duration: 8 + (idx % 5), repeat: Infinity, ease: "easeInOut", delay: (idx % 7) * 0.3 },
          y: { duration: 8 + (idx % 5), repeat: Infinity, ease: "easeInOut", delay: (idx % 7) * 0.3 },
          boxShadow: { duration: 0.3, ease: "easeOut" },
        }}
      />

      {/* Glow layer - appears on hover */}
      <motion.div
        className="absolute rounded-[28px] pointer-events-none"
        style={{
          inset: -8,
          background: "radial-gradient(circle, hsl(250 75% 58% / 0.25) 0%, transparent 70%)",
          transform: `rotate(${tile.r}deg)`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Surface layer */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[28px]"
        style={{
          boxShadow: highlight,
        }}
        animate={{
          x: [0, driftX, 0],
          y: [0, driftY, 0],
          rotate: [tile.r, tile.r + driftR, tile.r],
        }}
        transition={{
          duration: 8 + (idx % 6),
          repeat: Infinity,
          ease: "easeInOut",
          delay: (idx % 9) * 0.25,
        }}
      >
        {/* Cursor parallax + neighbour push */}
        <motion.div
          className="absolute inset-0"
          style={{
            x: sx,
            y: sy,
          }}
          transformTemplate={({ x, y }) =>
            `translate3d(${Number(x) * parallax + push.px}px, ${
              Number(y) * parallax + push.py
            }px, 0)`
          }
        >
          <Image
            src={tile.src}
            alt={tile.label}
            fill
            className="object-contain"
            draggable={false}
          />
        </motion.div>

        {/* Subtle vignette */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/[0.02] to-black/[0.12]" />
      </motion.div>
    </motion.div>
  );
}

/** Deterministic ghost tile field - larger, more visible like Rareloop */
function makeGhostTiles(count: number, seed: number) {
  let s = seed;
  const rand = () => {
    s ^= s << 13;
    s ^= s >> 17;
    s ^= s << 5;
    return ((s < 0 ? ~s + 1 : s) % 1000) / 1000;
  };

  return Array.from({ length: count }).map((_, i) => {
    // Spread across entire area, including left side for full coverage
    const x = 5 + rand() * 90;
    const y = -5 + rand() * 110; // Extend beyond bounds
    // Larger sizes like Rareloop
    const size = 80 + Math.round(rand() * 100);
    const r = -15 + rand() * 30;
    const driftX = -4 + rand() * 8;
    const driftY = -4 + rand() * 8;
    const dur = 14 + rand() * 10;
    const delay = rand() * 4;

    return { id: `g${i}`, x, y, size, r, driftX, driftY, dur, delay };
  });
}
