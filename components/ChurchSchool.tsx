import Image from "next/image";
import { BookOpen, CalendarDays, Users } from "lucide-react";
import { CHURCH_INFO } from "@/src/lib/mock-db";
import ScrollReveal from "@/components/ScrollReveal";

const UNSPLASH_IMAGE_URL =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30";

export function ChurchSchool() {
  return (
    <section
      id="church-school-section"
      aria-labelledby="church-school-heading"
      className="relative isolate w-full overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <Image
          src={UNSPLASH_IMAGE_URL}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
      </div>

      {/* Cinematic wash (consistent with Give/Birthday) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(100deg, rgba(74,51,51,0.60) 0%, rgba(76,76,84,0.56) 48%, rgba(59,51,59,0.58) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(100deg, rgba(32,22,22,0.35) 0%, rgba(28,28,32,0.33) 50%, rgba(26,22,28,0.35) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.10), transparent, rgba(0,0,0,0.62))",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#c4a574]/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#c4a574]/20 to-transparent" />

      <div className="relative z-[5] w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <div className="w-full">
          <div className="grid min-w-0 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <ScrollReveal className="lg:col-span-7" variant="up" once>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                Church school
              </p>
              <h2
                id="church-school-heading"
                className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                style={{
                  fontFamily: "var(--font-playfair), ui-serif, Georgia, serif",
                }}
              >
                A structured path for learning the Word—clearly and consistently.
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                {CHURCH_INFO.churchSchool}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/12 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#c4a574]" aria-hidden />
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                      Who it’s for
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Children, teens, and adults—age-based classes for clear
                    understanding and steady growth.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/12 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-[#c4a574]" aria-hidden />
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                      What we teach
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Bible foundations, character development, prayer habits, and
                    practical discipleship for everyday life.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/12 bg-white/5 p-5 backdrop-blur-sm sm:col-span-2">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-[#c4a574]" aria-hidden />
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                      When it holds
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Weekly (Sunday). Time varies by class—ask a worker after service
                    or contact the church for the current schedule.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal
              className="lg:col-span-5"
              variant="right"
              once
              delayMs={120}
            >
              <div className="relative min-h-[20rem] overflow-hidden rounded-[2rem] ring-1 ring-white/10 sm:min-h-[24rem] lg:min-h-[30rem]">
                <Image
                  src={UNSPLASH_IMAGE_URL}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 28rem"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                    A place to grow
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Clear teaching, patient guidance, and consistent learning—so every
                    member matures in Christ.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

