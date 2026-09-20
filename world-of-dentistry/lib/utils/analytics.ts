type AnalyticsEvent =
  | "appointment_started"
  | "appointment_submitted"
  | "phone_clicked"
  | "whatsapp_clicked"
  | "treatment_viewed"
  | "doctor_viewed"
  | "ai_opened"
  | "ai_message_sent"
  | "ai_appointment_started"
  | "blog_opened"
  | "contact_form_submitted";

interface AnalyticsProperties {
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    analytics?: {
      track: (event: string, properties?: AnalyticsProperties) => void;
    };
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  properties?: AnalyticsProperties
) {
  if (typeof window !== "undefined" && window.analytics) {
    window.analytics.track(event, properties);
  }

  if (process.env.NODE_ENV === "development") {
    console.debug("[Analytics]", event, properties);
  }
}
