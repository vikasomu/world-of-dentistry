"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { patientJourney } from "@/data/clinic";
import { cn } from "@/lib/utils/cn";

export function PatientJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="patient-journey" className="section-padding bg-cream">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Your Journey"
          title="A clear path from consultation to follow-up"
          description="Every stage is designed to feel calm, informed, and personally supported."
          align="center"
        />

        <div ref={containerRef} className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-[1.45rem] top-4 hidden h-[calc(100%-2rem)] w-px bg-border md:block"
            aria-hidden
          >
            {!shouldReduceMotion && (
              <motion.div
                className="w-full origin-top bg-aqua"
                style={{ height: lineHeight }}
              />
            )}
          </div>

          <div className="space-y-6">
            {patientJourney.map((step, index) => (
              <motion.div
                key={step.step}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex gap-5 md:gap-8"
              >
                <div
                  className={cn(
                    "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-aqua bg-white font-heading text-sm font-semibold text-navy shadow-sm"
                  )}
                >
                  {String(step.step).padStart(2, "0")}
                </div>
                <motion.article
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  className="flex-1 rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="font-heading text-xl font-medium text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </motion.article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
