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

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [50, 0, 0, -50]
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