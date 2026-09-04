"use client";

import { useState } from "react";

type Pole = {
  number: string;
  title: string;
  intro: string;
  audience: string;
  offerings: string[];
  options: string[];
};

const poles: Pole[] = [
  {
    number: "01",
    title: "Digital Experiences",
    intro:
      "Des présences numériques premium qui permettent à une marque de se présenter, vendre, informer ou convertir ses visiteurs.",
    audience:
      "Entreprises, restaurants, hôtels, boutiques, salons, cabinets, écoles, associations, indépendants, startups et organisations.",
    offerings: [
      "Sites vitrines professionnels et premium",
      "Sites corporate et institutionnels",
      "Landing pages et pages de campagne",
      "Sites événementiels",
      "Catalogues numériques",
      "Sites avec réservation ou prise de rendez-vous",
      "Portails et plateformes web",
      "Applications web et mobiles",
      "Refonte de sites existants",
    ],
    options: [
      "Multilingue",
      "Blog / actualités",
      "Galeries et portfolios",
      "Réservation",
      "Intégration WhatsApp",
      "Cartes interactives",
      "Analytics et suivi des performances",
    ],
  },
  {
    number: "02",
    title: "Design & UI/UX",
    intro:
      "L'architecture, l'interface et l'expérience utilisateur, pensées avant et pendant le développement.",
    audience:
      "Entreprises, startups, créateurs de produits numériques et organisations qui veulent améliorer une interface ou créer un produit de zéro.",
    offerings: [
      "Recherche et compréhension des utilisateurs",
      "Architecture de l'information",
      "Wireframes",
      "UI Design web et mobile",
      "Prototypage interactif",
      "Design systems et bibliothèques de composants",
      "Audit UX/UI et refonte d'interfaces existantes",
    ],
    options: [
      "Prototype haute fidélité",
      "Design system complet",
      "Tests utilisateurs",
      "Audit d'une application existante",
    ],
  },
  {
    number: "03",
    title: "Branding & Identité",
    intro:
      "Des identités visuelles cohérentes qui permettent aux marques d'être reconnaissables et crédibles.",
    audience:
      "Entrepreneurs, startups, commerces, entreprises, associations, événements et marques en création ou en repositionnement.",
    offerings: [
      "Naming et réflexion autour du nom",
      "Création ou modernisation de logo",
      "Identité visuelle, palette et typographies",
      "Système et charte graphique",
      "Direction artistique et rebranding",
      "Déclinaison sur supports imprimés et numériques",
    ],
    options: [
      "Cartes de visite",
      "Flyers et affiches",
      "Brochures",
      "Présentations commerciales",
      "Templates réseaux sociaux",
      "Packaging et supports de marque",
    ],
  },
  {
    number: "04",
    title: "Software Development",
    intro:
      "Des logiciels et plateformes sur mesure, lorsque les solutions existantes ne répondent pas correctement au besoin.",
    audience:
      "Entreprises, startups, institutions, entrepreneurs et organisations ayant besoin d'un outil métier ou d'un produit numérique personnalisé.",
    offerings: [
      "Développement frontend et backend",
      "API et intégrations, bases de données",
      "Applications web et mobiles",
      "Logiciels métiers, CRM et outils internes",
      "Dashboards et systèmes de réservation ou de gestion",
      "Automatisation de processus",
    ],
    options: [
      "Authentification",
      "Notifications",
      "Paiements",
      "Gestion des rôles",
      "Import/export de données",
      "Intégrations de services tiers",
      "Maintenance évolutive",
    ],
  },
  {
    number: "05",
    title: "E-commerce",
    intro:
      "Des expériences de vente en ligne pour les marques qui souhaitent présenter leurs produits et développer leurs ventes.",
    audience:
      "Boutiques, marques de mode, beauté, bijoux, alimentation, décoration, services et commerces souhaitant vendre en ligne.",
    offerings: [
      "Boutique en ligne et catalogue produits",
      "Panier, tunnel de commande et gestion des commandes",
      "Gestion des stocks et comptes clients",
      "Promotions et codes de réduction",
      "Paiement en ligne, Mobile Money selon les possibilités techniques",
      "Gestion de livraison et tableau de bord",
    ],
    options: [
      "Recherche et filtres",
      "Avis clients",
      "Wishlist",
      "Multilingue",
      "Intégration comptable",
      "Optimisation de conversion",
    ],
  },
  {
    number: "06",
    title: "Digital Strategy & Growth",
    intro:
      "Mieux exploiter une présence numérique existante et la transformer en résultats concrets.",
    audience:
      "Entreprises, marques, commerces, professionnels et organisations souhaitant améliorer leur présence ou leur acquisition digitale.",
    offerings: [
      "Audit de présence digitale et stratégie digitale",
      "SEO, référencement naturel et local",
      "Optimisation de pages web et stratégie de contenu",
      "Optimisation de conversion et analyse des performances",
      "Conseil en présence numérique",
      "Accompagnement lors d'un lancement",
    ],
    options: [
      "Audit SEO approfondi",
      "Plan de contenu",
      "Suivi mensuel",
      "Optimisation continue",
      "Rapports de performance",
    ],
  },
  {
    number: "07",
    title: "Content & Communication",
    intro:
      "Des supports visuels cohérents avec l'identité de marque pour communiquer de manière professionnelle.",
    audience:
      "Entreprises, entrepreneurs, commerces, associations, événements et créateurs.",
    offerings: [
      "Visuels pour réseaux sociaux et templates de publication",
      "Affiches, flyers et brochures",
      "Catalogues numériques et menus digitaux",
      "Présentations commerciales",
      "Déclinaisons graphiques de l'identité",
    ],
    options: [
      "Packs mensuels",
      "Templates réutilisables",
      "Motion design",
      "Présentations premium",
      "Catalogues produits",
    ],
  },
  {
    number: "08",
    title: "Automation & AI",
    intro:
      "L'automatisation et l'intelligence artificielle intégrées aux outils numériques, lorsqu'elles apportent un vrai gain de temps ou de valeur.",
    audience:
      "Entreprises, startups et organisations souhaitant automatiser des tâches répétitives ou ajouter des fonctionnalités intelligentes.",
    offerings: [
      "Automatisation de tâches et workflows",
      "Chatbots et assistants IA",
      "Intégration d'API d'intelligence artificielle",
      "Génération ou assistance à la création de contenu",
      "Classification et traitement de données",
      "Fonctionnalités IA intégrées aux applications",
    ],
    options: [
      "Intégration CRM",
      "Automatisation email",
      "Assistant interne",
      "Analyse automatisée",
      "Workflows personnalisés",
    ],
  },
  {
    number: "09",
    title: "Maintenance & Support",
    intro:
      "Après la mise en ligne, la maintenance, la sécurité et l'évolution des solutions numériques.",
    audience:
      "Clients disposant d'un site, d'une application ou d'un logiciel nécessitant un suivi technique.",
    offerings: [
      "Maintenance technique et correction de bugs",
      "Mises à jour et sauvegardes",
      "Surveillance et sécurité",
      "Optimisation des performances",
      "Ajout de fonctionnalités et évolution du produit",
      "Accompagnement lié à l'hébergement et à la mise en ligne",
    ],
    options: [
      "Forfait mensuel",
      "Support prioritaire",
      "Maintenance préventive",
      "Évolutions régulières",
      "Rapports techniques",
    ],
  },
  {
    number: "10",
    title: "Formation & Accompagnement",
    intro:
      "Des compétences numériques pratiques transmises aux personnes ou structures, pour accompagner leurs projets.",
    audience: "Étudiants, professionnels, entrepreneurs, équipes et organisations.",
    offerings: [
      "Formation informatique et développement web",
      "Formation aux outils numériques (Word, Excel, PowerPoint)",
      "Initiation à la création de sites",
      "Accompagnement de projets étudiants",
      "Accompagnement à la mise en place d'outils numériques",
    ],
    options: [
      "Formation individuelle",
      "Formation en groupe",
      "Ateliers entreprise",
      "Programme personnalisé",
      "Support pédagogique",
    ],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="bg-paper">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-[30px] font-semibold leading-tight tracking-tight text-ink md:text-[36px]">
            Dix pôles, une seule équipe.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-slate-soft">
            Chaque projet mobilise les pôles nécessaires, sans jamais forcer
            votre besoin dans un modèle standard.
          </p>
        </div>

        <div className="mt-12 border-t border-line">
          {poles.map((pole, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={pole.number} className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={`group flex w-full items-center gap-6 border-l-[3px] py-6 pl-5 pr-4 text-left transition-all duration-300 ease-out md:gap-10 ${
                    isOpen
                      ? "border-l-signal bg-signal/10"
                      : "border-l-transparent hover:border-l-signal hover:bg-ink/[0.05]"
                  }`}
                >
                  <span
                    className={`w-8 shrink-0 font-display text-[13px] transition-colors duration-300 ${
                      isOpen ? "text-signal-dim" : "text-slate-soft group-hover:text-signal-dim"
                    }`}
                  >
                    {pole.number}
                  </span>
                  <span className="flex-1 font-display text-[22px] font-semibold leading-tight text-ink transition-transform duration-300 ease-out group-hover:translate-x-1 md:text-[30px]">
                    {pole.title}
                  </span>
                  <span className="hidden max-w-xs flex-1 text-[14px] leading-relaxed text-slate-soft md:block">
                    {pole.intro}
                  </span>
                  <span
                    className={`shrink-0 text-[20px] text-signal-dim transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-45" : "group-hover:translate-x-1.5"
                    }`}
                  >
                    {isOpen ? "+" : "→"}
                  </span>
                </button>

                {isOpen && (
                  <div className="grid gap-6 border-l-2 border-l-signal bg-signal/5 px-5 pb-8 pl-[4.25rem] md:pl-[6.25rem]">
                    <div>
                      <p className="text-[15px] leading-relaxed text-slate-soft md:hidden">
                        {pole.intro}
                      </p>
                      <p className="mt-4 text-[13px] text-slate-soft md:mt-0">
                        Pour qui&nbsp;?
                      </p>
                      <p className="mt-1 text-[14px] leading-relaxed text-slate-soft">
                        {pole.audience}
                      </p>
                    </div>
                    <div>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {pole.offerings.map((o) => (
                          <li
                            key={o}
                            className="text-[13.5px] leading-snug text-ink/70"
                          >
                            {o}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {pole.options.map((opt) => (
                          <span
                            key={opt}
                            className="rounded-full border border-line px-3 py-1 text-[12px] text-signal-dim"
                          >
                            {opt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}