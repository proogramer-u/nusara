import Image from "next/image";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { Brand } from "@/components/ui/Brand";
import { site, footerContent } from "@/config/site";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" aria-label="NUSARA — kembali ke beranda">
              <Brand />
            </a>
            <p>{footerContent.description}</p>
            <div className="footer-contact">
              {site.instagramUrl && (
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram NUSARA (tab baru)"
                >
                  Instagram <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
              {site.contactEmail && (
                <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
              )}
            </div>
          </div>
          <nav className="footer-columns" aria-label="Navigasi footer">
            {footerContent.groups.map((group) => (
              <div className="footer-column" key={group.title}>
                <h3>{group.title}</h3>
                {group.links.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>{site.tagline}</span>
          <span>© 2026 NUSARA. Seluruh hak cipta dilindungi.</span>
          <a href="#home" aria-label="Kembali ke atas">
            <ArrowUp size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="footer-art" aria-hidden="true">
        <Image src="/images/products/motif.webp" alt="" fill sizes="100vw" />
        <span>NUSARA</span>
        <p>Berakar pada tradisi. Tumbuh dalam keseharian.</p>
      </div>
    </footer>
  );
}
