"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    if (bounds.top < window.innerHeight && bounds.bottom > 0) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const revealIfVisible = () => {
      const bounds = element.getBoundingClientRect();
      setVisible(bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    revealIfVisible();
    observer.observe(element);

    const fallback = window.setTimeout(() => setVisible(true), 800);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
