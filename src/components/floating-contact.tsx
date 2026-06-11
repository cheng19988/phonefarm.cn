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
  return (
    <aside className="floating-contact" aria-label="Contact sales">
      <div className="floating-contact-panel">
        <p className="floating-contact-title">Contact sales</p>
        {CHANNELS.map((ch) => (
          <a
            key={ch.id}
            href={ch.href}
            target={ch.id === "email" ? undefined : "_blank"}
            rel={ch.id === "email" ? undefined : "noopener noreferrer"}
            className={`floating-contact-item ${ch.className}`}
          >
            <span className="floating-contact-item-label">{ch.label}</span>
            <span className="floating-contact-item-value">{ch.value}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
