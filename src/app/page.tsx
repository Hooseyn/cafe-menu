"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryNav from "@/components/CategoryNav";
import MenuItemCard from "@/components/MenuItemCard";
import RestaurantInfo from "@/components/RestaurantInfo";
import { categories, menuItems, Category, MenuItem } from "@/data/menu";
import CallButton from "@/components/CallButton";

const setBundles = [
  { id: "st1", includedIds: ["st2", "st3", "st4", "st5"] as const },
  { id: "st6", includedIds: ["st7", "st3", "st11", "st12", "st8"] as const },
  { id: "st9", includedIds: ["st10", "st11", "st12", "st13", "st14"] as const },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(
    categories[0].id
  );
  const sectionRefs = useRef<Partial<Record<Category, HTMLElement | null>>>(
    {}
  );
  const [isHotFoodOpen, setIsHotFoodOpen] = useState(false);

  const normalizedQuery = query.trim().toLocaleLowerCase("az");

  const filteredByCategory = useMemo(() => {
    const map = new Map<Category, typeof menuItems>();
    for (const cat of categories) {
      const items = menuItems.filter((item) => {
        if (item.category !== cat.id) return false;
        if (!normalizedQuery) return true;
        return (
          item.name.toLocaleLowerCase("az").includes(normalizedQuery) ||
          item.description.toLocaleLowerCase("az").includes(normalizedQuery)
        );
      });
      map.set(cat.id, items);
    }
    return map;
  }, [normalizedQuery]);

  const hasAnyResults = categories.some(
    (cat) => (filteredByCategory.get(cat.id)?.length ?? 0) > 0
  );

  const handleSelectCategory = (id: Category) => {
    setActiveCategory(id);
    const el = sectionRefs.current[id];
    if (el) {
      // Wait for the accordion open/close transition (duration-300) to
      // finish so the section has reached its final height before we
      // measure where to scroll — otherwise scrollIntoView lands mid-animation.
      window.setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 320);
    }
  };

  const handleToggleSection = (id: Category) => {
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <SearchBar value={query} onChange={setQuery} />
      <CategoryNav
        activeCategory={activeCategory}
        onSelect={handleSelectCategory}
      />

      <main className="mx-auto max-w-2xl px-3 pb-28 pt-2 sm:px-4 sm:py-4">
        {!hasAnyResults && (
          <p className="py-10 text-center text-sm text-charcoal/50">
            Axtarışınıza uyğun yemək tapılmadı.
          </p>
        )}

        {categories.map((cat) => {
          const items = filteredByCategory.get(cat.id) ?? [];
          if (items.length === 0) return null;
          const isSetsSection = cat.id === "sets";
          const isBreakfastSection = cat.id === "breakfast";
          const isOpen = normalizedQuery ? true : activeCategory === cat.id;

          return (
            <section
              key={cat.id}
              data-category={cat.id}
              ref={(el) => {
                sectionRefs.current[cat.id] = el;
              }}
              className="scroll-mt-[104px] border-b border-charcoal/10 last:border-b-0"
            >
              <button
                type="button"
                onClick={() => handleToggleSection(cat.id)}
                className="flex w-full items-center justify-between gap-2 py-4 text-left"
                aria-expanded={isOpen}
              >
                <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-charcoal">
                  {cat.id === "breakfast" && (
                    <Image
                      src="https://images.unsplash.com/photo-1493770348161-369560ae357d?w=100&q=80&auto=format&fit=crop"
                      alt=""
                      aria-hidden
                      width={24}
                      height={24}
                      className="h-6 w-6 shrink-0 rounded-full object-cover"
                    />
                  )}
                  {cat.icon && <span aria-hidden>{cat.icon}</span>}
                  {cat.label}
                </h2>
                <span
                  className={`shrink-0 text-lg text-charcoal/40 transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-90" : ""
                  }`}
                  aria-hidden
                >
                  👉
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`flex flex-col gap-3 pb-6 transition-all duration-300 ease-out ${
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-1 opacity-0"
                    }`}
                  >
                {isSetsSection ? (
                  setBundles.map((bundle) => {
                    const mainSetItem = items.find((item) => item.id === bundle.id);
                    const includedItems = bundle.includedIds
                      .map((id) => items.find((item) => item.id === id))
                      .filter((item): item is MenuItem => Boolean(item));

                    if (!mainSetItem) return null;

                    return (
                      <div key={bundle.id} className="flex flex-col gap-3">
                        <MenuItemCard item={mainSetItem} />
                        <div className="rounded-2xl border border-charcoal/10 bg-[#f2f7ef] p-3">
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60">
                            Setə daxildir
                          </p>
                          <div className="flex flex-col gap-2">
                            {includedItems.map((item) => (
                              <div
                                key={item.id}
                                className="border-t border-charcoal/10 pt-2 first:border-t-0 first:pt-0"
                              >
                                <p className="font-serif text-sm font-medium text-charcoal">
                                  {item.name}
                                </p>
                                <p className="mt-0.5 text-xs leading-snug text-charcoal/60">
                                  {item.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : isBreakfastSection ? (
                  <>
                    {items
                      .filter((item) => item.id === "b0")
                      .map((item) => (
                        <div key={item.id} className="flex flex-col gap-3">
                          <MenuItemCard item={item} />
                          <div className="rounded-2xl border border-charcoal/10 bg-[#f2f7ef] p-3">
                            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60">
                              Setə daxildir
                            </p>
                            <div className="flex flex-col gap-2">
                              {[
                                "Holland pendiri",
                                "Yağ",
                                "Sosis",
                                "Kolbasa",
                                "Qaymaq",
                                "Pomidor",
                                "Xiyar",
                                "Mürəbbə",
                                "Zeytun",
                                "İsti yemək",
                                "1 Çaynik Çay",
                              ].map((entry) => {
                                const hotFoodItems = items.filter((i) =>
                                  ["b21", "b22", "b23"].includes(i.id)
                                );
                                if (entry === "İsti yemək" && hotFoodItems.length > 0) {
                                  return (
                                    <div
                                      key={entry}
                                      className="border-t border-charcoal/10 pt-2 first:border-t-0 first:pt-0"
                                    >
                                      <button
                                        type="button"
                                        onClick={() => setIsHotFoodOpen((v) => !v)}
                                        className="flex w-full items-center justify-between gap-2 text-left"
                                      >
                                        <p className="font-serif text-sm font-medium text-charcoal">
                                          {entry}
                                        </p>
                                        <span
                                          className={`text-charcoal/40 transition-transform ${
                                            isHotFoodOpen ? "rotate-180" : ""
                                          }`}
                                          aria-hidden
                                        >
                                          ⌄
                                        </span>
                                      </button>
                                      {isHotFoodOpen && (
                                        <div className="mt-2 flex flex-col gap-1.5 pl-3">
                                          {hotFoodItems.map((item) => (
                                            <div
                                              key={item.id}
                                              className="flex items-center justify-between gap-3"
                                            >
                                              <span className="text-xs text-charcoal/70">
                                                {item.name}
                                              </span>
                                              <span className="shrink-0 text-xs font-semibold text-[#8b5e2b]">
                                                {item.price.toFixed(2)} ₼
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  );
                                }
                                return (
                                  <div
                                    key={entry}
                                    className="border-t border-charcoal/10 pt-2 first:border-t-0 first:pt-0"
                                  >
                                    <p className="font-serif text-sm font-medium text-charcoal">
                                      {entry}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ))}
                    {items
                      .filter((item) => item.id !== "b0")
                      .filter(
                        (item) => !["b21", "b22", "b23"].includes(item.id)
                      )
                      .map((item) => (
                        <MenuItemCard key={item.id} item={item} />
                      ))}
                  </>
                ) : (
                  items.map((item) => <MenuItemCard key={item.id} item={item} />)
                )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-[#e8f0e3]/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur sm:hidden">
        <CallButton />
      </div>

      <RestaurantInfo />
    </div>
  );
}
