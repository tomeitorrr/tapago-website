"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  opacity: number
}

const COLORS = [
  { hex: "#0891B2", weight: 0.4 },
  { hex: "#84CC16", weight: 0.4 },
  { hex: "#FB923C", weight: 0.2 },
]

function pickColor(): string {
  const r = Math.random()
  if (r < COLORS[0].weight) return COLORS[0].hex
  if (r < COLORS[0].weight + COLORS[1].weight) return COLORS[1].hex
  return COLORS[2].hex
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const n = Number.parseInt(hex.slice(1), 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

function createParticle(width: number, height: number): Particle {
  const speed = 0.2 + Math.random() * 0.3
  const angle = Math.random() * Math.PI * 2
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius: 2 + Math.random(),
    color: pickColor(),
    opacity: 0.6 + Math.random() * 0.4,
  }
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const dimensionsRef = useRef({ width: 0, height: 0 })

  const isMobile = useCallback(() => {
    return dimensionsRef.current.width < 768
  }, [])

  const initParticles = useCallback(
    (width: number, height: number) => {
      const count = isMobile() ? 40 : 80
      particlesRef.current = Array.from({ length: count }, () =>
        createParticle(width, height),
      )
    },
    [isMobile],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    function resize() {
      if (!canvas) return
      const parent = canvas.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx!.scale(dpr, dpr)
      dimensionsRef.current = { width: rect.width, height: rect.height }
      initParticles(rect.width, rect.height)
    }

    resize()

    function draw() {
      const { width, height } = dimensionsRef.current
      if (!ctx) return

      ctx.clearRect(0, 0, width, height)

      const particles = particlesRef.current
      const maxDist = dimensionsRef.current.width < 768 ? 80 : 120
      const maxConnections = 5

      // Update positions
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x <= 0 || p.x >= width) p.vx *= -1
        if (p.y <= 0 || p.y >= height) p.vy *= -1

        p.x = Math.max(0, Math.min(width, p.x))
        p.y = Math.max(0, Math.min(height, p.y))
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        let connections = 0
        for (let j = i + 1; j < particles.length; j++) {
          if (connections >= maxConnections) break

          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35
            const rgbA = hexToRgb(particles[i].color)
            const rgbB = hexToRgb(particles[j].color)

            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y,
            )
            gradient.addColorStop(
              0,
              `rgba(${rgbA.r},${rgbA.g},${rgbA.b},${alpha})`,
            )
            gradient.addColorStop(
              1,
              `rgba(${rgbB.r},${rgbB.g},${rgbB.b},${alpha})`,
            )

            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.stroke()

            connections++
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        const rgb = hexToRgb(p.color)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${p.opacity})`
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    animationRef.current = requestAnimationFrame(draw)

    const handleResize = () => {
      resize()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  )
}
