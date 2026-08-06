"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site-config";
import { Brand } from "@/components/ui/Brand";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <Brand compact />
        <nav className="navbar__desktop" aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <a className="navbar__cta" href="#contact">Build with TactiqoAI</a>
        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {siteConfig.navigation.map((item, index) => (
              <motion.a
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.035 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
              </motion.a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

