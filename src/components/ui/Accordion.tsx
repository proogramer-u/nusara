"use client";
import { useId, useState } from "react";
import { Plus } from "lucide-react";

type AccordionItem = { question: string; answer: string; draft: boolean };
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefix = useId();
  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${prefix}-question-${index}`;
        const panelId = `${prefix}-answer-${index}`;
        return (
          <div className="faq-item" key={item.question}>
            <h3>
              <button
                className="faq-trigger"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                {item.question}
                <Plus size={18} aria-hidden="true" />
              </button>
            </h3>
            <div
              className="faq-panel"
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              data-open={open}
              inert={!open}
            >
              <div className="faq-panel-inner">
                <div className="faq-answer">
                  {item.draft && (
                    <span className="draft-label">
                      Menunggu konfirmasi NUSARA
                    </span>
                  )}
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
