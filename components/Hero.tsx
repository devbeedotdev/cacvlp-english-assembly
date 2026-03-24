import { CHURCH_INFO } from "@/src/lib/mock-db";
import { getBibleVerseForDate } from "@/src/lib/mock-db";

const HERO_IMAGE_URL = "/images/cac.jpg";

export function Hero() {
  const tagline = CHURCH_INFO.aboutUs.split(".")[0];
  const displayDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const verseForToday = getBibleVerseForDate().replace(/^Day\s+\d+:\s*/, "");

  return (
    <section
      id="hero-section"
      className="group relative isolate -mt-[88px] min-h-[60vh] overflow-visible pt-[75px]"
    >
      <div
        className="absolute inset-0 scale-[1.05] bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
        style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950/28 via-slate-900/12 to-slate-950/24"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(220,38,38,0.2),transparent_35%),radial-gradient(circle_at_75%_78%,rgba(37,99,235,0.2),transparent_42%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/82 via-slate-950/44 to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10 grid w-full gap-8 px-4 pb-14 pt-20 sm:px-6 sm:pb-16 sm:pt-28 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pb-24 lg:pt-28 xl:px-14 2xl:px-20">
        <div className="lg:col-span-8 xl:col-span-8">
          <div className="relative max-w-4xl rounded-2xl border border-white/20 bg-slate-950/45 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-sm sm:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/12"
              aria-hidden="true"
            />
            <p className="mb-5 inline-flex items-center rounded-full border border-white/35 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-white">
              CACVLP English Assembly
            </p>
            <h1
              className="text-balance text-4xl leading-[1.05] tracking-tight text-white opacity-0 animate-[fadeIn_900ms_ease-out_forwards] [text-shadow:0_12px_30px_rgba(2,6,23,0.75)] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-playfair), ui-serif, Georgia, serif" }}
            >
              <span className="sm:hidden">Christ Apostolic Church</span>
              <span className="hidden sm:inline">
                Christ Apostolic Church Victory Land
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-slate-100 opacity-0 animate-[fadeIn_1200ms_ease-out_120ms_forwards] sm:text-lg">
              {tagline}.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 opacity-0 animate-[fadeIn_1300ms_ease-out_200ms_forwards]">
              <a
                href="/cacvlp-english-assembly/live"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-red-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Join Live Worship
              </a>
              <a
                href="/cacvlp-english-assembly/media/sermons"
                className="inline-flex items-center rounded-xl border border-white/45 bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-colors duration-300 hover:bg-white/25"
              >
                Watch Sermons
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 xl:col-span-4 lg:place-self-end lg:w-full">
          <div className="w-full max-w-[30rem] rounded-2xl border border-white/20 bg-slate-950/45 p-5 opacity-0 shadow-[0_18px_45px_rgba(2,6,23,0.4)] backdrop-blur-sm animate-[fadeIn_1200ms_ease-out_260ms_forwards] lg:ml-auto lg:p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-200">
              Daily Bread
            </p>
            <p className="mt-3 text-2xl font-semibold text-white">{displayDate}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-100">
              {verseForToday}
            </p>
          </div>
         
        </div>
      </div>
      <div
        className="pointer-events-none absolute -left-28 -top-28 h-56 w-56 rounded-full bg-red-500/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[48%] top-[6%] h-24 w-24 rounded-full bg-white/15 blur-2xl"
        aria-hidden="true"
      />
    </section>
  );
}
