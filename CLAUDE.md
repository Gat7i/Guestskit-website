# GuestKit — Site Vitrine

> **Lis [BRIEF-SITE-GUESTKIT.md](./BRIEF-SITE-GUESTKIT.md) avant toute tâche de contenu ou de design.**

Site marketing de GuestKit hébergé sur www.guestskit.com (racine).

## Stack
- Next.js 15 App Router, TypeScript, TailwindCSS 4
- Site statique/SSG pur — pas de base de données, pas d'auth

## Structure
- `src/app/` — App Router pages
- `src/components/` — composants UI
- `src/app/globals.css` — styles globaux + palette Tailwind

## Palette
- Primaire : indigo/bleu (#4F46E5 → #6366F1)
- Secondaire : slate foncé pour le texte

## Routing Vercel
Ce projet occupe la racine de guestskit.com.
L'app hôtel (lesorangers) est un projet Vercel séparé joignable via rewrite dans vercel.json.

## Démo
https://www.guestskit.com/lesorangers
