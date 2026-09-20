"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { contact } from "@/data/clinic";
import { trackEvent } from "@/lib/utils/analytics";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3 divide-x divide-border">
        <a
          href={`tel:${contact.phone}`}
          onClick={() => trackEvent("phone_clicked", { location: "mobile_bar" })}
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-navy"
          aria-label="Call clinic"
        >
          <Phone className="h-5 w-5 text-aqua" />
          Call
        </a>
        <a
          href={contact.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("whatsapp_clicked", { location: "mobile_bar" })
          }
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-navy"
          aria-label="WhatsApp clinic"
        >
          <MessageCircle className="h-5 w-5 text-aqua" />
          WhatsApp
        </a>
        <Link
          href="/appointment"
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-navy"
          aria-label="Book appointment"
        >
          <Calendar className="h-5 w-5 text-aqua" />
          Book
        </Link>
      </div>
    </div>
  );
}
