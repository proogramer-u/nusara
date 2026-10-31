import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { site } from "@/config/site";
export function Collection() {
  return (
    <section id="collection" className="section collection">
      <div className="section-top">
        <div>
          <p className="section-kicker">Koleksi NUSARA</p>
          <h2>
            Dua siluet.
            <br />
            Satu akar cerita.
          </h2>
        </div>
        <p className="section-description">
          Untuk gaya yang selalu menjadi dirimu.
          <br />
          Temukan interpretasi warisan dalam
          <br className="desktop-break" /> pashmina dan segi empat.
        </p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <p className="asset-note">{site.imageNotice}</p>
    </section>
  );
}
