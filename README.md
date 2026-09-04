# ND Software Studio — Site vitrine

Site vitrine construit avec **Next.js 14 (App Router)**, **React** et **Tailwind CSS**.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site sera disponible sur http://localhost:3000

## Structure

```
app/
  layout.tsx      → polices (Space Grotesk + Inter) et métadonnées
  page.tsx         → assemble toutes les sections
  globals.css      → styles de base
components/
  Header.tsx       → navigation + menu mobile
  Hero.tsx         → section d'accroche + bandeau des 10 pôles
  About.tsx        → présentation du studio + approche
  Services.tsx     → accordéon des 10 pôles de services
  Process.tsx      → timeline du processus (7 étapes)
  Principles.tsx    → les 7 principes du studio
  Contact.tsx      → coordonnées et appel à l'action final
  Footer.tsx
public/
  logo.png         → votre logo
```

## Direction visuelle choisie

Thème clair avec sections sombres alternées (`Services`, `Principes`,
`Footer`) qui font écho au logo. Couleurs et polices centralisées dans
`tailwind.config.ts` — modifiez-les là pour ajuster tout le site d'un coup :

- `paper` / `surface` : fonds clairs
- `ink` : texte foncé / boutons pleins
- `dark.bg` / `dark.panel` / `dark.line` : sections sombres
- `signal` : couleur d'accent cyan (reprise du logo), à utiliser avec parcimonie
- Police de titres : Space Grotesk · Police de texte : Inter

## Crédit photo

L'image du hero (mains + laptop) vient d'Unsplash — *Hands hold up an open
laptop with a blank screen* par Lorin Both, sous [licence Unsplash](https://unsplash.com/license)
(usage commercial libre, aucune attribution obligatoire). Elle est chargée
directement depuis `images.unsplash.com` (autorisé dans `next.config.js`).
Pour la remplacer par votre propre photo : mettez le fichier dans `public/`
et changez le `src` dans `components/Hero.tsx` en `/votre-image.jpg`.

Un mockup de site en SVG (`components/BrowserMockup.tsx`) reste disponible
dans le projet si vous préférez revenir à une illustration plutôt qu'une
photo.

## Prochaines étapes possibles

- Remplacer les liens réseaux sociaux et l'e-mail par les vrais
- Ajouter des pages dédiées par pôle de service si besoin (`app/services/[slug]/page.tsx`)
- Brancher un formulaire de contact réel (API route ou service tiers)
- Ajouter des visuels/portfolio dans la section Digital Experiences
- Déployer sur Vercel (`vercel.com`) — le projet est prêt pour ça tel quel
