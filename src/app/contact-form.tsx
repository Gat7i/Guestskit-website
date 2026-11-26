"use client";

interface Props {
  contactEmail: string;
}

export default function ContactForm({ contactEmail }: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    // Anti-spam : champ honeypot invisible doit rester vide
    if (f.get("website")) return;
    const hotel = (f.get("hotel") as string) || "";
    const subject = encodeURIComponent(`Demande de démo — ${hotel}`);
    const body = encodeURIComponent(
      `Nom : ${f.get("nom")}\nHôtel : ${hotel}\nTéléphone : ${f.get("tel")}\nE-mail : ${f.get("email")}`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-snow placeholder-snow/30 focus:outline-none focus:ring-2 focus:ring-gold/50";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto text-left" noValidate>
      {/* Honeypot anti-spam */}
      <input type="text" name="website" className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div>
        <label htmlFor="cf-nom" className="sr-only">Votre nom</label>
        <input id="cf-nom" type="text" name="nom" placeholder="Votre nom" required className={field} />
      </div>
      <div>
        <label htmlFor="cf-hotel" className="sr-only">Nom de l'hôtel</label>
        <input id="cf-hotel" type="text" name="hotel" placeholder="Nom de l'hôtel" required className={field} />
      </div>
      <div>
        <label htmlFor="cf-tel" className="sr-only">Numéro de téléphone</label>
        <input id="cf-tel" type="tel" name="tel" placeholder="Numéro de téléphone" className={field} />
      </div>
      <div>
        <label htmlFor="cf-email" className="sr-only">Adresse e-mail</label>
        <input id="cf-email" type="email" name="email" placeholder="Adresse e-mail" required className={field} />
      </div>

      <button
        type="submit"
        className="w-full bg-gold text-night font-medium px-8 py-4 rounded-xl hover:bg-gold/90 transition-colors focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
      >
        Demander une démo
      </button>

      {/* shortcut: adresse visible dans le code source (risque spam) ; upgrade vers envoi serveur quand boîte pro configurée */}
      <p className="text-snow/40 text-xs text-center">
        ou écrivez-nous à{" "}
        <a href={`mailto:${contactEmail}`} className="underline underline-offset-2 hover:text-snow/60">
          {contactEmail}
        </a>
      </p>
    </form>
  );
}
