import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import { treatments, treatmentCategories } from "@/data/clinic";

export const metadata: Metadata = createPageMetadata({
  title: "Dental Treatments in Gurgaon",
  description:
    "Explore dental treatments at World of Dentistry — implants, root canal, cosmetic dentistry, braces, pediatric care and more in Gurugram.",
  path: "/treatments",
  keywords: [
    "dental treatments Gurgaon",
    "dental implants Gurugram",
    "root canal Gurgaon",
    "cosmetic dentistry Gurgaon",
  ],
});

export default function TreatmentsIndexPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "https://www.worldofdentistry.co.in/" },
          {
            name: "Treatments",
            url: "https://www.worldofdentistry.co.in/treatments",
          },
        ])}
      />
      <section className="pt-28">
        <div className="section-padding container-narrow">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Treatments" }]} />
          <SectionHeading
            eyebrow="Treatments"
            title="Comprehensive dental care in Gurgaon"
            description="Every treatment is delivered with modern technology and a focus on comfort, safety, and clear communication."
          />

          {treatmentCategories.map((category) => {
            const items = treatments.filter((t) => t.category === category.id);
            if (items.length === 0) return null;
            return (
              <div key={category.id} className="mb-14">
                <h2 className="mb-6 font-heading text-2xl font-medium text-navy">
                  {category.label}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((treatment) => (
                    <Link
                      key={treatment.slug}
                      href={`/treatments/${treatment.slug}`}
                      className="group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-aqua/30 hover:shadow-lg"
                    >
                      <Badge className="mb-3">{category.label}</Badge>
                      <h3 className="font-heading text-lg font-medium text-navy group-hover:text-aqua">
                        {treatment.name}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {treatment.shortDescription}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-aqua">
                        Explore
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
