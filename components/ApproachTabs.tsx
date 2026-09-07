"use client";

import { useEffect, useState } from "react";

const STEP_DURATION = 5000;

const steps = [
  {
    label: "Comprendre le besoin",
    text: "Comprendre le besoin réel avant de proposer une solution.",
  },
  {
    label: "Créer une expérience claire",
    text: "Créer une expérience claire, moderne et cohérente avec l'image de marque.",
  },
  {
    label: "Développer des solutions fiables",
    text: "Développer des solutions fiables, responsives et évolutives.",
  },
  {
    label: "Créer de la valeur",
    text: "Privilégier la qualité et la valeur créée plutôt que la simple accumulation de fonctionnalités.",
  },
  {
    label: "Accompagner après la livraison",
    text: "Accompagner le client après la livraison lorsque cela est nécessaire.",
  },
];

export default function ApproachTabs() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, STEP_DURATION);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* liste des étapes à gauche */}
      <ol className="flex flex-col">
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <li key={step.label} className="border-t border-line last:border-b">
              <button
                onClick={() => setActive(i)}
                className={`flex w-full items-center gap-5 py-5 text-left transition-colors ${
                  isActive ? "text-ink" : "text-slate-soft hover:text-ink"
                }`}
              >
                <span
                  className={`font-display text-[13px] ${
                    isActive ? "text-signal-dim" : "text-slate-soft"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] font-medium leading-relaxed">
                  {step.label}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* carrousel des cartes à droite */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {steps.map((step, i) => (
            <div
              key={step.label}
              aria-hidden={i !== active}
              className="relative flex min-h-[220px] w-full shrink-0 flex-col justify-between bg-dark-bg p-8"
            >
              {i === active && (
                <span
                  aria-hidden="true"
                  className="animate-step-progress absolute inset-x-0 top-0 h-1 origin-left bg-signal"
                  style={{
                    animationDuration: `${STEP_DURATION}ms`,
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                />
              )}
              <span className="font-display text-[15px] text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-6 font-display text-[20px] font-medium leading-snug text-white md:text-[22px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}