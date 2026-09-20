import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // TODO: Connect to email service or CRM

    return NextResponse.json({
      success: true,
      message: "Your message has been received. We will respond shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to submit your message." },
      { status: 500 }
    );
  }
}
