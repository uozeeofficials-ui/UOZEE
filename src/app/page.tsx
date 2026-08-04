import { categories, heroSlides, products, reels, siteConfig, testimonials } from "@/db";
import { HeroSlider } from "@/components/home/hero-slider";
import { CategoryGrid } from "@/components/home/category-grid";
import { ProductShowcase } from "@/components/home/product-showcase";
import { CampaignBanner } from "@/components/home/campaign-banner";
import { ReelsSection } from "@/components/home/reels-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { Newsletter } from "@/components/home/newsletter";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Home() {
  return (
    <>
      <HeroSlider slides={heroSlides} />

      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Shop By Session"
          title="Discover Your Signature"
          description="Two distinct sessions, one house standard: bold concentration, honest ingredients, lasting projection."
          className="mb-12"
        />
        <CategoryGrid categories={categories} />
      </section>

      <section className="bg-paper-dim py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="The Collection"
            title="Discover Our Fragrances"
            description="Ultra-premium, high-concentration perfumes crafted for a trail that lasts all day."
            className="mb-12"
          />
          <ProductShowcase products={products} />
        </div>
      </section>

      <CampaignBanner
        videoSrc={siteConfig.campaign.videoSrc}
        eyebrow={siteConfig.campaign.eyebrow}
        heading={siteConfig.campaign.heading}
        description={siteConfig.campaign.description}
        ctaLabel={siteConfig.campaign.ctaLabel}
        ctaHref={siteConfig.campaign.ctaHref}
      />

      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="As Seen On Instagram"
          title="Fragrance Reels"
          description="Application tips, longevity secrets, and behind-the-scenes from the UOZEE studio."
          className="mb-12"
        />
        <ReelsSection reels={reels} />
      </section>

      <section className="bg-paper-dim py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Loved By Thousands"
            title="What Our Customers Say"
            className="mb-12"
          />
          <TestimonialsSection testimonials={testimonials} />
        </div>
      </section>

      <section className="bg-ink py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
