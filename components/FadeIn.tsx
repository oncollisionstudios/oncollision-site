"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FadeIn
({children, }:{ children: React.ReactNode;}) 
{

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Fade in → stay visible → fade out
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  // Slide in → slight upward movement leaving
  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [80, 0, 0, -80]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
      }}
    >
      {children}
    </motion.div>
  );
}