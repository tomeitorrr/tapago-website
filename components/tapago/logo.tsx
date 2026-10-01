"use client"

import { cn } from "@/lib/utils"

export interface TapagoLogoProps {
  size?: number | string
  variant?: "icon" | "lockup" | "mono" | "light"
  className?: string
  label?: string
}

const BRAND = "#635BFF"

export function TapagoLogo({
  variant = "lockup",
  className,
  label   = "Tapago",
}: TapagoLogoProps) {

  const color = variant === "mono" ? "currentColor" : variant === "light" ? "#FFFFFF" : BRAND

  return (
    <span
      style={{ color }}
      className={cn("font-bold tracking-tight leading-none text-2xl select-none", className)}
    >
      {label}
    </span>
  )
}
