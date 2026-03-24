import { BIBLE_VERSES } from "@/src/lib/mock-db";

const getDayOfYear = (date: Date): number => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff =
    date.getTime() -
    start.getTime() +
    (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60_000;
  return Math.floor(diff / 86_400_000);
};

const getVerseForToday = (): string => {
  const dayOfYear = getDayOfYear(new Date());
  return BIBLE_VERSES[(dayOfYear - 1) % BIBLE_VERSES.length];
};

export function DailyVerse() {
  const verse = getVerseForToday();

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative overflow-hidden px-2 py-6 sm:px-4">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(37,99,235,0.1),transparent_35%),radial-gradient(circle_at_85%_100%,rgba(220,38,38,0.09),transparent_40%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-blue-700">
            Daily Bread
          </p>
          <blockquote className="mx-auto mt-6 max-w-3xl">
            <span className="block text-6xl leading-none text-red-500/60 sm:text-7xl">
              &ldquo;
            </span>
            <p className="-mt-3 text-pretty text-lg leading-relaxed text-slate-700 sm:text-2xl">
              {verse}
            </p>
            <span className="mt-2 block text-6xl leading-none text-blue-600/60 sm:text-7xl">
              &rdquo;
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
