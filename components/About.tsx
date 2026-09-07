import ApproachTabs from "@/components/ApproachTabs";

export default function About() {
  return (
    <section id="approche" className="bg-paper">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-[30px] font-semibold leading-tight tracking-tight text-ink md:text-[36px]">
            Un studio digital et logiciel, pas une agence de plus.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-slate-soft">
            ND Software Studio accompagne entreprises, marques, entrepreneurs
            et organisations dans leur transformation numérique, en
            réunissant stratégie, design, technologie et créativité.
          </p>
        </div>

        <div className="mt-12">
          <ApproachTabs />
        </div>
      </div>
    </section>
  );
}