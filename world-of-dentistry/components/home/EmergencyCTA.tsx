"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, emergencyGuidance } from "@/data/clinic";
import { trackEvent } from "@/lib/utils/analytics";

export function EmergencyCTA() {
  return (
    <section id="emergency" className="section-padding bg-aqua-light">
      <div className="container-narrow">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-aqua/20 bg-white p-8 text-center md:flex-row md:text-left md:p-10">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-aqua/10 text-aqua">
            <AlertCircle className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <h2 className="font-heading text-2xl font-medium text-navy md:text-3xl">
              Having a dental emergency?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Contact our clinic team for guidance. We offer 24/7 emergency
              calling at {contact.emergency.numbers.map((n) => n.display).join(" or ")}.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              {emergencyGuidance}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a
                href={contact.emergency.numbers[1].href}
                onClick={() =>
                  trackEvent("phone_clicked", { location: "emergency" })
                }
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={contact.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_clicked", { location: "emergency" })
                }
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/appointment">
                <Calendar className="h-4 w-4" />
                Request Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
