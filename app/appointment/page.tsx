import type { Metadata } from "next";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import { contact } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request a dental appointment at World of Dentistry, Gurgaon. Open daily 9 AM to 11 PM.",
  alternates: { canonical: "/appointment" },
};

export default function AppointmentPage() {
  return (
    <section className="pt-28">
      <div className="section-padding container-narrow max-w-2xl">
        <SectionHeading
          eyebrow="Appointment"
          title="Request an appointment"
          description={`Submit your details and our team will contact you to confirm. We're open ${contact.hours[0].value}.`}
          align="center"
        />
        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm md:p-10">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
