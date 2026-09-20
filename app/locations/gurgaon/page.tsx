import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getOrganizationSchema } from "@/lib/seo/structured-data";
import { clinicName, clinicDescription, contact, treatments } from "@/data/clinic";

export const metadata: Metadata = createPageMetadata({
  title: "Dentist in Gurgaon | Dental Clinic Sector 46",
  description:
    "World of Dentistry is a super specialty dental clinic in Sector 46, Gurugram offering implants, root canal, cosmetic dentistry and family dental care. Open daily 9 AM – 11 PM.",
  path: "/locations/gurgaon",
  keywords: [
    "dentist in Gurgaon",
    "dental clinic in Gurgaon",
    "best dental clinic Sector 46",
    "dentist Gurugram Haryana",
  ],
});

export default function GurgaonLocationPage() {
  return (
    <>
      <JsonLd
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "https://www.worldofdentistry.co.in/" },
            {
              name: "Gurgaon",
              url: "https://www.worldofdentistry.co.in/locations/gurgaon",
            },
          ]),
        ]}
      />
      <section className="pt-28">
        <div className="section-padding container-narrow max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Gurgaon" },
            ]}
          />

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-aqua">
            Gurgaon · Gurugram
          </p>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-navy md:text-5xl">
            Your dentist in Gurgaon
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {clinicDescription} Visit us at {contact.address.full}.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border p-5">
              <MapPin className="h-5 w-5 text-aqua" />
              <p className="mt-3 text-sm font-medium text-navy">Address</p>
              <p className="mt-1 text-sm text-muted-foreground">{contact.address.full}</p>
            </div>
            <div className="rounded-2xl border border-border p-5">
              <Phone className="h-5 w-5 text-aqua" />
              <p className="mt-3 text-sm font-medium text-navy">Phone</p>
              <p className="mt-1 text-sm text-muted-foreground">{contact.phoneDisplay}</p>
            </div>
            <div className="rounded-2xl border border-border p-5">
              <Clock className="h-5 w-5 text-aqua" />
              <p className="mt-3 text-sm font-medium text-navy">Hours</p>
              <p className="mt-1 text-sm text-muted-foreground">{contact.hours[0].value}</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="font-heading text-2xl font-medium text-navy">
              Dental services in Gurgaon
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {treatments.slice(0, 8).map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="text-sm text-muted-foreground hover:text-aqua"
                  >
                    {t.name} in Gurgaon
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/appointment">Book Appointment</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact {clinicName}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
