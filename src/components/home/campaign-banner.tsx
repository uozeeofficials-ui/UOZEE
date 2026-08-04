import Link from "next/link";
import { SafeVideo } from "@/components/media/safe-video";

type CampaignBannerProps = {
  videoSrc?: string;
  eyebrow: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export function CampaignBanner({
  videoSrc,
  eyebrow,
  heading,
  description,
  ctaLabel,
  ctaHref,
}: CampaignBannerProps) {
  return (
    <section className="relative flex h-[55vh] min-h-[380px] items-center justify-center overflow-hidden bg-ink">
      <SafeVideo src={videoSrc} className="absolute inset-0 h-full w-full" />
    </section>
  );
}
