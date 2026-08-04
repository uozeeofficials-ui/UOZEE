import type { Reel } from "@/db";
import { SafeVideo } from "@/components/media/safe-video";
import { InstagramIcon } from "@/components/icons";

export function ReelsSection({ reels }: { reels: Reel[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {reels.map((reel) => (
        <a
          key={reel.id}
          href={reel.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-[9/16] overflow-hidden rounded-2xl bg-ink"
        >
          <SafeVideo
            src={reel.videoSrc}
            label={reel.caption}
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-3 text-paper">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-gold-light">
              <InstagramIcon className="h-3.5 w-3.5" /> {reel.handle}
            </p>
            <p className="mt-1 text-xs leading-snug text-paper/90">{reel.caption}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
