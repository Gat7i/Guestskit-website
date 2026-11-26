# GuestKit — Site Vitrine

> **Lis [BRIEF-SITE-GUESTKIT.md](./BRIEF-SITE-GUESTKIT.md) avant toute tâche de contenu ou de design.**

Site marketing de GuestKit hébergé sur www.guestskit.com (racine).  
App de démo : **www.guestskit.app**

---

## Stack

- Next.js 15 App Router, TypeScript, TailwindCSS 4
- Site statique/SSG pur — pas de base de données, pas d'auth
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
| `muted` | `#9CA3AF` | Gris doux — texte secondaire, placeholders |
| `border` | `#E5E2DA` | Séparateurs, bordures subtiles |

**Règles d'emploi :**
- Le `gold` touche exactement deux éléments : le bouton CTA principal et la barre verticale de signature. Nulle part ailleurs.
- Texte sur fond `gold` : toujours `text-night` (jamais blanc — contraste insuffisant).
- Sur fond `night` : texte secondaire en `text-snow/55` ou `text-snow/60`, jamais `text-muted` (saphir sur nuit = contraste insuffisant).

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
Placée au-dessus de chaque titre de section. C'est la signature visuelle reprise de l'app GuestKit.

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

## Règles de contenu (rappel bref — détail dans BRIEF-SITE-GUESTKIT.md)

- Aucune statistique inventée.
- Aucun nom de client réel sans accord écrit de Fethi.
- Hôtel fictif pour démo : **« Hôtel de la Mer (démo) »**.
- CTA unique répété : **« Demander une démo »**.
- Marqueur `[À CONFIRMER]` pour toute information incertaine.
