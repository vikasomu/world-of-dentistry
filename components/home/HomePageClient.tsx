"use client";

import { TrustStrip } from "@/components/home/TrustStrip";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TreatmentsSection } from "@/components/home/TreatmentsSection";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { PatientJourney } from "@/components/home/PatientJourney";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InternationalPatientSection } from "@/components/home/InternationalPatientSection";
import { AISection } from "@/components/home/AISection";
import { EmergencyCTA } from "@/components/home/EmergencyCTA";
import { FAQSection } from "@/components/home/FAQSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { ContactPreview } from "@/components/home/ContactPreview";
import { Hero } from "@/components/home/Hero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import { patientRating } from "@/data/clinic";

export function HomePageClient() {
  return (
    <>
      <Hero />

      <TrustStrip />

      <section className="border-b border-border bg-white py-6">
        <div className="container-narrow px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            Rated{" "}
            <span className="font-semibold text-navy">
              {patientRating.score} out of {patientRating.maxScore}
            </span>{" "}
            based on {patientRating.reviewCount} patient ratings
          </p>
        </div>
      </section>

      <WhyChooseUs />
      <TreatmentsSection />
      <DoctorsSection />
      <TechnologySection />
      <PatientJourney />
      <BeforeAfterSection />
      <TestimonialsSection />
      <InternationalPatientSection />
      <AISection />
      <EmergencyCTA />

      <section id="appointment" className="section-padding bg-white">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Book Your Visit"
            title="Request an appointment"
            description="Fill in your details and our team will contact you to confirm your preferred time."
            align="center"
          />
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-cream p-6 md:p-10 shadow-sm">
            <AppointmentForm />
          </div>
        </div>
      </section>

      <FAQSection />
      <BlogPreview />
      <ContactPreview />
    </>
  );
}
