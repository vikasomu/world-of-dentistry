import type { Metadata } from "next";
import { clinicName, contact } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="pt-28">
      <div className="section-padding container-narrow max-w-3xl">
        <h1 className="font-heading text-4xl font-medium text-navy">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            {clinicName} respects your privacy. This policy describes how we
            collect, use, and protect information submitted through our website.
          </p>
          <h2 className="font-heading text-xl text-navy pt-4">
            Information We Collect
          </h2>
          <p>
            When you submit an appointment request, contact form, or interact
            with our AI assistant, we may collect your name, phone number,
            email address, preferred appointment details, and messages you
            provide.
          </p>
          <h2 className="font-heading text-xl text-navy pt-4">
            How We Use Information
          </h2>
          <p>
            We use submitted information to respond to your inquiries, schedule
            appointments, and provide clinic services. We do not sell your
            personal information.
          </p>
          <h2 className="font-heading text-xl text-navy pt-4">Contact</h2>
          <p>
            For privacy-related questions, contact us at {contact.email} or{" "}
            {contact.phoneDisplay}.
          </p>
        </div>
      </div>
    </section>
  );
}
