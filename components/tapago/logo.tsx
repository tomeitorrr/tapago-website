import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  /** "dark" = ícono teal + texto oscuro (para fondo claro). "light" = todo blanco (para fondo oscuro) */
  variant?: "dark" | "light"
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: { icon: 28, text: "text-lg" },
  md: { icon: 36, text: "text-xl" },
  lg: { icon: 44, text: "text-2xl" },
}

export function TapagoLogo({ className, variant = "dark", size = "md" }: LogoProps) {
  const { icon, text } = sizes[size]
  const isLight = variant === "light"

  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      {/* Ícono: T estilizada con acento de pago */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Fondo redondeado */}
        <rect width="36" height="36" rx="10" fill={isLight ? "rgba(255,255,255,0.15)" : "#0891b2"} />

        {/* Letra T */}
        <rect x="8" y="9" width="20" height="3.5" rx="1.75" fill="white" />
        <rect x="15.25" y="9" width="5.5" height="18" rx="2.75" fill="white" />

        {/* Punto de acento (representa el "pago") */}
        <circle cx="27" cy="27" r="5" fill={isLight ? "rgba(255,255,255,0.9)" : "#a3e635"} />
        <path
          d="M25 27l1.5 1.5L29 25"
          stroke={isLight ? "#0891b2" : "#1a2e05"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark */}
      <span
        className={cn(
          "font-bold tracking-tight leading-none",
          text,
          isLight ? "text-white" : "text-foreground"
        )}
      >
        ta
        <span className={isLight ? "text-teal-200" : "text-teal-600"}>pago</span>
      </span>
    </div>
  )
}
