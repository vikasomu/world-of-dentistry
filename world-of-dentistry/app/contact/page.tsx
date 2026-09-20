"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactFormData } from "@/lib/validation/schemas";
import { contact } from "@/data/clinic";
import { trackEvent } from "@/lib/utils/analytics";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setError("Unable to send message. Please try calling us.");
        return;
      }

      setSubmitted(true);
      trackEvent("contact_form_submitted");
      reset();
    } catch {
      setError("Unable to send message. Please try calling us.");
    }
  };

  return (
    <section className="pt-28">
      <div className="section-padding container-narrow">
        <SectionHeading
          eyebrow="Contact"
          title="We'd love to hear from you"
          description="Reach out for appointments, questions, or emergency guidance."
          align="center"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <ContactCard
              icon={Phone}
              title="Phone"
              content={contact.phoneDisplay}
              href={`tel:${contact.phone}`}
              onClick={() => trackEvent("phone_clicked", { location: "contact" })}
            />
            <ContactCard
              icon={Mail}
              title="Email"
              content={contact.email}
              href={`mailto:${contact.email}`}
            />
            <ContactCard
              icon={MapPin}
              title="Address"
              content={contact.address.full}
              href={contact.mapDirectionsUrl}
            />
            <ContactCard
              icon={Clock}
              title="Hours"
              content={contact.hours[0].value}
            />

            <div className="rounded-2xl bg-navy p-6 text-white">
              <h3 className="font-medium">Emergency Contact</h3>
              <p className="mt-2 text-sm text-white/80">
                24/7 emergency line available
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {contact.emergency.numbers.map((num) => (
                  <a
                    key={num.href}
                    href={num.href}
                    className="rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
                  >
                    {num.display}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button asChild className="flex-1">
                <a href={`tel:${contact.phone}`}>Call Now</a>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <a
                  href={contact.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("whatsapp_clicked", { location: "contact" })
                  }
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-2xl border border-aqua/30 bg-aqua-light p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-aqua" />
                <h3 className="mt-4 font-heading text-xl text-navy">
                  Message Sent
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We&apos;ll get back to you shortly.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-2xl border border-border bg-cream p-6 space-y-4 md:p-8"
              >
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" {...register("name")} className="mt-1.5" />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register("email")} className="mt-1.5" />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" {...register("phone")} className="mt-1.5" />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" {...register("subject")} className="mt-1.5" />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" {...register("message")} rows={5} className="mt-1.5" />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                  )}
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <iframe
            src={contact.mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="World of Dentistry location map"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  content,
  href,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
  href?: string;
  onClick?: () => void;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border p-5 transition-colors hover:border-aqua/30">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-aqua-light text-aqua">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-medium text-navy">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{content}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" onClick={onClick}>
        {inner}
      </a>
    );
  }

  return inner;
}
