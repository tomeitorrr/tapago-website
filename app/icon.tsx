import { ImageResponse } from "next/og"

import { BrandMark, loadGeist } from "@/lib/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default async function Icon() {
  const geist = await loadGeist(700, "T")
  return new ImageResponse(<BrandMark size={32} radius={8} />, {
    ...size,
    fonts: geist ? [{ name: "Geist", data: geist, weight: 700 }] : undefined,
  })
}
