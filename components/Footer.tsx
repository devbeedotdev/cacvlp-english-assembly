import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, MapPin } from "lucide-react";
import { CHURCH_INFO, CHURCH_SOCIAL_LINKS } from "@/src/lib/mock-db";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/SocialBrandIcons";

const ROUTE_ROOT = "/cacvlp-english-assembly";
const LOGO_URL = "/images/logo.jpeg";

const exploreLinks = [
  { label: "Home", href: `${ROUTE_ROOT}#hero-section` },
  { label: "About us", href: `${ROUTE_ROOT}#about-us-section` },
  { label: "Church school", href: `${ROUTE_ROOT}#church-school-section` },
  { label: "Upcoming", href: `${ROUTE_ROOT}#upcoming-program-section` },
  { label: "Give", href: `${ROUTE_ROOT}#give-section` },
  { label: "Leaders", href: `${ROUTE_ROOT}/leaders` },
  { label: "Contact", href: `${ROUTE_ROOT}/contact` },
] as const;

const tagline =
  CHURCH_INFO.aboutUs.length > 140
    ? `${CHURCH_INFO.aboutUs.slice(0, 137).trim()}…`
    : CHURCH_INFO.aboutUs;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="relative isolate mt-0 w-full overflow-hidden bg-[#05070d] text-white"
      aria-label="Site footer"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(196,165,116,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(196,165,116,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#12182a]/90 via-[#0a0e18] to-[#05070d]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[20%] top-0 h-[420px] w-[70%] -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(196,165,116,0.12),transparent_65%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[10%] bottom-0 h-[320px] w-[55%] -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_62%)] blur-3xl"
        aria-hidden
      />

      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-[#c4a574]/55 to-transparent" />

      <div className="relative w-full px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-16 lg:px-10 lg:pb-14 lg:pt-20 xl:px-14 2xl:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-5">
            <Link
              href={ROUTE_ROOT}
              className="group inline-flex items-center gap-4 rounded-2xl outline-none ring-offset-2 ring-offset-[#05070d] transition-transform duration-300 hover:translate-y-[-1px] focus-visible:ring-2 focus-visible:ring-[#c4a574]/60"
            >
              <span className="relative h-14 w-14 overflow-hidden rounded-full border border-white/20 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-[border-color,box-shadow] duration-300 group-hover:border-[#c4a574]/40 group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.45)]">
                <Image
                  src={LOGO_URL}
                  alt="Christ Apostolic Church logo"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </span>
              <span className="max-w-[280px] text-left">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c4a574]/90">
                  Welcome home
                </span>
                <span
                  className="mt-1 block text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl"
                  style={{
                    fontFamily:
                      "var(--font-playfair), ui-serif, Georgia, serif",
                  }}
                >
                  {CHURCH_INFO.name}
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/65">
              {tagline}
            </p>
            <a
              href={`${ROUTE_ROOT}#hero-section`}
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm transition-all duration-300 hover:border-[#c4a574]/35 hover:bg-white/[0.08] hover:text-white"
            >
              Back to top
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-7 lg:gap-8">
            <div className="sm:col-span-1 lg:col-span-3">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c4a574]">
                Explore
              </h2>
              <ul className="mt-5 space-y-2.5">
                {exploreLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-[15px] text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      <span className="h-px w-0 bg-[#c4a574] transition-all duration-300 group-hover:w-3" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-1 lg:col-span-4">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c4a574]">
                Visit
              </h2>
              <div className="mt-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-md transition-[border-color,background-color] duration-300 hover:border-white/[0.12] hover:bg-white/[0.05] sm:p-6">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#c4a574]/25 bg-[#c4a574]/10 text-[#c4a574]">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white/95">
                      Join us in person
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/65">
                      {CHURCH_INFO.address}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      Sunday worship, prayer, and fellowship — newcomers are
                      always welcome.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c4a574]/90">
                  Connect
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  <a
                    href={CHURCH_SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-white/80 outline-none transition-all duration-300 hover:border-[#1877f2]/55 hover:bg-[#1877f2]/15 hover:text-[#6ea8ff] focus-visible:ring-2 focus-visible:ring-[#c4a574]/55"
                    aria-label="Facebook (opens in a new tab)"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={CHURCH_SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-white/80 outline-none transition-all duration-300 hover:border-[#e4405f]/45 hover:bg-[#e4405f]/12 hover:text-[#f585a7] focus-visible:ring-2 focus-visible:ring-[#c4a574]/55"
                    aria-label="Instagram (opens in a new tab)"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={CHURCH_SOCIAL_LINKS.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-white/80 outline-none transition-all duration-300 hover:border-white/35 hover:bg-white/[0.1] hover:text-white focus-visible:ring-2 focus-visible:ring-[#c4a574]/55"
                    aria-label="X (opens in a new tab)"
                  >
                    <XIcon className="h-[18px] w-[18px]" />
                  </a>
                  <a
                    href={CHURCH_SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-white/80 outline-none transition-all duration-300 hover:border-[#ff0000]/55 hover:bg-[#ff0000]/12 hover:text-[#ff6b6b] focus-visible:ring-2 focus-visible:ring-[#c4a574]/55"
                    aria-label="YouTube (opens in a new tab)"
                  >
                    <YouTubeIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-8 sm:flex-row sm:pt-10">
          <p className="text-center text-xs text-white/40 sm:text-left">
            © {year} Christ Apostolic Church Victory Land Pleasure DCC. All
            rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/40">
            Made with{" "}
            <Heart
              className="h-3.5 w-3.5 fill-[#c4a574]/50 text-[#c4a574]/70"
              aria-hidden
            />{" "}
            for the family of God
          </p>
        </div>
      </div>
    </footer>
  );
}
