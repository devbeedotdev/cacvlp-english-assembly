"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealVariant = "up" | "down" | "left" | "right";

const variantToHiddenClasses: Record<RevealVariant, string> = {
  up: "opacity-0 translate-y-6 translate-x-0",
  down: "opacity-0 -translate-y-6 translate-x-0",
  left: "opacity-0 translate-x-6 translate-y-0",
  right: "opacity-0 -translate-x-6 translate-y-0",
};

const visibleClasses = "opacity-100 translate-x-0 translate-y-0";

export default function ScrollReveal({
  children,
  className = "",
  variant = "up",
  once = true,
  rootMargin = "0px 0px -10% 0px",
  delayMs = 0,
  durationMs = 700,
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  once?: boolean;
  rootMargin?: string;
  delayMs?: number;
  durationMs?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (!hit) return;

        setVisible(true);
        if (once) obs.disconnect();
      },
      { threshold: 0.15, rootMargin },
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [once, rootMargin]);

  const hiddenClasses = variantToHiddenClasses[variant];
  const classes = visible ? visibleClasses : hiddenClasses;

  return (
    <div
      ref={ref}
      className={[className, "will-change-transform", "transition-all", classes]
        .join(" ")}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}

