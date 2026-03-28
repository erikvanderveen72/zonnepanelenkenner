import type { Metadata } from "next";
import { InstallateurVergelijker } from "@/components/InstallateurVergelijker";
import PageHero from "@/components/PageHero";
import FAQSchema, { FAQItem } from "@/components/FAQSchema";
import { CheckCircle } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Installateurs Vergelijken 2026 | Zonnepanelenkenner.nl",
  description:
    "Vergelijk zonnepaneel installateurs op prijs, garantie en beoordeling. Vind de beste installateur in jouw regio.",
  keywords:
    "installateurs vergelijken, installateur keuze, aanbieders, prijzen",
};

const faqItems: FAQItem[] = [
  {
    question: "Hoe kies ik de beste installateur?",
    answer:
      "Vergelijk altijd minimaal 3 offertes op basis van prijs per Wp, garantie, beoordeling en ervaring. Check ook referenties en verzekeringen.",
  },
  {
    question: "Wat betekent prijs per Wp?",
    answer:
      "De prijs per Wattpiek is de totale prijs (incl. installatie) gedeeld door het totale vermogen in Wp. Dit stelt je in staat om aanbieders eerlijk te vergelijken.",
  },
  {
    question: "Hoe lang is de garantie op zonnepanelen?",
    answer:
      "Fabrikanten geven meestal 10-15 jaar garantie. Sommige installateurs bieden tot 25 jaar garantie. Let ook op arbeidsgarantie.",
  },
  {
    question: "Welke verzekeringen heeft een goedeinstallateur?",
    answer:
      "Een professionele installateur moet aansprakelijkheidsverzekering en erkend bedrijf (SENA) zijn. Dit beschermt je tegen fouten en schade.",
  },
  {
    question: "Kan ik installateurs via dit platform inhuren?",
    answer:
      "Nee, deze vergelijking is informatief. Contact opnemen met installateurs gebeurt direct via hun websites of via referralplatformen.",
  },
  {
    question: "Hoe betrouwbaar zijn de beoordelingen?",
    answer:
      "Beoordelingen zijn afkomstig van klanten en onafhankelijke platforms. Lees reviews zorgvuldig door en let op zowel positieve als negatieve punten.",
  },
];

export default function VergelijkenPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <PageHero
        title="Installateurs Vergelijken"
        subtitle="Vind de beste installateur in jouw regio"
        badge="8+ aanbieders"
        showBreadcrumbs={true}
        breadcrumbs={[{ label: "Vergelijken", href: "/vergelijken" }]}
      />

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Vergelijk installateurs
            </h2>
            <p className="text-lg text-stone-600 mb-6">
              Hieronder vind je een vergelijking van zonnepaneel installateurs in
              Nederland. Vergelijk op prijs, garantie en beoordeling. Zorg dat je
              minimaal 3 offertes aanvraagt voordat je een besluit neemt.
            </p>

            {/* Tips */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                "Vraag altijd 3+ offertes",
                "Check de reviews",
                "Vergelijk prijs per Wp",
                "Let op de garantie",
                "Controleer referenties",
              ].map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 p-4 bg-emerald-50 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-emerald-900 font-medium">
                    {tip}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Vergelijker Component */}
          <InstallateurVergelijker />

          {/* What to Look For Section */}
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-6">
                Wat te zoeken in een installateur
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Certificering en Erkenning",
                    description:
                      "Zorg dat de installateur erkend is door SENA of soortgelijke organisaties.",
                  },
                  {
                    title: "Ervaring",
                    description:
                      "Kies voor installateurs met minstens 5 jaar ervaring met zonnepanelen.",
                  },
                  {
                    title: "Garantie",
                    description:
                      "Vraag naar fabrikantgarantie en werkmanschap garantie (minimaal 10 jaar).",
                  },
                  {
                    title: "Referenties",
                    description:
                      "Vraag om referenties van klanten en controleer online reviews.",
                  },
                  {
                    title: "Transparante Offerte",
                    description:
                      "Zorg dat de offerte alle kosten duidelijk specificeert.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <h4 className="font-semibold text-blue-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-blue-800">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">
                Vragen voor een Offerte
              </h3>
              <p className="text-stone-600 mb-4">
                Stel deze vragen voordat je offertes aanvraagt:
              </p>
              <ul className="space-y-3 text-stone-700 text-sm">
                <li>• Welk paneltype en merkquality adviseert u?</li>
                <li>• Hoe lang is de garantie?</li>
                <li>• Wat zijn alle kosten (materiaal + installatie)?</li>
                <li>• Helpen jullie met subsidieaanvraag?</li>
                <li>• Hoe lang duurt de installatie?</li>
                <li>• Is netaansluiting inbegrepen?</li>
                <li>• Wat gebeurt er bij storingen?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <FAQSchema
            items={faqItems}
            title="Vragen over installateurs kiezen"
          />
        </div>
      </section>
    </main>
  );
}
