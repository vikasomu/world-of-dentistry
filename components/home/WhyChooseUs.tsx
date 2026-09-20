"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  UserCheck,
  Sparkles,
  Smile,
  Shield,
  Award,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { whyChooseUs } from "@/data/clinic";

const iconMap: Record<string, LucideIcon> = {
  "user-check": UserCheck,
  sparkles: Sparkles,
  smile: Smile,
  shield: Shield,
  award: Award,
  layers: Layers,
};

export function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="why-us" className="section-padding bg-cream">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Why Patients Choose Us"
          title="Care that combines expertise with compassion"
          description="Every aspect of your visit is designed to feel professional, comfortable, and genuinely personal."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <motion.article
                key={item.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-light text-aqua transition-colors group-hover:bg-aqua group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-xl font-medium text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
