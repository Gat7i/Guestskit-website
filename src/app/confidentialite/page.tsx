import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legal, legalComplete } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité — GuestsKit",
  robots: legalComplete ? "index,follow" : "noindex,nofollow",
};

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "fethi.amine.mami@gmail.com";

export default function Confidentialite() {
  // 404 en production tant que les informations légales ne sont pas complètes
  if (!legalComplete && process.env.NODE_ENV !== "development") {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-24 font-sans text-charcoal">
      <h1 className="font-serif text-4xl text-night mb-10">Politique de confidentialité</h1>

      {!legalComplete && (
        <div className="bg-gold/10 border border-gold/30 rounded-xl p-5 mb-10 text-sm text-night">
          Cette page est en cours de rédaction (aperçu développement uniquement).
        </div>
      )}

      <section className="space-y-8 text-sm leading-relaxed">
        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Responsable du traitement</h2>
          <p>
            {legal.raisonSociale || "GuestsKit"}{legal.pays ? ` — ${legal.pays}` : ""}.
            Pour toute question relative à vos données :{" "}
            <a href={`mailto:${legal.contactDonnees || CONTACT_EMAIL}`} className="text-sapphire underline underline-offset-4">
              {legal.contactDonnees || CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Données collectées et comment</h2>
          <p>
            Ce site collecte des données uniquement via le formulaire de contact (nom, nom de
            l'hôtel, numéro de téléphone, adresse e-mail).
          </p>
          <p className="mt-3">
            Le bouton « Demander une démo » ouvre votre client de messagerie (Outlook, Gmail,
            Mail…) avec un message pré-rempli. Vous décidez d'envoyer ou non. Si vous envoyez,
            le message est transmis par votre propre service de messagerie à l'adresse de l'équipe
            GuestsKit, hébergée chez Google LLC (service Gmail, États-Unis).{" "}
            <strong>Aucune donnée ne transite par les serveurs de ce site.</strong>
          </p>
          <p className="mt-3">
            Ce site ne dépose <strong>aucun cookie</strong>. Aucun outil de mesure d'audience
            n'est activé. L'hébergeur ({legal.hebergeur.split("—")[0].trim()}) peut collecter des
            journaux d'accès à des fins d'exploitation technique.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Finalité du traitement</h2>
          <p>
            Les données du formulaire de contact sont utilisées uniquement pour répondre à votre
            demande de démonstration. Elles ne sont pas cédées à des tiers.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Durée de conservation</h2>
          <p>
            {legal.dureeConservation ||
              "Les messages reçus sont conservés dans la boîte de messagerie de GuestsKit. La durée précise de conservation est en cours de définition."}
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Vos droits</h2>
          <p>
            Conformément à la loi organique tunisienne n° 2004-63 relative à la protection des
            données personnelles, vous disposez d'un droit d'accès, de rectification et de
            suppression de vos données. Pour exercer ces droits, contactez-nous à :{" "}
            <a href={`mailto:${legal.contactDonnees || CONTACT_EMAIL}`} className="text-sapphire underline underline-offset-4">
              {legal.contactDonnees || CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-3">
            Vous pouvez également adresser une réclamation à l'Instance Nationale de Protection
            des Données Personnelles (INPDP), autorité compétente en Tunisie.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Loi applicable</h2>
          <p>
            La présente politique est régie par le droit tunisien.
          </p>
        </div>

        <p className="text-muted text-xs mt-10 pt-6 border-t border-border">
          Ce document est fourni à titre informatif. Il ne constitue pas un avis juridique.
          Dernière mise à jour : novembre 2026.
        </p>
      </section>
    </main>
  );
}
