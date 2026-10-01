"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react"

import { TapagoLogo } from "./logo"
import { navLinks, navProducts, SOON_LABEL } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { Badge, ButtonLink } from "./ui"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!productsOpen) return
    const onPointer = (e: PointerEvent) => {
      if (!productsRef.current?.contains(e.target as Node)) setProductsOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setProductsOpen(false)
    document.addEventListener("pointerdown", onPointer)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onPointer)
      document.removeEventListener("keydown", onKey)
    }
  }, [productsOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false)
    // Close the drawer if the viewport grows past the mobile breakpoint.
    const mq = window.matchMedia("(min-width: 1024px)")
    const onMq = () => mq.matches && setMobileOpen(false)
    document.addEventListener("keydown", onKey)
    mq.addEventListener("change", onMq)
    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", onKey)
      mq.removeEventListener("change", onMq)
    }
  }, [mobileOpen])

  const linkClass =
    "rounded-full px-3.5 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "border-b border-white/10 bg-ink/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="/" aria-label="Tapago — inicio" className="-m-1.5 flex items-center rounded-lg p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light">
          <TapagoLogo variant="onDark" className="h-10 sm:h-12" />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
          <div
            ref={productsRef}
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              className={cn(linkClass, "inline-flex items-center gap-1")}
              aria-expanded={productsOpen}
              aria-controls="productos-menu"
              onClick={() => setProductsOpen((v) => !v)}
            >
              Productos
              <ChevronDown className={cn("h-4 w-4 transition-transform", productsOpen && "rotate-180")} aria-hidden />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  id="productos-menu"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-1/2 top-full w-[340px] -translate-x-1/2 pt-3"
                >
                  <div className="rounded-2xl border border-line bg-white p-2 shadow-[0_20px_50px_-20px_rgba(9,11,20,0.35)]">
                    {navProducts.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        onClick={() => setProductsOpen(false)}
                        className="flex items-start justify-between gap-3 rounded-xl p-3 transition-colors hover:bg-offwhite focus-visible:bg-offwhite focus-visible:outline-none"
                      >
                        <span>
                          <span className="block text-sm font-semibold text-text-dark">{p.label}</span>
                          <span className="mt-0.5 block text-[13px] text-text-muted">{p.description}</span>
                        </span>
                        <Badge tone="soon" className="mt-0.5">{SOON_LABEL}</Badge>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {/* "Ingresar" hidden until the client portal is live. */}
          <ButtonLink href="/abrir-cuenta" variant="lime">
            Abrir cuenta
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="menu-movil"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="menu-movil"
            aria-label="Navegación móvil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="h-[calc(100dvh-72px)] overflow-y-auto bg-ink px-5 pb-8 pt-4 lg:hidden"
          >
            <p className="px-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Productos</p>
            <ul className="mt-2 space-y-1">
              {navProducts.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-xl px-1 py-3 text-lg font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
                  >
                    {p.label}
                    <Badge tone="dark">{SOON_LABEL}</Badge>
                  </a>
                </li>
              ))}
            </ul>
            <div className="my-4 h-px bg-white/10" />
            <ul className="space-y-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-1 py-3 text-lg font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <ButtonLink href="/abrir-cuenta" variant="lime" size="lg" className="mt-8 w-full">
              Abrir cuenta <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
