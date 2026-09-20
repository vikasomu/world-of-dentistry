import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long")
    .regex(/^[\d\s+\-()]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  treatment: z.string().min(1, "Please select a treatment or concern"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  message: z.string().max(1000, "Message is too long").optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

export const aiAppointmentSchema = z.object({
  concern: z.string().min(1),
  preferredDate: z.string().min(1),
  preferredTime: z.string().min(1),
  fullName: z.string().min(2).max(100),
  phone: z.string().min(10).max(15),
  email: z.string().email(),
});

export type AIAppointmentFormData = z.infer<typeof aiAppointmentSchema>;

export const chatMessageSchema = z.object({
  message: z
    .string()
    .min(1, "Message cannot be empty")
    .max(2000, "Message is too long"),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      })
    )
    .max(20)
    .optional(),
});

export type ChatMessageInput = z.infer<typeof chatMessageSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(100),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone").max(15),
  subject: z.string().min(1, "Please enter a subject").max(200),
  message: z
    .string()
    .min(10, "Please enter a message")
    .max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
