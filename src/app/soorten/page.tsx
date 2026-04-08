import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQSchema, { FAQItem } from "@/components/FAQSchema";
import { solarPanelTypes } from "@/lib/fallback-data";
import {
  Zap,
  Clock,
  DollarSign,
  TrendingUp,
  Award,
  Cloud,
} from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Soorten Zonnepanelen 2026 - Mono, Poly & Thin-film | Zonnepanelenkenner.nl",
  description:
    "Vergelijk monokristallijn, polykristallijn en thin-film zonnepanelen. Ontdek rendement, levensduur en prijzen van alle paneltypes.",
  keywords:
    "soorten zonnepanelen, monokristallijn, polykristallijn, thin-film, paneltypen",
};

const faqItems: FAQItem[] = [
  {
    question: "Wat is het verschil tussen monokristallijn en polykristallijn?",
    answer:
      "Monokristallijn panelen hebben een hoger rendement (18-22%) gemaakt van één kristalstructuur. Polykristallijn panelen hebben een lager rendement (15-17%) maar zijn goedkoper en gemaakt uit meerdere kristallen. Monokristallijn is geschikt voor kleine daken, polykristallijn voor grotere oppervlakken met budget.",
  },
  {
    question: "Wat zijn thin-film zonnepanelen?",
    answer:
      "Thin-film panelen zijn dunne, flexibele panelen met een rendement van 10-13%. Ze presteren beter in grijze omstandigheden en indirect zonlicht. Ze zijn goedkoper maar nemen meer ruimte in beslag en hebben een kortere levensduur dan kristallijne panelen.",
  },
  {
    question: "Welk paneltype is het beste voor mijn huis?",
    answer:
      "Dit hangt af van je dak, budget en energiebehoefte. Kies monokristallijn als je beperkte dak hebt en het beste rendement wilt. Kies polykristallijn voor goed rendement tegen lagere prijs. Kies thin-film als je veel indirect zonlicht hebt of esthetiek belangrijk is.",
  },
  {
    question: "Hoe lang gaan zonnepanelen mee?",
    answer:
      "Monokristallijn en polykristallijn panelen gaan gemiddeld 25-30 jaar mee. Thin-film panelen houden het 20-25 jaar vol. De meeste fabrikanten geven 10-15 jaar garantie. Na 25 jaar leveren panelen nog 80-90% van hun originele vermogen.",
  },
  {
    question: "Zijn bifaciale panelen beter?",
    answer:
      "Bifaciale panelen kunnen zonlicht van voor en achter opvangen, wat 10-20% meer opbrengst kan geven. Ze zijn duurder maar geschikt voor installaties op platdaken of met reflecterende ondergronden. Voor hellende daken is de meerprijs vaak niet de moeite waard.",
  },
  {
    question: "Wat zijn half-cut en Multi-busbar technologieën?",
    answer:
      "Half-cut cellen verminderen schakelingsverlies en verbeteren prestatie bij schaduw met 5-10%. Multi-busbar gebruikt meer contactstroken, wat efficiënter is. Dit zijn modernere technologieën die extra kosten met zich meebrengen maar beter presteren.",
  },
];

export default function SoortenPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <PageHero
        title="Soorten Zonnepanelen"
        subtitle="Kies het juiste paneltype voor jouw dak en budget"
        badge="Vergelijk types"
        showBreadcrumbs={true}
        breadcrumbs={[{ label: "Soorten", href: "/soorten" }]}
      />

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Overzicht van zonnepaneel types
            </h2>
            <p className="text-lg text-stone-600 mb-6">
              Er zijn drie hoofdtypen zonnepanelen beschikbaar op de Nederlandse
              markt. Elk type heeft eigen voordelen en nadelen. Hieronder vind
              je een gedetailleerde vergelijking van rendement, levensduur,
              prijs en geschiktheid voor verschillende situaties.
            </p>
          </div>

          {/* Panel Type Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {solarPanelTypes.map((panelType) => (
              <div
                key={panelType.id}
                className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-2xl overflow-hidden border border-stone-200 hover:shadow-lg transition-shadow"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">
                    {panelType.name}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-stone-600 text-sm mb-6">
                    {panelType.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="space-y-4 mb-6">
                    {/* Efficiency */}
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Zap className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-blue-600 font-medium">
                          Rendement
                        </p>
                        <p className="text-lg font-bold text-stone-900">
                          {panelType.efficiency}%
                        </p>
                      </div>
                    </div>

                    {/* Lifespan */}
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                      <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-emerald-600 font-medium">
                          Levensduur
                        </p>
                        <p className="text-lg font-bold text-stone-900">
                          {panelType.lifespan} jaar
                        </p>
                      </div>
                    </div>

                    {/* Price Per Watt */}
                    <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                      <DollarSign className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-amber-600 font-medium">
                          Prijs per Watt
                        </p>
                        <p className="text-lg font-bold text-stone-900">
                          €{panelType.pricePerWatt.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="pt-4 border-t border-stone-200">
                    {panelType.id === "monocrystalline" && (
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        Beste rendement
                      </span>
                    )}
                    {panelType.id === "polycrystalline" && (
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                        Populairste keuze
                      </span>
                    )}
                    {panelType.id === "thin-film" && (
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                        Meest betaalbaar
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-8">
              Gedetailleerde vergelijking
            </h2>

            <div className="overflow-x-auto rounded-lg border border-stone-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-stone-900">
                    <th className="px-6 py-4 text-left text-white font-semibold">
                      Eigenschap
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold">
                      Monokristallijn
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold">
                      Polykristallijn
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold">
                      Thin-film
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr className="hover:bg-stone-50">
                    <td className="px-6 py-4 font-semibold text-stone-900">
                      Rendement
                    </td>
                    <td className="px-6 py-4 text-stone-700">18-24%</td>
                    <td className="px-6 py-4 text-stone-700">15-20%</td>
                    <td className="px-6 py-4 text-stone-700">10-13%</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="px-6 py-4 font-semibold text-stone-900">
                      Levensduur
                    </td>
                    <td className="px-6 py-4 text-stone-700">25-30 jaar</td>
                    <td className="px-6 py-4 text-stone-700">25-28 jaar</td>
                    <td className="px-6 py-4 text-stone-700">20-25 jaar</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="px-6 py-4 font-semibold text-stone-900">
                      Prijs per Watt
                    </td>
                    <td className="px-6 py-4 text-stone-700">€0.60-€0.80</td>
                    <td className="px-6 py-4 text-stone-700">€0.50-€0.65</td>
                    <td className="px-6 py-4 text-stone-700">€0.40-€0.55</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="px-6 py-4 font-semibold text-stone-900">
                      Oppervlak nodig
                    </td>
                    <td className="px-6 py-4 text-stone-700">Minst (7-9 m²)</td>
                    <td className="px-6 py-4 text-stone-700">Gemiddeld (9-12 m²)</td>
                    <td className="px-6 py-4 text-stone-700">Meest (15-18 m²)</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="px-6 py-4 font-semibold text-stone-900">
                      Temperatuurgevoeligheid
                    </td>
                    <td className="px-6 py-4 text-stone-700">Hoog</td>
                    <td className="px-6 py-4 text-stone-700">Hoog</td>
                    <td className="px-6 py-4 text-stone-700">Laag</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="px-6 py-4 font-semibold text-stone-900">
                      Prestatie bij schaduw
                    </td>
                    <td className="px-6 py-4 text-stone-700">Normaal</td>
                    <td className="px-6 py-4 text-stone-700">Normaal</td>
                    <td className="px-6 py-4 text-stone-700">Goed</td>
                  </tr>
                  <tr className="hover:bg-stone-50 bg-stone-50">
                    <td className="px-6 py-4 font-semibold text-stone-900">
                      Geschikt voor
                    </td>
                    <td className="px-6 py-4 text-stone-700 text-sm">
                      Kleine daken, hoge prestatie
                    </td>
                    <td className="px-6 py-4 text-stone-700 text-sm">
                      Meeste woningen, balans
                    </td>
                    <td className="px-6 py-4 text-stone-700 text-sm">
                      Veel schaduw, esthetiek
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Factors Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* How to Choose */}
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-600" />
                Hoe kies je het juiste type?
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-emerald-900 mb-2">
                    Kies Monokristallijn als:
                  </h4>
                  <ul className="text-sm text-emerald-800 space-y-1">
                    <li>• Je dak beperkt is in grootte</li>
                    <li>• Je het hoogste rendement wilt</li>
                    <li>• Esthétiek belangrijk is (donkerder uiterlijk)</li>
                    <li>• Je langere levensduur wilt</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Kies Polykristallijn als:
                  </h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Je een goede prijs-kwaliteit balans zoekt</li>
                    <li>• Je voldoende dak hebt (gemiddeld huis)</li>
                    <li>• Je een betrouwbare standaard keuze wilt</li>
                    <li>• Dit is in Nederland de populairste keuze</li>
                  </ul>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-2">
                    Kies Thin-film als:
                  </h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Je veel schaduw op je dak hebt</li>
                    <li>• Esthetiek (minder zichtbaar) belangrijk is</li>
                    <li>• Je het laagste budget hebt</li>
                    <li>• Je veel dak oppervlak beschikbaar hebt</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Modern Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-amber-600" />
                Moderne paneltechnologieën
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-stone-100 rounded-lg border border-stone-300">
                  <h4 className="font-semibold text-stone-900 mb-2">
                    Bifaciale Panelen
                  </h4>
                  <p className="text-sm text-stone-700">
                    Deze panelen kunnen zonlicht van voor en achter opvangen via
                    reflectie. Dit kan 10-20% meer opbrengst opleveren, vooral
                    op platte daken. De meerprijs is doorgaans 10-20%.
                  </p>
                </div>

                <div className="p-4 bg-stone-100 rounded-lg border border-stone-300">
                  <h4 className="font-semibold text-stone-900 mb-2">
                    Half-cut Cellen
                  </h4>
                  <p className="text-sm text-stone-700">
                    Panelen met cellen verdeeld in twee delen reduceren verlies
                    en verbeteren prestatie bij schaduw met 5-10%. Ideaal voor
                    huizen met parkeerlijnen of bomen.
                  </p>
                </div>

                <div className="p-4 bg-stone-100 rounded-lg border border-stone-300">
                  <h4 className="font-semibold text-stone-900 mb-2">
                    Multi-busbar Technologie
                  </h4>
                  <p className="text-sm text-stone-700">
                    Meer contactstroken zorgen voor betere stroom afvoer en
                    hogere efficiëntie. Dit is standaard in moderne panelen en
                    verhoogt het rendement met 2-3%.
                  </p>
                </div>

                <div className="p-4 bg-stone-100 rounded-lg border border-stone-300">
                  <h4 className="font-semibold text-stone-900 mb-2">
                    PERC/PERL Technologie
                  </h4>
                  <p className="text-sm text-stone-700">
                    Passivated Emitter Rear Cell technologie verhoogt het
                    rendement van monokristallijne panelen tot 22-24%. Dit zijn
                    de meest efficiënte panelen op de markt.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Tips */}
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200 mb-16">
            <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
              <Cloud className="w-6 h-6 text-emerald-600" />
              Tips voor maximale prestatie
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-stone-900 mb-3">
                  Optimale plaatsing
                </h4>
                <ul className="text-sm text-stone-700 space-y-2">
                  <li>
                    • Plaats panelen zuid-georiënteerd (30-35° hellingshoek)
                  </li>
                  <li>• Vermijd schaduw van bomen, gebouwen en rookgassen</li>
                  <li>• Zorg voor goede ventilatie onder panelen</li>
                  <li>
                    • Minimale afstand tot netaansluiting (scheelt kosten)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-stone-900 mb-3">Onderhoud</h4>
                <ul className="text-sm text-stone-700 space-y-2">
                  <li>• Panelen zijn onderhoudsarm (reinigen niet altijd nodig)</li>
                  <li>
                    • Controleer jaarlijks op bladeren, vogelpoep of sneeuw
                  </li>
                  <li>• Laat omvormers om de 10-15 jaar controleren</li>
                  <li>• Kabel en aansluitingen regelmatig controleren</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <FAQSchema items={faqItems} title="Vragen over soorten zonnepanelen" />
        </div>
      </section>
    </main>
  );
}
