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
    offset: ["start 90%", "start 40%"]
  });

  // Softer fade
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.3, 0.7, 1]
  );

  // Small movement only
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [30, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y
      }}
    >
      {children}
    </motion.div>
  );
}