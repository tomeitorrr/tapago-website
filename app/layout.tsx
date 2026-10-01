import React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Inter } from "next/font/google"

import { MotionProvider } from "@/components/site/motion-provider"
import { SITE_NAME, SITE_URL } from "@/lib/seo"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const title = "Tapago — Pagos internacionales para empresas"
const description =
  "Tu cuenta Tapago conecta tu negocio con proveedores internacionales. Cargá pesos, cotizá y pagá en USD desde una sola plataforma."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s — Tapago" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: SITE_NAME,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export const viewport: Viewport = {
  themeColor: "#090B14",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
