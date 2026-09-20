import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import {
  doctors,
  getDoctorBySlug,
  getTreatmentBySlug,
  medicalDisclaimer,
} from "@/data/clinic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return { title: "Doctor Not Found" };

  return {
    title: `${doctor.name} — ${doctor.title}`,
    description: doctor.biography.slice(0, 160),
    alternates: { canonical: `/doctors/${slug}` },
  };
}

export default async function DoctorPage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const doctorTreatments = doctor.treatments
    .map((s) => getTreatmentBySlug(s))
    .filter(Boolean);

  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-light pt-28 pb-16 text-white">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <Link
            href="/#doctors"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All Doctors
          </Link>
          <div className="grid items-end gap-8 md:grid-cols-2">
            <div>
              <h1 className="font-heading text-4xl font-medium md:text-5xl">
                {doctor.name}
              </h1>
              <p className="mt-2 text-lg text-white/80">{doctor.title}</p>
              <div className="mt-4 flex items-start gap-2 text-white/70">
                <GraduationCap className="mt-1 h-5 w-5 shrink-0" />
                <span>{doctor.qualifications.join(" · ")}</span>
              </div>
            </div>
            <div className="aspect-square max-h-64 rounded-3xl bg-white/10 backdrop-blur-sm" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-heading text-2xl font-medium text-navy">
                  Biography
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {doctor.biography}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-medium text-navy">
                  Education
                </h2>
                <ul className="mt-4 space-y-2">
                  {doctor.education.map((edu) => (
                    <li key={edu} className="text-muted-foreground">
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-medium text-navy">
                  Specializations
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {doctor.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-full bg-aqua-light px-4 py-1.5 text-sm font-medium text-navy"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-medium text-navy">
                  Areas of expertise
                </h2>
                <ul className="mt-4 space-y-2">
                  {doctor.areasOfExpertise.map((area) => (
                    <li key={area} className="text-muted-foreground">
                      • {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-medium text-navy">
                  Professional experience
                </h2>
                <p className="mt-4 text-muted-foreground">{doctor.experience}</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-medium text-navy">
                  Patient philosophy
                </h2>
                <p className="mt-4 text-muted-foreground italic">
                  &ldquo;{doctor.patientPhilosophy}&rdquo;
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-medium text-navy">
                  Treatments
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {doctorTreatments.map(
                    (treatment) =>
                      treatment && (
                        <Link
                          key={treatment.slug}
                          href={`/treatments/${treatment.slug}`}
                          className="rounded-xl border border-border p-4 hover:border-aqua/30 hover:shadow-sm"
                        >
                          <p className="font-medium text-navy">{treatment.name}</p>
                          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                            {treatment.shortDescription}
                          </p>
                        </Link>
                      )
                  )}
                </div>
              </div>

              <p className="text-sm italic text-muted-foreground">
                {medicalDisclaimer}
              </p>
            </div>

            <aside>
              <div className="sticky top-24 rounded-2xl border border-border bg-cream p-6">
                <h3 className="font-heading text-lg font-medium text-navy">
                  Book with {doctor.name.split(" ").slice(-1)[0]}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Request an appointment and our team will schedule your consultation.
                </p>
                <div className="mt-6">
                  <AppointmentForm compact />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
