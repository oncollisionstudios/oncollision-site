"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  index?: number;
  staggerDelay?: number;
};

/**
 * Fades + slides a single item into view, with a stagger based on its index.
 * Designed for use inside grids — pass index from .map((item, i) => ...).
 * The h-full ensures cards stretch to fill their grid cell so heights stay aligned.
 */
export default function StaggerIn({
  children,
  index = 0,
  staggerDelay = 0.15,
}: Props) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * staggerDelay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}