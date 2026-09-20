import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { treatments, treatmentCategories } from "@/data/clinic";
import { getTreatmentImage, siteImages } from "@/data/images";

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

          <div className="relative mb-14 aspect-[21/9] overflow-hidden rounded-3xl">
            <OptimizedImage
              src={siteImages.clinic.interior}
              alt={siteImages.clinic.altInterior}
              fill
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
          </div>

          {treatmentCategories.map((category) => {
            const items = treatments.filter((t) => t.category === category.id);
            if (items.length === 0) return null;
            return (
              <div key={category.id} className="mb-14">
                <h2 className="mb-6 font-heading text-2xl font-medium text-navy">
                  {category.label}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((treatment) => {
                    const image = getTreatmentImage(treatment.slug);
                    return (
                    <Link
                      key={treatment.slug}
                      href={`/treatments/${treatment.slug}`}
                      className="group overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:border-aqua/30 hover:shadow-lg"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <OptimizedImage
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                      </div>
                      <div className="p-6">
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
                      </div>
                    </Link>
                  );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
