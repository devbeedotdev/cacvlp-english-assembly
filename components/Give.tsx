"use client";

import { GIVE_INFO } from "@/src/lib/mock-db";
import Image from "next/image";
import { useMemo, useState } from "react";

function safeCopy(text: string): boolean {
  try {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // ignore and fallback
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export function Give() {
  const [copied, setCopied] = useState<"none" | "accountNumber">("none");

  const copyLabel = useMemo(() => {
    if (copied === "accountNumber") return "Copied";
    return "Copy";
  }, [copied]);

  // Color washes tuned to feel like `UpcomingProgram` (burgundy → slate → plum),
  // but kept calm so the page remains respectful and readable.
  const GIVE_OVERLAY_TUNING = {
    mainWashLeft: 0.62,
    mainWashMid: 0.58,
    mainWashRight: 0.6,
    depthLeft: 0.36,
    depthMid: 0.34,
    depthRight: 0.36,
    vignetteTop: 0.12,
    vignetteBottom: 0.55,
  } as const;

  return (
    <section
      id="give-section"
      className="relative isolate w-full overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24"
    >
      {/* Background image (full-bleed) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/images/box.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 blur-[1px]"
        />
      </div>

      {/* Cinematic color washes (stacked translucent gradients) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(100deg, rgba(74,51,51,${GIVE_OVERLAY_TUNING.mainWashLeft}) 0%, rgba(76,76,84,${GIVE_OVERLAY_TUNING.mainWashMid}) 48%, rgba(59,51,59,${GIVE_OVERLAY_TUNING.mainWashRight}) 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(100deg, rgba(32,22,22,${GIVE_OVERLAY_TUNING.depthLeft}) 0%, rgba(28,28,32,${GIVE_OVERLAY_TUNING.depthMid}) 50%, rgba(26,22,28,${GIVE_OVERLAY_TUNING.depthRight}) 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,${GIVE_OVERLAY_TUNING.vignetteTop}), transparent, rgba(0,0,0,${GIVE_OVERLAY_TUNING.vignetteBottom}))`,
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#c4a574]/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#c4a574]/20 to-transparent" />

      <div className="relative z-[5] w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <div className="mx-auto w-full">
          <div className="grid min-w-0 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-7 opacity-0 animate-[fadeIn_900ms_ease-out_forwards] motion-reduce:animate-none motion-reduce:opacity-100">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                Give
              </p>
              <h2
                className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                style={{
                  fontFamily: "var(--font-playfair), ui-serif, Georgia, serif",
                }}
              >
                Support the work of the Lord with a willing heart
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                2 Cor. 9:6-7 — Remember this: Whoever sows sparingly will
                also reap sparingly, and whoever sows generously will also
                reap generously. Each of you should give what you have
                decided in your heart to give, not reluctantly or under
                compulsion, for God loves a cheerful giver.
              </p>
            </div>

            <div className="lg:col-span-5 opacity-0 animate-[slideInSoft_900ms_ease-out_120ms_forwards] motion-reduce:animate-none motion-reduce:opacity-100">
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_18px_60px_-40px_rgba(0,0,0,0.65)] backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                    Tithes, offerings & seed
                  </p>

                  <p className="mt-2 text-sm text-white/85">
                    Use the details below to give to the church.
                  </p>

                  <div className="mt-5 space-y-4">
                    <div className="grid grid-cols-[120px,1fr] items-start gap-x-4 gap-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                        Bank
                      </p>
                      <p className="text-sm leading-relaxed text-white/90">
                        {GIVE_INFO.bankName}
                      </p>
                    </div>

                    <div className="grid grid-cols-[120px,1fr] items-start gap-x-4 gap-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                        Account name
                      </p>
                      <p className="text-sm leading-relaxed text-white/90 select-text">
                        {GIVE_INFO.accountName}
                      </p>
                    </div>

                    <div className="grid grid-cols-[120px,1fr] items-start gap-x-4 gap-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                        Account number
                      </p>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-mono text-sm text-white/95 select-text break-all">
                            {GIVE_INFO.accountNumber}
                          </p>
                          <button
                            type="button"
                            className="rounded-lg border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 transition-colors hover:bg-white/15 active:bg-white/20"
                            aria-label="Copy account number"
                            onClick={() => {
                              const ok = safeCopy(GIVE_INFO.accountNumber);
                              if (ok) setCopied("accountNumber");
                            }}
                          >
                            {copyLabel}
                          </button>
                        </div>
                        <p className="text-xs text-white/60">
                          Tip: you can tap the number to select it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-white/90">
                    Payment note
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    Please specify Tithe, Offering, or Seed in the description field of your transfer. Thank you for your faithfulness!

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
