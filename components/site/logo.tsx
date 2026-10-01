import { useId } from "react"

import { LOGO_GRADIENTS, LOGO_INK, LOGO_MARK_PATHS, LOGO_VIEWBOX, LOGO_WORDMARK_PATH } from "@/lib/brand"
import { cn } from "@/lib/utils"

export interface TapagoLogoProps {
  /** onDark: white wordmark · onLight: ink wordmark · mark: icon only */
  variant?: "onDark" | "onLight" | "mark"
  className?: string
  label?: string
}

/**
 * Tapago logo as inline SVG. Size it with a height class (e.g. `h-8`); width follows the aspect ratio.
 * Gradient ids are namespaced with useId so several logos can share a page.
 */
export function TapagoLogo({ variant = "onDark", className, label = "Tapago" }: TapagoLogoProps) {
  const uid = useId().replace(/:/g, "")
  const ref = (id: string) => `tl-${uid}-${id}`
  const isMark = variant === "mark"

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={isMark ? LOGO_VIEWBOX.mark : LOGO_VIEWBOX.lockup}
      role="img"
      aria-label={label}
      className={cn("block h-8 w-auto shrink-0 select-none", className)}
    >
      <defs>
        {LOGO_GRADIENTS.map((g) => (
          <linearGradient key={g.id} id={ref(g.id)} x1={g.x1} y1={g.y1} x2={g.x2} y2={g.y2} gradientUnits="userSpaceOnUse">
            {g.stops.map((s) => (
              <stop key={s.offset} offset={s.offset} stopColor={s.color} />
            ))}
          </linearGradient>
        ))}
      </defs>
      {LOGO_MARK_PATHS.map((p) =>
        p.gradient ? (
          <path key={p.d} fill={`url(#${ref(p.gradient)})`} d={p.d} />
        ) : (
          <path key={p.d} fill="#FFFFFF" fillOpacity={p.opacity} d={p.d} />
        ),
      )}
      {!isMark && <path fill={variant === "onLight" ? LOGO_INK : "#FFFFFF"} d={LOGO_WORDMARK_PATH} />}
    </svg>
  )
}
