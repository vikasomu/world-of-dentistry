"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { doctors } from "@/data/clinic";
import { trackEvent } from "@/lib/utils/analytics";

export function DoctorsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="doctors" className="section-padding bg-cream">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Our Specialists"
          title="Meet the dental experts behind your care"
          description="Led by specialists with postgraduate training and extensive clinical experience."
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {doctors.map((doctor, index) => (
            <motion.article
              key={doctor.slug}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <Link
                href={`/doctors/${doctor.slug}`}
                onClick={() =>
                  trackEvent("doctor_viewed", { slug: doctor.slug })
                }
                className="block"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-navy to-navy-light">
                  <div className="absolute inset-0 flex items-end justify-center">
                    <div className="h-4/5 w-4/5 rounded-t-full bg-gradient-to-t from-aqua/20 to-white/10 transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy to-transparent p-6 pt-16">
                    <h3 className="font-heading text-2xl font-medium text-white">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">{doctor.title}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                    <span>{doctor.qualifications.join(" · ")}</span>
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {doctor.experience}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {doctor.specializations.slice(0, 3).map((spec) => (
                      <span
                        key={spec}
                        className="rounded-full bg-aqua-light px-3 py-1 text-xs font-medium text-navy"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-aqua group-hover:text-navy">
                    View Profile
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
