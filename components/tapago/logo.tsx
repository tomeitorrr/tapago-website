import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "dark" | "light"
  size?: "sm" | "md" | "lg"
}

const iconSizes = { sm: 36, md: 48, lg: 60 }
const textSizes = { sm: "text-xl", md: "text-2xl", lg: "text-3xl" }

export function TapagoLogo({ className, variant = "dark", size = "md" }: LogoProps) {
  const iconPx  = iconSizes[size]
  const isLight = variant === "light"

  const teal    = isLight ? "white"                  : "#1a9cb0"
  const orange  = isLight ? "rgba(255,255,255,0.85)"  : "#e8935a"
  const green   = isLight ? "rgba(255,255,255,0.65)"  : "#3d5a1e"
  const wordmark = isLight ? "white"                  : "#1a9cb0"

  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      <svg
        width={iconPx}
        height={iconPx * 1.15}
        viewBox="0 0 120 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Línea verde oscuro — más atrás */}
        <line x1="79" y1="30" x2="103" y2="6"
          stroke={green} strokeWidth="5" strokeLinecap="round"/>
        {/* Línea naranja — medio */}
        <line x1="84" y1="35" x2="108" y2="11"
          stroke={orange} strokeWidth="5" strokeLinecap="round"/>
        {/* Línea teal — adelante */}
        <line x1="89" y1="40" x2="110" y2="19"
          stroke={teal} strokeWidth="5" strokeLinecap="round"/>
        {/* Rombo redondeado */}
        <path
          d="M54 33 Q54 19 68 33 L85 50 Q99 64 85 78 L68 95 Q54 109 40 95 L23 78 Q9 64 23 50 L40 33 Q54 19 54 33 Z"
          stroke={teal}
          strokeWidth="6.5"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      <span
        style={{ color: wordmark }}
        className={cn("font-bold tracking-tight leading-none lowercase", textSizes[size])}
      >
        tapago
      </span>
    </div>
  )
}
