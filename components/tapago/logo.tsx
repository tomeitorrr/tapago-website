import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "dark" | "light"
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: { icon: 34,  text: "text-xl"  },
  md: { icon: 44,  text: "text-2xl" },
  lg: { icon: 56,  text: "text-3xl" },
}

export function TapagoLogo({ className, variant = "dark", size = "md" }: LogoProps) {
  const { icon, text } = sizes[size]
  const isLight = variant === "light"

  const teal      = isLight ? "white"                 : "#1d91a8"
  const orange    = isLight ? "rgba(255,255,255,0.85)" : "#e8935a"
  const green     = isLight ? "rgba(255,255,255,0.65)" : "#3d5a1e"
  const wordmark  = isLight ? "white"                 : "#1d91a8"

  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ overflow: "visible" }}
      >
        {/* 3 líneas que salen de la esquina sup-der del rombo en dirección NE (45°) */}
        <line x1="75" y1="11"  x2="108" y2="-22" stroke={teal}   strokeWidth="5" strokeLinecap="round"/>
        <line x1="80" y1="16"  x2="113" y2="-17" stroke={orange} strokeWidth="5" strokeLinecap="round"/>
        <line x1="85" y1="21"  x2="118" y2="-12" stroke={green}  strokeWidth="5" strokeLinecap="round"/>

        {/* Rombo redondeado — dibujado encima para que el borde tape el inicio de las líneas */}
        <path
          d="M60 8 Q68 0 76 8 L112 44 Q120 52 112 60 L76 96 Q68 104 60 96 L24 60 Q16 52 24 44 Z"
          fill="none"
          stroke={teal}
          strokeWidth="6"
          strokeLinejoin="round"
        />
      </svg>

      <span
        style={{ color: wordmark }}
        className={cn("font-bold tracking-tight leading-none lowercase", text)}
      >
        tapago
      </span>
    </div>
  )
}
