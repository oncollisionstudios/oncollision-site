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
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0.6, 1, 0.6, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [40, 0, -40]
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