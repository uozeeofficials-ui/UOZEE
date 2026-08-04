import { useId, type ReactElement } from "react";

type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SearchIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="15.3" y1="15.3" x2="20.5" y2="20.5" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <line x1="4" y1="6.5" x2="20" y2="6.5" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17.5" x2="20" y2="17.5" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <polyline points="15 6 9 12 15 18" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

export function HeartIcon({ className, filled = false }: IconProps & { filled?: boolean }) {
  return (
    <svg
      {...base}
      fill={filled ? "currentColor" : "none"}
      className={className}
      aria-hidden="true"
    >
      <path d="M12 19.4c-.3 0-.6-.1-.8-.3C7.6 16 3.5 12.6 3.5 8.6 3.5 5.9 5.6 4 8.1 4c1.6 0 3 .8 3.9 2 .9-1.2 2.3-2 3.9-2 2.5 0 4.6 1.9 4.6 4.6 0 4-4.1 7.4-7.7 10.5-.2.2-.5.3-.8.3z" />
    </svg>
  );
}

export function BagIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8" />
      <rect x="4.5" y="8" width="15" height="12" rx="2" />
    </svg>
  );
}

export function StarIcon({ className, filled = false }: IconProps & { filled?: boolean }) {
  return (
    <svg
      {...base}
      fill={filled ? "currentColor" : "none"}
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3.6l2.5 5.1 5.6.8-4 4 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4-4 5.6-.8L12 3.6z" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <polygon points="7 4 20 12 7 20" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <polyline points="3.5 6.5 12 13 20.5 6.5" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 4.5h3l1.5 4-2 1.7c1 2.6 2.7 4.3 5.3 5.3l1.7-2 4 1.5v3c0 1-.8 1.8-1.8 1.7C9.4 19.6 4.4 14.6 3.3 7.3 3.2 6.3 4 5.5 5 4.5z" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21s7-6.4 7-11.5a7 7 0 0 0-14 0C5 14.6 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function MinusIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <polyline points="5 13 9 17 19 7" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

export function TrashIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <line x1="4" y1="7" x2="20" y2="7" />
      <path d="M6.5 7 7.3 19a2 2 0 0 0 2 1.9h5.4a2 2 0 0 0 2-1.9L17.5 7" />
      <line x1="9.5" y1="7" x2="9.5" y2="4.6" />
      <line x1="14.5" y1="7" x2="14.5" y2="4.6" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path
        d="M13.6 9.2h1.7V7h-1.9c-1.6 0-2.7 1.1-2.7 2.7v1.4H9.2v2.2h1.5V17h2.2v-3.7h1.7l.4-2.2h-2.1V9.9c0-.4.2-.7.7-.7z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function WhatsappIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path
        d="M8.7 8.6c.3-.6.6-.6.9-.6h.6c.2 0 .4 0 .6.5s.6 1.5.6 1.6 0 .3-.1.4l-.5.6c-.1.1-.2.3-.1.5.2.4.7 1.1 1.4 1.7.7.6 1.3.9 1.6 1 .2.1.4.1.5-.1l.5-.6c.1-.2.3-.2.5-.1l1.4.7c.2.1.3.2.3.4 0 .5-.2 1.1-.6 1.4-.4.4-1.2.7-2 .5-1.3-.2-2.8-.9-4-2.1-1.2-1.2-1.9-2.5-2.2-3.4-.2-.8 0-1.5.4-2 .1-.2.2-.3.2-.4z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function TiktokIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path
        d="M13.2 4.2c.3 1.8 1.5 3.1 3.3 3.4v2.1c-1.2 0-2.3-.4-3.3-1v5.6a4 4 0 1 1-4-4c.2 0 .5 0 .7.1v2.2a1.9 1.9 0 1 0 1.3 1.8V4.2h2z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="6.5" width="18" height="11" rx="3" />
      <polygon points="10.2 9.5 15.5 12 10.2 14.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const socialIconMap: Record<string, (props: IconProps) => ReactElement> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  whatsapp: WhatsappIcon,
  tiktok: TiktokIcon,
  youtube: YoutubeIcon,
};

// Full-color brand badges (accurate colors/gradients) for contexts like the
// footer, as opposed to the monochrome line-icon set above.
export function InstagramColorIcon({ className }: IconProps) {
  const gradientId = useId();
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="30%" stopColor="#FA7E1E" />
          <stop offset="55%" stopColor="#D62976" />
          <stop offset="80%" stopColor="#962FBF" />
          <stop offset="100%" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill={`url(#${gradientId})`} />
      <rect x="6.7" y="6.7" width="10.6" height="10.6" rx="3.6" fill="none" stroke="#fff" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.5" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="#fff" />
    </svg>
  );
}

export function FacebookColorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path
        d="M13.6 9.2h1.7V7h-1.9c-1.6 0-2.7 1.1-2.7 2.7v1.4H9.2v2.2h1.5V17h2.2v-3.7h1.7l.4-2.2h-2.1V9.9c0-.4.2-.7.7-.7z"
        fill="#fff"
      />
    </svg>
  );
}

export function WhatsappColorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#25D366" />
      <path
        d="M8.7 8.6c.3-.6.6-.6.9-.6h.6c.2 0 .4 0 .6.5s.6 1.5.6 1.6 0 .3-.1.4l-.5.6c-.1.1-.2.3-.1.5.2.4.7 1.1 1.4 1.7.7.6 1.3.9 1.6 1 .2.1.4.1.5-.1l.5-.6c.1-.2.3-.2.5-.1l1.4.7c.2.1.3.2.3.4 0 .5-.2 1.1-.6 1.4-.4.4-1.2.7-2 .5-1.3-.2-2.8-.9-4-2.1-1.2-1.2-1.9-2.5-2.2-3.4-.2-.8 0-1.5.4-2 .1-.2.2-.3.2-.4z"
        fill="#fff"
      />
    </svg>
  );
}

export function TiktokColorIcon({ className }: IconProps) {
  const notePath =
    "M13.6 6.6c.3 1.5 1.3 2.6 2.8 2.9v1.9c-1 0-2-.3-2.8-.9v4.6a3.5 3.5 0 1 1-3.5-3.5c.15 0 .3 0 .45.02v1.95a1.65 1.65 0 1 0 1.15 1.58V6.6h1.9z";
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#010101" />
      <path d={notePath} fill="#25F4EE" transform="translate(-0.5 -0.35)" />
      <path d={notePath} fill="#FE2C55" transform="translate(0.5 0.35)" />
      <path d={notePath} fill="#fff" />
    </svg>
  );
}

export function YoutubeColorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#FF0000" />
      <polygon points="10 8.3 16.5 12 10 15.7" fill="#fff" />
    </svg>
  );
}

export const socialColorIconMap: Record<string, (props: IconProps) => ReactElement> = {
  instagram: InstagramColorIcon,
  facebook: FacebookColorIcon,
  whatsapp: WhatsappColorIcon,
  tiktok: TiktokColorIcon,
  youtube: YoutubeColorIcon,
};
