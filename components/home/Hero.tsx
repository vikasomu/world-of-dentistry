"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/clinic";

interface HeroProps {
  onOpenAI?: () => void;
}

export function Hero({ onOpenAI }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-24 lg:pt-28">
      <div className="absolute inset-0 dental-pattern opacity-40" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-aqua/10 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-navy/5 blur-3xl" />

      <div className="section-padding container-narrow relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-aqua"
            >
              Gurgaon&apos;s Trusted Dental Clinic
            </motion.p>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-balance font-heading text-4xl font-medium leading-tight tracking-tight text-navy md:text-5xl lg:text-6xl"
            >
              Advanced Dentistry.
              <br />
              <span className="gradient-text">Designed Around You.</span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              Experienced dental professionals, modern technology, and a
              comfortable patient experience — personalized care for your entire
              family under one roof.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button size="lg" asChild>
                <Link href="/appointment">
                  Book an Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onOpenAI}
                type="button"
              >
                <Sparkles className="h-4 w-4" />
                Talk to Smile Assistant
              </Button>
            </motion.div>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              Open daily {contact.hours[0].value} · Emergency support available
            </motion.p>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroVisual shouldReduceMotion={!!shouldReduceMotion} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <div className="relative aspect-[4/5] max-h-[600px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-aqua-light via-white to-secondary shadow-2xl shadow-navy/10 lg:aspect-square">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 200 240"
          className="h-3/4 w-3/4 text-navy/10"
          aria-hidden="true"
        >
          <motion.path
            d="M100 20 C130 20 160 50 160 90 C160 130 140 180 100 220 C60 180 40 130 40 90 C40 50 70 20 100 20 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            initial={shouldReduceMotion ? false : { scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </svg>
      </div>

      {!shouldReduceMotion && (
        <>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-8 top-12 rounded-2xl border border-border/60 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm"
          >
            <p className="text-xs font-medium text-muted-foreground">Technology</p>
            <p className="text-sm font-semibold text-navy">CBCT · CAD/CAM</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-16 right-8 rounded-2xl border border-border/60 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm"
          >
            <p className="text-xs font-medium text-muted-foreground">Care</p>
            <p className="text-sm font-semibold text-navy">Comfort-Focused</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-8 left-12 rounded-2xl border border-border/60 bg-navy px-4 py-3 shadow-lg"
          >
            <p className="text-xs font-medium text-white/70">Hours</p>
            <p className="text-sm font-semibold text-white">9 AM – 11 PM Daily</p>
          </motion.div>
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-8">
        <p className="font-heading text-xl font-medium text-white">
          Your smile, our commitment
        </p>
        <p className="mt-1 text-sm text-white/80">
          Painless procedures · Advanced technology · Caring specialists
        </p>
      </div>
    </div>
  );
}
