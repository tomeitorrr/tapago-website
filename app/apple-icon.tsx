import { ImageResponse } from "next/og"

import { BrandMark, og } from "@/lib/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  // iOS applies its own rounded mask and needs an opaque square, so the mark sits on ink edge to edge.
  return new ImageResponse(<BrandMark size={180} background={og.ink} inset={0.17} />, size)
}
