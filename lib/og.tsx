// Helpers for next/og image routes (opengraph-image, icon, apple-icon).

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

/** Square brand mark used for favicon and apple-touch-icon. */
export function BrandMark({ size, radius }: { size: number; radius: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: `linear-gradient(135deg, ${og.brandLight} 0%, ${og.brand} 55%, #4B43E0 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
        fontSize: size * 0.62,
        fontWeight: 700,
        letterSpacing: "-0.04em",
        lineHeight: 1,
        paddingBottom: size * 0.04,
      }}
    >
      T
    </div>
  )
}
