"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { navLinks } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, mass: 0.4 });

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  // lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // close the menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // scroll-spy (home page sections)
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "my-2 rounded-2xl border border-white/10 bg-base/70 backdrop-blur-xl lg:mx-auto lg:max-w-6xl"
              : "my-2 border border-transparent"
          }`}
        >
          <Link href="/" className="group flex items-center gap-2.5">
            <Image
              src="/images/logo.webp"
              alt="Codevo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="ltr text-lg font-extrabold tracking-tight text-white">
              Codevo
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                pathname === "/" && link.href === `/#${activeSection}`;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/8 text-white"
                      : "text-mist/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/#contact" className="btn-brand hidden px-5 py-2.5 text-sm lg:inline-flex">
            شروع همکاری
          </Link>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl text-white lg:hidden"
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute right-0 top-0 block h-0.5 w-6 rounded bg-current transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute right-0 top-1/2 block h-0.5 w-4 -translate-y-1/2 rounded bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 right-0 block h-0.5 w-6 rounded bg-current transition-all duration-300 ${
                  menuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* scroll progress */}
        <motion.div
          className="absolute inset-x-0 top-0 h-0.5 origin-right bg-gradient-to-l from-brand-bright via-brand to-brand-deep"
          style={{ scaleX: progress }}
        />
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-base/95 backdrop-blur-2xl lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.05 + i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl px-8 py-3.5 text-2xl font-bold text-mist transition-colors hover:text-brand-bright"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.05 + navLinks.length * 0.06, duration: 0.35 }}
              className="mt-6"
            >
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-brand px-8 py-3.5 text-base"
              >
                شروع همکاری
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
