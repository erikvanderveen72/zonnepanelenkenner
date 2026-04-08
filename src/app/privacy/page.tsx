import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Mail, Shield, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacybeleid | Zonnepanelenkenner.nl",
  description:
    "Lees ons privacybeleid en ontdek hoe we jouw persoonlijke gegevens beschermen. Meer informatie over cookies, data-opslag en jouw rechten.",
};

export default function PrivacyPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <PageHero
        title="Privacybeleid"
        subtitle="Wij stellen je privacy en gegevensbescherming op prijs"
        showBreadcrumbs={true}
        breadcrumbs={[{ label: "Privacybeleid", href: "/privacy" }]}
      />

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
            <h2 className="text-2xl font-bold text-stone-900 mb-3">
              Jouw privacy is belangrijk voor ons
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Dit privacybeleid beschrijft hoe Zonnepanelenkenner.nl jouw
              persoonlijke gegevens verwerkt, beschermt en respecteert. Wij zijn
              transparant over hoe we je informatie gebruiken en welke rechten je
              hebt onder de Algemene Verordening Gegevensbescherming (AVG).
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <FileText className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  1. Verwerking van Persoonlijke Gegevens
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  Wij verzamelen alleen de gegevens die nodig zijn voor het
                  functioneren van onze website en het verlenen van diensten.
                  Dit kan omvatten:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Contactgegevens (naam, e-mailadres) wanneer je contact opneemt</li>
                  <li>
                    Technische informatie (IP-adres, browsertype) via Google Analytics
                  </li>
                  <li>
                    Voorkeuren en gedrag op de website om jouw ervaring te verbeteren
                  </li>
                  <li>
                    Gegevens die je vrijwillig aanlevert via formulieren of
                    inschrijvingen
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  2. Cookies en Analytics
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  Deze website gebruikt Google Analytics (ID: G-P2DHVR0VVS) om
                  inzicht te krijgen in hoe bezoekers de site gebruiken. Dit
                  helpt ons content te verbeteren en de prestaties te optimaliseren.
                </p>
                <p className="font-semibold text-stone-900">
                  Soorten cookies die we gebruiken:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Analytische cookies:</span> Om
                    websitegebruik te meten (via Google Analytics)
                  </li>
                  <li>
                    <span className="font-semibold">Functionele cookies:</span> Om
                    jouw voorkeuren te onthouden
                  </li>
                  <li>
                    <span className="font-semibold">Marketing cookies:</span> Om
                    gerichte advertenties te tonen (optioneel)
                  </li>
                </ul>
                <p className="mt-4">
                  Je kunt je cookieinstellingen op elk moment beheren via je
                  browserinstellingen. Je hebt het recht cookies af te weigeren,
                  al kan dit de functionaliteit van de website beperken.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  3. Doeleinden van Verwerking
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>We verwerken jouw gegevens voor:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Het verlenen van onze diensten en content</li>
                  <li>Het verbeteren van onze website en gebruikerservaring</li>
                  <li>
                    Het analyseren van websitetraffic en gedrag van bezoekers
                  </li>
                  <li>
                    Het antwoorden op jouw vragen en verzoeken via contact- of
                    inschrijvingsformulieren
                  </li>
                  <li>Het voldoen aan wettelijke verplichtingen</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  4. Veiligheid en Gegevensbescherming
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  We nemen maatregelen om je gegevens te beveiligen tegen
                  ongeautoriseerde toegang, wijziging en verlies:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>HTTPS-versleuteling voor alle verbindingen</li>
                  <li>Veilige servers en regelmatige security-updates</li>
                  <li>Beperkte toegang tot persoonlijke gegevens</li>
                  <li>Naleving van AVG-richtlijnen</li>
                </ul>
                <p className="mt-4">
                  Hoewel we maximale inspanningen leveren, kan geen
                  internetcommunicatie 100% veilig gegarandeerd worden. Gebruik
                  van onze site gebeurt op eigen risico.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  5. Jouw Rechten onder de AVG
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  Onder de AVG heb je de volgende rechten met betrekking tot je
                  persoonlijke gegevens:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Recht op inzage:</span> Je kunt
                    vragen welke gegevens we over je hebben
                  </li>
                  <li>
                    <span className="font-semibold">Recht op verbetering:</span> Je
                    kunt onjuiste of onvolledige gegevens laten corrigeren
                  </li>
                  <li>
                    <span className="font-semibold">Recht op verwijdering:</span> Je
                    kunt verzoeken om verwijdering ('recht om vergeten te worden')
                  </li>
                  <li>
                    <span className="font-semibold">Recht op beperking:</span> Je
                    kunt verzoeken om verwerking te beperken
                  </li>
                  <li>
                    <span className="font-semibold">Recht op portabiliteit:</span> Je
                    kunt je gegevens in porteerbaar formaat ontvangen
                  </li>
                  <li>
                    <span className="font-semibold">Recht van bezwaar:</span> Je kunt
                    bezwaar maken tegen bepaalde verwerkingen
                  </li>
                </ul>
                <p className="mt-4">
                  Voor het uitoefenen van deze rechten, neem contact met ons op
                  via{" "}
                  <a
                    href="mailto:info@zonnepanelenkenner.nl"
                    className="text-amber-600 hover:text-amber-700 font-semibold"
                  >
                    info@zonnepanelenkenner.nl
                  </a>
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  6. Derde Partijen
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  Wij delen jouw persoonlijke gegevens niet met derde partijen,
                  tenzij:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Dit nodig is voor het leveren van onze diensten</li>
                  <li>Je hier expliciet toestemming voor hebt gegeven</li>
                  <li>Wij verplicht zijn door wet en regelgeving</li>
                  <li>
                    Voor technische partners zoals Google Analytics (zie
                    Google&apos;s privacybeleid)
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  7. Contact en Klachten
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  Heb je vragen over dit privacybeleid of wil je je gegevens
                  beheren? Neem contact met ons op:
                </p>
                <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                  <p className="font-semibold text-stone-900 mb-2">
                    Zonnepanelenkenner.nl
                  </p>
                  <p>
                    E-mail:{" "}
                    <a
                      href="mailto:info@zonnepanelenkenner.nl"
                      className="text-amber-600 hover:text-amber-700 font-semibold"
                    >
                      info@zonnepanelenkenner.nl
                    </a>
                  </p>
                </div>
                <p className="mt-4">
                  Heb je een klacht over hoe we je gegevens verwerken? Je hebt
                  het recht om een klacht in te dienen bij de Autoriteit
                  Persoonsgegevens (AP).
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <FileText className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  8. Wijzigingen in dit Beleid
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  We behouden het recht dit privacybeleid op elk moment te
                  wijzigen. Significante wijzigingen zullen duidelijk op deze
                  pagina worden aangekondigd. Jouw voortgezet gebruik van de
                  website na wijzigingen betekent dat je de nieuwe voorwaarden
                  accepteert.
                </p>
                <p className="text-sm text-stone-600 mt-4">
                  <strong>Laatst gewijzigd:</strong> April 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            Nog vragen over je privacy?
          </h2>
          <p className="text-stone-700 mb-6">
            Wij staan voor je klaar. Neem vrijblijvend contact met ons op.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
          >
            Neem Contact Op
          </a>
        </div>
      </section>
    </main>
  );
}
