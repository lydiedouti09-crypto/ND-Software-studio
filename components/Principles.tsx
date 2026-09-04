const principles = [
  {
    title: "Design avant tout",
    text: "Une solution doit être agréable à utiliser et cohérente avec la marque.",
  },
  {
    title: "Technologie utile",
    text: "Nous choisissons la technologie en fonction du problème à résoudre.",
  },
  {
    title: "Sur mesure lorsque nécessaire",
    text: "Nous ne cherchons pas à faire entrer tous les projets dans le même modèle.",
  },
  {
    title: "Performance",
    text: "Rapidité, responsive design et expérience mobile sont des priorités.",
  },
  {
    title: "Évolutivité",
    text: "Les solutions doivent pouvoir grandir avec le client.",
  },
  {
    title: "Transparence",
    text: "Le périmètre, les livrables et les conditions sont définis avant le lancement.",
  },
  {
    title: "Accompagnement",
    text: "Notre relation ne s'arrête pas nécessairement à la livraison.",
  },
];

export default function Principles() {
  return (
    <section className="bg-dark-bg">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <h2 className="max-w-xl font-display text-[30px] font-semibold leading-tight tracking-tight text-white md:text-[36px]">
          Sept principes qui guident chaque projet.
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="border-t border-dark-line pt-5">
              <h3 className="font-display text-[16px] font-medium text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-white/55">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
