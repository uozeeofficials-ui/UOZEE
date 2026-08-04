import Link from "next/link";
import { siteConfig, socialLinks } from "@/db";
import { socialIconMap } from "@/components/icons";

export function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-gold bg-ink text-paper">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl tracking-[0.18em]">{siteConfig.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks
              .filter((social) => social.icon !== "whatsapp")
              .map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-current transition duration-300 hover:opacity-80"
                  >
                    {Icon ? <Icon className="h-6 w-6" /> : social.label[0]}
                  </a>
                );
              })}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold">Shop</h4>
          <ul className="mt-5 space-y-3 text-sm text-paper/70">
            <li>
              <Link href="/shop?gender=men" className="transition hover:text-gold">
                Men Perfumes
              </Link>
            </li>
            <li>
              <Link href="/shop?gender=women" className="transition hover:text-gold">
                Women Perfumes
              </Link>
            </li>
            <li>
              <Link href="/shop" className="transition hover:text-gold">
                All Fragrances
              </Link>
            </li>
            <li>
              <Link href="/wishlist" className="transition hover:text-gold">
                Wishlist
              </Link>
            </li>
            <li>
              <Link href="/cart" className="transition hover:text-gold">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-paper/70">
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.address}</li>
            <li>
              <Link href="/contact" className="transition hover:text-gold">
                Contact Page &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 py-6 text-center text-xs uppercase tracking-[0.2em] text-paper/40">
        &copy; {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
      </div>
    </footer>
  );
}
