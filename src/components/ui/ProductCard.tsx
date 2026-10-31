import Image from "next/image";
import { site } from "@/config/site";
import type { Product } from "@/types/product";
import { OrderLink } from "./OrderLink";
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`product-card ${product.id}`}>
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 700px) 92vw, 45vw"
        />
        <span className="image-badge">
          {product.imageStatus === "concept"
            ? "Visual konsep"
            : "Koleksi NUSARA"}
        </span>
      </div>
      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          {product.price !== null ? (
            <p className="product-price">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0,
              }).format(product.price)}
            </p>
          ) : (
            <p className="product-price">{site.pendingPriceLabel}</p>
          )}
          {(product.variants.length > 0 ||
            product.colors.length > 0 ||
            product.specifications.length > 0) && (
            <dl className="product-details">
              {product.variants.length > 0 && (
                <div>
                  <dt>Varian</dt>
                  <dd>{product.variants.join(", ")}</dd>
                </div>
              )}
              {product.colors.length > 0 && (
                <div>
                  <dt>Warna</dt>
                  <dd>{product.colors.join(", ")}</dd>
                </div>
              )}
              {product.specifications.map((spec) => (
                <div key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        <OrderLink
          prefilledUrl={product.prefilledUrl}
          compact
          className="product-order"
        />
      </div>
    </article>
  );
}
