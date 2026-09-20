"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Users,
  Cpu,
  Heart,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { trustStrip } from "@/data/clinic";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  cpu: Cpu,
  heart: Heart,
  phone: Phone,
};

export function TrustStrip() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-y border-border bg-white" aria-label="Trust highlights">
      <div className="container-narrow px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustStrip.map((item, index) => {
            const Icon = iconMap[item.icon] || Heart;
            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua-light text-aqua">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
