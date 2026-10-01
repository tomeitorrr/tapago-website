import { ArrowRight, MessageCircle } from "lucide-react"

import { contact } from "@/lib/site-content"
import { WORLD_DOTS_PATH, WORLD_VIEWBOX } from "@/lib/world-dots"
import { Reveal } from "./reveal"
import { ButtonLink, Container } from "./ui"

export function CTASection() {
  return (
    <section id="cta-final" className="bg-white pb-24 md:pb-32">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[32px] bg-[radial-gradient(120%_120%_at_0%_0%,#635BFF_0%,#2B2577_45%,#111426_100%)] px-6 py-16 text-center sm:px-12 md:py-24">
            {/* Subtle world texture */}
            <svg
              aria-hidden
              viewBox={`0 0 ${WORLD_VIEWBOX.width} ${WORLD_VIEWBOX.height}`}
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[140%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.14] sm:w-[110%]"
            >
              <path d={WORLD_DOTS_PATH} stroke="#FFFFFF" strokeWidth={0.45} strokeLinecap="round" fill="none" />
            </svg>

            <h2 className="mx-auto max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-5xl lg:text-[56px]">
              Tu negocio ya es global.
              <br />
              <span className="text-white/60">Es momento de hacerlo simple.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Pre-registrate y te avisamos apenas puedas abrir tu cuenta Tapago y empezar a operar internacionalmente.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/abrir-cuenta" variant="lime" size="lg">
                Abrir una cuenta <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href={contact.whatsapp} target="_blank" rel="noopener noreferrer" variant="ghost-dark" size="lg">
                <MessageCircle className="h-4 w-4" aria-hidden />
                Hablar con Tapago
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
