# BRIEF — Site vitrine GuestsKit

> À placer à la racine du dépôt du site (et à référencer depuis son CLAUDE.md : « Lis BRIEF-SITE-GUESTKIT.md avant toute tâche de contenu ou de design »).
> Ce site est le **site commercial** de la société. Il n'est PAS l'application elle-même.
> Règle d'or : ne jamais promettre une fonctionnalité qui n'est pas listée en section 4. En cas de doute, demander.

---

## 1. La société et le produit en une phrase

GuestsKit vend aux hôtels une **conciergerie digitale** : une web app accessible par QR code, avec laquelle le client de l'hôtel découvre les restaurants, activités et spectacles, se repère sur le plan, et envoie des demandes à la réception, sans installer d'application.

Produit proposé : l'hôtel obtient **sa propre instance**, à son nom, sur son propre domaine, avec son logo, ses couleurs et son contenu.

## 2. Cible

| | |
|---|---|
| Acheteur | Direction d'hôtel, directeur général, directeur d'exploitation, responsable réception/animation |
| Marché | Hôtels et resorts de **50 chambres et plus**, Tunisie en premier, puis Afrique francophone |
| Langue du site | Français d'abord (France, pas québécois). Prévoir l'arabe et l'anglais ensuite (structure i18n dès le départ) |
| Ton | Professionnel, chaleureux, concret. Vouvoiement. Pas de jargon technique face à un hôtelier |

L'hôtelier ne cherche pas « une app » : il veut moins d'appels à la réception, mieux vendre ses restaurants/spectacles/activités, et une image moderne.

## 3. Le problème que le site doit exposer

- Les demandes clients (serviette, ménage, réservation, question) passent par le téléphone : réception saturée, rien n'est tracé.
- Les infos de l'hôtel (horaires du restaurant, spectacle du soir, activités du jour) sont sur des affiches ou dites au comptoir : peu de clients les voient.
- Les clients ne savent pas où se trouvent les lieux dans un grand resort.
- Les solutions existantes sont des apps à installer, chères, ou inadaptées au marché local.

Ne pas chiffrer ces problèmes sans source : aucune statistique inventée.

## 4. Fonctionnalités réelles (seules autorisées dans les promesses)

### Côté client de l'hôtel
- **Accès par QR code**, sans installation, puis création d'un compte (email, Google ou Facebook).
- **Validation du séjour par la réception** : le client n'accède aux services qu'une fois son séjour validé (sécurité, pas d'accès anonyme).
- **Découvrir** : restaurants, bars, cafés ; activités du jour avec horaires ; spectacles du soir (thème sombre dédié) ; suggestions internes et externes (sorties autour de l'hôtel) ; photos et catégories.
- **Plan interactif** de l'hôtel : plans/étages avec points d'intérêt.
- **Demandes** : le client envoie une demande à la réception selon des types prédéfinis, avec messages.
- Aux couleurs de l'hôtel (logo, couleur principale).

### Côté hôtel (administration)
- Gestion du contenu : restaurants, activités et horaires, spectacles et dates, suggestions, galeries photos (Cloudinary).
- **Éditeur de plan** : placer les points d'intérêt sur les plans.
- **Réception** : check-in / création et validation des séjours, suivi et traitement des demandes.
- Réglages de l'hôtel (logo, identité).

### Modèle technique (à traduire en bénéfices, pas en jargon)
- Une instance dédiée par hôtel (données isolées), hébergée sur Vercel + Supabase, sur le **nom de domaine de l'hôtel** (domaine pris en charge par GuestsKit).
- À traduire en : « vos données sont à vous, séparées de celles des autres hôtels ».

### NON disponible / à ne pas promettre
Intégration PMS (Arabsoft ou autre), paiement en ligne, application mobile native, multi-langue côté app, chatbot IA, room service avec commande et paiement, statistiques avancées. Si une page « Bientôt » est voulue, la valider avec Fethi.

## 5. Preuve et crédibilité

- **Hôtel de référence : The Orangers Beach Resort & Bungalows (Hammamet)**, démonstration en ligne sur https://guestskit.com. L'accord de référence est en cours de négociation : ne pas afficher de logo, témoignage ou citation de l'hôtel sans validation écrite de Fethi.
- Aucun chiffre de résultat (« -30 % d'appels ») tant qu'il n'est pas mesuré.
- La **démo vivante** est l'argument principal : bouton « Voir la démo » vers l'app, et vidéo ou captures du parcours.

## 6. Tarification (décision à confirmer avant publication)

Modèle arrêté en interne, **ne pas afficher de prix sur le site sans confirmation** (le choix « prix affichés vs sur devis » reste à trancher) :
- Abonnement saisonnier par chambre : 3 TND/mois (juin–sept), 2 TND (avril, mai, octobre), 1 TND (nov–mars), soit 23 TND/chambre/an.
- Frais de mise en place : 3 000 TND. Engagement minimum : 2 ans.
- Par défaut : page « Tarifs » avec principes (simple, par chambre, saisonnier, sans surprise) et CTA « Demander un devis ».

## 7. Structure du site recommandée

1. **Accueil** : promesse en une phrase, démo (maquette téléphone), 3 bénéfices, parcours en 4 étapes, CTA « Demander une démo ».
2. **Produit / Fonctionnalités** : côté client, côté hôtel (sections 4).
3. **Comment ça marche** : QR → compte → validation réception → l'hôtel à portée de main.
4. **Pour qui** : hôtels et resorts de 50 chambres et plus.
5. **Démo** : lien vers l'app de référence + formulaire.
6. **Tarifs** (voir section 6).
7. **À propos / contact** : société, équipe, formulaire (nom, hôtel, nombre de chambres, email, téléphone), WhatsApp possible.
8. **FAQ** : installation, données, domaine, durée de mise en place, langue, ce qui est inclus.
9. Pages légales (mentions, confidentialité).

CTA unique et répété : **« Demander une démo »**.

## 8. Design

- Style **éditorial, hôtelier haut de gamme** : beaucoup d'air, photographies, typographie soignée (une serif élégante pour les titres + une sans-serif lisible).
- Signature visuelle reprise de l'app : **trait vertical coloré** (`w-1 h-8 rounded-full`) devant les titres de section.
- Mettre en avant des **maquettes de téléphone** avec les vraies captures de l'app.
- Palette : à dériver de l'identité GuestsKit ; éviter l'aspect « template SaaS générique » (dégradés violets, cartes identiques).
- Mobile d'abord (les hôteliers consultent beaucoup sur téléphone), accessible (contrastes, `alt`, focus visibles).
- Captures d'écran : à produire à partir de la démo (https://guestskit.com). Masquer toute donnée personnelle de compte.

## 9. Référencement et visibilité IA

- SEO technique propre : titres uniques, méta-descriptions, balisage Organization/Product/FAQ en JSON-LD, sitemap, robots, pages rapides (images optimisées).
- Contenu rédigé pour être cité par les moteurs IA : définitions claires (« Qu'est-ce qu'une conciergerie digitale pour hôtel ? »), FAQ factuelle, pas de remplissage.
- Mots-clés à travailler : conciergerie digitale hôtel, application client hôtel, QR code hôtel, expérience client hôtellerie Tunisie.

## 10. Règles de travail pour Claude Code

- Texte en **français de France**, orthographe et typographie soignées.
- Rien d'inventé : chiffres, clients, témoignages, certifications, fonctionnalités. Si une information manque, mettre un marqueur `[À CONFIRMER]` visible et me le signaler.
- Proposer le contenu (textes) avant de coder les pages complexes, pour validation.
- Garder la stack du site simple et déployable sur Vercel ; formulaire de contact avec protection anti-spam et conformité vie privée.

## 11. Questions ouvertes (à trancher avec Fethi)

- Nom de domaine et marque finale (GuestsKit / guestskit.com côté démo ?).
- Prix affichés ou sur devis ?
- Logo, charte, photos utilisables.
- Contact commercial affiché (email, téléphone, WhatsApp).
- Langues à lancer au premier jour.
- Accord de référence avec Les Orangers : quand et sous quelle forme afficher le nom.
