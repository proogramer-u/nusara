import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <p className="hero-intro">
          <span />
          Dari Palembang, untuk keseharianmu
        </p>
        <h1>
          Warisan dalam
          <br />
          setiap gaya.
        </h1>
        <p className="hero-tagline">Heritage That Fits Your Everyday</p>
        <p className="hero-description">
          Keindahan songket Palembang, dituturkan kembali dalam hijab bermotif
          dan warna pastel. Sebuah sentuhan tradisi untuk cerita sehari-hari.
        </p>
        <div className="hero-actions">
          <a className="button" href="#collection">
            Jelajahi Koleksi
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a className="text-link" href="#our-story">
            Cerita Kami<span aria-hidden="true">↗</span>
          </a>
        </div>
        <a className="scroll-note" href="#collection">
          <span>
            <ArrowDown size={15} aria-hidden="true" />
          </span>
          Kenali NUSARA lebih dekat
        </a>
      </div>
      <div className="hero-visual">
        <div className="hero-arch" />
        <span className="hero-vertical" aria-hidden="true">
          Tradisi yang tumbuh bersamamu
        </span>
        <div className="hero-word" aria-hidden="true">
          NUSARA
        </div>
        <Image
          className="hero-model"
          src="/images/products/hero-model.webp"
          alt="Visual konsep NUSARA: model mengenakan hijab pastel dengan inspirasi motif songket Palembang"
          fill
          sizes="(max-width: 760px) 80vw, 40vw"
          preload
        />
        <div className="motif-swatch">
          <Image
            src="/images/products/motif.webp"
            alt="Detail motif konsep NUSARA bernuansa merah muda"
            width={480}
            height={393}
          />
          <span>
            Sepotong warisan.
            <br />
            Sejuta cerita.
          </span>
        </div>
        <span className="concept-label">Visual konsep NUSARA</span>
      </div>
    </section>
  );
}
