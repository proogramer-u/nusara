import Image from "next/image";
const shots = [
  {
    src: "/images/lookbook/folded-scarf.webp",
    alt: "Konsep hijab lipat NUSARA dengan bingkai motif merah muda",
    title: "Detail yang bercerita",
    caption: "Motif warisan, sentuhan personal.",
    className: "look-detail",
  },
  {
    src: "/images/products/segi-empat.webp",
    alt: "Inspirasi gaya hijab segi empat dari visual konsep NUSARA",
    title: "Hadir sebagai dirimu",
    caption: "Siluet klasik untuk cerita baru.",
    className: "look-style",
  },
  {
    src: "/images/lookbook/packaging.webp",
    alt: "Konsep tas kemasan NUSARA berwarna dusty rose",
    title: "Sebuah cerita untuk dibawa",
    caption: "Identitas hingga ke detail kecil.",
    className: "look-packaging",
  },
];
export function Lookbook() {
  return (
    <section className="section lookbook" id="lookbook">
      <div className="section-top">
        <div>
          <p className="section-kicker">Catatan gaya</p>
          <h2>Everyday, with heritage.</h2>
        </div>
        <p className="section-description">
          Inspirasi kecil untuk mengekspresikan
          <br />
          karakter dan cerita yang kamu bawa.
        </p>
      </div>
      <div className="lookbook-grid">
        {shots.map((shot) => (
          <figure className={shot.className} key={shot.src}>
            <div className="look-image">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 700px) 90vw, 33vw"
              />
              <span className="image-badge">Visual konsep</span>
            </div>
            <figcaption>
              <h3>{shot.title}</h3>
              <p>{shot.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
