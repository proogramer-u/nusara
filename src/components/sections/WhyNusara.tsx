import { Flower2, Leaf, ScanQrCode } from "lucide-react";
import Image from "next/image";
import { features } from "@/data/faq";
export function WhyNusara() {
  return (
    <section id="why-nusara" className="section why">
      <div className="why-heading">
        <p className="section-kicker">Mengapa NUSARA</p>
        <h2>
          Bukan sekadar motif.
          <br />
          Sebuah identitas.
        </h2>
        <p>
          Setiap pilihan desain berangkat dari hal yang dekat:
          <br className="desktop-break" /> budaya kita, dan cara kita
          mengekspresikan diri.
        </p>
      </div>
      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature" key={feature.title}>
            <div className="feature-icon">
              {feature.icon === "flower" ? (
                <Flower2 />
              ) : feature.icon === "leaf" ? (
                <Leaf />
              ) : feature.icon === "qr" ? (
                <ScanQrCode />
              ) : (
                <Image
                  src="/images/brand/nusara-logo.png"
                  alt=""
                  width={50}
                  height={19}
                />
              )}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
