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

  const teal      = isLight ? "white"                : "#4a9eb5"
  const darkGreen = isLight ? "rgba(255,255,255,0.65)": "#556b2f"
  const peach     = isLight ? "rgba(255,255,255,0.82)": "#d4956a"
  const wordmark  = isLight ? "white"                : "#4a9eb5"

  /*
    ViewBox 44×44. Diamante: rect 26×26 rx=5, rotado 45° en torno al centro (22,22).
    Vértices del diamante: top(22,4) right(40,22) bottom(22,40) left(4,22).

    Borde superior-derecho (SD): top(22,4)→right(40,22), ecuación x-y=18.
    Las franjas son paralelas a la dirección (1,-1)/√2 (upper-right en pantalla).
    Para cada franja, x+y = C (constante).

    Intersección de franja C con borde SD (x-y=18):
      x = (C+18)/2, y = (C-18)/2

    Elegimos C para que la intersección esté en el borde SD (24 < C < 62):
      Franja verde  C=36 → sale por (27, 9)
      Franja durazno C=42 → sale por (30, 12)
      Franja teal    C=48 → sale por (33, 15)

    Cada franja arranca 5px DENTRO del diamante (dirección interior = (-1,+1)/√2)
    y termina ~15px FUERA del diamante (dirección exterior = (+1,-1)/√2).

    Interior start = exit + (-4.24, +4.24):
      verde:   (27-4.24, 9+4.24) ≈ (23, 13)  → x+y=36 ✓, x-y=10<18 → dentro ✓
      durazno: (30-4.24,12+4.24) ≈ (26, 16)  → x+y=42 ✓, x-y=10<18 → dentro ✓
      teal:    (33-4.24,15+4.24) ≈ (29, 19)  → x+y=48 ✓, x-y=10<18 → dentro ✓

    Exterior end = exit + (+11, -11):
      verde:   (27+11, 9-11)  = (38, -2)  → clippeado a borde del viewBox
      durazno: (30+11,12-11)  = (41,  1)
      teal:    (33+11,15-11)  = (44,  4)
  */

  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ overflow: "visible" }}
      >
        {/* Franjas — arranca en cuadrante sup-der del diamante, sale por borde sup-der */}
        <line x1="23" y1="13" x2="38" y2="-2" stroke={darkGreen} strokeWidth="3.8" strokeLinecap="round"/>
        <line x1="26" y1="16" x2="41" y2="1"  stroke={peach}     strokeWidth="3.8" strokeLinecap="round"/>
        <line x1="29" y1="19" x2="44" y2="4"  stroke={teal}      strokeWidth="3.8" strokeLinecap="round"/>

        {/* Diamante — outline encima de las franjas */}
        <rect
          x="9" y="9" width="26" height="26" rx="5"
          fill="none"
          stroke={teal}
          strokeWidth="3.2"
          transform="rotate(45, 22, 22)"
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
