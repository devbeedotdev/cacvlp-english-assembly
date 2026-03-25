"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Cake, ChevronRight } from "lucide-react";
import { MEMBERS } from "@/src/lib/mock-db";
import { isCelebrantToday } from "@/src/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

function buildAppreciation(name: string, position: string) {
  // Keep it short, personal, and respectful.
  return `Happy Birthday, ${name}! Thank you for serving with grace in your role as ${position.toLowerCase()}. We celebrate you with joy.`;
}

export function BirthdayHighlight() {
  const [now, setNow] = useState(() => new Date());
  const [activeIdx, setActiveIdx] = useState(0);
  const [swapDir, setSwapDir] = useState<"right" | "left">("right");

  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 10_000);
    return () => window.clearInterval(t);
  }, []);

  const celebrants = useMemo(() => {
    return MEMBERS.filter((m) => isCelebrantToday(m.dob, now));
  }, [now]);

  useEffect(() => {
    // Keep the active celebrant index valid as the "today" window updates.
    setActiveIdx((idx) => {
      const max = celebrants.length - 1;
      if (max < 0) return 0;
      return idx > max ? 0 : idx;
    });
  }, [celebrants.length]);

  if (celebrants.length === 0) {
    return null;
  }

  const active = celebrants[activeIdx] ?? celebrants[0];

  return (
    <section
      id="birthday-highlight-section"
      className="relative isolate w-full overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24 pb-28 sm:pb-32 lg:pb-28"
      aria-label="Birthday highlight"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(196,165,116,0.18),transparent_45%),radial-gradient(circle_at_80%_65%,rgba(244,114,182,0.12),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/70 via-slate-950/35 to-slate-950/80" />

      <div className="absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#c4a574]/20 to-transparent" />

      <div className="relative z-[5] w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <div className="mx-auto w-full">
          <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(18rem,28rem),1fr] lg:items-stretch lg:gap-14 xl:gap-16 2xl:gap-x-24">
            <ScrollReveal variant="left" once>
              <div
                key={active.id}
                className={
                  swapDir === "right"
                    ? "animate-[birthdaySwapInRight_650ms_ease-out_both] motion-reduce:animate-none"
                    : "animate-[birthdaySwapInLeft_650ms_ease-out_both] motion-reduce:animate-none"
                }
              >
                <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] ring-1 ring-white/10 sm:min-h-[30rem] lg:min-h-[34rem]">
                  <Image
                    src={active.photoUrl}
                    alt={`${active.name} portrait`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 28rem"
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                    <div className="flex items-center gap-2">
                      <Cake className="h-4 w-4 text-[#c4a574]" aria-hidden />
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                        Today
                      </p>
                      {celebrants.length > 1 ? (
                        <span className="ml-2 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                          {activeIdx + 1} of {celebrants.length}
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {active.name}
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      {active.position}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="flex items-stretch">
              <div className="w-full">
                <ScrollReveal variant="up" once>
                  <div
                    key={active.id}
                    className={
                      swapDir === "right"
                        ? "animate-[birthdaySwapInRight_650ms_ease-out_both] motion-reduce:animate-none"
                        : "animate-[birthdaySwapInLeft_650ms_ease-out_both] motion-reduce:animate-none"
                    }
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                      Birthday highlight
                    </p>
                    <h2
                      className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                      style={{
                        fontFamily:
                          "var(--font-playfair), ui-serif, Georgia, serif",
                      }}
                    >
                      Celebrating{" "}
                      <span className="text-[#c4a574]">{active.name}</span>{" "}
                      today
                    </h2>
                    <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                      We honor our members with prayers and gratitude. May your new year be filled with strength, peace, and joy.
                    </p>

                    <div className="mt-6 rounded-[1.75rem] border border-white/12 bg-white/5 p-6 shadow-[0_18px_60px_-50px_rgba(255,255,255,0.18)] backdrop-blur-sm sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                        Appreciation
                      </p>
                      <p className="mt-3 text-[16px] leading-relaxed text-white/90">
                        {buildAppreciation(active.name, active.position)}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-white/70">
                        May the Lord bless you with celebration, wisdom, and continued grace.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {celebrants.length > 1 ? (
            <button
              type="button"
              className="absolute bottom-6 right-6 z-[20] inline-flex rounded-full border border-white/20 bg-white/10 p-3 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/15"
              aria-label="Next birthday celebrant"
              onClick={() =>
                setActiveIdx((idx) => {
                  const next = (idx + 1) % celebrants.length;
                  setSwapDir(
                    next === 0 && idx === celebrants.length - 1
                      ? "left"
                      : "right",
                  );
                  return next;
                })
              }
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

