import { site } from "@/config/site";
import { resolveOrderUrl } from "@/lib/order-links";
import { faq } from "@/data/faq";
import { Accordion } from "@/components/ui/Accordion";
export function FAQ() {
  const orderReady = Boolean(resolveOrderUrl(site.orderFormUrl));
  const items = faq.map((item) => ({
    question: item.question,
    answer:
      orderReady && item.answerWhenOrderingEnabled
        ? item.answerWhenOrderingEnabled
        : item.answer,
    draft:
      item.draft && !(orderReady && Boolean(item.answerWhenOrderingEnabled)),
  }));
  return (
    <section className="section faq-section" id="faq">
      <div>
        <p className="section-kicker">Sebelum memilih</p>
        <h2>
          Yang ingin <br />
          kamu tahu.
        </h2>
        <p>Kenali NUSARA sedikit lebih dekat.</p>
      </div>
      <Accordion items={items} />
    </section>
  );
}
