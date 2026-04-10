import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  /** "dark" = colores originales (para fondo claro). "light" = todo blanco (para fondo oscuro) */
  variant?: "dark" | "light"
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: { icon: 28, text: "text-lg"  },
  md: { icon: 36, text: "text-xl"  },
  lg: { icon: 48, text: "text-3xl" },
}

export function TapagoLogo({ className, variant = "dark", size = "md" }: LogoProps) {
  const { icon, text } = sizes[size]
  const isLight = variant === "light"

  // Colores del logo original
  const teal      = isLight ? "white"               : "#4a9eb5"
  const darkGreen = isLight ? "rgba(255,255,255,0.7)": "#556b2f"
  const peach     = isLight ? "rgba(255,255,255,0.85)": "#d4956a"
  const wordmark  = isLight ? "white"               : "#4a9eb5"

  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      {/*
        ViewBox 44×44.
        Diamante (cuadrado rotado 45°): rect 26×26 rx=5, centrado en (22,22).
        Diagonal = 26√2 ≈ 36.8 → vértices en top(22,3.6) right(40.4,22) bottom(22,40.4) left(3.6,22).
        Borde superior-derecho: de (22,4) a (40,22) → ecuación x-y=18.

        3 franjas paralelas en dirección (1,-1)/√2 (upper-right en coords de pantalla).
        Cada franja tiene x+y = constante C.
        Intersección con borde sup-der (x-y=18): x=(C+18)/2, y=(C-18)/2.

        Franja verde (C=36): sale por (27,9),  va de (19,17) hasta (36,0)
        Franja durazno (C=42): sale por (30,12), va de (22,21) hasta (41,1)
        Franja teal   (C=48): sale por (33,15), va de (25,24) hasta (44,4)
      */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Franjas de tarjetas (dibujadas detrás del diamante) */}
        <line x1="19" y1="17" x2="36" y2="0"  stroke={darkGreen} strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="22" y1="21" x2="41" y2="2"  stroke={peach}     strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="25" y1="24" x2="44" y2="5"  stroke={teal}      strokeWidth="3.5" strokeLinecap="round"/>

        {/* Diamante — outline sobre las franjas */}
        <rect
          x="9" y="9" width="26" height="26" rx="5"
          fill="none"
          stroke={teal}
          strokeWidth="3"
          transform="rotate(45, 22, 22)"
        />
      </svg>

      {/* Wordmark */}
      <span
        style={{ color: wordmark }}
        className={cn("font-bold tracking-tight leading-none lowercase", text)}
      >
        tapago
      </span>
    </div>
  )
}
