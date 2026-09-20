import type { Metadata } from "next";
import { clinicName } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Terms of Use",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="pt-28">
      <div className="section-padding container-narrow max-w-3xl">
        <h1 className="font-heading text-4xl font-medium text-navy">
          Terms of Use
        </h1>
        <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            By using the {clinicName} website, you agree to these terms. If you
            do not agree, please do not use this website.
          </p>
          <h2 className="font-heading text-xl text-navy pt-4">
            Website Content
          </h2>
          <p>
            All content is provided for informational purposes. We reserve the
            right to update content without notice.
          </p>
          <h2 className="font-heading text-xl text-navy pt-4">
            Appointment Requests
          </h2>
          <p>
            Submitting an appointment request does not guarantee a confirmed
            booking. Our team will contact you to confirm availability.
          </p>
          <h2 className="font-heading text-xl text-navy pt-4">
            AI Assistant
          </h2>
          <p>
            Smile Assistant provides general information only and does not
            provide medical diagnosis or treatment recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
