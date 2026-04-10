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
        height={iconPx}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Verde oscuro — más separado del rombo */}
        <line x1="64" y1="44" x2="90" y2="18"
          stroke={green} strokeWidth="5.5" strokeLinecap="round"/>
        {/* Naranja — medio */}
        <line x1="70" y1="50" x2="96" y2="24"
          stroke={orange} strokeWidth="5.5" strokeLinecap="round"/>
        {/* Teal — pegado al rombo */}
        <line x1="76" y1="56" x2="102" y2="30"
          stroke={teal} strokeWidth="5.5" strokeLinecap="round"/>
        {/* Rombo redondeado — strokeLinejoin="round" da las esquinas redondeadas */}
        <path
          d="M 55 39 L 81 65 L 55 91 L 29 65 Z"
          stroke={teal}
          strokeWidth="7"
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
