# Captures de l'application GuestsKit

## Règle de remplacement

Déposer un fichier du **même nom** dans ce dossier suffit à remplacer une capture partout sur le site. Aucune modification de code nécessaire.

## Fichiers attendus

| Nom de fichier | Section du site | Remarques |
|---|---|---|
| `c-accueil.jpg` | Hero (téléphone), Démo | Écran d'accueil client |
| `c-animation.jpg` | Fonctionnalités client | Écran animations |
| `c-connexion.jpg` | *(non utilisé en homepage)* | Écran de connexion |
| `c-decouvertes.jpg` | Fonctionnalités client | Découvertes et suggestions |
| `c-demandes.jpg` | Fonctionnalités client | Demandes à la réception |
| `c-plan.jpg` | Fonctionnalités client | Plan interactif |
| `c-restaurants.jpg` | Fonctionnalités client, Démo | Restaurants et bars |
| `c-services.jpg` | *(non utilisé en homepage)* | Services |
| `c-spectacles.jpg` | Fonctionnalités client, Démo | Spectacles et animations |
| `a-checkin.jpg` | Pour les équipes | Interface check-in |
| `a-demandes.jpg` | Pour les équipes | Tableau de bord demandes |
| `a-editeur-plan.jpg` | Pour les équipes | Éditeur de plan |
| `a-reception.jpg` | *(non utilisé en homepage)* | Interface réception |
| `a-restaurants.jpg` | *(non utilisé en homepage)* | Gestion restaurants |
| `a-tableau.jpg` | *(non utilisé en homepage)* | Tableau de bord principal |

## Format

- **Format** : JPEG
- **Captures client** (`c-`) : proportions portrait, ratio 9/19,5 (captures téléphone)
- **Captures admin** (`a-`) : proportions paysage (captures bureau/tablette)
- **Données personnelles** : masquer tout compte, nom ou email réel visible à l'écran

## Drapeau placeholder

Si la variable d'environnement `NEXT_PUBLIC_CAPTURES_PLACEHOLDER=1` est activée au moment du build, chaque capture est remplacée par un encadré « Capture de la démo à venir ». Ce drapeau n'est utile que si l'hôtel de référence demande le retrait de ses images. Il est **désactivé par défaut**.

## Source

Les captures de Hub arrivent dans `guestskit-coordination/captures-demo/`. Quand Hub annonce de nouvelles captures, les copier ici et vérifier le rendu.
