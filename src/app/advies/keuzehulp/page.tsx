import type { Metadata } from "next";
import { AdviesKeuzehulp } from "@/components/AdviesKeuzehulp";
import PageHero from "@/components/PageHero";
import FAQSchema, { FAQItem } from "@/components/FAQSchema";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Keuzehulp Zonnepanelen 2026 | Zonnepanelenkenner.nl",
  description:
    "Krijg persoonlijk advies met onze interactieve keuzehulp. Beantwoord enkele vragen en ontvang op maat gesneden aanbevelingen voor zonnepanelen.",
  keywords:
    "keuzehulp zonnepanelen, persoonlijk advies, adviestool, aanbevelingen",
};

const faqItems: FAQItem[] = [
  {
    question: "Wat is de keuzehulp precies?",
    answer:
      "De keuzehulp is een interactieve tool die je in enkele stappen door een korte vragenlijst leidt. Op basis van je antwoorden krijg je persoonlijke aanbevelingen voor het type zonnepanelen, het aantal panelen en de geschatte kosten.",
  },
  {
    question: "Hoe betrouwbaar is het advies van de keuzehulp?",
    answer:
      "Het advies van de keuzehulp is gebaseerd op je antwoorden en geeft een goed eerste inzicht. Het is echter indicatief en geeft geen precieze offertes. Voor een bindend advies en exacte prijzen moet je contact opnemen met lokale installateurs.",
  },
  {
    question: "Hoelang duurt het om de keuzehulp in te vullen?",
    answer:
      "Het uitvullen van de keuzehulp duurt ongeveer 2-3 minuten. Je beantwoordt vijf vragen over je woning, dak, stroomverbruik en voorkeuren.",
  },
  {
    question: "Wordt mijn privédata opgeslagen of gedeeld?",
    answer:
      "Nee, je antwoorden worden gebruikt om direct advies te genereren maar worden niet opgeslagen of gedeeld met derden. We respecteren je privacy volledig.",
  },
  {
    question: "Kan ik de keuzehulp meerdere keren uitvullen?",
    answer:
      "Ja, je kunt de keuzehulp zoveel keer gebruiken als je wilt. Dit is handig om verschillende scenario's door te rekenen, bijvoorbeeld met verschillende stroomverbruiken of dak-oriëntaties.",
  },
];

export default function KeuzehulpPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <PageHero
        title="Keuzehulp"
        badge="Persoonlijk advies"
        showBreadcrumbs={true}
        breadcrumbs={[
          { label: "Advies", href: "/advies" },
          { label: "Keuzehulp", href: "/advies/keuzehulp" },
        ]}
      />

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Vind jouw perfecte zonnepanelen in 3 minuten
            </h2>
            <p className="text-lg text-stone-600">
              Onze keuzehulp stelt enkele gerichte vragen over jouw woning,
              dakoriëntatie en energieverbruik. Vervolgens ontvang je direct
              persoonlijke aanbevelingen voor het juiste aantal panelen, type en
              geschatte kosten.
            </p>
          </div>

          {/* Keuzehulp Component */}
          <AdviesKeuzehulp />

          {/* Benefits Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Snel en eenvoudig",
                description:
                  "In slechts 3 minuten heb je persoonlijk advies ontvangen.",
                icon: "⚡",
              },
              {
                title: "Op maat gesneden",
                description:
                  "Je advies is gebaseerd op jouw specifieke situatie en wensen.",
                icon: "🎯",
              },
              {
                title: "Geen verplichtingen",
                description:
                  "Volledig gratis en je bent nergens toe verplicht.",
                icon: "✓",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-emerald-50 rounded-lg border border-emerald-200 hover:border-emerald-500 transition-colors"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-stone-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="mt-16 bg-amber-50 rounded-lg border border-amber-200 p-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">
              Hoe werkt de keuzehulp?
            </h3>
            <ol className="space-y-4">
              {[
                {
                  num: 1,
                  title: "Beantwoord vragen",
                  desc: "Geef antwoord op 5 korte vragen over je woning en energiebehoefte",
                },
                {
                  num: 2,
                  title: "Ontvang advies",
                  desc: "Je krijgt direct gepersonaliseerde aanbevelingen",
                },
                {
                  num: 3,
                  title: "Vergelijk offertes",
                  desc: "Gebruik je advies om offertes aan te vragen bij installateurs",
                },
              ].map((step, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-500 text-white font-bold">
                      {step.num}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">
                      {step.title}
                    </h4>
                    <p className="text-stone-600 text-sm">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <FAQSchema items={faqItems} title="Veelgestelde vragen" />
        </div>
      </section>
    </main>
  );
}
