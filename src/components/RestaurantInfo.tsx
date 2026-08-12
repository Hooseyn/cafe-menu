import { restaurant } from "@/data/restaurant";
import CallButton from "./CallButton";

export default function RestaurantInfo() {
  return (
    <footer className="mx-auto max-w-2xl px-3 pb-24 pt-6 sm:px-4 sm:pb-10">
      <div className="rounded-2xl bg-charcoal p-5 text-cream shadow-sm">
        <h2 className="font-serif text-lg font-semibold text-gold-light">
          Bizimlə Əlaqə
        </h2>

        <dl className="mt-3 space-y-2.5 text-sm text-cream/85">
          <div className="flex items-start gap-2.5">
            <IconPin />
            <dd>{restaurant.address}</dd>
          </div>
          <div className="flex items-start gap-2.5">
            <IconPhone />
            <dd>Rezervasiya: {restaurant.phone}</dd>
          </div>
          <div className="flex items-start gap-2.5">
            <IconClock />
            <dd className="space-y-0.5">
              {restaurant.hours.map((h) => (
                <div key={h.days}>
                  <span className="text-cream">{h.days}: </span>
                  {h.time}
                </div>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-4">
          <CallButton />
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-charcoal/40">
        Allergiyanız varsa, sifariş verməzdən əvvəl xahiş edirik ofisiantımızı
        məlumatlandırın.
      </p>
    </footer>
  );
}

function IconPin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
    >
      <path d="M12 21s-7-6.5-7-11a7 7 0 1 1 14 0c0 4.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
    >
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.49a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.02l-2.2 2.21z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
