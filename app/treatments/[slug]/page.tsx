import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  getBreadcrumbSchema,
  getTreatmentSchema,
} from "@/lib/seo/structured-data";
import {
  treatments,
  getTreatmentBySlug,
  getDoctorBySlug,
  medicalDisclaimer,
} from "@/data/clinic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return { title: "Treatment Not Found" };

  return createPageMetadata({
    title: `${treatment.name} in Gurgaon`,
    description: treatment.shortDescription,
    path: `/treatments/${slug}`,
    keywords: [treatment.name, `${treatment.name} Gurgaon`, "dental clinic Gurugram"],
  });
}

export default async function TreatmentPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  const relatedDoctors = treatment.relatedDoctorSlugs
    .map((s) => getDoctorBySlug(s))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          getTreatmentSchema(treatment),
          getBreadcrumbSchema([
            { name: "Home", url: "https://www.worldofdentistry.co.in/" },
            {
              name: "Treatments",
              url: "https://www.worldofdentistry.co.in/treatments",
            },
            {
              name: treatment.name,
              url: `https://www.worldofdentistry.co.in/treatments/${slug}`,
            },
          ]),
        ]}
      />
      <section className="bg-navy pt-28 pb-16 text-white">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Treatments", href: "/treatments" },
              { label: treatment.name },
            ]}
            className="mb-6 [&_a]:text-white/70 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-white/50"
          />
          <h1 className="font-heading text-4xl font-medium md:text-5xl">
            {treatment.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            {treatment.shortDescription}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-heading text-2xl font-medium text-navy">
                  Overview
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {treatment.overview}
                </p>
                <p className="mt-4 text-sm italic text-muted-foreground">
                  {medicalDisclaimer}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-medium text-navy">
                  Who may need this treatment
                </h2>
                <ul className="mt-4 space-y-2">
                  {treatment.whoMayNeedIt.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-medium text-navy">
                  What to expect
                </h2>
                <ul className="mt-4 space-y-2">
                  {treatment.whatToExpect.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-medium text-navy">
                  Treatment journey
                </h2>
                <div className="mt-6 space-y-4">
                  {treatment.journey.map((step) => (
                    <div
                      key={step.step}
                      className="flex gap-4 rounded-xl border border-border p-5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-aqua-light text-sm font-semibold text-aqua">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="font-medium text-navy">{step.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {treatment.recovery && (
                <div>
                  <h2 className="font-heading text-2xl font-medium text-navy">
                    Recovery & care
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {treatment.recovery.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="font-heading text-2xl font-medium text-navy">
                  Frequently asked questions
                </h2>
                <Accordion type="single" collapsible className="mt-4">
                  {treatment.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-cream p-6 sticky top-24">
                <h3 className="font-heading text-lg font-medium text-navy">
                  Request an appointment
                </h3>
                <div className="mt-4">
                  <AppointmentForm compact defaultTreatment={treatment.name} />
                </div>
              </div>

              {treatment.technologyUsed.length > 0 && (
                <div className="rounded-2xl border border-border p-6">
                  <h3 className="font-medium text-navy">Technology used</h3>
                  <ul className="mt-3 space-y-2">
                    {treatment.technologyUsed.map((tech) => (
                      <li key={tech} className="text-sm text-muted-foreground">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedDoctors.length > 0 && (
                <div className="rounded-2xl border border-border p-6">
                  <h3 className="font-medium text-navy">Specialists</h3>
                  <div className="mt-3 space-y-3">
                    {relatedDoctors.map(
                      (doctor) =>
                        doctor && (
                          <Link
                            key={doctor.slug}
                            href={`/doctors/${doctor.slug}`}
                            className="block rounded-lg bg-muted p-3 text-sm hover:bg-aqua-light"
                          >
                            <p className="font-medium text-navy">{doctor.name}</p>
                            <p className="text-muted-foreground">{doctor.title}</p>
                          </Link>
                        )
                    )}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
