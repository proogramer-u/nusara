export const site = {
  name: "NUSARA",
  tagline: "Heritage That Fits Your Everyday",
  description:
    "Temukan koleksi hijab NUSARA yang terinspirasi dari motif songket Palembang, dengan sentuhan pastel modern untuk gaya sehari-hari.",
  // Only set links after the brand has verified their responder destination.
  orderFormUrl: process.env.NUSARA_ORDER_FORM_URL ?? "",
  instagramUrl: "",
  contactEmail: "",
  imageNotice: "Visual konsep dari NUSARA. Detail produk final dapat berbeda.",
  pendingPriceLabel: "Harga segera hadir",
  pendingOrderLabel: "Pemesanan segera hadir",
  pendingOrderDescription:
    "Formulir pemesanan belum tersedia. Informasi motif, harga, pembayaran, dan pengiriman akan dikonfirmasi oleh tim NUSARA.",
};
export const navigation = [
  { label: "Beranda", href: "#home" },
  { label: "Koleksi", href: "#collection" },
  { label: "Cerita Kami", href: "#our-story" },
  { label: "Mengapa NUSARA", href: "#why-nusara" },
  { label: "FAQ", href: "#faq" },
];

export const footerContent = {
  description:
    "Inspirasi songket Palembang dalam hijab kontemporer. Membawa cerita budaya lebih dekat dengan gaya sehari-hari.",
  groups: [
    {
      title: "Koleksi",
      links: [
        { label: "Pashmina NUSARA", href: "#collection" },
        { label: "Segi Empat NUSARA", href: "#collection" },
        { label: "Catatan Gaya", href: "#lookbook" },
      ],
    },
    {
      title: "Tentang NUSARA",
      links: [
        { label: "Cerita Kami", href: "#our-story" },
        { label: "Mengapa NUSARA", href: "#why-nusara" },
      ],
    },
    {
      title: "Informasi",
      links: [
        { label: "Tanya Jawab", href: "#faq" },
        { label: "Info Pemesanan", href: "#order" },
      ],
    },
  ],
};
