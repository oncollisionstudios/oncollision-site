"use client";

import { motion } from "framer-motion";

export default function FadeIn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}

      whileInView={{
        opacity: 1
      }}

      viewport={{
        once: false,
        amount: 0.35
      }}

      transition={{
        duration: 0.6
      }}
    >
      {children}
    </motion.div>
  );
}