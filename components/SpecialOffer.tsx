"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export function SpecialOffer() {
  return (
    <section
      id="special-offer-section"
      aria-label="Special Opportunity"
      className="relative isolate w-full overflow-hidden bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(74,51,51,0.84) 0%, rgba(76,76,84,0.82) 48%, rgba(59,51,59,0.84) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(100deg, rgba(32,22,22,0.46) 0%, rgba(28,28,32,0.44) 50%, rgba(26,22,28,0.46) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.14), transparent, rgba(0,0,0,0.46))",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#c4a574]/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#c4a574]/20 to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <ScrollReveal once variant="up">
          <div className="mx-auto max-w-5xl">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#cdb9a0]">
              <Sparkles className="h-3.5 w-3.5 text-[#d4c4a8]" aria-hidden />
              Special Opportunity
            </p>

            <h2
              className="mt-4 max-w-4xl text-pretty text-[1.7rem] font-semibold leading-[1.25] tracking-[-0.01em] text-white sm:text-4xl sm:leading-tight lg:text-[2.75rem]"
              style={{
                fontFamily: "var(--font-playfair), ui-serif, Georgia, serif",
              }}
            >
              Are you a business owner who needs a website to sell your
              products online — even while you sleep?
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-[#f1ece6] sm:text-lg">
              Get a fully functional eCommerce website where you can list your
              products, accept secure payments 24/7, and manage your business with
              ease — all for a limited-time price of just ₦50,000.
            </p>
            <p className="mt-3 text-sm font-medium text-[#d4c4a8] sm:text-[15px]">
              Limited slots available before the price returns to normal.
            </p>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="text-4xl font-semibold tracking-tight text-white tabular-nums sm:text-5xl">
                  ₦50,000
                </span>
              
              </div>

              <Link
                href="https://www.getcheapecommerce.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-full border border-white/45 bg-white/15 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25 sm:w-auto sm:min-w-[180px]"
                aria-label="Learn more about GetCheapEcommerce"
              >
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
