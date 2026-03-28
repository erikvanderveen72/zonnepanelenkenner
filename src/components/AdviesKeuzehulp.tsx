"use client";

import { useState } from "react";
import Keuzehulp from "./Keuzehulp";
import { AlertCircle } from "lucide-react";

interface AdviesKeuzehulpProps {}

export function AdviesKeuzehulp({}: AdviesKeuzehulpProps) {
  const [advies, setAdvies] = useState<{
    panelType: string;
    aantalPanelen: number;
    geschatteKosten: number;
    terugverdientijd: number;
  } | null>(null);

  const steps = [
    {
      title: "Wat voor type woning heb je?",
      description: "Dit helpt ons bepalen hoeveel ruimte je waarschijnlijk hebt.",
      options: [
        { id: "0", label: "Vrijstaand" },
        { id: "1", label: "Twee-onder-een-kap" },
        { id: "2", label: "Rijtjeshuis" },
        { id: "3", label: "Appartement" },
      ],
    },
    {
      title: "Welke kant ligt je dak op?",
      description: "De oriëntatie bepaalt je jaarlijkse opbrengst.",
      options: [
        { id: "0", label: "Zuid (optimaal)" },
        { id: "1", label: "Oost/West" },
        { id: "2", label: "Noord" },
        { id: "3", label: "Plat dak" },
      ],
    },
    {
      title: "Wat is je gemiddeld jaarlijks stroomverbruik?",
      description: "Dit staat op je elektriciteitsrekening.",
      options: [
        { id: "0", label: "<2000 kWh" },
        { id: "1", label: "2000-3500 kWh" },
        { id: "2", label: "3500-5000 kWh" },
        { id: "3", label: ">5000 kWh" },
      ],
    },
    {
      title: "Heb je al eerder offertes aangevraagd?",
      description: "Dit helpt ons jouw voorkeur beter te begrijpen.",
      options: [
        { id: "0", label: "Ja" },
        { id: "1", label: "Nee" },
      ],
    },
    {
      title: "Wat is voor jou het belangrijkst?",
      description: "Kies wat je prioriteit is.",
      options: [
        { id: "0", label: "Laagste prijs" },
        { id: "1", label: "Beste kwaliteit" },
        { id: "2", label: "Snelste installatie" },
        { id: "3", label: "Duurzaamheid" },
      ],
    },
  ];

  const handleComplete = (answers: Record<string, string>) => {
    // Simple logic to determine advice based on answers
    const stroomverbruik = answers[2];
    let aantalPanelen = 10;
    let panelType = "Polykristallijn";
    let kostPerPaneel = 300;

    if (stroomverbruik === "0") aantalPanelen = 6;
    else if (stroomverbruik === "1") aantalPanelen = 10;
    else if (stroomverbruik === "2") aantalPanelen = 14;
    else if (stroomverbruik === "3") aantalPanelen = 18;

    if (answers[4] === "1") panelType = "Monokristallijn";
    if (answers[4] === "2") panelType = "Bifaciaal";

    const totaleKosten = aantalPanelen * kostPerPaneel * 1.2; // × 1.2 voor installatie
    const terugverdientijd = 7.5;

    setAdvies({
      panelType,
      aantalPanelen,
      geschatteKosten: Math.round(totaleKosten),
      terugverdientijd,
    });
  };

  if (advies) {
    return (
      <div className="w-full space-y-8">
        <div className="bg-accent/5 border border-accent-light rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-text-main mb-6">
            Je Persoonlijke Advies
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-border">
              <div className="text-sm text-text-muted mb-1">
                Aanbevolen paneltype
              </div>
              <div className="text-2xl font-bold text-primary">
                {advies.panelType}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border">
              <div className="text-sm text-text-muted mb-1">
                Geschat aantal panelen
              </div>
              <div className="text-2xl font-bold text-primary">
                {advies.aantalPanelen}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border">
              <div className="text-sm text-text-muted mb-1">
                Geschatte investering
              </div>
              <div className="text-2xl font-bold text-primary">
                €{advies.geschatteKosten.toLocaleString("nl-NL")}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border">
              <div className="text-sm text-text-muted mb-1">
                Geschatte terugverdientijd
              </div>
              <div className="text-2xl font-bold text-primary">
                {advies.terugverdientijd} jaar
              </div>
            </div>
          </div>

          <button
            onClick={() => setAdvies(null)}
            className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold"
          >
            Opnieuw Beginnen
          </button>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex gap-4">
          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <p className="text-sm text-blue-900">
            Dit advies is op basis van je antwoorden. Neem contact op met
            gespecialiseerde installateurs voor een precieze offerte.
          </p>
        </div>
      </div>
    );
  }

  return <Keuzehulp steps={steps} onComplete={handleComplete} />;
}
