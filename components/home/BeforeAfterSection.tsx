"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";

export function BeforeAfterSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="before-after" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Treatment Results"
          title="Before & after comparisons"
          description="Clinical photography helps illustrate treatment possibilities. Results vary by patient."
          align="center"
        />

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-dashed border-border bg-cream"
        >
          <div className="flex aspect-[16/10] flex-col items-center justify-center gap-4 p-10 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-aqua-light text-aqua">
              <ImageIcon className="h-8 w-8" />
            </div>
            <Badge variant="outline">Clinic approval required</Badge>
            <h3 className="font-heading text-2xl font-medium text-navy">
              Before / after gallery coming soon
            </h3>
            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
              Authentic before and after images will be displayed here once
              provided by the clinic with appropriate patient consent. We do
              not use fabricated or stock medical result imagery.
            </p>
            <p className="text-xs italic text-muted-foreground">
              Results vary by patient. Images are provided by the clinic with appropriate consent.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
