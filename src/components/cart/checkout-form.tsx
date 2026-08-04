"use client";

import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { useCart, type ResolvedCartLine } from "@/context/cart-context";
import { siteConfig } from "@/db";
import { formatPrice } from "@/lib/format";
import { WhatsappIcon } from "@/components/icons";

type PaymentMethod = "bank" | "cod";

type FormState = {
  name: string;
  phone: string;
  email: string;
  address: string;
  paymentMethod: PaymentMethod;
  paymentRef: string;
  notes: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  paymentMethod: "bank",
  paymentRef: "",
  notes: "",
};

export function CheckoutForm({ lines, subtotal }: { lines: ResolvedCartLine[]; subtotal: number }) {
  const router = useRouter();
  const { clearCart } = useCart();
  const [form, setForm] = useState<FormState>(initialForm);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const itemLines = lines
      .map(
        (line) =>
          `- ${line.product.title} (${line.size}ml) x${line.quantity} - ${formatPrice(
            line.product.price * line.quantity
          )}`
      )
      .join("\n");

    const paymentMethodLabel = form.paymentMethod === "bank" ? "Bank Transfer" : "Cash on Delivery";
    const paymentDetail =
      form.paymentMethod === "bank"
        ? `Bank Transfer Reference: ${form.paymentRef || "Pending"}`
        : "Cash on Delivery selected";

    const message =
      `*New Order — ${siteConfig.fullName}*\n\n` +
      `*Order Items:*\n${itemLines}\n\n` +
      `*Order Total:* ${formatPrice(subtotal)}\n\n` +
      `*Customer Details:*\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email || "Not provided"}\n` +
      `Address: ${form.address}\n\n` +
      `*Payment:*\n` +
      `Mode: ${paymentMethodLabel}\n` +
      `${paymentDetail}\n` +
      `Delivery Instructions: ${form.notes || "None"}`;

    const whatsappLink = `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank", "noopener,noreferrer");

    clearCart();
    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border border-ink/10 bg-paper p-6">
      <h3 className="font-display text-lg uppercase tracking-[0.1em] text-ink">Complete Your Order</h3>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">Payment Method</p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <label className="flex flex-1 cursor-pointer items-center gap-2 border border-ink/20 bg-paper-dim px-4 py-3 text-sm text-ink/80">
            <input
              type="radio"
              name="paymentMethod"
              checked={form.paymentMethod === "bank"}
              onChange={() => update("paymentMethod", "bank")}
            />
            <span>Bank Transfer</span>
          </label>
          <label className="flex flex-1 cursor-pointer items-center gap-2 border border-ink/20 bg-paper-dim px-4 py-3 text-sm text-ink/80">
            <input
              type="radio"
              name="paymentMethod"
              checked={form.paymentMethod === "cod"}
              onChange={() => update("paymentMethod", "cod")}
            />
            <span>Cash on Delivery</span>
          </label>
        </div>
      </div>

      {form.paymentMethod === "bank" ? (
        <div className="border-l-4 border-gold bg-paper-dim p-4 text-xs leading-relaxed text-ink/70">
          <p className="mb-1 font-semibold uppercase tracking-[0.1em] text-ink">Bank Details</p>
          <p>
            Bank: {siteConfig.payment.bankName} — {siteConfig.payment.accountTitle}
          </p>
          <p>Account No: {siteConfig.payment.accountNumber}</p>
          <p>JazzCash: {siteConfig.payment.easypaisa}</p>
        </div>
      ) : (
        <div className="border border-ink/10 bg-paper-dim p-4 text-sm text-ink/70">
          <p className="mb-1 font-semibold text-ink">Cash on Delivery</p>
          <p>Pay when your order arrives. No bank transfer reference is needed.</p>
        </div>
      )}

      <Field
        label="Your Name"
        required
        value={form.name}
        onChange={(v) => update("name", v)}
        placeholder="Full name"
      />
      <Field
        label="WhatsApp / Phone Number"
        required
        value={form.phone}
        onChange={(v) => update("phone", v)}
        placeholder="e.g. 03211234567"
      />
      <Field
        label="Email Address"
        type="email"
        value={form.email}
        onChange={(v) => update("email", v)}
        placeholder="name@example.com"
      />
      <TextAreaField
        label="Shipping Full Address"
        required
        value={form.address}
        onChange={(v) => update("address", v)}
      />
      <Field
        label={form.paymentMethod === "bank" ? "Bank Transaction Reference" : "Payment Note"}
        required={form.paymentMethod === "bank"}
        value={form.paymentRef}
        onChange={(v) => update("paymentRef", v)}
        placeholder={form.paymentMethod === "bank" ? "Transaction ID or reference" : "Optional note"}
      />
      <TextAreaField
        label="Delivery Instructions"
        value={form.notes}
        onChange={(v) => update("notes", v)}
      />

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#20bd5a]"
      >
        <WhatsappIcon className="h-4 w-4" />
        Send Order via WhatsApp
      </button>
      <p className="text-center text-xs text-muted">
        We&apos;ll open WhatsApp with your order pre-filled — just hit send.
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
};

function Field({ label, value, onChange, required, type = "text", placeholder }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink">
        {label}
        {required && " *"}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full border border-ink/20 bg-paper-dim px-4 py-2.5 text-sm outline-none focus:border-gold"
      />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  required,
}: Omit<FieldProps, "type" | "placeholder">) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink">
        {label}
        {required && " *"}
      </span>
      <textarea
        required={required}
        value={value}
        rows={3}
        onChange={(event) => onChange(event.target.value)}
        className="w-full border border-ink/20 bg-paper-dim px-4 py-2.5 text-sm outline-none focus:border-gold"
      />
    </label>
  );
}
