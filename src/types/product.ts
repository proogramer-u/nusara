export type Product = {
  id: "pashmina" | "segi-empat";
  name: string;
  description: string;
  image: string;
  alt: string;
  prefilledUrl?: string;
  /** Null means the client has not confirmed a price. Values are in rupiah. */
  price: number | null;
  /** Empty collections stay hidden until the client supplies approved details. */
  variants: string[];
  colors: string[];
  specifications: { label: string; value: string }[];
  imageStatus: "concept" | "approved";
};
