import Image from "next/image";
import { site } from "@/config/site";
import { resolveOrderUrl } from "@/lib/order-links";
import { OrderLink } from "@/components/ui/OrderLink";
export function OrderCTA() {
  const ready = Boolean(resolveOrderUrl(site.orderFormUrl));
  return (
    <section id="order" className="order-section">
      <Image
        className="order-motif"
        src="/images/brand/border-motif.webp"
        alt=""
        width={600}
        height={80}
      />
      <p className="section-kicker">Bawa ceritamu bersama NUSARA</p>
      <h2>
        Ready to Wear
        <br />
        Your Heritage?
      </h2>
      <p>Temukan hijab NUSARA yang sesuai dengan gayamu.</p>
      {ready ? (
        <OrderLink />
      ) : (
        <>
          <p className="order-status">{site.pendingOrderLabel}</p>
          <p className="order-note">{site.pendingOrderDescription}</p>
          <a className="button button-light" href="#collection">
            Lihat Konsep Koleksi<span aria-hidden="true">↗</span>
          </a>
        </>
      )}
    </section>
  );
}
