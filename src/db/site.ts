import type { NavLink, SocialLink } from "./types";

export const siteConfig = {
  name: "UOZEE ",
  fullName: "UOZEE OFFICIALS",
  browserTitle: "UOZEE OFFICIALS",
  tagline: "Ultra-Premium Perfume House",
  logo: "https://res.cloudinary.com/so8vztrp/image/upload/v1783270277/logo2_joyalt.png",
  description:
    "An elite perfumery house crafting high-projection, luxury scents inspired by historical royalty and modern trends.",
  currencySymbol: "PKR",
  announcements: [
    "Coming soon — launching across Pakistan",
    "Free delivery on all prepaid orders above PKR 5,000",
    "Cash on delivery available nationwide",
  ],
  contact: {
    email: "uozeeofficials@gmail.com",
    phone: "+92 322 4296144",
    whatsapp: "https://wa.me/923224296144",
    address: "Lahore, Pakistan",
  },
  payment: {
    bankName: "Meezan Bank Ltd",
    accountTitle: "ZEESHAN ABAD",
    accountNumber: "02680113845366",
    easypaisa: "0322-4296144",
    jazzcash: "0322-4296144",
  },
  shippingNotes: [
    "Fast delivery across Pakistan within 3-5 business days.",
    "Cash on delivery available on confirmed orders.",
    "Exchange or return within 7 days if item is unopened.",
  ],
  campaign: {
    videoSrc: "v4.mp4",
    eyebrow: "The Art of Scent",
    heading: "One Spray, Endless Presence",
    description:
      "Discover fragrances engineered for projection and longevity — worn by those who don't need to say a word.",
    ctaLabel: "Explore The Collection",
    ctaHref: "/shop",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop Men", href: "/shop?gender=men" },
  { label: "Shop Women", href: "/shop?gender=women" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/uozeeofficials/", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590122650764", icon: "facebook" },
  { label: "YouTube", href: "https://www.youtube.com/@uozeeofficials", icon: "youtube" },
  { label: "TikTok", href: "https://www.tiktok.com/@uozeeofficials7?lang=en", icon: "tiktok" },
  { label: "WhatsApp", href: "https://wa.me/923224296144", icon: "whatsapp" },
];
