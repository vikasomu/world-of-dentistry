"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { patientJourney } from "@/data/clinic";

export function PatientJourney() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="patient-journey" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Your Journey"
          title="From first call to lasting smile"
          description="A clear, comfortable path through every stage of your dental care."
          align="center"
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-6 top-0 hidden h-full w-px bg-border md:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {patientJourney.map((step, index) => (
              <motion.div
                key={step.step}
                initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 md:gap-8"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-lg font-medium text-white">
                  {String(step.step).padStart(2, "0")}
                </div>
                <div className="flex-1 rounded-2xl border border-border bg-cream p-6">
                  <h3 className="font-heading text-xl font-medium text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
