import Image from "next/image";
import { MenuItem } from "@/data/menu";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex flex-col gap-3 rounded-[22px] border border-charcoal/10 bg-white p-3 shadow-[0_2px_12px_rgba(0,0,0,0.05)] sm:flex-row sm:gap-4 sm:p-4">
      {item.image && (
        <div className="relative h-24 w-full overflow-hidden rounded-2xl bg-charcoal/5 sm:h-20 sm:w-20 sm:shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 640px) 80px, calc(100vw - 56px)"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-[15px] font-semibold leading-snug text-charcoal sm:text-base">
            {item.name}
          </h3>
          <span className="shrink-0 whitespace-nowrap font-serif text-[15px] font-semibold text-[#8b5e2b] sm:text-base">
            {item.price.toFixed(2)} ₼
          </span>
        </div>
        <p className="text-sm leading-snug text-charcoal/60">
          {item.description}
        </p>
        {(item.tags?.length || item.allergens?.length) && (
          <div className="flex flex-wrap gap-1.5">
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f1e4c9] px-2 py-0.5 text-[11px] font-medium text-[#8b5e2b]"
              >
                {tag}
              </span>
            ))}
            {item.allergens?.length ? (
              <span className="rounded-full bg-charcoal/5 px-2 py-0.5 text-[11px] font-medium text-charcoal/50">
                Allergen: {item.allergens.join(", ")}
              </span>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
