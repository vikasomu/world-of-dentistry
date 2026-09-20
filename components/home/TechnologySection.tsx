"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { technologies } from "@/data/clinic";
import { cn } from "@/lib/utils/cn";

export function TechnologySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const active = technologies[activeIndex];

  return (
    <section id="technology" className="section-padding bg-navy text-white overflow-hidden">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Technology"
          title="Precision tools for better outcomes"
          description="ISO certified and internationally acclaimed dental products and equipment support every treatment we deliver."
          align="center"
          className="[&_h2]:text-white [&_p]:text-white/70 [&_p:first-of-type]:text-aqua"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="absolute inset-16 rounded-full border border-aqua/30 bg-aqua/5" />

            {!shouldReduceMotion && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {technologies.map((tech, i) => {
                  const angle = (i / technologies.length) * 360;
                  const rad = (angle * Math.PI) / 180;
                  const x = 50 + 42 * Math.cos(rad);
                  const y = 50 + 42 * Math.sin(rad);
                  return (
                    <button
                      key={tech.slug}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className={cn(
                        "absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-xs font-medium transition-all",
                        activeIndex === i
                          ? "bg-aqua text-white scale-110"
                          : "bg-white/10 text-white/80 hover:bg-white/20"
                      )}
                      style={{ left: `${x}%`, top: `${y}%` }}
                      aria-pressed={activeIndex === i}
                    >
                      {tech.name.split(" ")[0]}
                    </button>
                  );
                })}
              </motion.div>
            )}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-aqua">Featured</p>
                <p className="font-heading text-2xl font-medium">{active.name}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {technologies.map((tech, index) => (
              <motion.button
                key={tech.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={cn(
                  "w-full rounded-xl border p-5 text-left transition-all",
                  activeIndex === index
                    ? "border-aqua bg-white/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                )}
              >
                <h3 className="font-medium text-white">{tech.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {tech.description}
                </p>
              </motion.button>
            ))}
            <p className="text-xs text-white/50">
              Technology supports treatment planning and delivery. Individual outcomes depend on clinical assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
