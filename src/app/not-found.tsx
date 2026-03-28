import Link from "next/link";
import { AlertCircle, Home, HelpCircle, Newspaper, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-stone-900 via-amber-900 to-stone-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-amber-500 mb-4 opacity-80">
            404
          </div>
          <AlertCircle className="w-20 h-20 text-amber-500 mx-auto mb-6" />
        </div>

        {/* Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Pagina niet gevonden
        </h1>
        <p className="text-xl text-stone-300 mb-12">
          Helaas is de pagina die je zoekt niet meer beschikbaar of bestaat
          nooit. Keer terug naar de homepage of verkennen onze populaire
          onderwerpen.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-amber-500 text-stone-900 rounded-lg font-semibold hover:bg-amber-400 transition mb-12"
        >
          Terug naar Homepage
        </Link>

        {/* Suggestions Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Populaire pagina's
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Zap,
                title: "Calculator",
                description: "Bereken je besparing",
                href: "/calculator",
              },
              {
                icon: HelpCircle,
                title: "Keuzehulp",
                description: "Persoonlijk advies",
                href: "/advies",
              },
              {
                icon: Newspaper,
                title: "Blog",
                description: "Actueel nieuws",
                href: "/blog",
              },
              {
                icon: Home,
                title: "Begrippenlijst",
                description: "Alle termen uitgelegd",
                href: "/begrippenlijst",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="p-6 bg-white/10 backdrop-blur border border-white/20 rounded-lg hover:bg-white/20 transition text-left"
                >
                  <Icon className="w-8 h-8 text-amber-400 mb-3" />
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-stone-300 text-sm">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
