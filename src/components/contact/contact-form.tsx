"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/db";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-ink/10 bg-paper-dim p-8 text-center">
        <p className="font-display text-lg text-ink">Thank you for reaching out</p>
        <p className="mt-2 text-sm text-muted">
          Your email app should have opened — send it across and we&apos;ll reply within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink">
          Your Name *
        </span>
        <input
          required
          value={form.name}
          onChange={(event) => update("name", event.target.value)}
          className="w-full border border-ink/20 bg-paper-dim px-4 py-2.5 text-sm outline-none focus:border-gold"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink">
          Email Address *
        </span>
        <input
          required
          type="email"
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
          className="w-full border border-ink/20 bg-paper-dim px-4 py-2.5 text-sm outline-none focus:border-gold"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink">
          Message *
        </span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className="w-full border border-ink/20 bg-paper-dim px-4 py-2.5 text-sm outline-none focus:border-gold"
        />
      </label>
      <button
        type="submit"
        className="w-full bg-ink px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-paper transition hover:bg-gold hover:text-ink"
      >
        Send Message
      </button>
    </form>
  );
}
