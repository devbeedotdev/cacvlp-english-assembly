import type { CSSProperties, ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function CacvlpLayout({ children }: { children: ReactNode }) {
  return (
    <main
      className={`${inter.variable} ${playfair.variable} min-h-screen bg-slate-50 text-slate-900`}
      style={
        {
          "--primary": "#1d4ed8",
          fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
        } as CSSProperties
      }
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_8%,rgba(37,99,235,0.1),transparent_38%),radial-gradient(circle_at_88%_82%,rgba(220,38,38,0.1),transparent_42%),linear-gradient(to_bottom,#ffffff,#f8fafc)]" />
      <div className="relative">{children}</div>
    </main>
  );
}
