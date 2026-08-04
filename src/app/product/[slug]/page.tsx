import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getRelatedProducts, products, siteConfig } from "@/db";
import { ProductGallery } from "@/components/product/product-gallery";
import { AddToCartPanel } from "@/components/product/add-to-cart-panel";
import { RelatedProducts } from "@/components/product/related-products";
import { RatingStars } from "@/components/ui/rating-stars";
import { Price } from "@/components/ui/price";
import { SectionHeading } from "@/components/ui/section-heading";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: `Product Not Found | ${siteConfig.fullName}` };
  return {
    title: `${product.title} | ${siteConfig.fullName}`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-4 py-4 text-xs uppercase tracking-[0.14em] text-muted sm:px-6 lg:px-10">
        <Link href="/" className="hover:text-gold">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-gold">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.title}</span>
      </div>

      <section className="mx-auto grid max-w-[1400px] gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:px-10">
        <ProductGallery images={product.images} title={product.title} />

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">30% off</p>
          <h1 className="mt-2 font-display text-3xl uppercase tracking-[0.03em] text-ink sm:text-4xl">
            {product.title}
          </h1>
          <div className="mt-3">
            <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
          </div>
          <div className="mt-5">
            <Price price={product.price} compareAtPrice={product.compareAtPrice} size="lg" />
          </div>
          <span className="mt-4 inline-flex items-center rounded-full bg-ink px-3 py-1 text-[11px] text-paper">
            {product.sizeMl}ml Eau De Parfum
          </span>

          <p className="mt-6 text-sm leading-relaxed text-ink/75">{product.description}</p>
          <p className="mt-3 text-sm italic text-muted">{product.tagline}</p>

          <div className="mt-8 border-t border-ink/10 pt-8">
            <AddToCartPanel product={product} />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {(["top", "heart", "base"] as const).map((layer) => (
              <div key={layer} className="border border-ink/10 bg-paper-dim p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{layer} Notes</p>
                <p className="mt-1 text-sm text-ink">{product.notes[layer]}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-ink/10 pt-6">
            <h3 className="font-display text-sm uppercase tracking-[0.16em] text-ink">
              Shipping &amp; Returns
            </h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
              {siteConfig.shippingNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-ink/10 bg-paper-dim py-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <SectionHeading eyebrow="You May Also Like" title="Complete The Session" className="mb-12" />
            <RelatedProducts products={related} />
          </div>
        </section>
      )}
    </div>
  );
}
