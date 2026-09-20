"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/clinic";

export function ContactPreview() {
  return (
    <section className="section-padding bg-navy text-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Contact"
          title="Visit us in Sector 46, Gurgaon"
          description={contact.address.full}
          align="center"
          className="[&_h2]:text-white [&_p:first-of-type]:text-aqua [&_p:last-of-type]:text-white/75"
        />

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
          <a
            href={`tel:${contact.phone}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition-colors hover:bg-white/10"
          >
            <Phone className="mx-auto h-5 w-5 text-aqua" />
            <p className="mt-3 text-sm font-medium">{contact.phoneDisplay}</p>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition-colors hover:bg-white/10"
          >
            <Mail className="mx-auto h-5 w-5 text-aqua" />
            <p className="mt-3 text-sm font-medium break-all">{contact.email}</p>
          </a>
          <a
            href={contact.mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition-colors hover:bg-white/10"
          >
            <MapPin className="mx-auto h-5 w-5 text-aqua" />
            <p className="mt-3 text-sm font-medium">Get Directions</p>
          </a>
        </div>

        <div className="mt-8 text-center">
          <Button variant="accent" asChild>
            <Link href="/contact">View Contact Page</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
