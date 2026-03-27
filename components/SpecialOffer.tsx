"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export function SpecialOffer() {
  return (
    <section
      id="special-offer-section"
      aria-label="Special Opportunity"
      className="relative isolate w-full overflow-hidden border-t border-b border-stone-200/70 bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#c4a574]/35 to-transparent" />

      <div className="relative z-[1] w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <ScrollReveal once variant="up">
          <div className="mx-auto max-w-5xl">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0a0f1a]/55">
              <Sparkles className="h-3.5 w-3.5 text-[#a67c3d]" aria-hidden />
              Special opportunity
            </p>

            <h2
              className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#0a0f1a] sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
              style={{
                fontFamily: "var(--font-playfair), ui-serif, Georgia, serif",
              }}
            >
              Limited opportunity — only ₦50,000!
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Act now before the price reverts to its original value.
            </p>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="text-4xl font-semibold tracking-tight text-[#0a0f1a] tabular-nums sm:text-5xl">
                  ₦50,000
                </span>
              
              </div>

              <Link
                href="https://www.getcheapecommerce.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#0a0f1a] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#141b2e] hover:shadow-md sm:w-auto sm:min-w-[180px]"
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
