"use client";

import { SectionHeading } from "@/components/layout/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/clinic";

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions answered"
          description="Find quick answers about appointments, treatments, and visiting our clinic."
          align="center"
        />

        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-3xl rounded-2xl border border-border bg-cream px-6"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
