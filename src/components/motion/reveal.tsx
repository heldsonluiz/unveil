"use client";

import type { ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}) {
  const reducedMotion = useReducedMotion();
  const Element = as === "li" ? m.li : m.div;
  const animate =
    reducedMotion !== false
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: [0.35, 1], y: [24, 0], scale: [0.98, 1] };

  return (
    <Element
      data-motion-reveal=""
      className={className}
      initial={false}
      whileInView={animate}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reducedMotion !== false ? 0 : 0.46,
        delay: reducedMotion !== false ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Element>
  );
}
