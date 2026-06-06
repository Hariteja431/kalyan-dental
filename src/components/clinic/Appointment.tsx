"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  CLINIC_HOURS,
  PHONE_1,
  PHONE_2,
  PHONE_1_TEL,
  PHONE_2_TEL,
} from "@/lib/constants";
import { serviceOptionsForForm } from "@/lib/services";
import { timeSlots } from "@/lib/timeSlots";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const initial: FormState = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

export function Appointment() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [shake, setShake] = useState(false);
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = () => {
    if (!form.fullName.trim()) return "fullName";
    if (!form.phone.trim()) return "phone";
    if (!form.date) return "date";
    if (!form.time) return "time";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bad = validate();
    if (bad) {
      setFieldError(bad);
      setErrorMessage("Please fill out all required fields.");
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }
    setFieldError(null);
    setErrorMessage(null);
    setStatus("loading");
    
    const message = `Hello, I would like to book an appointment.
Name: ${form.fullName}
Phone: ${form.phone}
Email: ${form.email || "N/A"}
Service: ${form.service || "N/A"}
Date: ${form.date}
Time: ${form.time}
Message/Concern: ${form.message || "N/A"}`;

    const whatsappNumber = "919985478470";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.setTimeout(() => {
      setStatus("success");
      window.open(whatsappUrl, "_blank");
    }, 500);
  };

  return (
    <section
      id="appointment"
      className="bg-gradient-to-br from-[var(--color-primary)] to-[#0D3D5C] py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionEyebrow className="text-[var(--color-accent)]">Get Started</SectionEyebrow>
            <h2 className="font-heading mb-6 text-[length:var(--text-h1)] font-bold leading-[1.1] text-white">
              Ready for a Healthier Smile?
            </h2>
            <p className="mb-8 max-w-[65ch] text-[length:var(--text-body-lg)] text-white/90">
              Book your appointment with our specialist team. We&apos;ll confirm
              your slot within 2 hours during clinic hours.
            </p>
            <div className="space-y-2 text-white/90">
              <p className="font-semibold text-white">Clinic Hours</p>
              <p>{CLINIC_HOURS.weekdays}</p>
              <p>{CLINIC_HOURS.sunday}</p>
            </div>
            <div className="mt-8 space-y-2">
              <p className="font-semibold text-white">Contact Numbers</p>
              <p>
                <a href={PHONE_1_TEL} className="hover:underline">
                  📞 {PHONE_1}
                </a>
              </p>
              <p>
                <a href={PHONE_2_TEL} className="hover:underline">
                  📞 {PHONE_2}
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal staggerIndex={2}>
            <div
              className={`rounded-[var(--radius-xl)] bg-[var(--color-bg-card)] p-8 shadow-[var(--shadow-xl)] md:p-10 ${shake ? "animate-shake" : ""}`}
            >
              {status === "success" ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                    <Check className="h-8 w-8" strokeWidth={2.5} />
                  </div>
                  <p className="font-heading text-lg font-semibold text-[var(--color-text-primary)]">
                    We&apos;ve received your request!
                  </p>
                  <p className="mt-2 text-[var(--color-text-secondary)]">
                    We&apos;ll call you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                      Full Name <span className="text-[var(--color-danger)]">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      autoComplete="name"
                      value={form.fullName}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, fullName: e.target.value }))
                      }
                      className={`w-full rounded-[var(--radius-md)] border bg-white px-4 py-3 text-[var(--color-text-primary)] transition-shadow focus:border-[var(--color-accent)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(0,180,166,0.2)] ${
                        fieldError === "fullName"
                          ? "border-[var(--color-danger)]"
                          : "border-[var(--color-border)]"
                      }`}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                      Phone Number <span className="text-[var(--color-danger)]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      className={`w-full rounded-[var(--radius-md)] border bg-white px-4 py-3 transition-shadow focus:border-[var(--color-accent)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(0,180,166,0.2)] ${
                        fieldError === "phone"
                          ? "border-[var(--color-danger)]"
                          : "border-[var(--color-border)]"
                      }`}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                      Email Address <span className="text-[var(--color-text-muted)]">(optional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-4 py-3 transition-shadow focus:border-[var(--color-accent)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(0,180,166,0.2)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                      Preferred Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, service: e.target.value }))
                      }
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-4 py-3 focus:border-[var(--color-accent)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(0,180,166,0.2)]"
                    >
                      <option value="">Select a service</option>
                      {serviceOptionsForForm.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                      Preferred Date <span className="text-[var(--color-danger)]">*</span>
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, date: e.target.value }))
                      }
                      className={`w-full rounded-[var(--radius-md)] border bg-white px-4 py-3 focus:border-[var(--color-accent)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(0,180,166,0.2)] ${
                        fieldError === "date"
                          ? "border-[var(--color-danger)]"
                          : "border-[var(--color-border)]"
                      }`}
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                      Preferred Time Slot <span className="text-[var(--color-danger)]">*</span>
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={form.time}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, time: e.target.value }))
                      }
                      className={`w-full rounded-[var(--radius-md)] border bg-white px-4 py-3 focus:border-[var(--color-accent)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(0,180,166,0.2)] ${
                        fieldError === "time"
                          ? "border-[var(--color-danger)]"
                          : "border-[var(--color-border)]"
                      }`}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">
                      Message / Concern <span className="text-[var(--color-text-muted)]">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-4 py-3 focus:border-[var(--color-accent)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(0,180,166,0.2)]"
                    />
                  </div>
                  {errorMessage && (
                    <p className="text-sm font-medium text-[var(--color-danger)] text-center">
                      {errorMessage}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex w-full min-h-[52px] items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-cta)] py-3 text-base font-semibold text-white transition-transform duration-[var(--transition-base)] hover:scale-[1.01] hover:bg-[var(--color-cta-hover)] disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                        <span>Sending…</span>
                      </>
                    ) : (
                      "Confirm Appointment →"
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
