// src/components/Reveal.jsx
import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 16,
  duration = 0.55,
  once = true,
  amount = 0.25,        // how much of element must be in view
  blur = 6,             // subtle entrance blur (0 = none)
  className = "",
  as = "div",           // wrapper element tag
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, filter: blur ? `blur(${blur}px)` : "none" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}