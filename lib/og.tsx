// Helpers for next/og image routes (opengraph-image, icon, apple-icon).

import { logoDataUri } from "./brand"

export const og = {
  ink: "#090B14",
  brand: "#635BFF",
  brandLight: "#8B83FF",
  lime: "#C7FF4A",
}

/**
 * Loads a Geist weight as TTF from Google Fonts, subset to `text`.
 * Returns null if the network is unavailable so image generation falls back to the default font
 * instead of failing the build.
 */
export async function loadGeist(weight: 500 | 700, text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=Geist:wght@${weight}&text=${encodeURIComponent(text)}`
    const css = await (await fetch(url)).text()
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1]
    if (!src) return null
    const res = await fetch(src)
    return res.ok ? await res.arrayBuffer() : null
  } catch {
    return null
  }
}

/**
 * Square brand mark used for favicon and apple-touch-icon: the logo icon centered on a square.
 * `background` null leaves it transparent (favicon); `inset` is the padding as a fraction of `size`.
 */
export function BrandMark({
  size,
  radius = 0,
  background = null,
  inset = 0,
}: {
  size: number
  radius?: number
  background?: string | null
  inset?: number
}) {
  const box = Math.round(size * (1 - inset * 2))
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: background ?? "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={logoDataUri({ mark: true })} alt="" width={box} height={box} />
    </div>
  )
}
