import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import { DoctorPortrait } from "@/components/ui/optimized-image";
import { doctors } from "@/data/clinic";
import { getDoctorImage } from "@/data/images";

export const metadata: Metadata = createPageMetadata({
  title: "Our Dental Specialists in Gurgaon",
  description:
    "Meet the dental specialists at World of Dentistry — prosthodontists, implantologists, root canal specialists and cosmetic surgeons in Gurugram.",
  path: "/doctors",
  keywords: ["dentist Gurgaon", "dental specialist Gurugram", "implantologist Gurgaon"],
});

export default function DoctorsIndexPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "https://www.worldofdentistry.co.in/" },
          { name: "Doctors", url: "https://www.worldofdentistry.co.in/doctors" },
        ])}
      />
      <section className="pt-28">
        <div className="section-padding container-narrow">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Doctors" }]} />
          <SectionHeading
            eyebrow="Our Team"
            title="Experienced specialists you can trust"
            description="Led by postgraduate-trained dentists with extensive clinical experience."
            align="center"
          />

          <div className="grid gap-8 md:grid-cols-2">
            {doctors.map((doctor) => {
              const image = getDoctorImage(doctor.slug);
              return (
              <Link
                key={doctor.slug}
                href={`/doctors/${doctor.slug}`}
                className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <DoctorPortrait
                  initials={image.initials}
                  name={doctor.name}
                  placeholder={image.placeholder}
                  className="aspect-[16/9]"
                />
                <div className="p-6">
                  <h2 className="font-heading text-2xl font-medium text-navy">
                    {doctor.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{doctor.title}</p>
                  <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                    {doctor.qualifications.join(" · ")}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-aqua">
                    View profile
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
