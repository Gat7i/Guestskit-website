import type { Metadata } from "next";
import { legal, legalComplete } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité — GuestsKit",
  robots: legalComplete ? "index,follow" : "noindex,nofollow",
};

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "fethi.amine.mami@gmail.com";

export default function Confidentialite() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24 font-sans text-charcoal">
      <h1 className="font-serif text-4xl text-night mb-10">Politique de confidentialité</h1>

      {!legalComplete && (
        <div className="bg-gold/10 border border-gold/30 rounded-xl p-5 mb-10 text-sm text-night">
          Cette page est en cours de rédaction. Elle n'est pas encore référencée par les moteurs de recherche.
        </div>
      )}

      <section className="space-y-8 text-sm leading-relaxed">
        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Données collectées</h2>
          <p>
            Le formulaire de contact collecte les informations suivantes : nom, nom de l'hôtel, numéro de téléphone et adresse e-mail.
            Ces données sont transmises directement à l'équipe GuestsKit par courrier électronique. <strong>Elles ne sont pas stockées sur un serveur.</strong>
          </p>
          <p className="mt-3">
            Ce site ne dépose <strong>aucun cookie</strong>. Aucun outil de mesure d'audience n'est activé.
            L'hébergeur ({legal.hebergeur.split(",")[0]}) peut collecter des journaux d'accès à des fins d'exploitation technique.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Finalité du traitement</h2>
          <p>
            Les données du formulaire de contact sont utilisées uniquement pour répondre à votre demande de démonstration et ne sont pas transmises à des tiers.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Durée de conservation</h2>
          <p>
            {legal.dureeConservation ||
              "Les données sont conservées le temps nécessaire au traitement de votre demande. [durée précise — À CONFIRMER]"}
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Vos droits</h2>
          <p>
            Conformément à la réglementation applicable{legal.pays ? ` en ${legal.pays}` : ""}, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
            Pour exercer ces droits, contactez-nous à :{" "}
            <a href={`mailto:${legal.contactDonnees || CONTACT_EMAIL}`} className="text-sapphire underline underline-offset-4">
              {legal.contactDonnees || CONTACT_EMAIL}
            </a>
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
