import type { Metadata } from "next";
import { ZonnepanelenCalculator } from "@/components/ZonnepanelenCalculator";
import PageHero from "@/components/PageHero";
import FAQSchema, { FAQItem } from "@/components/FAQSchema";
import { Zap } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Terugverdientijd Calculator 2026 | Zonnepanelenkenner.nl",
  description:
    "Berekenen hoeveel je kunt besparen met zonnepanelen. Gebruik onze interactieve calculator om je terugverdientijd, opbrengst en jaarlijkse besparing uit te rekenen.",
  keywords:
    "calculator, terugverdientijd, besparing, opbrengst, zonnepanelen",
};

const faqItems: FAQItem[] = [
  {
    question: "Hoe wordt de terugverdientijd berekend?",
    answer:
      "De terugverdientijd is de tijd die nodig is totdat de jaarlijkse besparing gelijk is aan de initiële investering. Dit wordt berekend door de totale investering te delen door de jaarlijkse besparing in euro's.",
  },
  {
    question: "Wat is de jaarlijkse opbrengst in kWh?",
    answer:
      "De jaarlijkse opbrengst hangt af van het aantal panelen, hun Wattpiek en de hoeveelheid zonlicht. In Nederland produceren zonnepanelen gemiddeld 950 kWh per kW per jaar.",
  },
  {
    question: "Hoe wordt de CO2 besparing berekend?",
    answer:
      "De CO2 besparing is gebaseerd op de hoeveelheid gegenereerde elektriciteit vermenigvuldigd met de gemiddelde CO2-uitstoot van het Nederlandse elektriciteitsnet (ongeveer 0,2 kg CO2 per kWh).",
  },
  {
    question: "Waarom verschilt mijn daadwerkelijke besparing van de berekende waarde?",
    answer:
      "Dit kan verschillen vanwege schaduw, dakhoek, paneloriëntatie, sneeuw in de winter en onderhoud. De calculator geeft een gemiddelde schatting.",
  },
  {
    question: "Wat is het effect van zonnestralingshoek?",
    answer:
      "Een zuid-gericht dak met een hoek van 30-35 graden is optimaal. Oost/west-georiënteerde daken geven ongeveer 20% minder opbrengst. Noord is niet geschikt.",
  },
  {
    question: "Hoeveel invloed heeft de energieprijs op de terugverdientijd?",
    answer:
      "De energieprijs bepaalt je jaarlijkse besparing rechtstreeks. Hogere energieprijzen resulteren in snellere terugverdientijd. We gebruiken huidige markttarieven.",
  },
];

export default function CalculatorPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <PageHero
        title="Terugverdientijd Calculator"
        subtitle="Ontdek hoeveel je kunt besparen met zonnepanelen"
        badge="Gratis calculator"
        showBreadcrumbs={true}
        breadcrumbs={[{ label: "Calculator", href: "/calculator" }]}
      />

      {/* Calculator Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <ZonnepanelenCalculator />

          {/* Educational Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Hoe werkt deze calculator?
              </h3>
              <div className="space-y-4 text-stone-600">
                <p>
                  De calculator berekent op basis van je invoer het volgende:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    <strong>Totale investering:</strong> aantal panelen ×
                    kostprijs × 1,2 (voor installatie)
                  </li>
                  <li>
                    <strong>Jaarlijkse opbrengst:</strong> aantal panelen ×
                    Wattpiek × 950 kWh/kW/jaar
                  </li>
                  <li>
                    <strong>Jaarlijkse besparing:</strong> opbrengst × energieprijs
                  </li>
                  <li>
                    <strong>Terugverdientijd:</strong> investering ÷ jaarlijkse
                    besparing
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Tips voor maximale opbrengst
              </h3>
              <ul className="space-y-3 text-emerald-900 text-sm">
                <li>✓ Zorg voor een schoon en ongeschaduwd dak</li>
                <li>✓ Kies panelen met hoog rendement</li>
                <li>✓ Overweeg een betere omvormer (optimizer)</li>
                <li>✓ Investeer in batterijopslag voor het avondgebruik</li>
                <li>✓ Combineer met warmtepomp voor verdere besparing</li>
                <li>✓ Isoleer je dak goed voor energiebesparing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FAQSchema items={faqItems} title="Vragen over de calculator" />
        </div>
      </section>
    </main>
  );
}
