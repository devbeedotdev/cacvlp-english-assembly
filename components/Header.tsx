"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const ROUTE_ROOT = "/cacvlp-english-assembly";
const LOGO_URL = "/images/logo.jpeg";

const NAV_LINKS = [
  { label: "Home", href: `${ROUTE_ROOT}` },
  { label: "About", href: `${ROUTE_ROOT}/about` },
  // { label: "Programs", href: `${ROUTE_ROOT}/programs` },
  { label: "Leaders", href: `${ROUTE_ROOT}/leaders` },
  // { label: "Workers", href: `${ROUTE_ROOT}/workers` },
  { label: "Contact", href: `${ROUTE_ROOT}/contact` },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;
    const heroSection = document.getElementById("hero-section");

    const onScroll = () => {
      const heroBottom = heroSection?.getBoundingClientRect().bottom ?? null;
      const pastHero = typeof heroBottom === "number" ? heroBottom <= 0 : false;
      setIsPastHero(pastHero);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 mb-[-88px] border-b backdrop-blur-sm transition-colors duration-300  ${
        isPastHero
          ? "border-slate-200 bg-white/92"
          : "border-transparent bg-slate-950/30"
      }`}
    >
      <div className="relative flex w-full items-center px-4 py-3 sm:px-6 lg:px-10 xl:px-14">
        <Link
          href={ROUTE_ROOT}
          className="group inline-flex items-center gap-3"
          aria-label="Christ Apostolic Church Home"
        >
         <span className={`relative h-12 w-12 overflow-hidden rounded-full sm:h-14 sm:w-14 ${isPastHero ? "border border-slate-300" : "border border-white/30"}`}>
            <Image
              src={LOGO_URL}
              alt="Christ Apostolic Church logo"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 48px, 56px"
              priority
            />
          </span>
          
          <span className={`hidden text-sm font-medium tracking-tight sm:block ${isPastHero ? "text-slate-900" : "text-white"}`}>
            Christ Apostolic Church Victory Land Pleasure DCC
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex md:ml-12 xl:ml-20 2xl:ml-0">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
                isPastHero
                  ? "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  : "text-slate-100/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href={`${ROUTE_ROOT}/join-us`}
            className="hidden rounded-lg bg-gradient-to-r from-red-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 md:inline-flex"
          >
            Join Us
          </Link>
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-lg border p-2 transition-colors duration-200 md:hidden ${
              isPastHero
                ? "border-slate-300 text-slate-800 hover:bg-slate-100"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-white/20 bg-slate-950/70 backdrop-blur-sm md:hidden">
          <div className="w-full px-4 pb-4 pt-2 sm:px-6">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-slate-100/90 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href={`${ROUTE_ROOT}/join-us`}
              className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
              onClick={() => setIsOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
