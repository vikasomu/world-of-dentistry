"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { treatments, treatmentCategories } from "@/data/clinic";
import { cn } from "@/lib/utils/cn";
import { trackEvent } from "@/lib/utils/analytics";

export function TreatmentsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const shouldReduceMotion = useReducedMotion();

  const filtered =
    activeCategory === "all"
      ? treatments
      : treatments.filter((t) => t.category === activeCategory);

  return (
    <section id="treatments" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Treatments"
          title="Comprehensive dental care for every need"
          description="From preventive care to advanced implantology — explore our range of treatments delivered with modern technology."
        />

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <nav
            className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
            aria-label="Treatment categories"
          >
            <CategoryButton
              active={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
              label="All Treatments"
            />
            {treatmentCategories.map((cat) => (
              <CategoryButton
                key={cat.id}
                active={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                label={cat.label}
              />
            ))}
          </nav>

          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map((treatment, index) => (
              <motion.article
                key={treatment.slug}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-cream transition-all hover:border-aqua/30 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-aqua/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-aqua-light">
                    <TreatmentIcon />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-navy">
                    {treatment.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {treatment.shortDescription}
                  </p>
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    onClick={() =>
                      trackEvent("treatment_viewed", { slug: treatment.slug })
                    }
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-aqua transition-colors hover:text-navy"
                  >
                    Explore Treatment
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors lg:w-full",
        active
          ? "bg-navy text-white"
          : "bg-muted text-muted-foreground hover:bg-aqua-light hover:text-navy"
      )}
    >
      {label}
    </button>
  );
}

function TreatmentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-aqua"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 3c2 0 4 2 4 5c0 2-1 4-2 5c-1 1-2 3-2 5s1 4 2 4s2-2 2-4s-1-4-2-5c-1-1-2-3-2-5c0-3 2-5 4-5z" />
    </svg>
  );
}
