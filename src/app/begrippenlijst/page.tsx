import type { Metadata } from "next";
import { BeginglisComponent } from "@/components/BeginglisComponent";
import PageHero from "@/components/PageHero";
import FAQSchema, { FAQItem } from "@/components/FAQSchema";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Begrippenlijst Zonnepanelen 2026 | Zonnepanelenkenner.nl",
  description:
    "Complete begrippenlijst met alle belangrijke termen rond zonnepanelen. Van Wp en kWh tot terugverdientijd en saldering.",
  keywords:
    "begrippenlijst, glossarium, zonnepanelen termen, definities, woordenlijst",
};

const faqItems: FAQItem[] = [
  {
    question: "Wat is het verschil tussen Wp en kWh?",
    answer:
      "Wp (Wattpiek) is het vermogen van een zonnepaneel onder ideale omstandigheden (1000W/m² straling). kWh (Kilowattuur) is de hoeveelheid elektriciteit die over tijd wordt opwekt.",
  },
  {
    question: "Wat is een omvormer en waarom is het nodig?",
    answer:
      "Een omvormer zet de gelijkstroom (DC) van zonnepanelen om in wisselstroom (AC) die je thuis kunt gebruiken. Dit is essentieel voor het functioneren van je installatie.",
  },
  {
    question: "Wat is de salderingsregeling?",
    answer:
      "De salderingsregeling stelde je in staat om overschotsstroom tegen dezelfde prijs terug te verkopen als je verbruikt. Deze regeling geldt t/m 2025. Na 2025 krijg je minder vergoeding.",
  },
  {
    question: "Wat is SDE++?",
    answer:
      "SDE++ is een Nederlandse subsidieregeling voor duurzame energieopwekking. Na 2025 wordt dit vervangen door IBRP (Investeringsbijdrage Duurzame Energie).",
  },
  {
    question: "Hoeveel degradatie hebben zonnepanelen?",
    answer:
      "Zonnepanelen verliezen per jaar gemiddeld 0,5% van hun vermogen. Dit is normale slijtage en wordt verwacht in het ontwerp.",
  },
  {
    question: "Wat is het verschil tussen mono- en polykristallijn?",
    answer:
      "Monokristallijn: hogere rendement (22-24%), compacter, duurder. Polykristallijn: lager rendement (18-21%), voordelliger, zeer betrouwbaar en populair.",
  },
];

export default function BeginglisPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <PageHero
        title="Begrippenlijst Zonnepanelen"
        subtitle="Alle belangrijke termen uitgelegd"
        badge="Complete glossarium"
        showBreadcrumbs={true}
        breadcrumbs={[{ label: "Begrippenlijst", href: "/begrippenlijst" }]}
      />

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Zonnepaneel Begrippenlijst
            </h2>
            <p className="text-lg text-stone-600">
              Hieronder vind je uitleg over alle belangrijke termen die je
              tegenkomt bij het onderzoeken van zonnepanelen. Je kunt zoeken op
              trefwoord of de alfabetische index gebruiken.
            </p>
          </div>

          {/* Component */}
          <BeginglisComponent />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <FAQSchema
            items={faqItems}
            title="Veelgestelde vragen over begrippen"
          />
        </div>
      </section>
    </main>
  );
}
