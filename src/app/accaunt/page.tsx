import Link from "next/link";
import Header from "@/components/Header";
import RestaurantInfo from "@/components/RestaurantInfo";
import { restaurant } from "@/data/restaurant";

export default function AccauntPage() {
  const telHref = `tel:${restaurant.phone.replace(/[^+\d]/g, "")}`;

  return (
    <div className="min-h-screen bg-[#e8f0e3]">
      <Header />

      <main className="mx-auto max-w-2xl px-3 pb-10 pt-5 sm:px-4 sm:pt-6">
        <section className="rounded-[24px] border border-charcoal/10 bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.05)] sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-charcoal/10 bg-[#2f5d3b] font-serif text-lg text-white shadow-inner">
              {restaurant.logoInitial}
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                Hesab
              </p>
              <h1 className="font-serif text-xl font-semibold text-charcoal">
                Salam, ziyarətçi
              </h1>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-[#e8f0e3] p-4">
            <p className="text-sm leading-relaxed text-charcoal/70">
              Bu bölmə yaxın zamanda aktivləşdiriləcək. Hazırda siz menyuya
              qayıdıb sifariş və əlaqə məlumatlarını asanlıqla görə bilərsiniz.
            </p>

            <ul className="mt-3 space-y-2 text-sm text-charcoal/70">
              <li>• Sifariş tarixçəsi yaxın gələcəkdə əlavə olunacaq</li>
              <li>• Sevimli yeməklər siyahısı hazırlanacaq</li>
              <li>• Hesab məlumatlarını asanlıqla idarə edə biləcəksiniz</li>
            </ul>
          </div>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Link
              href="/"
              className="flex items-center justify-center rounded-2xl bg-[#2f5d3b] px-4 py-3 text-sm font-medium text-white shadow-sm transition active:scale-[0.98]"
            >
              Menyuyə qayıt
            </Link>
            <a
              href={telHref}
              className="flex items-center justify-center rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-sm font-medium text-charcoal shadow-sm transition active:scale-[0.98]"
            >
              Zəng et: {restaurant.phone}
            </a>
          </div>
        </section>
      </main>

      <RestaurantInfo />
    </div>
  );
}
