const approach = [
  "Comprendre le besoin réel avant de proposer une solution.",
  "Créer une expérience claire, moderne et cohérente avec l'image de marque.",
  "Développer des solutions fiables, responsives et évolutives.",
  "Privilégier la qualité et la valeur créée plutôt que la simple accumulation de fonctionnalités.",
  "Accompagner le client après la livraison lorsque cela est nécessaire.",
];

export default function About() {
  return (
    <section id="approche" className="bg-paper">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <div className="about-copy">
          <h2 className="font-display text-[30px] font-semibold leading-tight tracking-tight text-ink md:text-[36px]">
            Un studio digital et logiciel, pas une agence de plus.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-slate-soft">
            ND Software Studio accompagne entreprises, marques, entrepreneurs
            et organisations dans leur transformation numérique, en
            réunissant stratégie, design, technologie et créativité.
          </p>
        </div>

        <ol className="flex flex-col">
          {approach.map((item, i) => (
            <li
              key={item}
              className="about-item flex gap-5 border-t border-line py-5 first:pt-0 last:border-b"
              style={{ "--item-delay": `${i * 110}ms` } as React.CSSProperties}
            >
              <span className="font-display text-[13px] text-signal-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] leading-relaxed text-ink/80">
                {item}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
