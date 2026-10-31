import type { Product } from "@/types/product";
export const products: Product[] = [
  {
    id: "pashmina",
    name: "Pashmina NUSARA",
    description:
      "Sentuhan motif warisan dalam siluet memanjang yang mudah dipadukan dengan gaya personalmu.",
    image: "/images/products/pashmina.webp",
    alt: "Visual konsep pashmina bermotif merah muda dan dua inspirasi pemakaian dari PDF NUSARA",
    imageStatus: "concept",
    price: null,
    variants: [],
    colors: [],
    specifications: [],
    prefilledUrl: process.env.NUSARA_PASHMINA_FORM_URL ?? "",
  },
  {
    id: "segi-empat",
    name: "Segi Empat NUSARA",
    description:
      "Bentuk klasik, cerita yang baru. Interpretasi motif songket untuk melengkapi keseharianmu.",
    image: "/images/products/segi-empat.webp",
    alt: "Visual konsep hijab segi empat merah muda pada model dari PDF NUSARA",
    imageStatus: "concept",
    price: null,
    variants: [],
    colors: [],
    specifications: [],
    prefilledUrl: process.env.NUSARA_SEGI_EMPAT_FORM_URL ?? "",
  },
];
