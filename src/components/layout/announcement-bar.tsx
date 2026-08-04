"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/db";

export function AnnouncementBar() {
  const messages = siteConfig.announcements;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (messages.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % messages.length), 4200);
    return () => clearInterval(id);
  }, [messages.length]);

  return (
    <div className="bg-ink text-paper">
      <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-center overflow-hidden px-4 text-center">
        <p key={index} className="animate-fade-up text-[11px] uppercase tracking-[0.18em] sm:text-xs">
          {messages[index]}
        </p>
      </div>
    </div>
  );
}
