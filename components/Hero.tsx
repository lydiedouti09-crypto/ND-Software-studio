"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
const poles = [
  "Digital Experiences",
  "Design & UI/UX",
  "Branding & Identité",
  "Software Development",
  "E-commerce",
  "Digital Strategy & Growth",
  "Content & Communication",
  "Automation & AI",
  "Maintenance & Support",
  "Formation & Accompagnement",
];
const heroImages = [
  "/logo2.jpeg",
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.jpg",
];

export default function Hero() {
  const [active, setActive] = useState(0);
 
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="top" className="bg-paper">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 pb-16 pt-10 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:pb-24 md:pt-16">
        <div>
          <h1 className="max-w-xl font-display text-[42px] font-semibold leading-[1.08] tracking-tight text-ink md:text-[56px]">
            Des expériences numériques pensées pour faire grandir votre
            entreprise.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-soft">
            Nous réunissons stratégie, design et technologie pour créer des
            sites, des identités de marque et des logiciels utiles, élégants
            et performants — du premier brief jusqu&rsquo;à la mise en ligne.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-signal hover:text-ink"
            >
              Discuter de mon projet
            </a>
            <a
              href="#services"
              className="text-[15px] font-medium text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-signal"
            >
              Voir nos services
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[460px]">
            <div className="absolute -inset-6 -z-10 rounded-[32px] bg-signal/15 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-line shadow-xl">
              <Image
                src={heroImages[active]}
                alt="Ordinateur portable ouvert tenu à deux mains, écran prêt à afficher un site web"
                width={1200}
                height={900}
                sizes="(min-width: 768px) 460px, 90vw"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-y border-dark-line bg-dark-bg py-5">
  <div className="flex w-max animate-marquee gap-10 px-6 hover:[animation-play-state:paused]">
    {[...poles, ...poles].map((pole, i) => (
      <span
        key={`${pole}-${i}`}
        className="whitespace-nowrap text-[16px] text-white/60 transition-colors hover:text-signal-soft"
      >
        {pole}
      </span>
    ))}
  </div>
</div>
    </section>
  );
}
