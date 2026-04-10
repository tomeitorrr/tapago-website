"use client"

import { cn } from "@/lib/utils"

// ─── API ──────────────────────────────────────────────────────────────────────
export interface TapagoLogoProps {
  /** Tamaño del ícono en px (o cualquier valor CSS válido para width/height) */
  size?: number | string
  /**
   * icon    — solo el símbolo SVG
   * lockup  — símbolo + wordmark "tapago" (default)
   * mono    — lockup monocromático (todo teal)
   */
  variant?: "icon" | "lockup" | "mono"
  className?: string
  /** Texto del wordmark. Default: "tapago" */
  label?: string
}

// ─── Paleta ───────────────────────────────────────────────────────────────────
const TEAL   = "#1a9cb0"   // trazo exterior dominante
const GREEN  = "#4a6320"   // trazo superior
const ORANGE = "#e8935a"   // trazo intermedio
const SW     = 7           // stroke-width unificado

// ─── Componente ───────────────────────────────────────────────────────────────
export function TapagoLogo({
  size    = 48,
  variant = "lockup",
  className,
  label   = "tapago",
}: TapagoLogoProps) {

  const isMono  = variant === "mono"
  const c = {
    teal:   TEAL,
    green:  isMono ? TEAL : GREEN,
    orange: isMono ? TEAL : ORANGE,
  }

  /*
    ╔══════════════════════════════════════════════════════════════════╗
    ║  GEOMETRÍA — viewBox 0 0 120 120                                ║
    ║                                                                  ║
    ║  Rombo base (cuadrado 72×72 girado 45°, centrado en 55,72):     ║
    ║    Top(55,36)  Right(91,72)  Bottom(55,108)  Left(19,72)        ║
    ║                                                                  ║
    ║  TEAL — 3 lados del rombo; lado Top→Right ABIERTO (deliberado). ║
    ║    Seg1 (55,36)→(19,72)  upper-left arm                        ║
    ║    Seg2 (19,72)→(55,108) lower-left arm                        ║
    ║    Seg3 (55,108)→(83,80) lower-right arm — se detiene ~8px     ║
    ║                           antes del vértice derecho             ║
    ║                                                                  ║
    ║  GREEN — chevron interior, pico en (55,46).                     ║
    ║    Brazo izq: (31,70)→(55,46)  brazo der: (55,46)→(71,62)      ║
    ║    Gap visual con inner edge del teal ≈ 3px                     ║
    ║                                                                  ║
    ║  ORANGE — chevron entre green y teal, pico en (55,57).          ║
    ║    Brazo izq: (39,73)→(55,57)  brazo der: (55,57)→(65,67)      ║
    ║    Gap proporcional con green ≈ 3-4px                           ║
    ║                                                                  ║
    ║  Todos los trazos comparten SW=7, strokeLinecap="round".        ║
    ║  Solo <line> y <rect> — sin <path>, <polygon> ni imágenes.      ║
    ╚══════════════════════════════════════════════════════════════════╝
  */

  const icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── TEAL — rombo abierto (peso visual dominante) ─────────────── */}
      {/* upper-left arm */}
      <line x1="55" y1="36" x2="19" y2="72"
            stroke={c.teal} strokeWidth={SW} strokeLinecap="round"/>
      {/* lower-left arm */}
      <line x1="19" y1="72" x2="55" y2="108"
            stroke={c.teal} strokeWidth={SW} strokeLinecap="round"/>
      {/* lower-right arm — se detiene antes de cerrar, apertura deliberada */}
      <line x1="55" y1="108" x2="83" y2="80"
            stroke={c.teal} strokeWidth={SW} strokeLinecap="round"/>

      {/* ── GREEN — techo/cubierta superior (más corto que teal) ──────── */}
      <line x1="31" y1="70" x2="55" y2="46"
            stroke={c.green} strokeWidth={SW} strokeLinecap="round"/>
      <line x1="55" y1="46" x2="71" y2="62"
            stroke={c.green} strokeWidth={SW} strokeLinecap="round"/>

      {/* ── ORANGE — nivel intermedio (más corto que green) ───────────── */}
      <line x1="39" y1="73" x2="55" y2="57"
            stroke={c.orange} strokeWidth={SW} strokeLinecap="round"/>
      <line x1="55" y1="57" x2="65" y2="67"
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
