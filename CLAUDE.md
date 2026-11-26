# GuestsKit — Site Vitrine

> **Lis [BRIEF-SITE-GUESTKIT.md](./BRIEF-SITE-GUESTKIT.md) avant toute tâche de contenu ou de design.**

Site marketing de GuestsKit hébergé sur www.guestskit.com (racine).  
App de démo : **www.guestskit.app**

---

## Stack

- Next.js ^15.3.3 App Router, TypeScript, TailwindCSS 4
- Site statique/SSG (output: standalone pour Vercel) — pas de base de données, pas d'auth
- Fonts via `next/font/google` (variables CSS sur `<html>`)

## Structure

- `src/app/page.tsx` — homepage complète (tout en un fichier)
- `src/app/layout.tsx` — fonts, metadata, `<html dir="ltr" lang="fr">`
- `src/app/globals.css` — tokens `@theme` Tailwind 4
- `public/captures/` — captures réelles de l'app (préfixe `c-` = client, `a-` = admin)

---

## Charte graphique (tokens Tailwind 4)

Définis dans `src/app/globals.css` sous `@theme` — utilisables comme classes Tailwind (`bg-night`, `text-gold`, etc.).

### Couleurs

| Token | Hex | Usage |
|---|---|---|
| `night` | `#0E1B34` | Bleu nuit — fonds sombres, texte sur fond clair fort |
| `snow` | `#F9F8F6` | Neige froide — fonds clairs, body background |
| `sapphire` | `#2D55A0` | Saphir — liens, accents interactifs, hover states |
| `gold` | `#C4933F` | Or — **CTA unique** et **barre verticale signature** uniquement |
| `charcoal` | `#2E2E2E` | Anthracite — texte corps principal |
| `muted` | `#6B7280` | Gris — texte secondaire (ratio AA 4,55:1 sur snow ✓) |
| `border` | `#E5E2DA` | Séparateurs, bordures subtiles |

**Règles d'emploi :**
- Le `gold` touche exactement deux éléments : le bouton CTA principal et la barre verticale de signature. Nulle part ailleurs.
- Texte sur fond `gold` : toujours `text-night` (jamais blanc — contraste insuffisant).
- Sur fond `night` ou `#060E1E` : texte secondaire minimum `text-snow/55` (5,5:1 ✓) ; jamais `text-snow/40` ni `text-snow/30` (< 4,5:1 ✗) ; jamais `text-muted`.
- Sur fond `snow` : texte corps minimum `text-charcoal/80` (5,7:1 ✓) ; `text-charcoal/70` donne 4,35:1 sur snow (✗).

### Typographie

| Token | Famille | Grammage | Usage |
|---|---|---|---|
| `font-serif` | Cormorant Garamond | 400–600 | Titres `<h1>`–`<h3>`, logo nav, chiffres décoratifs |
| `font-sans` | DM Sans | 400–500 | Corps, labels, UI, boutons |
| `font-arabic` | Amiri | 400–700 | Réservé aux layouts RTL arabe (à venir) |

Cormorant : jamais sous 20 px, leading `[1.08]`–`[1.1]` sur les grands corps.  
DM Sans : line-height `leading-relaxed` pour le corps.

### Composant signature — barre verticale or

```html
<span class="block w-1 h-8 bg-gold rounded-full mb-7" aria-hidden="true" />
```
Placée au-dessus de chaque titre de section. C'est la signature visuelle reprise de l'app GuestsKit.

### Bouton CTA principal

```html
<a class="bg-gold text-night font-medium px-8 py-4 rounded-xl hover:bg-gold/90 transition-colors">
  Demander une démo
</a>
```
CTA unique répété : **« Demander une démo »** ou **« Demander une démo personnalisée »**.

### Maquette téléphone

```html
<div class="bg-night rounded-[2.5rem] p-1.5 shadow-xl ring-1 ring-black/5">
  <div class="rounded-[2rem] overflow-hidden" style="aspect-ratio:9/19.5">
    <Image src="/captures/c-accueil.jpg" ... />
  </div>
</div>
```

### Rythme des sections (alternance fond)

| Section | Fond |
|---|---|
| Nav | `snow/95` (sticky, backdrop-blur) |
| Hero | `night` |
| Problème | `snow` |
| Fonctionnalités client | `white` (divisé par `divide-border`) |
| Comment ça marche | `night` |
| Pour les équipes | `snow` |
| Démo | `white` |
| FAQ | `snow` |
| CTA Final | `night` |
| Footer | `#060E1E` |

---

## Routing Vercel

Ce projet occupe la racine de `guestskit.com`.  
L'app hôtel est sur `www.guestskit.app` (projet Vercel séparé).

---

## Coordination multi-agents

Dossier partagé : `C:\Users\fethi\Documents\Projets\guestskit-coordination\`

**En début de session**, lire dans l'ordre :
1. `README.md` — protocole de communication
2. `agents.md` — rôles des trois assistants (Hub, App, Vitrine)
3. `faits-verifies.md` — source de vérité du contenu
4. `STATUS.md` — décisions en cours
5. `inbox/vitrine/` — messages entrants

**Envoyer un message** : créer un fichier dans `inbox/<destinataire>/` (format dans README.md).  
**Règle absolue** : push sur `main` = déploiement en production → toujours demander confirmation à Fethi.

---

## Pages techniques

| Route | Fichier | État |
|---|---|---|
| `/` | `src/app/page.tsx` | ✅ prod |
| `/mentions-legales` | `src/app/mentions-legales/page.tsx` | 404 prod (legalComplete=false) |
| `/confidentialite` | `src/app/confidentialite/page.tsx` | 404 prod (legalComplete=false) |
| Favicon 32×32 | `src/app/icon.tsx` | ✅ ImageResponse |
| 404 | `src/app/not-found.tsx` | ✅ aux couleurs du site |
| OG image | `src/app/opengraph-image.tsx` | ✅ |

**Pages légales** : complétées par `src/lib/legal.ts` (droit tunisien, loi n° 2004-63 / INPDP).
Remplir tous les champs vides de `legal.ts` → `legalComplete` passe à `true` → pages indexées et retirées du 404.
Faire relire par un juriste avant activation.

**Mesure d'audience** : `analytics: false` dans `legal.ts` — aucun outil actif.
Google Analytics prévu dans un futur proche (décision Fethi). Avant d'activer :
Google Analytics dépose des cookies → bandeau de consentement obligatoire + mise à jour de `/confidentialite` + passer `analytics: true` dans `legal.ts`.

---

## Règles de contenu (rappel bref — détail dans BRIEF-SITE-GUESTKIT.md)

- Aucune statistique inventée.
- Aucun nom de client réel sans accord écrit de Fethi.
- Démo publique : www.guestskit.app (Les Orangers). Projet « Hôtel de la Mer (démo) » en pause.
- Connexion client : e-mail ou Google uniquement (Facebook supprimé).
- Formulaire : ouvre le client mail du visiteur → Gmail de Fethi. Aucun stockage serveur.
- CTA unique répété : **« Demander une démo »**.
- Délai de réponse : **48 h** (non 24 h).
- Marqueur `[À CONFIRMER]` interdit en production (bloqué par `npm run check:markers`).
