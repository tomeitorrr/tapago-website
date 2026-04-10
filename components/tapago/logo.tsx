"use client"

import { cn } from "@/lib/utils"

// ─── API ──────────────────────────────────────────────────────────────────────
export interface TapagoLogoProps {
  /** Tamaño del ícono en px (o cualquier valor CSS válido para width/height) */
  size?: number | string
  /**
   * icon    — solo el símbolo SVG
   * lockup  — símbolo + wordmark "tapago" (default)
   * mono    — ícono monocromático (usa currentColor)
   */
  variant?: "icon" | "lockup" | "mono"
  className?: string
  /** Texto del wordmark. Default: "tapago" */
  label?: string
}

// ─── Paleta ───────────────────────────────────────────────────────────────────
const TEAL   = "#1597B8"
const GREEN  = "#35551F"
const ORANGE = "#F0A25A"
const SW     = 8

// ─── Geometría ────────────────────────────────────────────────────────────────
//
//  viewBox 0 0 100 100  ·  todos los segmentos a 45° exactos
//
//  Rombo-madre (exterior, teal):
//    Centro (50, 52)  ·  semidiagonal 38
//    Vértice top  (50, 14)   right (88, 52) [ABIERTO]
//    Vértice left (12, 52)   bottom (50, 90)
//
//  Separación perpendicular entre capas: 23/√2 ≈ 16 px (trazo+gap ≈ 8+8 px)
//
//  TEAL  — 3 lados del rombo, lado top-right deliberadamente abierto
//    TL  (50,14)→(12,52)   x+y=64   38√2 px
//    LB  (12,52)→(50,90)   x-y=-40  38√2 px
//    BR  (50,90)→(81,59)   x+y=140  31√2 px  (81 % — apertura visible)
//
//  GREEN  — chevron interior ∧, pico (50,37), paralelo al teal
//    izq  (23,64)→(50,37)  x+y=87   27√2 px  (71 % del TL teal)
//    der  (50,37)→(66,53)  x-y=13   16√2 px  (59 % del izq green)
//
//  ORANGE — chevron más interior ∧, pico (50,60)
//    izq  (37,73)→(50,60)  x+y=110  13√2 px  (48 % del izq green)
//    der  (50,60)→(59,69)  x-y=-10   9√2 px
//
//  Picos alineados verticalmente en x=50: y=14 · y=37 · y=60 (Δ=23)

// ─── Componente ───────────────────────────────────────────────────────────────
export function TapagoLogo({
  size    = 48,
  variant = "lockup",
  className,
  label   = "tapago",
}: TapagoLogoProps) {

  const isMono = variant === "mono"
  const c = {
    teal:   isMono ? "currentColor" : TEAL,
    green:  isMono ? "currentColor" : GREEN,
    orange: isMono ? "currentColor" : ORANGE,
  }

  const icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── TEAL — rombo abierto (dominante) ────────────────────────────── */}
      {/* Brazo upper-left: Top → Left */}
      <line x1="50" y1="14" x2="12" y2="52"
            stroke={c.teal} strokeWidth={SW} strokeLinecap="round"/>
      {/* Brazo lower-left: Left → Bottom */}
      <line x1="12" y1="52" x2="50" y2="90"
            stroke={c.teal} strokeWidth={SW} strokeLinecap="round"/>
      {/* Brazo lower-right: Bottom → se detiene antes del Right — apertura deliberada */}
      <line x1="50" y1="90" x2="81" y2="59"
            stroke={c.teal} strokeWidth={SW} strokeLinecap="round"/>

      {/* ── GREEN — chevron interior, pico (50,37) ───────────────────────── */}
      <line x1="23" y1="64" x2="50" y2="37"
            stroke={c.green} strokeWidth={SW} strokeLinecap="round"/>
      <line x1="50" y1="37" x2="66" y2="53"
            stroke={c.green} strokeWidth={SW} strokeLinecap="round"/>

      {/* ── ORANGE — chevron más interior, pico (50,60) ──────────────────── */}
      <line x1="37" y1="73" x2="50" y2="60"
            stroke={c.orange} strokeWidth={SW} strokeLinecap="round"/>
      <line x1="50" y1="60" x2="59" y2="69"
            stroke={c.orange} strokeWidth={SW} strokeLinecap="round"/>
    </svg>
  )

  if (variant === "icon" || variant === "mono") {
    return <div className={cn("inline-flex", className)}>{icon}</div>
  }

  // lockup: símbolo + wordmark
  return (
    <div className={cn("inline-flex items-center gap-3 select-none", className)}>
      {icon}
      <span
        style={{ color: TEAL }}
        className="font-bold tracking-tight leading-none lowercase text-2xl"
      >
        {label}
      </span>
    </div>
  )
}
