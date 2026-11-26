/**
 * Registre des captures de l'application GuestsKit utilisées sur le site.
 * Remplacer une capture = déposer un fichier du même nom dans public/captures/.
 * Voir public/captures/LISEZ-MOI.md pour les contraintes de format.
 *
 * shortcut: alt texts centralisés ici mais src encore inline dans page.tsx,
 *           à refactoriser si les alt textes doivent être synchronisés en masse.
 */

export const captures = {
  /* ── Côté client ─────────────────────────────────────── */
  "c-accueil": {
    src: "/captures/c-accueil.jpg",
    alt: "Écran d'accueil de l'application GuestsKit sur mobile",
    sections: ["hero", "demo"],
  },
  "c-animation": {
    src: "/captures/c-animation.jpg",
    alt: "Écran animations dans GuestsKit",
    sections: ["features-client"],
  },
  "c-connexion": {
    src: "/captures/c-connexion.jpg",
    alt: "Écran de connexion client GuestsKit",
    sections: [],
  },
  "c-decouvertes": {
    src: "/captures/c-decouvertes.jpg",
    alt: "Écran découvertes et suggestions dans GuestsKit",
    sections: ["features-client"],
  },
  "c-demandes": {
    src: "/captures/c-demandes.jpg",
    alt: "Écran demandes client dans GuestsKit",
    sections: ["features-client"],
  },
  "c-plan": {
    src: "/captures/c-plan.jpg",
    alt: "Écran du plan interactif de l'hôtel dans GuestsKit",
    sections: ["features-client"],
  },
  "c-restaurants": {
    src: "/captures/c-restaurants.jpg",
    alt: "Écran restaurants dans GuestsKit",
    sections: ["features-client", "demo"],
  },
  "c-services": {
    src: "/captures/c-services.jpg",
    alt: "Écran services dans GuestsKit",
    sections: [],
  },
  "c-spectacles": {
    src: "/captures/c-spectacles.jpg",
    alt: "Écran spectacles dans GuestsKit",
    sections: ["features-client", "demo"],
  },

  /* ── Côté administration ─────────────────────────────── */
  "a-checkin": {
    src: "/captures/a-checkin.jpg",
    alt: "Interface check-in du back-office GuestsKit",
    sections: ["team-features"],
  },
  "a-demandes": {
    src: "/captures/a-demandes.jpg",
    alt: "Tableau de bord des demandes dans GuestsKit",
    sections: ["team-features"],
  },
  "a-editeur-plan": {
    src: "/captures/a-editeur-plan.jpg",
    alt: "Éditeur de plan interactif dans le back-office GuestsKit",
    sections: ["team-features"],
  },
  "a-reception": {
    src: "/captures/a-reception.jpg",
    alt: "Interface réception du back-office GuestsKit",
    sections: [],
  },
  "a-restaurants": {
    src: "/captures/a-restaurants.jpg",
    alt: "Gestion des restaurants dans le back-office GuestsKit",
    sections: [],
  },
  "a-tableau": {
    src: "/captures/a-tableau.jpg",
    alt: "Tableau de bord principal du back-office GuestsKit",
    sections: [],
  },
} as const;

export type CaptureKey = keyof typeof captures;
