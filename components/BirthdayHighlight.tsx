"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
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
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shownCelebrantsRef = useRef<Set<string>>(new Set());
  const rafRef = useRef<number | null>(null);

  // Color washes tuned to feel like `Give` (burgundy → slate → plum),
  // but slightly lighter so the birthday background photo still shows.
  const BIRTHDAY_OVERLAY_TUNING = {
    mainWashLeft: 0.58,
    mainWashMid: 0.54,
    mainWashRight: 0.56,
    depthLeft: 0.34,
    depthMid: 0.32,
    depthRight: 0.34,
    vignetteTop: 0.10,
    vignetteBottom: 0.58,
  } as const;

  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 10_000);
    return () => window.clearInterval(t);
  }, []);

  const celebrants = useMemo(() => {
    return MEMBERS.filter((m) => isCelebrantToday(m.dob, now));
  }, [now]);

  const activeId =
    celebrants[activeIdx]?.id ?? celebrants[0]?.id ?? null;
  const active = celebrants[activeIdx] ?? celebrants[0];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (!hit) return;
        setHasEntered(true);
        obs.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEntered) return;
    if (!activeId) return;
    if (shownCelebrantsRef.current.has(activeId)) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      shownCelebrantsRef.current.add(activeId);
      return;
    }

    const canvas = canvasRef.current;
    const host = sectionRef.current;
    if (!canvas || !host) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize to the section’s box so it stays crisp.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = host.getBoundingClientRect();
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Stop any previous animation.
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const colors = [
      "rgba(196,165,116,0.95)", // warm gold
      "rgba(255,255,255,0.95)", // white
      "rgba(244,114,182,0.85)", // soft rose
      "rgba(147,197,253,0.75)", // soft sky
    ];

    const particleCount = 120;
    const particles = Array.from({ length: particleCount }, () => {
      const angle = (-Math.PI / 2) + (Math.random() * 0.9 - 0.45);
      const speed = 7 + Math.random() * 7.5;
      return {
        x: rect.width * 0.55 + (Math.random() * 140 - 70),
        y: rect.height * 0.22 + (Math.random() * 50 - 25),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        g: 0.22 + Math.random() * 0.12,
        r: 2.2 + Math.random() * 2.6,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.35,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
      };
    });

    const start = performance.now();
    const duration = 1200;

    const step = (t: number) => {
      const elapsed = t - start;
      const p = Math.min(1, elapsed / duration);

      ctx.clearRect(0, 0, rect.width, rect.height);

      // Fade out towards the end (soft).
      const alpha = 1 - Math.pow(p, 1.7);

      for (const s of particles) {
        s.life += 1;
        s.vy += s.g;
        s.x += s.vx;
        s.y += s.vy;
        s.rot += s.vr;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);
        ctx.fillStyle = s.color;
        ctx.fillRect(-s.r, -s.r * 0.55, s.r * 2, s.r * 1.1);
        ctx.restore();
      }

      if (elapsed < duration) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        ctx.clearRect(0, 0, rect.width, rect.height);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(step);
    shownCelebrantsRef.current.add(activeId);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [activeId, hasEntered]);

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

  return (
    <section
      id="birthday-highlight-section"
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24 pb-28 sm:pb-32 lg:pb-28"
      aria-label="Birthday highlight"
    >
      {/* Background image (full-bleed) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/images/birthday.jpg"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
      </div>

      {/* Cinematic color washes (stacked translucent gradients) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(100deg, rgba(74,51,51,${BIRTHDAY_OVERLAY_TUNING.mainWashLeft}) 0%, rgba(76,76,84,${BIRTHDAY_OVERLAY_TUNING.mainWashMid}) 48%, rgba(59,51,59,${BIRTHDAY_OVERLAY_TUNING.mainWashRight}) 100%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(100deg, rgba(32,22,22,${BIRTHDAY_OVERLAY_TUNING.depthLeft}) 0%, rgba(28,28,32,${BIRTHDAY_OVERLAY_TUNING.depthMid}) 50%, rgba(26,22,28,${BIRTHDAY_OVERLAY_TUNING.depthRight}) 100%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,${BIRTHDAY_OVERLAY_TUNING.vignetteTop}), transparent, rgba(0,0,0,${BIRTHDAY_OVERLAY_TUNING.vignetteBottom}))`,
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#c4a574]/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#c4a574]/20 to-transparent" />

      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-[3]"
        aria-hidden="true"
      />

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

