import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-night min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <span className="block w-1 h-8 bg-gold rounded-full mx-auto mb-7" aria-hidden="true" />
      <div className="font-serif text-7xl text-gold/35 leading-none mb-4" aria-hidden="true">
        404
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl text-snow mb-5 leading-tight">
        Page introuvable
      </h1>
      <p className="text-snow/55 max-w-sm mb-10 leading-relaxed">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 items-center">
        <Link
          href="/"
          className="bg-gold text-night font-medium px-8 py-4 rounded-xl hover:bg-gold/90 transition-colors focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/#contact"
          className="text-snow/60 text-sm hover:text-snow transition-colors focus-visible:outline-snow"
        >
          Demander une démo
        </Link>
      </div>
    </main>
  );
}
