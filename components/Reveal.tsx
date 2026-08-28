"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "right" | "left" | "scale" | "none";
  once?: boolean;
  amount?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.2,
}: RevealProps) {
  const reduce = useReducedMotion();

  const hidden: Record<string, number> = { opacity: 0 };
  if (!reduce) {
    if (direction === "up") hidden.y = 28;
    if (direction === "down") hidden.y = -28;
    if (direction === "right") hidden.x = -28;
    if (direction === "left") hidden.x = 28;
    if (direction === "scale") hidden.scale = 0.94;
  }

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
