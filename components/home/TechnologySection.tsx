"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { TechnologyVisual3D } from "@/components/three/LazyThreeVisuals";
import { technologies } from "@/data/clinic";
import { siteImages } from "@/data/images";
import { cn } from "@/lib/utils/cn";

const phases = [
  { label: "Scan" },
  { label: "Plan" },
  { label: "Treat" },
];

function useMotionValueState(motionValue: MotionValue<number>) {
  const [value, setValue] = useState(0);
  useEffect(() => motionValue.on("change", setValue), [motionValue]);
  return value;
}

function ScrollLinkedVisual({ progress }: { progress: MotionValue<number> }) {
  const value = useMotionValueState(progress);
  return <TechnologyVisual3D progress={value} className="h-full w-full" />;
}

export function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progress = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="relative overflow-hidden bg-navy py-24 text-white md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(61,154,154,0.15),transparent_50%)]" />

      <div className="container-narrow relative px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology"
          title="Precision meets modern dentistry"
          description="ISO certified and internationally acclaimed equipment supports accurate diagnosis, planning, and treatment delivery."
          align="center"
          className="[&_h2]:text-white [&_p:first-of-type]:text-aqua [&_p:last-of-type]:text-white/70"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square max-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:max-h-none">
            <OptimizedImage
              src={siteImages.technology.equipment}
              alt={siteImages.technology.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="opacity-30"
            />
            {shouldReduceMotion ? (
              <TechnologyVisual3D progress={0.5} className="h-full w-full" />
            ) : (
              <ScrollLinkedVisual progress={progress} />
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center gap-4 bg-gradient-to-t from-navy/90 to-transparent p-6">
              {phases.map((phase) => (
                <span
                  key={phase.label}
                  className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white/80"
                >
                  {phase.label}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.slug}
                initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className={cn(
                  "group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-aqua/40 hover:bg-white/10"
                )}
              >
                <h3 className="font-heading text-lg font-medium text-white group-hover:text-aqua">
                  {tech.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {tech.description}
                </p>
              </motion.div>
            ))}
            <p className="pt-2 text-xs text-white/45">
              Technology supports clinical decision-making. Individual outcomes depend on examination and treatment planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
