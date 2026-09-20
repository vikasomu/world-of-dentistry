import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validation/schemas";

const submissions: Array<Record<string, unknown>> = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = appointmentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const submission = {
      ...parsed.data,
      submittedAt: new Date().toISOString(),
      status: "pending",
    };

    submissions.push(submission);

    // TODO: Connect to real booking provider (CRM, email service, etc.)
    // Example integrations: Cal.com, Acuity, custom CRM webhook

    return NextResponse.json({
      success: true,
      message:
        "Appointment request received. Our clinic team will contact you to confirm your appointment.",
      reference: `REQ-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to submit appointment request." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Appointment API is ready. POST to submit a request.",
  });
}
