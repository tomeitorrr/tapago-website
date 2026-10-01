"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useReducedMotion } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  format: (n: number) => string
}

/** Tweens from the previous value to the new one. Imperative animate() ignores MotionConfig, so reduced motion is checked here. */
export function AnimatedNumber({ value, format }: AnimatedNumberProps) {
  const [display, setDisplay] = useState(value)
  const prev = useRef(value)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) {
      prev.current = value
      setDisplay(value)
      return
    }
    const controls = animate(prev.current, value, {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setDisplay,
    })
    prev.current = value
    return () => controls.stop()
  }, [value, reduceMotion])

  return <>{format(display)}</>
}
