"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { testimonials } from "@/data/clinic";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const testimonial = testimonials[current];

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-cream">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What our patients say"
          description="Genuine feedback from patients who have visited World of Dentistry."
          align="center"
        />

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={testimonial.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-border bg-white p-8 shadow-sm md:p-12"
            >
              <Quote className="h-8 w-8 text-aqua/40" aria-hidden="true" />
              <p className="mt-4 text-lg leading-relaxed text-navy md:text-xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center justify-between">
                <div>
                  <cite className="not-italic font-medium text-navy">
                    {testimonial.name}
                  </cite>
                  {testimonial.treatment && (
                    <p className="text-sm text-muted-foreground">
                      {testimonial.treatment}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    className="rounded-full border border-border p-2 text-navy hover:bg-muted"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="rounded-full border border-border p-2 text-navy hover:bg-muted"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-aqua" : "w-2 bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
