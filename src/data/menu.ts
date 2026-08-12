// Bu fayl bütün menyu məlumatlarını saxlayır.
// Yeni yemək əlavə etmək və ya mövcud olanı redaktə etmək üçün
// sadəcə aşağıdakı massivə yeni obyekt əlavə edin və ya mövcudunu dəyişin.

export type Category =
  | "breakfast"
  | "sandwiches"
  | "starters"
  | "mains"
  | "salads"
  | "desserts"
  | "sets"
  | "cold-drinks";

export interface MenuItem {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: number; // AZN
  image?: string;
  allergens?: string[];
  tags?: string[]; // e.g. "vegan", "acılı"
}

export interface CategoryInfo {
  id: Category;
  label: string;
  icon: string;
}

export const categories: CategoryInfo[] = [
  { id: "breakfast", label: "Səhər Yeməyi", icon: "" },
  { id: "sandwiches", label: "Sendviçlər", icon: "🥪" },
  { id: "starters", label: "Rollar", icon: "🌯" },
  { id: "salads", label: "Salatlar", icon: "🥗" },
  { id: "mains", label: "Kofelər", icon: "🧋" },
  { id: "desserts", label: "Desertlər", icon: "🍰" },
  { id: "sets", label: "Çay Dəstləri", icon: "🫖" },
  { id: "cold-drinks", label: "Sərin İçkilər", icon: "🥤" },
];

export const menuItems: MenuItem[] = [
  // Səhər Yeməyi
  {
    id: "b0",
    category: "breakfast",
    name: "2 Nəfərlik Səhər Yeməyi",
    description: "Holland pendiri, yağ, sosis, kolbasa, qaymaq, pomidor, xiyar, mürəbbə, zeytun, isti yemək və 1 çaynik çay daxilidir",
    price: 19.9,
    image:
      "https://news.day.az/media/2026/01/26/800x550/seher_yemeyi.jpg",
  },
  {
    id: "b21",
    category: "breakfast",
    name: "Sosis Qızartması",
    description: "",
    price: 5.0,
  },
  {
    id: "b22",
    category: "breakfast",
    name: "Sosisli Yumurta",
    description: "",
    price: 5.0,
  },
  {
    id: "b23",
    category: "breakfast",
    name: "Kolbasalı Yumurta",
    description: "",
    price: 5.0,
  },

  // Sendviçlər
  {
    id: "b11",
    category: "sandwiches",
    name: "Kolbasa Sendviç",
    description: "Təzə sendviç, kolbasa ilə",
    price: 5.0,
  },
  {
    id: "b12",
    category: "sandwiches",
    name: "Sosis Sendviç",
    description: "Təzə sendviç, sosis ilə",
    price: 5.0,
  },
  {
    id: "b13",
    category: "sandwiches",
    name: "Vegeterian Sendviç",
    description: "Təzə sendviç, vegeterian qarışıq ilə",
    price: 4.5,
  },
  {
    id: "b14",
    category: "sandwiches",
    name: "Club Sendviç",
    description: "Təzə sendviç, xüsusi qarışıq ilə",
    price: 7.5,
  },
  {
    id: "b15",
    category: "sandwiches",
    name: "Qarışıq Sendviç",
    description: "Təzə sendviç, qarışıq ilə",
    price: 7.5,
  },
  {
    id: "b16",
    category: "sandwiches",
    name: "3 Sendviç, 3 İcki",
    description: "3 sendviç və 3 içki paketi",
    price: 18.9,
  },
  {
    id: "b17",
    category: "sandwiches",
    name: "4 Sendviç, 4 İcki",
    description: "4 sendviç və 4 içki paketi",
    price: 24.9,
  },
  {
    id: "b18",
    category: "sandwiches",
    name: "5 Sendviç, 5 İcki",
    description: "5 sendviç və 5 içki paketi",
    price: 30.9,
  },

  // Rollar
  {
    id: "s1",
    category: "starters",
    name: "Toyuq Roll",
    description: "",
    price: 7.0,
  },
  {
    id: "s2",
    category: "starters",
    name: "Sezar Roll",
    description: "",
    price: 9.0,
  },
  {
    id: "s3",
    category: "starters",
    name: "Qarışıq Roll",
    description: "",
    price: 8.0,
  },
  {
    id: "s4",
    category: "starters",
    name: "Vegeterian Roll",
    description: "",
    price: 8.0,
  },
  {
    id: "s5",
    category: "starters",
    name: "Sosisli Roll",
    description: "",
    price: 5.0,
  },
  {
    id: "s6",
    category: "starters",
    name: "Kolbasalı Roll",
    description: "",
    price: 5.5,
  },

  // Kofelər
  {
    id: "m1",
    category: "mains",
    name: "Espresso",
    description: "",
    price: 3.5,
  },
  {
    id: "m2",
    category: "mains",
    name: "Americano",
    description: "",
    price: 5.0,
  },
  {
    id: "m3",
    category: "mains",
    name: "Latte",
    description: "",
    price: 6.5,
  },
  {
    id: "m4",
    category: "mains",
    name: "Mocha",
    description: "",
    price: 6.5,
  },
  {
    id: "m5",
    category: "mains",
    name: "Cappuccino",
    description: "",
    price: 6.5,
  },
  {
    id: "m6",
    category: "mains",
    name: "İsti Şokolad",
    description: "",
    price: 6.0,
  },
  {
    id: "m7",
    category: "mains",
    name: "Iced Americano",
    description: "",
    price: 5.0,
  },
  {
    id: "m8",
    category: "mains",
    name: "Iced Mocha",
    description: "",
    price: 6.5,
  },
  {
    id: "m9",
    category: "mains",
    name: "Iced Latte",
    description: "",
    price: 6.5,
  },

  // Salatlar
  {
    id: "sl2",
    category: "salads",
    name: "Sezar Salatı",
    description: "Toyuq, salat yarpağı, krutonlar və sezar sousu ilə",
    price: 9.0,
    allergens: ["qluten", "yumurta", "süd"],
  },
  {
    id: "sl3",
    category: "salads",
    name: "Çoban Salatı",
    description: "Pendir, tərəvəz və zeytun ilə ənənəvi salat",
    price: 4.0,
    allergens: ["süd"],
    tags: ["vegetarian"],
  },
  {
    id: "sl4",
    category: "salads",
    name: "Pendirli Çoban Salatı",
    description: "",
    price: 5.0,
  },
  {
    id: "sl5",
    category: "salads",
    name: "Yunan Salatı",
    description: "",
    price: 6.0,
  },
  {
    id: "sl6",
    category: "salads",
    name: "Bookmall Salatı",
    description: "",
    price: 6.0,
  },

  // Desertlər
  {
    id: "d1",
    category: "desserts",
    name: "Magnoliya",
    description: "",
    price: 7.0,
  },
  {
    id: "d2",
    category: "desserts",
    name: "Mürəbbə",
    description: "",
    price: 4.5,
  },
  {
    id: "d3",
    category: "desserts",
    name: "Rulet",
    description: "",
    price: 4.0,
  },
  {
    id: "d4",
    category: "desserts",
    name: "Snickers",
    description: "",
    price: 4.0,
  },
  {
    id: "d5",
    category: "desserts",
    name: "Alpengold",
    description: "",
    price: 5.5,
  },

  // Setlər
  {
    id: "st1",
    category: "sets",
    name: "Kiçik Çay Seti",
    description: "Çiyələk mürəbbəsi, rulet, şokolad (Alpen Gold) və 1 çaynik çay daxilidir",
    price: 12.5,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  },
  {
    id: "st2",
    category: "sets",
    name: "1 Çaynik Çay",
    description: "Təzə dəmlənmiş, isti və rahatlıq verən çay",
    price: 3.5,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80",
  },
  {
    id: "st3",
    category: "sets",
    name: "Rulet",
    description: "Yumşaq və ədviyyatlı, klassik rulet keki",
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
  },
  {
    id: "st4",
    category: "sets",
    name: "Şokolad (Alpen Gold)",
    description: "Qənnadı şokoladı, zərif paketdə",
    price: 2.5,
    image:
      "https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&q=80",
  },
  {
    id: "st5",
    category: "sets",
    name: "Çiyələk Mürəbbəsi",
    description: "Təzə çiyələkdən hazırlanmış, qatı və dadlı mürəbbə",
    price: 3.0,
    image:
      "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&q=80",
  },
  {
    id: "st6",
    category: "sets",
    name: "Orta Çay Seti",
    description: "2 çaynik çay, rulet, mürəbbə, Snickers və kurabiye daxilidir",
    price: 17.0,
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=600&q=80",
  },
  {
    id: "st7",
    category: "sets",
    name: "2 Çaynik Çay",
    description: "Təzə dəmlənmiş, isti və rahatlıq verən 2 çaynik çay",
    price: 5.0,
    image:
      "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&q=80",
  },
  {
    id: "st8",
    category: "sets",
    name: "Kurabiye",
    description: "Təzə və dadlı, klassik kurabiye",
    price: 3.0,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
  },
  {
    id: "st9",
    category: "sets",
    name: "Böyük Çay Seti",
    description: "3 çaynik çay, mürəbbə, Snickers, plitka şokolad, rulet və çərəz daxilidir",
    price: 22.0,
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=600&q=80",
  },
  {
    id: "st10",
    category: "sets",
    name: "3 Çaynik Çay",
    description: "Təzə dəmlənmiş, isti və rahatlıq verən 3 çaynik çay",
    price: 6.0,
    image:
      "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&q=80",
  },
  {
    id: "st11",
    category: "sets",
    name: "Mürəbbə",
    description: "Təzə hazırlanmış dadlı mürəbbə",
    price: 3.5,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80",
  },
  {
    id: "st12",
    category: "sets",
    name: "Snickers",
    description: "Karamelli və şokoladlı iri snickers",
    price: 3.0,
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=80",
  },
  {
    id: "st13",
    category: "sets",
    name: "Plitka Şokolad",
    description: "Ənənəvi plitka şokolad",
    price: 4.0,
    image:
      "https://images.unsplash.com/photo-1611874657170-ccde33f79b53?w=600&q=80",
  },
  {
    id: "st14",
    category: "sets",
    name: "Çərəz",
    description: "Təzə və qatı çerez növü",
    price: 3.0,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
  },

  // Sərin İçkilər
  {
    id: "cd1",
    category: "cold-drinks",
    name: "Cola/Fanta/Sprite",
    description: "",
    price: 3.0,
  },
  {
    id: "cd2",
    category: "cold-drinks",
    name: "Meyvə Şirəsi",
    description: "",
    price: 3.5,
  },
  {
    id: "cd3",
    category: "cold-drinks",
    name: "Ice Tea",
    description: "",
    price: 3.5,
  },
  {
    id: "cd4",
    category: "cold-drinks",
    name: "Limonad Portağallı",
    description: "",
    price: 6.5,
  },
  {
    id: "cd5",
    category: "cold-drinks",
    name: "Limonad Çiyələkli",
    description: "",
    price: 6.5,
  },
  {
    id: "cd6",
    category: "cold-drinks",
    name: "Spirtli Limonad",
    description: "",
    price: 7.5,
  },
  {
    id: "cd7",
    category: "cold-drinks",
    name: "Mojito",
    description: "",
    price: 6.0,
  },
  {
    id: "cd8",
    category: "cold-drinks",
    name: "Mojito Çiyələkli",
    description: "",
    price: 7.0,
  },
  {
    id: "cd9",
    category: "cold-drinks",
    name: "Mojito Portağallı",
    description: "",
    price: 7.0,
  },
  {
    id: "cd10",
    category: "cold-drinks",
    name: "Enerji Mojito",
    description: "",
    price: 7.5,
  },
  {
    id: "cd11",
    category: "cold-drinks",
    name: "Spirtli Mojito",
    description: "",
    price: 8.0,
  },
  {
    id: "cd12",
    category: "cold-drinks",
    name: "Fresh Portağal",
    description: "",
    price: 8.0,
  },
  {
    id: "cd13",
    category: "cold-drinks",
    name: "Bizon",
    description: "",
    price: 3.0,
  },
  {
    id: "cd14",
    category: "cold-drinks",
    name: "Redbull",
    description: "",
    price: 7.0,
  },
  {
    id: "cd15",
    category: "cold-drinks",
    name: "Ayran",
    description: "",
    price: 3.0,
  },
  {
    id: "cd16",
    category: "cold-drinks",
    name: "Milkshake",
    description: "",
    price: 6.0,
  },
  {
    id: "cd17",
    category: "cold-drinks",
    name: "Milkshake Şokoladlı",
    description: "",
    price: 7.5,
  },
  {
    id: "cd18",
    category: "cold-drinks",
    name: "Milkshake Bananlı",
    description: "",
    price: 7.5,
  },
  {
    id: "cd19",
    category: "cold-drinks",
    name: "Milkshake Çiyələkli",
    description: "",
    price: 7.5,
  },
  {
    id: "cd20",
    category: "cold-drinks",
    name: "Oreo Shake",
    description: "",
    price: 7.5,
  },
  {
    id: "cd21",
    category: "cold-drinks",
    name: "Su Qazlı/Qazsız",
    description: "",
    price: 2.5,
  },
  {
    id: "cd22",
    category: "cold-drinks",
    name: "Smoothie",
    description: "",
    price: 7.5,
  },
];

export const itemsByCategory = (category: Category) =>
  menuItems.filter((item) => item.category === category);
