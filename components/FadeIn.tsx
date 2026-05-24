"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FadeIn({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Fade in while entering, fade out while leaving
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
    >
      {children}
    </motion.div>
  );
}