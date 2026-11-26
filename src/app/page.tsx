import Image from "next/image";
import ContactForm from "./contact-form";

/* ── JSON-LD Schema ───────────────────────────────────────── */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GuestsKit",
  url: "https://www.guestskit.com",
  description:
    "Conciergerie digitale pour hôtels — application web accessible par QR code, sans installation.",
};

const faqItems = [
  {
    q: "Faut-il télécharger une application ?",
    // shortcut: "PWA" retiré — service worker non confirmé par App ; reformuler si confirmé
    a: "Non. GuestsKit est une application web installable sur l'écran d'accueil, sans passer par l'App Store ni Google Play. Aucun téléchargement n'est nécessaire.",
  },
  {
    q: "Combien de temps faut-il pour déployer GuestsKit ?",
    a: "La mise en place est rapide et entièrement prise en charge par notre équipe : installation, configuration, import de vos contenus et formation du personnel. Nous convenons du calendrier précis avec vous lors de la démo.",
  },
  {
    q: "L'application sera-t-elle aux couleurs de notre hôtel ?",
    a: "Oui. Logo, couleur principale, nom de l'établissement : chaque instance est personnalisée à votre image. L'application est hébergée sur votre propre domaine.",
  },
  {
    q: "Nos données sont-elles partagées avec d'autres hôtels ?",
    a: "Non. Chaque hôtel dispose d'une instance dédiée avec une base de données isolée. Vos données appartiennent à votre établissement.",
  },
  {
    q: "Faut-il former notre personnel ?",
    a: "La formation est incluse dans la mise en place. L'interface back-office est conçue pour être prise en main sans expérience technique.",
  },
  {
    q: "L'application fonctionne-t-elle sans Wi-Fi ?",
    a: "Une connexion Internet est nécessaire pour accéder à l'application et envoyer des demandes. Elle fonctionne sur toute connexion mobile (3G/4G) ou Wi-Fi.",
  },
  {
    q: "GuestsKit est-il disponible en plusieurs langues ?",
    a: "L'interface est en français. La prise en charge d'autres langues est prévue dans une prochaine version.",
  },
  {
    q: "Qu'est-ce qui est inclus dans l'abonnement ?",
    a: "L'hébergement, les mises à jour, le support technique et l'accès complet au back-office sont inclus. Les détails de tarification sont disponibles sur demande.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://www.guestskit.app";
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "fethi.amine.mami@gmail.com";
// shortcut: placeholder activé à la compilation uniquement ; voir public/captures/LISEZ-MOI.md
const CAPTURES_PLACEHOLDER = process.env.NEXT_PUBLIC_CAPTURES_PLACEHOLDER === "1";

/* ── Page ─────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Nav />
        <Hero />
        <Problem />
        <ClientFeatures />
        <HowItWorks />
        <TeamFeatures />
        <Demo />
        <Faq />
        <CtaFinal />
        <Footer />
      </main>
    </>
  );
}

/* ── Nav ──────────────────────────────────────────────────── */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-snow/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        <a href="/" className="font-serif text-2xl text-night leading-none">
          GuestsKit
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-charcoal" aria-label="Navigation principale">
          <a href="#fonctionnalites" className="hover:text-night transition-colors">Fonctionnalités</a>
          <a href="#comment-ca-marche" className="hover:text-night transition-colors">Comment ça marche</a>
          <a href="#equipes" className="hover:text-night transition-colors">Pour les équipes</a>
          <a href="#demo" className="hover:text-night transition-colors">Démo</a>
          <a href="#faq" className="hover:text-night transition-colors">FAQ</a>
        </nav>
        <a
          href="#contact"
          className="bg-gold text-night text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-gold/90 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          Demander une démo
        </a>
      </div>
    </header>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="bg-night pt-28 pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Texte */}
        <div>
          <span className="block w-1 h-8 bg-gold rounded-full mb-7" aria-hidden="true" />
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-snow leading-[1.08]">
            Votre hôtel,<br />
            dans la poche<br />
            de vos clients.
          </h1>
          <p className="mt-7 text-snow/70 text-lg leading-relaxed max-w-md">
            Une application web à votre image — accessible par QR code, sans téléchargement.
            Vos clients découvrent l'hôtel, planifient leurs activités et envoient leurs demandes
            à la réception.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 items-start">
            <a
              href="#contact"
              className="bg-gold text-night font-medium px-8 py-4 rounded-xl hover:bg-gold/90 transition-colors focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
            >
              Demander une démo
            </a>
            <a
              href="#demo"
              className="text-snow/60 text-sm flex items-center gap-2 hover:text-snow transition-colors sm:pt-3"
            >
              Découvrir l'application
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        {/* Maquette téléphone */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-56">
            <div className="bg-[#0A1529] rounded-[2.5rem] p-2 shadow-2xl ring-1 ring-white/10">
              <div className="rounded-[2rem] overflow-hidden" style={{ aspectRatio: "9/19.5" }}>
                <Image
                  src="/captures/c-accueil.jpg"
                  alt="Écran d'accueil de l'application GuestsKit sur mobile — tableau de bord hôtel"
                  width={224}
                  height={486}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            {/* Halo */}
            <div className="absolute -inset-10 -z-10 bg-sapphire/15 blur-3xl rounded-full" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Problème ─────────────────────────────────────────────── */
function Problem() {
  return (
    <section className="bg-snow py-24 px-4 sm:px-6" id="fonctionnalites">
      <div className="max-w-3xl mx-auto">
        <span className="block w-1 h-8 bg-gold rounded-full mb-7" aria-hidden="true" />
        <h2 className="font-serif text-4xl sm:text-5xl text-night leading-tight mb-14">
          La réception croule.<br />Vos clients ne savent pas.
        </h2>
        <div className="space-y-10">
          {[
            {
              lead: "Le téléphone monopolise la réception.",
              body: "Serviettes supplémentaires, heure du dîner, réservation au spa : chaque demande passe par un coup de fil. Rien n'est tracé, aucune demande n'est priorisée, et le personnel court après les réponses.",
            },
            {
              lead: "Le programme est affiché dans le hall.",
              body: "La soirée à thème, l'aquagym du matin, le spectacle du soir — vos clients les ratent parce qu'ils n'ont pas vu l'affiche. Vos animations sont invisibles.",
            },
            {
              lead: "Dans un grand resort, personne ne se repère.",
              body: "La piscine principale, le restaurant de la plage, l'espace bien-être : vos clients cherchent, demandent, et attendent. L'expérience commence mal.",
            },
          ].map(({ lead, body }, i) => (
            <div key={i} className="border-l-2 border-border pl-6">
              <p className="text-lg leading-relaxed text-charcoal">
                <strong className="font-medium text-night">{lead}</strong>{" "}
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Fonctionnalités côté client ──────────────────────────── */
function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-44 flex-shrink-0">
      <div className="bg-night rounded-[2.5rem] p-1.5 shadow-xl ring-1 ring-black/5">
        <div className="rounded-[2rem] overflow-hidden" style={{ aspectRatio: "9/19.5" }}>
          {CAPTURES_PLACEHOLDER ? (
            <div className="w-full h-full bg-night/60 flex items-center justify-center p-4">
              <span className="text-snow/40 text-xs text-center leading-relaxed">
                Capture de la démo à venir
              </span>
            </div>
          ) : (
            <Image src={src} alt={alt} width={176} height={381} className="w-full h-full object-cover" />
          )}
        </div>
      </div>
    </div>
  );
}

function PhoneFeature({
  title,
  body,
  src,
  alt,
  src2,
  alt2,
  reverse,
}: {
  title: string;
  body: string;
  src: string;
  alt: string;
  src2?: string;
  alt2?: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-16 items-center py-20 px-4 sm:px-6 max-w-6xl mx-auto`}
    >
      {/* Téléphone(s) */}
      <div className="flex gap-5 justify-center flex-shrink-0">
        <PhoneFrame src={src} alt={alt} />
        {src2 && alt2 && (
          <div className="mt-10">
            <PhoneFrame src={src2} alt={alt2} />
          </div>
        )}
      </div>

      {/* Texte */}
      <div className="max-w-md">
        <span className="block w-1 h-8 bg-gold rounded-full mb-5" aria-hidden="true" />
        <h3 className="font-serif text-3xl sm:text-4xl text-night mb-5 leading-tight">{title}</h3>
        <p className="text-charcoal/80 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function ClientFeatures() {
  return (
    <section className="bg-white divide-y divide-border">
      <PhoneFeature
        title="Plan interactif de l'établissement"
        body="Fini les plans papier et les questions à la réception. GuestsKit affiche le plan de votre établissement avec tous vos lieux de vie : restaurants, bars, piscines, espaces bien-être. Vos clients se repèrent en un coup d'œil."
        src="/captures/c-plan.jpg"
        alt="Écran du plan interactif de l'hôtel dans GuestsKit"
      />
      <PhoneFeature
        title="Restaurants, bars et découvertes"
        body="Horaires, menus du jour, spécialités : tout est actualisé depuis le back-office. Vos clients consultent l'offre de restauration, découvrent vos activités et les suggestions autour de l'hôtel — sans quitter leur chambre."
        src="/captures/c-restaurants.jpg"
        alt="Écran des restaurants dans GuestsKit"
        src2="/captures/c-decouvertes.jpg"
        alt2="Écran des découvertes et suggestions dans GuestsKit"
        reverse
      />
      <PhoneFeature
        title="Spectacles, animations et activités"
        body="Votre programme d'animations est disponible dès l'arrivée. Spectacles du soir, activités sportives, cours collectifs : vos clients planifient leur séjour et ne ratent plus rien."
        src="/captures/c-spectacles.jpg"
        alt="Écran des spectacles dans GuestsKit"
        src2="/captures/c-animation.jpg"
        alt2="Écran des animations dans GuestsKit"
      />
      <PhoneFeature
        title="Demandes à la réception"
        body="Votre client envoie une demande en quelques secondes — serviettes, nettoyage, maintenance, question. La réception voit la demande dans son tableau de bord avec son statut et son historique."
        src="/captures/c-demandes.jpg"
        alt="Écran des demandes client dans GuestsKit"
        reverse
      />
    </section>
  );
}

/* ── Comment ça marche ────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Scan du QR code",
      body: "Le client scanne le code affiché à l'accueil ou dans sa chambre. Aucune recherche dans un app store.",
    },
    {
      n: "2",
      title: "Création du compte",
      body: "En quelques secondes par e-mail ou avec votre compte Google. Pas de formulaire complexe.",
    },
    {
      n: "3",
      title: "Validation du séjour",
      body: "La réception confirme l'arrivée du client. Il accède à l'ensemble des services de l'hôtel.",
    },
    {
      n: "4",
      title: "L'hôtel à portée de main",
      body: "Plan, restaurants, activités, demandes : tout est accessible pour toute la durée du séjour.",
    },
  ];

  return (
    <section className="bg-night py-24 px-4 sm:px-6" id="comment-ca-marche">
      <div className="max-w-6xl mx-auto">
        <span className="block w-1 h-8 bg-gold rounded-full mb-7" aria-hidden="true" />
        <h2 className="font-serif text-4xl sm:text-5xl text-snow mb-16 leading-tight max-w-xl">
          Vos clients l'utilisent<br />dès le premier scan.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="font-serif text-6xl text-gold/35 leading-none mb-4" aria-hidden="true">
                {s.n}
              </div>
              <h3 className="font-serif text-xl text-snow mb-3">{s.title}</h3>
              <p className="text-snow/55 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Pour les équipes ─────────────────────────────────────── */
function TeamFeatures() {
  return (
    <section className="bg-snow py-24 px-4 sm:px-6" id="equipes">
      <div className="max-w-6xl mx-auto">
        <span className="block w-1 h-8 bg-gold rounded-full mb-7" aria-hidden="true" />
        <h2 className="font-serif text-4xl sm:text-5xl text-night mb-4 leading-tight max-w-2xl">
          Un tableau de bord pour votre équipe.
        </h2>
        <p className="text-muted mb-16 max-w-xl leading-relaxed">
          GuestsKit n'est pas seulement une app pour vos clients. C'est un outil de travail pour
          votre réception, votre animation et votre direction.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Check-in et validation des séjours",
              body: "La réception crée le séjour du client, lui attribue sa chambre et valide son accès à l'application. Interface simple.",
              src: "/captures/a-checkin.jpg",
              alt: "Interface de check-in du back-office GuestsKit",
            },
            {
              title: "Suivi des demandes",
              body: "Chaque demande client est visible dans le tableau de bord avec son statut et son historique. L'équipe la traite et la marque comme prise en charge.",
              src: "/captures/a-demandes.jpg",
              alt: "Tableau de bord des demandes dans GuestsKit",
            },
            {
              title: "Gestion du contenu et de l'espace",
              body: "Restaurants, horaires, spectacles, activités, plan interactif : tout est modifiable depuis le back-office, sans développeur. Éditeur visuel, galerie photos, gestion des catégories.",
              src: "/captures/a-editeur-plan.jpg",
              alt: "Éditeur de plan interactif dans le back-office GuestsKit",
            },
          ].map((f) => (
            <div key={f.title}>
              <div className="rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-black/5 mb-6">
                <Image
                  src={f.src}
                  alt={f.alt}
                  width={420}
                  height={260}
                  className="w-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-night mb-3">{f.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Démo ─────────────────────────────────────────────────── */
function Demo() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6" id="demo">
      <div className="max-w-4xl mx-auto">
        <span className="block w-1 h-8 bg-gold rounded-full mb-7" aria-hidden="true" />
        <h2 className="font-serif text-4xl sm:text-5xl text-night mb-5 leading-tight">
          Essayez GuestsKit<br />sans vous engager.
        </h2>
        {/* TODO-DEMO: réintroduire "hôtel de démonstration fictif" quand la démo Hôtel de la Mer sera en ligne */}
        <p className="text-charcoal/70 max-w-xl mb-12 leading-relaxed">
          L'application est en ligne : parcourez le plan interactif, les restaurants, les activités
          et le système de demandes comme un vrai client d'hôtel.
        </p>

        {/* Captures démo — 3 téléphones côte à côte */}
        <div className="flex justify-center gap-6 mb-12">
          {[
            { src: "/captures/c-accueil.jpg",    alt: "Écran d'accueil de la démo GuestsKit" },
            { src: "/captures/c-restaurants.jpg", alt: "Écran restaurants de la démo GuestsKit" },
            { src: "/captures/c-spectacles.jpg",  alt: "Écran spectacles de la démo GuestsKit" },
          ].map(({ src, alt }, i) => (
            <div
              key={src}
              className={`w-36 flex-shrink-0 ${i === 1 ? "-mt-4" : "mt-4"}`}
            >
              <div className="bg-night rounded-[2.2rem] p-1.5 shadow-xl ring-1 ring-black/5">
                <div className="rounded-[1.8rem] overflow-hidden" style={{ aspectRatio: "9/19.5" }}>
                  <Image src={src} alt={alt} width={144} height={312} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-5 items-start">
          <a
            href="#contact"
            className="bg-gold text-night font-medium px-8 py-4 rounded-xl hover:bg-gold/90 transition-colors focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
          >
            Demander une démo personnalisée
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sapphire text-sm font-medium flex items-center gap-2 hover:text-sapphire/80 transition-colors sm:pt-3 focus-visible:outline-sapphire"
          >
            Accéder à la démo en ligne
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ──────────────────────────────────────────────────── */
function Faq() {
  return (
    <section className="bg-snow py-24 px-4 sm:px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <span className="block w-1 h-8 bg-gold rounded-full mb-7" aria-hidden="true" />
        <h2 className="font-serif text-4xl sm:text-5xl text-night mb-14 leading-tight">
          Questions fréquentes
        </h2>
        <div className="divide-y divide-border">
          {faqItems.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex justify-between items-center cursor-pointer list-none gap-4 select-none">
                <span className="font-medium text-night group-open:text-sapphire transition-colors">
                  {q}
                </span>
                <span
                  className="text-gold flex-shrink-0 text-xl leading-none inline-block group-open:rotate-45 transition-transform duration-150"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-charcoal/70 leading-relaxed text-sm">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Final ────────────────────────────────────────────── */
function CtaFinal() {
  return (
    <section className="bg-night py-24 px-4 sm:px-6" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <span className="block w-1 h-8 bg-gold rounded-full mx-auto mb-7" aria-hidden="true" />
        <h2 className="font-serif text-4xl sm:text-5xl text-snow mb-5 leading-tight">
          Modernisez l'expérience<br />de vos clients.
        </h2>
        <p className="text-snow/55 mb-10 leading-relaxed">
          Montrez-nous votre établissement. Nous vous préparons une démo personnalisée
          aux couleurs de votre hôtel.
        </p>

        <ContactForm contactEmail={CONTACT_EMAIL} />
        <p className="text-snow/30 text-xs mt-5">Réponse sous 24 h · Démo personnalisée gratuite</p>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#060E1E] py-12 px-4 sm:px-6 text-snow/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="font-serif text-snow text-xl block">GuestsKit</span>
          <p className="text-sm mt-1">Conciergerie digitale pour hôtels.</p>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm" aria-label="Liens du pied de page">
          <a href="#fonctionnalites" className="hover:text-snow/70 transition-colors">Fonctionnalités</a>
          <a href="#comment-ca-marche" className="hover:text-snow/70 transition-colors">Comment ça marche</a>
          <a href="#equipes" className="hover:text-snow/70 transition-colors">Pour les équipes</a>
          <a href="#demo" className="hover:text-snow/70 transition-colors">Démo</a>
          <a href="#faq" className="hover:text-snow/70 transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-snow/70 transition-colors">Contact</a>
        </nav>
        <p className="text-xs">© {new Date().getFullYear()} GuestsKit.</p>
      </div>
    </footer>
  );
}
