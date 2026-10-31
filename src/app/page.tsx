import { BrandIntro } from "@/components/ui/BrandIntro";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Collection } from "@/components/sections/Collection";
import { WhyNusara } from "@/components/sections/WhyNusara";
import { OurHeritage } from "@/components/sections/OurHeritage";
import { Lookbook } from "@/components/sections/Lookbook";
import { FAQ } from "@/components/sections/FAQ";
import { OrderCTA } from "@/components/sections/OrderCTA";
import { site } from "@/config/site";
import { resolveOrderUrl } from "@/lib/order-links";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Langsung ke konten
      </a>
      <BrandIntro />
      <Navbar orderReady={Boolean(resolveOrderUrl(site.orderFormUrl))} />
      <main id="main">
        <Hero />
        <div className="brand-ribbon" aria-label="Filosofi NUSARA">
          <span>Berakar pada budaya</span>
          <span aria-hidden="true">✧</span>
          <span>Dirancang untuk hari ini</span>
          <span aria-hidden="true">✧</span>
          <span>Dikenakan dengan cerita</span>
        </div>
        <Collection />
        <WhyNusara />
        <OurHeritage />
        <Lookbook />
        <FAQ />
        <OrderCTA />
      </main>
      <Footer />
    </>
  );
}
