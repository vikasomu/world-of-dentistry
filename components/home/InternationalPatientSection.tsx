"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Globe, Plane, ClipboardList, HeadphonesIcon, RefreshCw } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { dentalTourism } from "@/data/clinic";

const serviceIcons = [ClipboardList, HeadphonesIcon, Plane, Globe, RefreshCw];

export function InternationalPatientSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="dental-tourism" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="International Patients"
          title="World-class dental care, coordinated for you"
          description={dentalTourism.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dentalTourism.services.map((service, index) => {
            const Icon = serviceIcons[index] || Globe;
            return (
              <motion.div
                key={service.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-border p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-aqua-light text-aqua">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-medium text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl bg-navy p-8 text-white md:p-10">
          <h3 className="font-heading text-xl font-medium">
            International Patient Coordinator
          </h3>
          <p className="mt-2 text-white/80">
            Contact {dentalTourism.coordinator.name} for assistance with your
            treatment journey.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            {dentalTourism.coordinator.numbers.map((num) => (
              <a
                key={num.href}
                href={num.href}
                className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20"
              >
                {num.display}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
