"use client";

import Image from "next/image";
import { useCountdown } from "@/hooks/useCountdown";
import { UPCOMING_PROGRAMME } from "@/src/lib/mock-db";
import { Calendar, Clock } from "lucide-react";

const HOURGLASS_BG = "/images/hourglass.jpg";

/**
 * Darkness & tint for the Upcoming Program block
 * — edit these numbers in: components/UpcomingProgram.tsx
 *
 * All alphas are 0–1. Raise = darker / heavier; lower = lighter / more photo.
 * - mainWash*: primary burgundy → slate → plum layer
 * - depth*: secondary brown / cool veil
 * - vignette*: extra shade from top and bottom (black)
 * - hourglassOpacity: photo strength under the washes
 */
const UPCOMING_PROGRAM_TUNING = {
  hourglassOpacity: 0.5,
  mainWashLeft: 0.84,
  mainWashMid: 0.82,
  mainWashRight: 0.84,
  depthLeft: 0.46,
  depthMid: 0.44,
  depthRight: 0.46,
  vignetteTop: 0.14,
  vignetteBottom: 0.46,
} as const;

const pad = (value: number) => value.toString().padStart(2, "0");

export function UpcomingProgram() {
  const countdown = useCountdown(UPCOMING_PROGRAMME.targetDate);

  if (!countdown) {
    return null;
  }

  const eventStart = new Date(UPCOMING_PROGRAMME.targetDate);
  const dateLine = eventStart.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const timeLine = eventStart.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  const units = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ] as const;

  return (
    <section
      id="upcoming-program-section"
      aria-labelledby="upcoming-program-heading"
      className="relative isolate w-full overflow-hidden py-14 sm:py-16 lg:py-20"
    >
      {/* Bottom layer: full-width / full-height hourglass under color washes (cover = no side truncation) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ opacity: UPCOMING_PROGRAM_TUNING.hourglassOpacity }}
        aria-hidden
      >
        <div className="relative h-full w-full min-h-[16rem]">
          <Image
            src={HOURGLASS_BG}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>
      {/* Color washes (translucent) above hourglass — alphas from UPCOMING_PROGRAM_TUNING */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(100deg, rgba(74,51,51,${UPCOMING_PROGRAM_TUNING.mainWashLeft}) 0%, rgba(76,76,84,${UPCOMING_PROGRAM_TUNING.mainWashMid}) 48%, rgba(59,51,59,${UPCOMING_PROGRAM_TUNING.mainWashRight}) 100%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(100deg, rgba(32,22,22,${UPCOMING_PROGRAM_TUNING.depthLeft}) 0%, rgba(28,28,32,${UPCOMING_PROGRAM_TUNING.depthMid}) 50%, rgba(26,22,28,${UPCOMING_PROGRAM_TUNING.depthRight}) 100%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,${UPCOMING_PROGRAM_TUNING.vignetteTop}), transparent, rgba(0,0,0,${UPCOMING_PROGRAM_TUNING.vignetteBottom}))`,
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#c4a574]/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#c4a574]/20 to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <div className="w-full max-w-none">
          <div className="grid min-w-0 gap-12 lg:grid-cols-2 lg:items-end lg:gap-x-12 lg:gap-y-12 xl:gap-x-16 2xl:gap-x-24">
            <div className="min-w-0 lg:pr-4 xl:pr-8 2xl:pr-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b9a99a]">
                Upcoming program
              </p>
              <h2
                id="upcoming-program-heading"
                className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[2.85rem] 2xl:text-6xl"
                style={{
                  fontFamily: "var(--font-playfair), ui-serif, Georgia, serif",
                }}
              >
                {UPCOMING_PROGRAMME.title}
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base font-medium leading-relaxed text-[#faf7f3] sm:text-lg lg:max-w-none xl:max-w-3xl 2xl:max-w-4xl [text-shadow:0_1px_4px_rgba(0,0,0,0.55)]">
                {UPCOMING_PROGRAMME.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 text-sm text-[#ddd6ce] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-2">
                <span className="inline-flex items-start gap-2.5">
                  <Calendar
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#d4c4a8]/95"
                    aria-hidden
                  />
                  <span>{dateLine}</span>
                </span>
                <span className="inline-flex items-start gap-2.5">
                  <Clock
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#d4c4a8]/95"
                    aria-hidden
                  />
                  <span>{timeLine}</span>
                </span>
              </div>

              <p className="sr-only" aria-live="polite">
                Time remaining until the event: {countdown.days} days,{" "}
                {countdown.hours} hours, {countdown.minutes} minutes, and{" "}
                {countdown.seconds} seconds.
              </p>
            </div>

            <div
              className="min-w-0 w-full lg:justify-self-end"
              aria-label="Countdown to event"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a8d80] lg:text-end">
                Time remaining
              </p>
              <div
                className="mt-5 flex flex-wrap items-end gap-x-10 gap-y-8 sm:flex-nowrap sm:gap-x-12 md:gap-x-14 lg:justify-end lg:gap-x-12 xl:gap-x-16 2xl:gap-x-24"
                role="timer"
                aria-live="polite"
              >
                {units.map(({ label, value }) => (
                  <div
                    key={label}
                    className="min-w-[3.25rem] sm:min-w-[3.5rem] lg:min-w-[3.75rem]"
                  >
                    <p className="text-4xl font-semibold tabular-nums leading-none tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                      {pad(value)}
                    </p>
                    <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#9a8d80] sm:text-[11px]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
