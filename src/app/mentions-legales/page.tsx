import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legal, legalComplete } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Mentions légales — GuestsKit",
  robots: legalComplete ? "index,follow" : "noindex,nofollow",
};

export default function MentionsLegales() {
  // 404 en production tant que les informations légales ne sont pas complètes
  if (!legalComplete && process.env.NODE_ENV !== "development") {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-24 font-sans text-charcoal">
      <h1 className="font-serif text-4xl text-night mb-10">Mentions légales</h1>

      {!legalComplete && (
        <div className="bg-gold/10 border border-gold/30 rounded-xl p-5 mb-10 text-sm text-night">
          Cette page est en cours de rédaction (aperçu développement uniquement).
        </div>
      )}

      <section className="space-y-8 text-sm leading-relaxed">
        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Éditeur du site</h2>
          <p>{legal.raisonSociale || "GuestsKit"}</p>
          {legal.formeJuridique && <p>{legal.formeJuridique}</p>}
          {legal.adresse && <p>{legal.adresse}</p>}
          {legal.immatriculation && <p>Immatriculation : {legal.immatriculation}</p>}
          {legal.directeurPublication && (
            <p>Directeur de la publication : {legal.directeurPublication}</p>
          )}
        </div>

        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Hébergeur</h2>
          <p>
            {legal.hebergeur} — hébergeur actuel du site. L'adresse exacte est consultable sur{" "}
            <a href="https://vercel.com/legal" className="text-sapphire underline underline-offset-4" target="_blank" rel="noopener noreferrer">
              vercel.com/legal
            </a>.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Contact</h2>
          <p>
            Pour toute question relative au site :{" "}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "fethi.amine.mami@gmail.com"}`}
              className="text-sapphire underline underline-offset-4"
            >
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "fethi.amine.mami@gmail.com"}
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété exclusive de{" "}
            {legal.raisonSociale || "GuestsKit"}, sauf mention contraire. Toute reproduction est interdite sans autorisation écrite préalable.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-night mb-3">Loi applicable</h2>
          <p>
            Le présent site est soumis au droit tunisien. Tout litige relatif à son utilisation
            relève de la compétence des juridictions tunisiennes.
          </p>
        </div>
      </section>
    </main>
  );
}
