import { ImageResponse } from "next/og"

import { LOGO_VIEWBOX, logoDataUri } from "@/lib/brand"
import { loadGeist, og } from "@/lib/og"

export const alt = "Tapago — Pagos internacionales para empresas"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const eyebrow = "PAGOS INTERNACIONALES PARA EMPRESAS"
const line1 = "Pagá al mundo."
const line2 = "Desde pesos."
const badge = "Próximamente"
const footer = "PSPCP inscripto ante el BCRA"
const domain = "tapagopay.net"

const [, , LOGO_W, LOGO_H] = LOGO_VIEWBOX.lockup.split(" ").map(Number)
const logoHeight = 64

export default async function OpengraphImage() {
  const text = [eyebrow, line1, line2, badge, footer, domain].join("")
  const [bold, medium] = await Promise.all([loadGeist(700, text), loadGeist(500, text)])
  const fonts = [
    ...(bold ? [{ name: "Geist", data: bold, weight: 700 as const }] : []),
    ...(medium ? [{ name: "Geist", data: medium, weight: 500 as const }] : []),
  ]

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: og.ink,
          backgroundImage: `radial-gradient(60% 75% at 88% 18%, rgba(99,91,255,0.45), transparent 70%), radial-gradient(45% 55% at 0% 100%, rgba(139,131,255,0.18), transparent 70%)`,
          color: "#FFFFFF",
          fontFamily: fonts.length ? "Geist" : undefined,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img src={logoDataUri()} alt="Tapago" width={Math.round((logoHeight * LOGO_W) / LOGO_H)} height={logoHeight} />
          <div
            style={{
              display: "flex",
              background: og.lime,
              color: og.ink,
              fontSize: 22,
              fontWeight: 700,
              padding: "10px 22px",
              borderRadius: 999,
            }}
          >
            {badge}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "0.14em", color: og.brandLight }}>{eyebrow}</div>
          <div style={{ marginTop: 24, fontSize: 104, fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1 }}>
            {line1}
          </div>
          <div
            style={{
              fontSize: 104,
              fontWeight: 700,
              letterSpacing: "-0.045em",
              lineHeight: 1.08,
              backgroundImage: `linear-gradient(90deg, ${og.brandLight}, #B9B4FF)`,
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {line2}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            fontWeight: 500,
            color: "rgba(255,255,255,0.6)",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 28,
          }}
        >
          <div>{footer}</div>
          <div>{domain}</div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  )
}
