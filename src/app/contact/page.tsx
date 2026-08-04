import type { Metadata } from "next";
import { siteConfig, socialLinks } from "@/db";
import { socialIconMap, MailIcon, PhoneIcon, MapPinIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.fullName}`,
  description: "Get in touch with UOZEE Fragrance for orders, support, and collaborations.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-ink/10 bg-paper-dim py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="We'd Love To Hear From You"
            title="Contact Us"
            align="left"
            className="mx-0"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 className="font-display text-xl uppercase tracking-[0.1em] text-ink">Get In Touch</h2>
          <div className="mt-6 space-y-5 text-sm text-ink/80">
            <p className="flex items-center gap-3">
              <MailIcon className="h-5 w-5 text-gold" /> {siteConfig.contact.email}
            </p>
            <p className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 text-gold" /> {siteConfig.contact.phone}
            </p>
            <p className="flex items-center gap-3">
              <MapPinIcon className="h-5 w-5 text-gold" /> {siteConfig.contact.address}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = socialIconMap[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-paper/25 bg-paper/95 text-ink shadow-[0_8px_24px_-18px] shadow-gold/35 transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  {Icon ? <Icon className="h-6 w-6" /> : social.label[0]}
                </a>
              );
            })}
          </div>
        </div>

        <div className="border border-ink/10 bg-paper p-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
