import type { MetadataRoute } from "next"

import { SITE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/abrir-cuenta", priority: 0.8 },
    { path: "/empresa", priority: 0.8 },
    { path: "/terminos", priority: 0.3 },
    { path: "/privacidad", priority: 0.3 },
  ]
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority,
  }))
}
