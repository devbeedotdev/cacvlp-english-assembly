import Image from "next/image";
import { CHURCH_INFO } from "@/src/lib/mock-db";
import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export function AboutUs() {
  return (
    <section
      id="about-us-section"
      className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Pastor image as a true background layer (not an inset figure). */}
      <div
        id="about-us-background-image"
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src="/images/pastor.JPG"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] opacity-100"
        />
      </div>

      {/* Warm, trust-building scrim so text stays readable. */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-br from-slate-950/75 via-slate-950/55 to-slate-950/70" />

      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_15%_10%,rgba(37,99,235,0.10),transparent_38%),radial-gradient(circle_at_80%_60%,rgba(220,38,38,0.08),transparent_44%)]" />
      <div className="absolute inset-x-0 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="relative z-[5] w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <div className="w-full">
          <div className="grid min-w-0 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <ScrollReveal
              className="lg:col-span-7"
              variant="up"
              once
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                About us
              </p>
              <h2
                className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                style={{
                  fontFamily: "var(--font-playfair), ui-serif, Georgia, serif",
                }}
              >
                A Christ-centered community of prayer, worship, and discipleship.
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                {CHURCH_INFO.aboutUs}
              </p>

              <div className="mt-7 inline-flex items-start gap-3 rounded-xl border border-white/15 bg-white/8 px-4 py-3 shadow-[0_18px_60px_-60px_rgba(255,255,255,0.25)] backdrop-blur-md">
                <MapPin className="mt-0.5 h-5 w-5 flex-none text-white/80" />
                <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                  {CHURCH_INFO.address}
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                
               
              </div>
            </ScrollReveal>

            <ScrollReveal
              className="lg:col-span-5"
              variant="down"
              once
              delayMs={120}
            >
              <div className="flex flex-col gap-8">

                {/* Mission (frosted glass blur) */}
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-[color:var(--primary)]/20 to-white/10">
               
                  <div className="rounded-[1.25rem] bg-white/10 p-5 backdrop-blur-xl ring-1 ring-white/15 shadow-[0_18px_60px_-40px_rgba(0,0,0,0.55)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                      Mission
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      We raise disciples who reflect the heart of Jesus in family, work, and society.
                    </p>
                  </div>
                </div>
               

                {/* Core values (frosted glass blur) */}
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-[color:var(--primary)]/20 to-white/10">
                  <div className="rounded-[1.25rem] bg-slate-950/35 p-6 backdrop-blur-xl ring-1 ring-white/12 shadow-[0_18px_60px_-36px_rgba(2,6,23,0.55)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                      Core Values
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-white/90">
                      <li className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--primary)]" />
                        Worship that is reverent and welcoming.
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--primary)]" />
                        Clear biblical teaching and prayerful fellowship.
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--primary)]" />
                        A community that supports members and first-time visitors.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

