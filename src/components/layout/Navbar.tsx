"use client";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, site } from "@/config/site";
import { Brand } from "@/components/ui/Brand";

export function Navbar({ orderReady }: { orderReady: boolean }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeMenu = () => {
    dialog.current?.close();
    setOpen(false);
    toggle.current?.focus();
  };
  useEffect(() => {
    if (!open) return;
    const menu = dialog.current;
    menu?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 761px)");
    const onResize = () => {
      if (desktop.matches) {
        menu?.close();
        setOpen(false);
      }
    };
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", onResize);
      menu?.close();
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a className="brand-link" href="#home" aria-label="NUSARA — beranda">
          <Brand />
        </a>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navigation.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="nav-order" href="#order">
          {orderReady ? "Pesan Sekarang" : "Info Pemesanan"}
          <span aria-hidden="true">↗</span>
        </a>
        <button
          className="menu-toggle"
          ref={toggle}
          aria-label="Buka menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </div>
      <dialog
        ref={dialog}
        className="mobile-menu"
        aria-label="Menu NUSARA"
        onClose={() => setOpen(false)}
        onCancel={() => {
          setOpen(false);
          toggle.current?.focus();
        }}
      >
        <div className="mobile-menu-header">
          <Brand />
          <button
            className="menu-close"
            aria-label="Tutup menu"
            onClick={closeMenu}
            autoFocus
          >
            <X />
          </button>
        </div>
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navigasi seluler"
        >
          {navigation.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
              <ArrowUpRight aria-hidden="true" size={23} />
            </a>
          ))}
          <a className="mobile-order" href="#order" onClick={closeMenu}>
            {orderReady ? "Pesan Sekarang" : "Info Pemesanan"}
            <ArrowUpRight aria-hidden="true" size={23} />
          </a>
        </nav>
        <p className="mobile-menu-tagline">{site.tagline}</p>
      </dialog>
    </header>
  );
}
