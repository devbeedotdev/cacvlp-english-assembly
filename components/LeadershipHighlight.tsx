"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  quote: string;
  photoUrl: string;
}

const LEADERS: LeaderProfile[] = [
  {
    id: "leader-1",
    name: "Pastor Samuel Adeyemi",
    role: "Head Pastor",
    quote:
      "We are called to raise people of prayer, purpose, and Christlike character in every season.",
    photoUrl: "/images/abolaji.jpg",
  }
  ,
  {
    id: "leader-2",
    name: "Pastor Ruth Oluwatoyin",
    role: "Assistant Pastor",
    quote:
      "The presence of God brings healing to hearts and clarity to destiny. Keep walking in grace.",
    photoUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: "leader-3",
    name: "Brother Michael Ajayi",
    role: "Prayer Unit Lead",
    quote:
      "Prayer is our lifeline as a church family. Through prayer, we align with heaven and walk in victory.",
    photoUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

const AUTO_SLIDE_MS = 5500;

export function LeadershipHighlight() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % LEADERS.length);
    }, AUTO_SLIDE_MS);

    return () => window.clearInterval(timer);
  }, []);

  const activeLeader = LEADERS[activeIndex];

  return (
    <section
      id="leadership-highlight-section"
      className="relative w-full overflow-hidden bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-45"
        style={{
          backgroundImage:
            "url('/images/hands.jpg')",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/94 via-slate-950/86 to-slate-950/94" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_92%_80%,rgba(220,38,38,0.22),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-300">
            Leadership Highlight
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Shepherds of Vision and Service
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <article
            key={activeLeader.id}
            className="relative animate-[slideInSoft_650ms_ease-out_forwards]"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(18rem,28rem),1fr] lg:gap-12 xl:gap-16">
              <div className="relative min-h-[31rem] overflow-hidden rounded-[2rem] sm:min-h-[36rem] lg:min-h-[41rem]">
                <div className="absolute inset-0 scale-[1.02]">
                  <Image
                    src={activeLeader.photoUrl}
                    alt={activeLeader.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40rem"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/25" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-200">
                    {activeLeader.role}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold sm:text-4xl">
                    {activeLeader.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-center">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm sm:p-7">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-300">
                    Pastoral Voice
                  </p>
                  <p className="mt-5 max-w-3xl text-pretty text-xl leading-relaxed text-slate-100 sm:text-[2rem] sm:leading-relaxed">
                    &ldquo;{activeLeader.quote}&rdquo;
                  </p>
                  <div className="mt-7 h-[2px] w-28 bg-gradient-to-r from-red-500 via-white/70 to-blue-500" />
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
                    A leadership culture centered on Scripture, prayer, and
                    practical care for every member.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
