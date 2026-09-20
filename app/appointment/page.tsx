import type { Metadata } from "next";
import { Calendar, CheckCircle2 } from "lucide-react";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import { contact } from "@/data/clinic";
import { siteImages } from "@/data/images";

export const metadata: Metadata = createPageMetadata({
  title: "Book an Appointment",
  description:
    "Request a dental appointment at World of Dentistry in Gurgaon. Open daily 9 AM to 11 PM with 24/7 emergency support.",
  path: "/appointment",
  keywords: ["book dentist Gurgaon", "dental appointment Gurugram"],
});

const steps = [
  "Tell us what you need",
  "Choose your preferred time",
  "Clinic team confirms",
];

export default function AppointmentPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "https://www.worldofdentistry.co.in/" },
          {
            name: "Appointment",
            url: "https://www.worldofdentistry.co.in/appointment",
          },
        ])}
      />
      <section className="pt-28">
        <div className="section-padding container-narrow">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Appointment" }]}
          />

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-aqua">
                Appointment
              </p>
              <h1 className="font-heading text-4xl font-medium tracking-tight text-navy md:text-5xl">
                Let&apos;s plan your visit
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Submit a request and our team will contact you to confirm
                availability. We&apos;re open {contact.hours[0].value}.
              </p>

              <div className="mt-10 space-y-4">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aqua-light text-sm font-semibold text-aqua">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="font-medium text-navy">{step}</p>
                      {index === 0 && (
                        <p className="text-sm text-muted-foreground">
                          Share your concern or treatment interest
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-border bg-cream p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-aqua" />
                  <p className="text-sm text-muted-foreground">
                    Submitting this form sends a request only — not a confirmed
                    booking. Our clinic team will reach out to finalize your
                    appointment.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-3xl lg:block">
                <OptimizedImage
                  src={siteImages.hero.primary}
                  alt={siteImages.hero.alt}
                  fill
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-sm text-white/90">
                  Comfortable, modern treatment rooms in Sector 46, Gurugram
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-white p-6 shadow-lg shadow-navy/5 md:p-10">
              <div className="mb-6 flex items-center gap-2 text-navy">
                <Calendar className="h-5 w-5 text-aqua" />
                <h2 className="font-heading text-xl font-medium">
                  Appointment request
                </h2>
              </div>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
