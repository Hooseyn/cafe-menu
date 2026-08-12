"use client";

import Image from "next/image";
import { categories, Category } from "@/data/menu";

export default function CategoryNav({
  activeCategory,
  onSelect,
}: {
  activeCategory: Category;
  onSelect: (id: Category) => void;
}) {
  return (
    <nav
      aria-label="Menyu kateqoriyaları"
      className="scrollbar-none sticky top-0 z-30 flex gap-2 overflow-x-auto border-b border-charcoal/10 bg-[#e8f0e3]/95 px-4 py-3 backdrop-blur"
    >
      <div className="mx-auto flex max-w-2xl gap-2">
        {categories.map((cat) => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-[#1f4d2e] bg-[#1f4d2e] text-white shadow-sm"
                  : "border-charcoal/10 bg-white text-[#4b5a51]"
              }`}
            >
              {cat.id === "breakfast" && (
                <Image
                  src="https://news.day.az/media/2026/01/26/800x550/seher_yemeyi.jpg"
                  alt=""
                  aria-hidden
                  width={20}
                  height={20}
                  className="h-5 w-5 shrink-0 rounded-full object-cover"
                />
              )}
              {cat.icon && <span aria-hidden>{cat.icon}</span>}
              {cat.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
