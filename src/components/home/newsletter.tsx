"use client";

import { useState, type FormEvent } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-2xl text-center">
      <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-paper">
        Join the UOZEE Circle
      </h3>
      <p className="mt-3 text-sm text-paper/70">
        Be first to know about new launches, private drops, and seasonal offers.
      </p>
      {submitted ? (
        <p className="mt-6 text-sm text-gold-light">Thank you — you&apos;re on the list.</p>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            className="w-full flex-1 border border-paper/25 bg-transparent px-4 py-3 text-sm text-paper outline-none placeholder:text-paper/40 focus:border-gold-light"
          />
          <button
            type="submit"
            className="whitespace-nowrap bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-gold-light"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
