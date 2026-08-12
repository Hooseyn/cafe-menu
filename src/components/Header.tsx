import { restaurant } from "@/data/restaurant";
import CallButton, { InstagramButton } from "./CallButton";

export default function Header() {
  return (
    <header className="border-b border-[#2f5d3b]/30 bg-[#1f4d2e] text-white shadow-sm">
      <div className="relative z-10 mx-auto flex w-full max-w-2xl items-center justify-between gap-3 px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-[#2f5d3b] font-serif text-lg text-white shadow-inner sm:h-12 sm:w-12 sm:text-xl">
            {restaurant.logoInitial}
          </div>
          <div>
            <h1 className="font-serif text-base font-semibold leading-tight tracking-wide text-white sm:text-lg">
              {restaurant.name}
            </h1>
            <p className="text-[11px] text-white/80 sm:text-xs">{restaurant.tagline}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <InstagramButton />
          <CallButton variant="compact" />
        </div>
      </div>
    </header>
  );
}
