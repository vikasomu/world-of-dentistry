import type { Metadata } from "next";
import { clinicName, medicalDisclaimer } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <section className="pt-28">
      <div className="section-padding container-narrow max-w-3xl">
        <h1 className="font-heading text-4xl font-medium text-navy">
          Medical Disclaimer
        </h1>
        <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>{medicalDisclaimer}</p>
          <p>
            The content on this website, including articles, treatment
            descriptions, and AI assistant responses, is provided for general
            informational and educational purposes only. It is not intended to be
            a substitute for professional dental advice, diagnosis, or treatment.
          </p>
          <p>
            Never disregard professional dental advice or delay seeking it
            because of something you have read on this website or received from
            our AI assistant.
          </p>
          <p>
            If you think you may have a dental emergency, call your dentist or
            emergency services immediately.
          </p>
          <p>
            {clinicName} makes no representations or warranties about the
            accuracy or completeness of the information on this website.
          </p>
        </div>
      </div>
    </section>
  );
}
