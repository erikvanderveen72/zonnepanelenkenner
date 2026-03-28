import type { Metadata } from "next";
import Link from "next/link";
import {
  HelpCircle,
  Calculator,
  BookOpen,
  Users,
  Layers,
  Newspaper,
  CheckCircle,
} from "lucide-react";
import FAQSchema from "@/components/FAQSchema";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Zonnepanelen Advies op Maat 2026 | Zonnepanelenkenner.nl",
  description:
    "Onafhankelijk advies voor zonnepanelen. Bereken je terugverdientijd, vergelijk installateurs en ontdek welke panelen bij jouw situatie passen.",
  keywords:
    "zonnepanelen, advies, calculator, terugverdientijd, subsidies 2026",
  robots: {
    index: true,
    follow: true,
  },
};

const faqItems = [
  {
    question: "Hoeveel kost een zonnepanelinstallatie gemiddeld?",
    answer:
      "De gemiddelde kosten liggen tussen de €3.000 tot €7.000 voor een huishouden. Dit hangt af van het aantal panelen, type en installatiekosten. De prijs per Wp is meestal €0,28 tot €0,35.",
  },
  {
    question: "Wat is de terugverdientijd van zonnepanelen?",
    answer:
      "De gemiddelde terugverdientijd is 6-8 jaar. Dit betekent dat na deze periode de besparing gelijk is aan de investering. Na 25 jaar kunnen zonnepanelen tot €50.000 opbrengen.",
  },
  {
    question: "Hoeveel panelen heb ik nodig?",
    answer:
      "Dit hangt af van je jaarlijks stroomverbruik. Een gemiddeld huishouden (3.500 kWh/jaar) heeft ongeveer 10-12 panelen van 400 Wp nodig.",
  },
  {
    question: "Wat gebeurt er met de salderingsregeling na 2025?",
    answer:
      "Na 2025 eindigt de huidige salderingsregeling. Het overschot stroom wordt dan tegen lagere tarieven vergoed (netto-verliesverrekening). Dit maakt batterijopslag interessanter.",
  },
  {
    question: "Zijn er nog subsidies beschikbaar in 2026?",
    answer:
      "Ja, er zijn diverse subsidies en regelingen beschikbaar. De exacte bedragen hangen af van je regio en situatie. Neem contact op met je gemeente voor meer informatie.",
  },
  {
    question: "Werken zonnepanelen ook op bewolkte dagen?",
    answer:
      "Ja, zonnepanelen werken ook op bewolkte dagen, maar met aanzienlijk verminderde opbrengst (tot 75% minder). Op zonnige dagen is de opbrengst maximaal.",
  },
];

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-stone-950 overflow-hidden pt-20 pb-32">
        {/* Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          {/* Plus Pattern */}
          <div className="absolute inset-0 plus-pattern opacity-5"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900/50 border border-emerald-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-medium">
                Actueel 2026
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
            <span className="text-white">Zonnepanelen</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Advies op Maat
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-stone-300 text-center max-w-3xl mx-auto mb-12">
            Onafhankelijk advies voor het kiezen van zonnepanelen. Bereken je
            terugverdientijd, vergelijk installateurs en ontdek welke panelen
            bij jouw dak passen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link
              href="/calculator"
              className="px-8 py-4 bg-white text-stone-900 rounded-lg font-semibold hover:bg-stone-100 transition text-center"
            >
              Bereken je besparing
            </Link>
            <Link
              href="/advies"
              className="px-8 py-4 rounded-lg font-semibold border border-white/20 text-white hover:bg-white/10 transition text-center backdrop-blur"
            >
              Start keuzehulp
            </Link>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-stone-900/30 backdrop-blur border border-white/10 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">
                6-8
              </div>
              <div className="text-sm text-stone-400">Gem. terugverdientijd (jaar)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">
                €700
              </div>
              <div className="text-sm text-stone-400">Gem. besparing/jaar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
                1.350 kg
              </div>
              <div className="text-sm text-stone-400">Gem. CO2 besparing/jaar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">
                9.2/10
              </div>
              <div className="text-sm text-stone-400">Tevreden gebruikers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-stone-900 text-center mb-16">
            Populaire Onderwerpen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: HelpCircle,
                title: "Keuzehulp",
                description:
                  "Beantwoord enkele vragen en ontvang persoonlijk advies.",
                href: "/advies",
                gradient: "from-blue-500/20 to-blue-600/20",
              },
              {
                icon: Calculator,
                title: "Terugverdientijd Calculator",
                description:
                  "Bereken hoeveel je kunt besparen met zonnepanelen.",
                href: "/calculator",
                gradient: "from-emerald-500/20 to-emerald-600/20",
              },
              {
                icon: BookOpen,
                title: "Begrippenlijst",
                description:
                  "Alle belangrijke termen rond zonnepanelen uitgelegd.",
                href: "/begrippenlijst",
                gradient: "from-purple-500/20 to-purple-600/20",
              },
              {
                icon: Users,
                title: "Installateurs Vergelijken",
                description: "Vind de beste installateur in jouw buurt.",
                href: "/vergelijken",
                gradient: "from-orange-500/20 to-orange-600/20",
              },
              {
                icon: Layers,
                title: "Soorten Panelen",
                description:
                  "Lees meer over mono-, poly- en bifaciale panelen.",
                href: "/soorten",
                gradient: "from-red-500/20 to-red-600/20",
              },
              {
                icon: Newspaper,
                title: "Blog",
                description: "Actueel nieuws en tips over zonnepanelen.",
                href: "/blog",
                gradient: "from-indigo-500/20 to-indigo-600/20",
              },
            ].map((topic, index) => {
              const Icon = topic.icon;
              return (
                <Link
                  key={index}
                  href={topic.href}
                  className={`p-8 rounded-2xl border border-stone-200 hover:border-stone-300 transition bg-gradient-to-br ${topic.gradient} hover:shadow-lg`}
                >
                  <Icon className="w-12 h-12 text-stone-900 mb-4" />
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-stone-600">{topic.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-stone-900 text-center mb-16">
            Waarom Zonnepanelenkenner?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Onafhankelijk advies",
              "Gratis informatie",
              "Dagelijks bijgewerkt",
              "Geen provisie",
            ].map((indicator, index) => (
              <div key={index} className="text-center">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <p className="text-lg font-semibold text-stone-900">
                  {indicator}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-stone-900 text-center mb-16">
            Veelgestelde Vragen
          </h2>

          <FAQSchema items={faqItems} title="" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Klaar om aan de slag te gaan?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Ontdek hoeveel je kunt besparen met zonnepanelen.
          </p>
          <Link
            href="/calculator"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-stone-100 transition"
          >
            Start je berekening
          </Link>
        </div>
      </section>
    </main>
  );
}
