import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  clinicName,
  contact,
  treatments,
  doctors,
  medicalDisclaimer,
} from "@/data/clinic";

const footerLinks = {
  treatments: treatments.slice(0, 6).map((t) => ({
    href: `/treatments/${t.slug}`,
    label: t.name,
  })),
  clinic: [
    { href: "/#why-us", label: "Why Choose Us" },
    { href: "/#technology", label: "Technology" },
    { href: "/#patient-journey", label: "Patient Journey" },
    { href: "/#dental-tourism", label: "Dental Tourism" },
    { href: "/appointment", label: "Book Appointment" },
  ],
  doctors: doctors.map((d) => ({
    href: `/doctors/${d.slug}`,
    label: d.name,
  })),
  resources: [
    { href: "/blog", label: "Dental Knowledge Center" },
    { href: "/#faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
  ],
  support: [
    { href: "/#emergency", label: "Emergency Care" },
    { href: contact.whatsapp.href, label: "WhatsApp Support" },
    { href: `tel:${contact.phone}`, label: "Call Clinic" },
    { href: "/appointment", label: "Request Appointment" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="section-padding container-narrow">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-semibold">
                World of Dentistry
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Super specialty dental clinic in Gurgaon offering advanced dental
              care with modern technology and a patient-centered approach.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/80">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 hover:text-aqua"
              >
                <Phone className="h-4 w-4" />
                {contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 hover:text-aqua"
              >
                <Mail className="h-4 w-4" />
                {contact.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{contact.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {contact.hours[0].value}
              </div>
            </div>
          </div>

          <FooterColumn title="Treatments" links={footerLinks.treatments} />
          <FooterColumn title="Clinic" links={footerLinks.clinic} />
          <FooterColumn title="Doctors" links={footerLinks.doctors} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-white/50">
            {medicalDisclaimer} {clinicName} does not provide medical advice
            through this website. Always consult a qualified dental professional
            for diagnosis and treatment.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/60">
              © {currentYear} {clinicName}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <Link href="/privacy" className="hover:text-aqua">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-aqua">
                Terms of Use
              </Link>
              <Link href="/disclaimer" className="hover:text-aqua">
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-aqua">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
