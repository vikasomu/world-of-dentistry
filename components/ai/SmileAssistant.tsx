"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Phone,
  Calendar,
  Bot,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { contact, aiDisclaimer } from "@/data/clinic";
import { trackEvent } from "@/lib/utils/analytics";
import type { AIChatResponse, ChatMessage } from "@/types";
import { cn } from "@/lib/utils/cn";

const APPOINTMENT_CONCERNS = [
  "Dental Pain",
  "Routine Checkup",
  "Braces / Aligners",
  "Dental Implants",
  "Root Canal",
  "Cosmetic Dentistry",
  "Child Dentistry",
  "Other",
];

interface SmileAssistantProps {
  externalOpen?: boolean;
  onExternalOpenChange?: (open: boolean) => void;
}

export function SmileAssistant({
  externalOpen,
  onExternalOpenChange,
}: SmileAssistantProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = externalOpen ?? internalOpen;
  const setIsOpen = onExternalOpenChange ?? setInternalOpen;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: `Hello! I'm Smile Assistant, an AI tool for World of Dentistry. I can help with clinic information, treatment explanations, and appointment requests.\n\n${aiDisclaimer}\n\nHow can I help you today?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [appointmentFlow, setAppointmentFlow] = useState<
    "idle" | "concern" | "details" | "confirm" | "done"
  >("idle");
  const [appointmentData, setAppointmentData] = useState({
    concern: "",
    preferredDate: "",
    preferredTime: "",
    fullName: "",
    phone: "",
    email: "",
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, appointmentFlow]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: ChatMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    trackEvent("ai_message_sent");

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-10),
        }),
      });

      const data: AIChatResponse = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, I couldn't process that. Please try again or call us directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const startAppointmentFlow = () => {
    setAppointmentFlow("concern");
    trackEvent("ai_appointment_started");
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "What would you like help with? Please select an option:",
      },
    ]);
  };

  const submitAppointment = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: appointmentData.fullName,
          phone: appointmentData.phone,
          email: appointmentData.email,
          treatment: appointmentData.concern,
          preferredDate: appointmentData.preferredDate,
          preferredTime: appointmentData.preferredTime,
          message: "Submitted via Smile Assistant",
        }),
      });

      const data = await res.json();
      setAppointmentFlow("done");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.message || "Appointment request received. Our clinic team will contact you.",
        },
      ]);
      trackEvent("appointment_submitted", { source: "ai_assistant" });
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Unable to submit request. Please call us or use the appointment form.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => {
              setIsOpen(true);
              trackEvent("ai_opened");
            }}
            className="fixed bottom-20 right-4 z-50 flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-medium text-white shadow-xl hover:bg-navy-light lg:bottom-6"
            aria-label="Open Smile Assistant"
          >
            <Sparkles className="h-5 w-5" />
            <span className="hidden sm:inline">Ask Smile Assistant</span>
            <MessageCircle className="h-5 w-5 sm:hidden" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-20 right-4 z-50 flex h-[min(600px,calc(100vh-120px))] w-[min(400px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl lg:bottom-6"
            role="dialog"
            aria-label="Smile Assistant chat"
          >
            <div className="flex items-center justify-between border-b border-border bg-navy px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-aqua">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Smile Assistant</p>
                  <p className="text-xs text-white/70">AI · General info only</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 hover:bg-white/10"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex gap-2",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {msg.role === "assistant" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua-light">
                      <Bot className="h-3.5 w-3.5 text-aqua" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap",
                      msg.role === "user"
                        ? "bg-navy text-white"
                        : "bg-muted text-navy"
                    )}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy">
                      <User className="h-3.5 w-3.5 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {appointmentFlow === "concern" && (
                <div className="grid grid-cols-2 gap-2">
                  {APPOINTMENT_CONCERNS.map((concern) => (
                    <button
                      key={concern}
                      type="button"
                      onClick={() => {
                        setAppointmentData((d) => ({ ...d, concern }));
                        setAppointmentFlow("details");
                        setMessages((prev) => [
                          ...prev,
                          { role: "user", content: concern },
                          {
                            role: "assistant",
                            content: "Please fill in your preferred date, time, and contact details:",
                          },
                        ]);
                      }}
                      className="rounded-lg border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-aqua-light"
                    >
                      {concern}
                    </button>
                  ))}
                </div>
              )}

              {appointmentFlow === "details" && (
                <form
                  className="space-y-3 rounded-xl border border-border p-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setAppointmentFlow("confirm");
                    setMessages((prev) => [
                      ...prev,
                      {
                        role: "assistant",
                        content: `Please confirm:\n\nName: ${appointmentData.fullName}\nPhone: ${appointmentData.phone}\nEmail: ${appointmentData.email}\nConcern: ${appointmentData.concern}\nDate: ${appointmentData.preferredDate}\nTime: ${appointmentData.preferredTime}`,
                      },
                    ]);
                  }}
                >
                  <div>
                    <Label htmlFor="ai-date">Preferred Date</Label>
                    <Input
                      id="ai-date"
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={appointmentData.preferredDate}
                      onChange={(e) =>
                        setAppointmentData((d) => ({
                          ...d,
                          preferredDate: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="ai-time">Preferred Time</Label>
                    <Input
                      id="ai-time"
                      type="time"
                      required
                      value={appointmentData.preferredTime}
                      onChange={(e) =>
                        setAppointmentData((d) => ({
                          ...d,
                          preferredTime: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="ai-name">Full Name</Label>
                    <Input
                      id="ai-name"
                      required
                      value={appointmentData.fullName}
                      onChange={(e) =>
                        setAppointmentData((d) => ({
                          ...d,
                          fullName: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="ai-phone">Phone</Label>
                    <Input
                      id="ai-phone"
                      type="tel"
                      required
                      value={appointmentData.phone}
                      onChange={(e) =>
                        setAppointmentData((d) => ({
                          ...d,
                          phone: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="ai-email">Email</Label>
                    <Input
                      id="ai-email"
                      type="email"
                      required
                      value={appointmentData.email}
                      onChange={(e) =>
                        setAppointmentData((d) => ({
                          ...d,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <Button type="submit" className="w-full" size="sm">
                    Continue
                  </Button>
                </form>
              )}

              {appointmentFlow === "confirm" && (
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={submitAppointment}
                    disabled={loading}
                    className="flex-1"
                  >
                    Confirm & Submit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setAppointmentFlow("details")}
                    className="flex-1"
                  >
                    Edit
                  </Button>
                </div>
              )}

              {loading && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-aqua" />
                  Thinking...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {appointmentFlow === "idle" && (
              <div className="border-t border-border px-4 py-2">
                <div className="mb-2 flex gap-2 overflow-x-auto">
                  <QuickAction
                    icon={Calendar}
                    label="Book"
                    onClick={startAppointmentFlow}
                  />
                  <QuickAction
                    icon={Phone}
                    label="Call"
                    href={`tel:${contact.phone}`}
                  />
                </div>
              </div>
            )}

            {appointmentFlow === "idle" && (
              <form
                className="flex gap-2 border-t border-border p-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about treatments, hours..."
                  aria-label="Chat message"
                  disabled={loading}
                />
                <Button type="submit" size="icon" disabled={loading || !input.trim()}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function QuickAction({
  icon: Icon,
  label,
  onClick,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
  href?: string;
}) {
  const className =
    "flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-navy hover:bg-muted";

  if (href) {
    return (
      <a href={href} className={className}>
        <Icon className="h-3.5 w-3.5" />
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      <Icon className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}
