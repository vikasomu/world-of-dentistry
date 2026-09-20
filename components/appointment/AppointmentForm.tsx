"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  appointmentSchema,
  type AppointmentFormData,
} from "@/lib/validation/schemas";
import { treatments } from "@/data/clinic";
import { trackEvent } from "@/lib/utils/analytics";

interface AppointmentFormProps {
  compact?: boolean;
  defaultTreatment?: string;
}

export function AppointmentForm({
  compact = false,
  defaultTreatment = "",
}: AppointmentFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      treatment: defaultTreatment,
    },
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setError("");
    trackEvent("appointment_started");

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.error || "Submission failed. Please try again.");
        return;
      }

      setReference(result.reference || "");
      setSubmitted(true);
      trackEvent("appointment_submitted");
      reset();
    } catch {
      setError("Unable to submit. Please call us directly.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-aqua/30 bg-aqua-light p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-aqua" />
        <h3 className="mt-4 font-heading text-xl font-medium text-navy">
          Request Received
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Appointment request received. Our clinic team will contact you to
          confirm your appointment.
        </p>
        {reference && (
          <p className="mt-2 text-xs text-muted-foreground">
            Reference: {reference}
          </p>
        )}
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={compact ? "space-y-4" : "space-y-5"}
      noValidate
    >
      <div className={compact ? "space-y-4" : "grid gap-5 sm:grid-cols-2"}>
        <Field label="Full Name" error={errors.fullName?.message} required>
          <Input
            {...register("fullName")}
            aria-invalid={!!errors.fullName}
            placeholder="Your full name"
          />
        </Field>

        <Field label="Phone" error={errors.phone?.message} required>
          <Input
            {...register("phone")}
            type="tel"
            aria-invalid={!!errors.phone}
            placeholder="+91 XXXXX XXXXX"
          />
        </Field>

        <Field label="Email" error={errors.email?.message} required>
          <Input
            {...register("email")}
            type="email"
            aria-invalid={!!errors.email}
            placeholder="you@email.com"
          />
        </Field>

        <Field label="Treatment / Concern" error={errors.treatment?.message} required>
          <select
            {...register("treatment")}
            className="flex h-11 w-full rounded-lg border border-border bg-white px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-invalid={!!errors.treatment}
          >
            <option value="">Select a treatment</option>
            {treatments.map((t) => (
              <option key={t.slug} value={t.name}>
                {t.name}
              </option>
            ))}
            <option value="Other">Other / Not Sure</option>
          </select>
        </Field>

        <Field label="Preferred Date" error={errors.preferredDate?.message} required>
          <Input
            {...register("preferredDate")}
            type="date"
            min={new Date().toISOString().split("T")[0]}
            aria-invalid={!!errors.preferredDate}
          />
        </Field>

        <Field label="Preferred Time" error={errors.preferredTime?.message} required>
          <Input
            {...register("preferredTime")}
            type="time"
            aria-invalid={!!errors.preferredTime}
          />
        </Field>
      </div>

      {!compact && (
        <Field label="Message (optional)" error={errors.message?.message}>
          <Textarea
            {...register("message")}
            placeholder="Tell us about your concern..."
            rows={4}
          />
        </Field>
      )}

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Appointment Request"
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        Submitting this form sends a request only. Our team will contact you to
        confirm availability — this is not a confirmed booking.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label>
        {label}
        {required && <span className="text-aqua"> *</span>}
      </Label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
