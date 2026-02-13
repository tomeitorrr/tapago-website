"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Cuanto tarda un pago internacional?",
    answer: "Entre 24 y 72hs habiles, dependiendo del pais de destino.",
  },
  {
    question: "Que comision cobra Tapago?",
    answer: "2% por operacion.",
  },
  {
    question: "Puedo enviar a cualquier pais?",
    answer: "En docs podras ver los paises a los que NO podes pagar.",
  },
  {
    question: "Es seguro?",
    answer:
      "Si. Operamos bajo licencia PSPCP del BCRA y con infraestructura bancaria regulada.",
  },
  {
    question: "Necesito ser una empresa?",
    answer:
      "No. Tapago funciona tanto para personas como para empresas.",
  },
  {
    question: "Como cargo fondos?",
    answer:
      "Transferencia bancaria o desde cualquier billetera virtual a tu CVU Tapago.",
  },
]

export function FaqSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section ref={ref} id="faq" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-[720px] px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          Algo de informacion
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={`faq-${i}`}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-6 transition-all duration-200 hover:border-teal-200 data-[state=open]:border-teal-300 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
