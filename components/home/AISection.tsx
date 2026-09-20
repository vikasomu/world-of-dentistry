"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, MessageCircle, Calendar, Shield } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAIAssistant } from "@/components/ai/AIAssistantProvider";
import { aiDisclaimer } from "@/data/clinic";

const capabilities = [
  "Clinic hours & location",
  "Treatment explanations",
  "Appointment requests",
  "General dental education",
];

export function AISection() {
  const { open } = useAIAssistant();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="smile-assistant" className="section-padding bg-gradient-to-br from-navy via-navy-light to-navy text-white">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Smile Assistant"
              title="Answers when you need clarity"
              description="An AI assistant trained on verified clinic information — helpful for questions, not a substitute for your dentist."
              className="[&_h2]:text-white [&_p:first-of-type]:text-aqua [&_p:last-of-type]:text-white/75 mb-0"
            />

            <ul className="mt-8 space-y-3">
              {capabilities.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                  <Sparkles className="h-4 w-4 shrink-0 text-aqua" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" variant="accent" onClick={open} type="button">
                <MessageCircle className="h-4 w-4" />
                Open Smile Assistant
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                <Link href="/appointment">
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
            </div>

            <p className="mt-6 flex items-start gap-2 text-xs text-white/55">
              <Shield className="mt-0.5 h-4 w-4 shrink-0" />
              {aiDisclaimer}
            </p>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <Badge className="mb-4 bg-aqua text-white">AI Assistant Preview</Badge>
            <div className="space-y-4">
              <div className="rounded-2xl rounded-bl-md bg-white/10 p-4 text-sm text-white/90">
                My tooth hurts when I drink cold water. What could that mean?
              </div>
              <div className="rounded-2xl rounded-bl-md bg-white p-4 text-sm text-navy">
                Tooth sensitivity can have several causes. I can explain common possibilities, but I can&apos;t diagnose your condition. If pain persists, a dental examination is recommended.
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-aqua-light px-3 py-1 text-xs font-medium text-navy">Book Appointment</span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-navy">Call Clinic</span>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-aqua/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
