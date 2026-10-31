import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { resolveOrderUrl } from "@/lib/order-links";
export function OrderLink({
  prefilledUrl,
  className = "",
  compact = false,
}: {
  prefilledUrl?: string;
  className?: string;
  compact?: boolean;
}) {
  const url = resolveOrderUrl(site.orderFormUrl, prefilledUrl);
  return url ? (
    <a
      className={`button ${className}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {compact ? "Pesan Sekarang" : "Pesan melalui Google Form"}
      <ArrowUpRight size={16} aria-hidden="true" />
      <span className="sr-only"> (dibuka di tab baru)</span>
    </a>
  ) : (
    <a className={`button pending ${className}`} href="#order">
      {site.pendingOrderLabel}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}
