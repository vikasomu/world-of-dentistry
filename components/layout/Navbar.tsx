"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinicName, contact } from "@/data/clinic";
import { cn } from "@/lib/utils/cn";
import { trackEvent } from "@/lib/utils/analytics";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#treatments", label: "Treatments" },
  { href: "/#doctors", label: "Doctors" },
  { href: "/#technology", label: "Technology" },
  { href: "/#patient-journey", label: "Patient Experience" },
  { href: "/#dental-tourism", label: "Dental Tourism" },
  { href: "/blog", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.body.classList.toggle("mobile-menu-open", isOpen);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isOpen && "max-lg:pointer-events-none max-lg:opacity-0",
          scrolled
            ? "border-b border-border/60 bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        )}
        aria-hidden={isOpen ? true : undefined}
      >
        <nav
          className="container-narrow flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 lg:h-20"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="group flex flex-col"
            aria-label={`${clinicName} home`}
          >
            <span className="font-heading text-xl font-semibold tracking-tight text-navy lg:text-2xl">
              World of
            </span>
            <span className="-mt-1 text-xs font-medium uppercase tracking-[0.2em] text-aqua">
              Dentistry
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${contact.phone}`}
              onClick={() => trackEvent("phone_clicked", { location: "navbar" })}
              className="flex items-center gap-2 text-sm font-medium text-navy hover:text-aqua"
              aria-label={`Call ${contact.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{contact.phoneDisplay}</span>
            </a>
            <Button asChild>
              <Link href="/appointment">Book Appointment</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-navy lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy/20 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={shouldReduceMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col"
                  aria-label={`${clinicName} home`}
                >
                  <span className="font-heading text-lg font-semibold tracking-tight text-navy">
                    World of
                  </span>
                  <span className="-mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-aqua">
                    Dentistry
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="rounded-lg p-2 text-navy hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-6 pb-28">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-4 py-3 text-base font-medium text-navy hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                  <Button asChild className="w-full">
                    <Link href="/appointment" onClick={() => setIsOpen(false)}>
                      Book Appointment
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <a
                      href={`tel:${contact.phone}`}
                      onClick={() =>
                        trackEvent("phone_clicked", { location: "mobile_menu" })
                      }
                    >
                      Call {contact.phoneDisplay}
                    </a>
                  </Button>
                  <Button variant="secondary" asChild className="w-full">
                    <a
                      href={contact.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent("whatsapp_clicked", { location: "mobile_menu" })
                      }
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
