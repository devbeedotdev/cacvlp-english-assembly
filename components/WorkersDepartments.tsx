"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { DEPARTMENTS } from "@/src/lib/mock-db";
import React from "react";

const VISIBLE_DEPARTMENTS = DEPARTMENTS.slice(0, 3);
const AUTO_ADVANCE_MS = 6000;
const GROUP_SECTION_BG = "/images/group_pic.jpg";

export function WorkersDepartments() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDir, setSlideDir] = useState<"left" | "right">("right");

  const count = VISIBLE_DEPARTMENTS.length;
  const active = VISIBLE_DEPARTMENTS[activeIndex];

  const goNext = useCallback(() => {
    setActiveIndex((i) => {
      const next = (i + 1) % count;
      setSlideDir(next < i ? "left" : "right");
      return next;
    });
  }, [count]);

  useEffect(() => {
    const id = window.setInterval(goNext, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [goNext]);

  const slideAnim =
    slideDir === "right"
      ? "animate-[deptSlideFromRight_680ms_cubic-bezier(0.22,1,0.36,1)_both]"
      : "animate-[deptSlideFromLeft_680ms_cubic-bezier(0.22,1,0.36,1)_both]";

  return (
    <section
      id="workers-departments-section"
      aria-labelledby="workers-departments-heading"
      className="relative w-full overflow-hidden bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <Image
          src={GROUP_SECTION_BG}
          alt=""
          fill
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/65 to-slate-950/95" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(37,99,235,0.24),transparent_42%),radial-gradient(circle_at_88%_78%,rgba(220,38,38,0.18),transparent_46%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-300">
              Workers &amp; departments
            </p>
            <h2
              id="workers-departments-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl"
              style={{
                fontFamily: "var(--font-playfair), ui-serif, Georgia, serif",
              }}
            >
              Many teams, one mission
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              One spotlight at a time—meet three teams that help our city on
              Sunday and through the week.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <article
              key={active.id}
              className={`relative motion-reduce:animate-none ${slideAnim}`}
            >
              <div className="grid items-center gap-12 lg:grid-cols-[minmax(18rem,28rem),1fr] lg:gap-14 xl:gap-16">
                <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] sm:min-h-[30rem] lg:min-h-[34rem]">
                  <Image
                    src={active.imageUrl}
                    alt={`${active.name} — department`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 28rem"
                    className="object-cover"
                    priority={activeIndex === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-200">
                      {active.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-full rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
                      Department spotlight
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.35rem] xl:text-[2.5rem]">
                      {active.name}
                    </h3>
                    <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-[1.05rem] lg:text-[1.1rem]">
                      {active.summary}
                    </p>
                    <p className="sr-only" aria-live="polite">
                      Now showing: {active.name}.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
