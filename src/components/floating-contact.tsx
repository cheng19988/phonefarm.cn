"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/config";

const CHANNELS = [
  {
    id: "telegram",
    label: "Telegram",
    value: CONTACT.telegram,
    href: CONTACT.telegramUrl,
    className: "floating-contact-item--telegram",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: CONTACT.whatsapp,
    href: CONTACT.whatsappUrl,
    className: "floating-contact-item--whatsapp",
  },
  {
    id: "email",
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    className: "floating-contact-item--email",
  },
] as const;

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-contact">
      <div
        className={`floating-contact-panel ${open ? "floating-contact-panel--open" : ""}`}
        aria-hidden={!open}
      >
        <p className="floating-contact-title">Contact sales</p>
        {CHANNELS.map((ch) => (
          <a
            key={ch.id}
            href={ch.href}
            target={ch.id === "email" ? undefined : "_blank"}
            rel={ch.id === "email" ? undefined : "noopener noreferrer"}
            className={`floating-contact-item ${ch.className}`}
            onClick={() => setOpen(false)}
          >
            <span className="floating-contact-item-label">{ch.label}</span>
            <span className="floating-contact-item-value">{ch.value}</span>
          </a>
        ))}
      </div>

      <button
        type="button"
        className="floating-contact-toggle"
        aria-expanded={open}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
            <path
              d="M4 5.5A2.5 2.5 0 016.5 3H17.5A2.5 2.5 0 0120 5.5V14.5A2.5 2.5 0 0117.5 17H8.7L4 20.5V5.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              fill="none"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
