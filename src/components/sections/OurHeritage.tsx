import Image from "next/image";
import { ArrowRight } from "lucide-react";
export function OurHeritage() {
  return (
    <section id="our-story" className="heritage">
      <div className="heritage-art">
        <div className="heritage-frame">
          <Image
            src="/images/products/motif.webp"
            alt="Interpretasi konsep motif songket Palembang dalam palet pastel NUSARA"
            fill
            sizes="(max-width: 760px) 85vw, 40vw"
          />
        </div>
        <p>
          Berakar pada tradisi.
          <br />
          <span>Tumbuh dalam keseharian.</span>
        </p>
      </div>
      <div className="heritage-copy">
        <p className="section-kicker">Cerita di balik NUSARA</p>
        <h2>
          Dari warisan,
          <br />
          menjadi bagian
          <br />
          dari harimu.
        </h2>
        <p>
          Palembang menyimpan kekayaan visual dalam songketnya. Motif yang sarat
          makna, diwariskan sebagai bagian dari identitas budaya.
        </p>
        <p>
          NUSARA berangkat dari kekaguman itu. Kami mengolah inspirasi motif
          songket ke dalam komposisi kontemporer dan warna pastel, agar cerita
          budaya dapat hadir dalam gaya sehari-hari.
        </p>
        <p className="heritage-emphasis">
          Membawa cerita lama, dengan cara yang baru.
        </p>
        <div
          className="heritage-process"
          aria-label="Perjalanan inspirasi desain"
        >
          {[
            "Songket Palembang",
            "Motif modern",
            "Palet pastel",
            "Gaya sehari-hari",
          ].map((step, i) => (
            <span key={step}>
              {step}
              {i < 3 && <ArrowRight aria-hidden="true" size={13} />}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
