"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"

import { contact, faqs } from "@/lib/site-content"
import { Reveal } from "./reveal"
import { Container, SectionHeading } from "./ui"

export function FAQAccordion() {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="divide-y divide-line border-y border-line">
      {faqs.map((faq, i) => (
        <AccordionPrimitive.Item key={faq.question} value={`faq-${i}`} className="group">
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="flex w-full items-center justify-between gap-6 py-6 text-left text-[17px] font-semibold text-text-dark transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 md:text-lg">
              {faq.question}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-text-muted transition-all duration-300 motion-reduce:transition-none group-data-[state=open]:rotate-45 group-data-[state=open]:border-brand group-data-[state=open]:bg-brand group-data-[state=open]:text-white">
                <Plus className="h-4 w-4" aria-hidden />
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none">
            <p className="max-w-2xl pb-6 pr-14 text-base leading-relaxed text-text-muted">{faq.answer}</p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title={
              <>
                Preguntas,
                <br />
                respondidas.
              </>
            }
          />
          <p className="mt-6 text-text-muted">
            ¿No encontrás lo que buscás?{" "}
            <a href={`mailto:${contact.email}`} className="rounded font-medium text-brand underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
              Escribinos
            </a>
            .
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <FAQAccordion />
        </Reveal>
      </Container>
    </section>
  )
}
