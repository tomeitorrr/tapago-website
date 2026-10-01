"use client"

import { motion } from "framer-motion"

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

/** Soft fade/translate on viewport entrance. Respects reduced motion via MotionProvider. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
