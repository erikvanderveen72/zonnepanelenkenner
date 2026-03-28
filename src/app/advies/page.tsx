import type { Metadata } from "next";
import { AdviesKeuzehulp } from "@/components/AdviesKeuzehulp";
import PageHero from "@/components/PageHero";
import FAQSchema, { FAQItem } from "@/components/FAQSchema";
import { Lightbulb } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Zonnepanelen Advies 2026 - Persoonlijk Keuzehulp | Zonnepanelenkenner.nl",
  description:
    "Krijg persoonlijk advies voor het kiezen van zonnepanelen. Onze interactieve keuzehulp stelt enkele vragen en geeft je op maat gesneden aanbevelingen.",
  keywords:
    "zonnepanelen advies, keuzehulp, adviestool, aanbevelingen 2026",
};

const faqItems: FAQItem[] = [
  {
    question: "Hoe werkt de keuzehulp?",
    answer:
      "De keuzehulp stelt je enkele vragen over je woning, dak en voorkeuren. Op basis van je antwoorden geef je persoonlijke aanbevelingen voor het aantal panelen, type en geschatte kosten.",
  },
  {
    question: "Is dit advies bindend?",
    answer:
      "Nee, dit is indicatief advies. Voor een precieze offerte en binding advies moet je contact opnemen met gespecialiseerde installateurs in jouw regio.",
  },
  {
    question: "Wat is het verschil tussen monocrystalline en polycrystalline?",
    answer:
      "Monokristallijn panelen hebben een hogere rendement (22-24%) en nemen minder ruimte in beslag. Polykristallijn panelen zijn goedkoper (18-21% rendement) en zeer betrouwbaar. De keuze hangt af van je budget en beschikbare dak.",
  },
  {
    question: "Waarom is de dakoriëntatie belangrijk?",
    answer:
      "Een zuid-georiënteerd dak is optimaal en geeft maximale opbrengst. Oost/west-georiënteerde daken geven iets minder opbrengst. Noord-georiënteerde daken zijn niet geschikt voor zonnepanelen.",
  },
  {
    question: "Hoeveel panelen heb ik nodig?",
    answer:
      "Dit hangt af van je jaarlijks stroomverbruik en dakgrootte. Als vuistregel: voor 1 kW rendement heb je ongeveer 2-3 zonnepanelen van 400 Wp nodig.",
  },
  {
    question: "Kan ik zonnepanelen op een plat dak plaatsen?",
    answer:
      "Ja, zonnepanelen kunnen op platte daken geplaatst worden, vaak op een frame onder een hoek. Dit kan iets minder rendement geven, maar bifaciale panelen kunnen dit compenseren.",
  },
];

export default function AdviesPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <PageHero
        title="Zonnepanelen Advies"
        subtitle="Krijg persoonlijk advies voor jouw situatie"
        badge="Gratis adviestool"
        showBreadcrumbs={true}
        breadcrumbs={[{ label: "Advies", href: "/advies" }]}
      />

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Stap-voor-stap naar je gepersonaliseerde advies
            </h2>
            <p className="text-lg text-stone-600">
              Beantwoord enkele vragen over je woning, dak en voorkeuren. Op
              basis van je antwoorden geef we je persoonlijke aanbevelingen voor
              paneltype, aantal panelen en geschatte terugverdientijd.
            </p>
          </div>

          {/* Keuzehulp Component */}
          <AdviesKeuzehulp />

          {/* Tips Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Controleer je stroomverbruik",
                description:
                  "Kijk op je elektriciteitsrekening hoeveel je jaarlijks verbruikt (in kWh).",
              },
              {
                title: "Meet je dakoppervlak",
                description:
                  "Een groter dak geeft meer mogelijkheden. Zorg dat je dak goed geïsoleerd is.",
              },
              {
                title: "Vraag offertes aan",
                description:
                  "Vergelijk altijd minimaal 3 offertes van lokale installateurs.",
              },
            ].map((tip, index) => (
              <div
                key={index}
                className="p-6 bg-blue-50 rounded-lg border border-blue-200"
              >
                <Lightbulb className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-semibold text-stone-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-stone-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <FAQSchema items={faqItems} title="Veelgestelde vragen over advies" />
        </div>
      </section>
    </main>
  );
}
