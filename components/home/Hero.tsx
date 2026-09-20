"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroVisual3D } from "@/components/three/LazyThreeVisuals";
import { contact } from "@/data/clinic";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-24 lg:pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-white to-aqua-light/20" />
      <div className="absolute inset-0 dental-pattern opacity-30" />
      <div className="absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-aqua/10 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-navy/5 blur-3xl" />

      <div className="section-padding container-narrow relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-5">
                Gurgaon · Sector 46 · Open Daily 9 AM – 11 PM
              </Badge>
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance font-heading text-[2.75rem] font-medium leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Advanced Dentistry.
              <br />
              <span className="gradient-text">A Better Experience.</span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Personalized dental care supported by experienced professionals
              and modern technology — from preventive visits to advanced
              implantology under one roof.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button size="lg" asChild className="group shadow-lg shadow-navy/10">
                <Link href="/appointment">
                  Book an Appointment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#doctors">
                  <Users className="h-4 w-4" />
                  Meet Our Doctors
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-10 flex flex-wrap gap-6 border-t border-border/60 pt-8 text-sm text-muted-foreground"
            >
              <div>
                <p className="font-semibold text-navy">CBCT · CAD/CAM · Biolase</p>
                <p>Advanced digital dentistry</p>
              </div>
              <div>
                <p className="font-semibold text-navy">24/7 Emergency Line</p>
                <p>{contact.emergency.numbers[0].display}</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full max-h-[640px] lg:aspect-square lg:max-h-none"
          >
            <HeroVisual3D className="h-full w-full shadow-2xl shadow-navy/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
