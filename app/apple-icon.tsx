import { ImageResponse } from "next/og"

import { BrandMark, loadGeist } from "@/lib/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default async function AppleIcon() {
  const geist = await loadGeist(700, "T")
  // iOS applies its own rounded mask, so the square is drawn edge to edge.
  return new ImageResponse(<BrandMark size={180} radius={0} />, {
    ...size,
    fonts: geist ? [{ name: "Geist", data: geist, weight: 700 }] : undefined,
  })
}
