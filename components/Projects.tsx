
import Image from "next/image";

// 👉 Ajoutez ou modifiez vos projets ici. Laissez "image" vide pour
// afficher un visuel de remplacement en attendant une vraie capture.
const projects = [
  {
    title: "cravburgers.shop",
    category: "Site de restauration rapide",
    description: "Création d'un site web pour un restaurant de burgers, avec un design moderne et une navigation intuitive.",
    image: "/humberger.png",
    url: "https://www.cravburgers.shop/",
  },
  {
    title: "Aurora Nights",
    category: "Affiche / Branding événementiel",
    description: "Création d'une affiche événementielle originale, identité visuelle et mise en page.",
    image: "/portfolio-poster.svg",
    url: "",
  },
  {
    title: "Farm to People",
    category: "Site e-commerce",
    description: "Création d'un site e-commerce pour un magasin de produits locaux, avec un design moderne et une interface utilisateur intuitive.",
    image: "/ferme.png",
    url: "https://farmtopeople.com/",
  },
];

export default function Projects() {
  return (
    <section id="projets" className="bg-paper">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-xl font-display text-[30px] font-semibold leading-tight tracking-tight text-ink md:text-[36px]">
            Des projets livrés, pas seulement promis.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url || undefined}
              target={project.url ? "_blank" : undefined}
              rel={project.url ? "noopener noreferrer" : undefined}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-dark-bg">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-display text-[15px] text-white/30">
                      Aperçu à venir
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[13px] text-signal-dim">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-display text-[17px] font-medium text-ink">
                    {project.title}
                  </h3>
                </div>
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-soft">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}