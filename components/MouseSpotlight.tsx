"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** Radius of the light cone in pixels. Default 400. */
  radius?: number;
  /** Tailwind-style color string in rgb format (no rgb() wrapper). Default cyan. */
  color?: string;
  /** Light intensity at center, 0–1. Default 0.25. */
  intensity?: number;
};

/**
 * A radial light that follows the cursor. Place inside a `relative` parent —
 * it absolutely fills that parent and only lights up its bounds.
 *
 * Uses a CSS radial-gradient updated via CSS custom properties for smooth
 * GPU rendering (no canvas, no per-frame redraws).
 */
export default function MouseSpotlight({
  radius = 400,
  color = "0, 183, 255",
  intensity = 0.25,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Start hidden until first mouse move
    el.style.setProperty("--mx", "-9999px");
    el.style.setProperty("--my", "-9999px");

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only update if cursor is inside this element's bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
      }
    };

    const onLeave = () => {
      el.style.setProperty("--mx", "-9999px");
      el.style.setProperty("--my", "-9999px");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none transition-opacity duration-500"
      style={{
        background: `radial-gradient(circle ${radius}px at var(--mx) var(--my), rgba(${color}, ${intensity}), transparent 60%)`,
      }}
    />
  );
}