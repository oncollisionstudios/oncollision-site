"use client"; 

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function FadeInOut({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 0  → section top hits viewport bottom (entering)
  // 1  → section bottom hits viewport top (leaving
  
  const rangeX = [0, 0.2, 0.6, 0.8, 1]
  const opacityRange = [0, 1, 1, 0]
  const opacity = useTransform(scrollYProgress, rangeX, opacityRange);

  return (
    <motion.div ref={ref} style={{ opacity }}>
      {children}
    </motion.div>
  );
}