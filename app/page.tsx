import { Header } from "@/components/tapago/header"
import { Hero } from "@/components/tapago/hero"
import { ProblemSection } from "@/components/tapago/problem-section"
import { SolutionSection } from "@/components/tapago/solution-section"
import { HowItWorks } from "@/components/tapago/how-it-works"
import { BenefitsSection } from "@/components/tapago/benefits-section"
import { BridgeSection } from "@/components/tapago/bridge-section"
import { SecuritySection } from "@/components/tapago/security-section"
import { FaqSection } from "@/components/tapago/faq-section"
import { FinalCta } from "@/components/tapago/final-cta"
import { Footer } from "@/components/tapago/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <BenefitsSection />
        <BridgeSection />
        <SecuritySection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
