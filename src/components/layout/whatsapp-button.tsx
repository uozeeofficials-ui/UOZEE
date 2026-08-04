"use client";

import { useState } from "react";
import { siteConfig } from "@/db";

export function WhatsappButton() {
  const [burst, setBurst] = useState(false);

  function handleClick() {
    setBurst(true);
    window.setTimeout(() => setBurst(false), 650);
  }

  return (
    <a
      href={siteConfig.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onClick={handleClick}
      className="fixed right-5 bottom-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(0,0,0,0.55)] transition-transform duration-200 active:scale-90 sm:right-8 sm:bottom-8 sm:h-[72px] sm:w-[72px]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-ping" />
      {burst && (
        <span className="absolute inset-0 animate-[whatsapp-burst_0.65s_ease-out] rounded-full border-4 border-[#25D366]" />
      )}
      <svg viewBox="0 0 32 32" fill="currentColor" className="relative h-8 w-8 sm:h-9 sm:w-9" aria-hidden="true">
        <path d="M16.001 3C9.098 3 3.5 8.598 3.5 15.5c0 2.393.68 4.626 1.857 6.527L3 29l7.163-2.312a12.44 12.44 0 0 0 5.838 1.487h.005c6.903 0 12.5-5.598 12.5-12.5S22.904 3 16.001 3Zm0 22.7h-.004a10.16 10.16 0 0 1-5.176-1.418l-.371-.22-3.842 1.239 1.256-3.746-.242-.385a10.16 10.16 0 0 1-1.558-5.47c0-5.63 4.583-10.213 10.219-10.213 2.73 0 5.294 1.064 7.223 2.995a10.14 10.14 0 0 1 2.99 7.222c0 5.63-4.582 10.213-10.213 10.213Zm5.6-7.653c-.307-.153-1.817-.897-2.099-.999-.281-.102-.487-.153-.692.154-.204.306-.79.998-.969 1.203-.178.204-.357.23-.663.077-.307-.153-1.296-.478-2.469-1.523-.912-.813-1.528-1.817-1.707-2.123-.179-.307-.019-.472.134-.625.138-.137.307-.357.46-.536.153-.179.204-.306.307-.51.102-.205.05-.384-.026-.537-.077-.153-.692-1.667-.949-2.283-.25-.6-.505-.519-.692-.529-.179-.008-.384-.01-.589-.01-.204 0-.536.077-.817.384-.281.307-1.073 1.049-1.073 2.559 0 1.51 1.098 2.97 1.251 3.174.153.204 2.16 3.297 5.234 4.622.732.316 1.303.505 1.749.646.735.234 1.404.201 1.933.122.59-.088 1.817-.743 2.073-1.46.256-.716.256-1.33.179-1.46-.076-.128-.281-.205-.588-.358Z" />
      </svg>
    </a>
  );
}
