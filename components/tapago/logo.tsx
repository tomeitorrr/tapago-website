"use client"

import { cn } from "@/lib/utils"

export interface TapagoLogoProps {
  size?: number | string
  variant?: "icon" | "lockup" | "mono"
  className?: string
  label?: string
}

const TEAL = "#1B90A8"

export function TapagoLogo({
  variant = "lockup",
  className,
  label   = "Tapago",
}: TapagoLogoProps) {

  const color = variant === "mono" ? "currentColor" : TEAL

  return (
    <span
      style={{ color }}
      className={cn("font-bold tracking-tight leading-none text-2xl select-none", className)}
    >
      {label}
    </span>
  )
}
