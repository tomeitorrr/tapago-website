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
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Corta todo excepto la zona que asoma por encima del rombo teal */}
          <clipPath id="clip-back">
            <polygon points="0,0 200,0 200,115 100,65 0,115" />
          </clipPath>
        </defs>

        {/* Verde oscuro — más atrás, desplazado 18px arriba-izquierda */}
        <rect x="42" y="52" width="80" height="80" rx="14"
          stroke={green} strokeWidth="7"
          transform="rotate(45, 82, 92)"
          clipPath="url(#clip-back)"
        />

        {/* Naranja — medio, desplazado 9px arriba-izquierda */}
        <rect x="51" y="61" width="80" height="80" rx="14"
          stroke={orange} strokeWidth="7"
          transform="rotate(45, 91, 101)"
          clipPath="url(#clip-back)"
        />

        {/* Teal — adelante, sin clip */}
        <rect x="60" y="70" width="80" height="80" rx="14"
          stroke={teal} strokeWidth="7"
          transform="rotate(45, 100, 110)"
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
