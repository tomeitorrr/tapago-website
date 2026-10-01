import { Footer } from "./footer"
import { Navbar } from "./navbar"
import { Container, Eyebrow } from "./ui"

interface LegalLayoutProps {
  title: string
  meta?: string
  children: React.ReactNode
}

/** Shell for /terminos and /privacidad: navy title band + readable white body. Legal copy lives in the pages. */
export function LegalLayout({ title, meta, children }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="relative isolate overflow-hidden bg-ink pb-14 pt-32 text-white md:pb-20 md:pt-40">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(55%_70%_at_85%_0%,rgba(99,91,255,0.24),transparent_70%)]"
        />
        <Container className="max-w-[880px]">
          <Eyebrow dark>Legal</Eyebrow>
          <h1 className="mt-4 text-balance text-[34px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-5xl">{title}</h1>
          {meta && <p className="mt-5 text-[15px] text-white/55">{meta}</p>}
        </Container>
      </div>
      <main className="bg-white py-14 md:py-20">
        <Container className="max-w-[880px]">
          <div className="space-y-12 text-[15px] leading-[1.75] text-text-muted [&_strong]:font-semibold [&_strong]:text-text-dark">
            {children}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
