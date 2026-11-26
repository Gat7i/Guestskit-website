/**
 * Données légales du site GuestsKit.
 * Remplir tous les champs marqués "" avant de lier les pages légales depuis le site.
 * Tant qu'un champ est vide, les pages /mentions-legales et /confidentialite sont en noindex.
 * shortcut: texte juridique à faire relire par un juriste avant publication.
 */

export const legal = {
  raisonSociale: "",           // [À CONFIRMER : Fethi — nom légal de la société]
  formeJuridique: "",          // [À CONFIRMER : Fethi — ex. SUARL, SARL, SAS…]
  pays: "",                    // [À CONFIRMER : Fethi — ex. Tunisie]
  adresse: "",                 // [À CONFIRMER : Fethi]
  immatriculation: "",         // [À CONFIRMER : Fethi — numéro RNE ou équivalent]
  directeurPublication: "",    // [À CONFIRMER : Fethi — probablement Fethi Amine Mami]
  contactDonnees: "",          // [À CONFIRMER : Fethi — email du responsable données]
  hebergeur: "Vercel Inc., 340 Pine Street Suite 701, San Francisco CA 94104, États-Unis",
  dureeConservation: "",       // [À CONFIRMER : Fethi — durée de conservation des demandes de démo]

  // Ce que le site collecte réellement (vérification au 26/11/2026) :
  // - Formulaire de contact : nom, hôtel, téléphone, e-mail — transmis par mailto, non stockés côté serveur.
  // - Cookies : aucun cookie déposé par le site. Vercel peut collecter des logs d'accès côté infrastructure.
  // - Analytics : Vercel Analytics non activé.
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
