"use client";

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative mx-auto max-w-2xl px-3 pb-3 pt-3 sm:px-4 sm:pt-4">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
          <div className="flex h-10 w-10 items-center justify-center text-black sm:h-9 sm:w-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
              aria-hidden
            >
              <circle cx="10" cy="12" r="7" />
              <line x1="17" y1="12" x2="22" y2="12" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <input
          type="text"
          inputMode="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Menyuda axtar..."
          aria-label="Menyuda axtar"
          className="w-full rounded-2xl border border-charcoal/10 bg-white py-3.5 pl-[3.25rem] pr-4 text-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] outline-none ring-gold/40 placeholder:text-charcoal/40 focus:ring-2"
        />
      </div>
    </div>
  );
}
