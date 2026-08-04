import type { Metadata } from "next";
import { aboutContent, siteConfig } from "@/db";
import { SafeImage } from "@/components/media/safe-image";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.fullName}`,
  description: aboutContent.intro,
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative flex h-[46vh] min-h-[320px] items-center justify-center overflow-hidden bg-ink">
        <SafeImage
          src={aboutContent.heroImage}
          alt="UOZEE atelier"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative z-10 max-w-2xl px-6 text-center text-paper">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-light">Our Story</p>
          <h1 className="font-display text-3xl uppercase tracking-[0.04em] sm:text-4xl">
            {aboutContent.heading}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="text-base leading-relaxed text-ink/80">{aboutContent.intro}</p>
      </section>

      <section className="bg-paper-dim py-16">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6 lg:px-10">
          {aboutContent.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl text-gold">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="What We Stand For" title="Our Values" className="mb-12" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {aboutContent.values.map((value) => (
            <div key={value.title} className="border border-ink/10 bg-paper p-7 text-center">
              <h3 className="font-display text-lg text-ink">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
