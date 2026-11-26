/**
 * Données légales du site GuestsKit.
 * Remplir tous les champs marqués "" avant de lier les pages légales depuis le site.
 * Tant qu'un champ est vide, les pages /mentions-legales et /confidentialite sont en noindex.
 * shortcut: texte juridique à faire relire par un juriste avant publication.
 */

export const legal = {
  raisonSociale: "",           // [À CONFIRMER : Fethi — nom légal de la société]
  formeJuridique: "",          // [À CONFIRMER : Fethi — ex. SUARL, SARL, SAS…]
  pays: "Tunisie",
  adresse: "",                 // [À CONFIRMER : Fethi]
  immatriculation: "",         // [À CONFIRMER : Fethi — numéro RNE ou équivalent]
  directeurPublication: "",    // [À CONFIRMER : Fethi — probablement Fethi Amine Mami]
  contactDonnees: "",          // [À CONFIRMER : Fethi — email du responsable données]
  hebergeur: "Vercel Inc. — vercel.com",
  dureeConservation: "",       // [À CONFIRMER : Fethi — durée de conservation des demandes de démo]

  // Ce que le site collecte réellement (vérification au 26/11/2026) :
  // - Formulaire de contact : le bouton ouvre le client mail du visiteur ; le message arrive sur la boîte
  //   Gmail de GuestsKit (service Google LLC, États-Unis) — aucune donnée ne transite par nos serveurs.
  // - Cookies : aucun cookie déposé par le site.
  // - Hébergeur : Vercel Inc. (États-Unis) — adresse à confirmer sur vercel.com/legal avant publication.
  // - Analytics : Vercel Analytics non activé.
  // shortcut: texte juridique à faire relire par un juriste avant activation des pages légales
  analytics: false as boolean,
} as const;

/** Vrai si toutes les informations légales obligatoires sont renseignées. */
export const legalComplete = [
  legal.raisonSociale,
  legal.formeJuridique,
  legal.pays,
  legal.adresse,
  legal.immatriculation,
  legal.directeurPublication,
  legal.contactDonnees,
  legal.dureeConservation,
].every((v) => v !== "");
