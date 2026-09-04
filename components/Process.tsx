const steps = [
  {
    n: "01",
    title: "Discovery",
    text: "Compréhension du besoin, des objectifs, du public cible et des contraintes.",
  },
  {
    n: "02",
    title: "Strategy",
    text: "Définition de la solution, du périmètre, des priorités et du positionnement.",
  },
  {
    n: "03",
    title: "Design",
    text: "Direction artistique, UX/UI, architecture et prototypes lorsque nécessaire.",
  },
  {
    n: "04",
    title: "Development",
    text: "Développement, intégrations, base de données et fonctionnalités.",
  },
  {
    n: "05",
    title: "Testing",
    text: "Tests fonctionnels, responsive, performances et corrections.",
  },
  {
    n: "06",
    title: "Launch",
    text: "Mise en ligne, configuration et accompagnement au lancement.",
  },
  {
    n: "07",
    title: "Growth",
    text: "Maintenance, optimisation et évolutions selon les besoins.",
  },
];

export default function Process() {
  return (
    <section id="processus" className="bg-paper">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <h2 className="max-w-xl font-display text-[30px] font-semibold leading-tight tracking-tight text-ink md:text-[36px]">
          Comment se déroule un projet.
        </h2>

        <div className="mt-14">
          <ol className="flex flex-col md:border-l md:border-line">
            {steps.map((step) => (
              <li
                key={step.n}
                className="grid gap-1 border-t border-line py-6 first:border-t-0 md:grid-cols-[140px_1fr] md:gap-8 md:border-t md:pl-10 md:first:border-t"
              >
                <div className="flex items-center gap-3 md:block">
                  <span className="font-display text-[13px] text-signal-dim">
                    {step.n}
                  </span>
                  <span className="font-display text-[17px] font-medium text-ink">
                    {step.title}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed text-slate-soft">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
