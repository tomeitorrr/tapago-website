"use client"

import { useEffect, useRef, useState } from "react"
import { animate } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  format: (n: number) => string
}

/** Tweens from the previous value to the new one; reduced motion is handled by MotionProvider. */
export function AnimatedNumber({ value, format }: AnimatedNumberProps) {
  const [display, setDisplay] = useState(value)
  const prev = useRef(value)

  useEffect(() => {
    const controls = animate(prev.current, value, {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setDisplay,
    })
    prev.current = value
    return () => controls.stop()
  }, [value])

  return <>{format(display)}</>
}
