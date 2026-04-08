import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { AlertTriangle, Link2, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer | Zonnepanelenkenner.nl",
  description:
    "Lees onze disclaimer en juridische voorwaarden. Informatie over aansprakelijkheid, externe links en beperkingen van ons advies.",
};

export default function DisclaimerPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <PageHero
        title="Disclaimer"
        subtitle="Juridische voorwaarden en aansprakelijkheidsbeperkingen"
        showBreadcrumbs={true}
        breadcrumbs={[{ label: "Disclaimer", href: "/disclaimer" }]}
      />

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <h2 className="text-2xl font-bold text-stone-900 mb-3">
              Belangrijk: Lees deze disclaimer aandachtig
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Deze website biedt informatie en advies over zonnepanelen, maar
              dit advies is niet-bindend. Zonnepanelenkenner.nl is geen
              leverancier van professionele financiële of juridische adviezen.
              Voor bindend advies dien je contact op te nemen met
              gespecialiseerde professionals.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  1. Aard van de Informatie
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  De informatie op deze website is:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Informatief van aard:</span> Bedoeld
                    om je te helpen informatie te vinden over zonnepanelen
                  </li>
                  <li>
                    <span className="font-semibold">Niet-bindend advies:</span> Dit is
                    geen professioneel, juridisch of financieel advies
                  </li>
                  <li>
                    <span className="font-semibold">Onder voorbehoud:</span> Onderhevig
                    aan wijzigingen zonder kennisgeving
                  </li>
                  <li>
                    <span className="font-semibold">Algemeen van aard:</span> Specifieke
                    situaties kunnen afwijken
                  </li>
                </ul>
                <p className="mt-4 font-semibold text-stone-900">
                  Voor bindend advies, specifieke offertes of juridische
                  begeleiding dien je contact op te nemen met erkende en
                  gecertificeerde installateurs of professionals.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  2. Geen Financieel Advies
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  Dit website en haar content zijn <strong>geen bron</strong> van
                  professioneel financieel advies. Dit geldt voor:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Kosten- en besparingsberekeningen:</span> Dit
                    zijn schattingen op basis van landelijke gemiddelden
                  </li>
                  <li>
                    <span className="font-semibold">Terugverdientijdberekeningen:</span> Afhankelijk van lokale installateurs, tarieven en subsidies
                  </li>
                  <li>
                    <span className="font-semibold">Investeringsbeslissingen:</span> Dit
                    is geen aanbeveling om wel of niet te investeren
                  </li>
                  <li>
                    <span className="font-semibold">Financieringsopties:</span> We
                    geven geen advies over leningen of leaseconstructies
                  </li>
                  <li>
                    <span className="font-semibold">Subsidies en terugleggingen:</span> Subsidiemogelijkheden
                    kunnen wijzigen en zijn afhankelijk van je regio
                  </li>
                </ul>
                <p className="mt-4">
                  Raadpleeg voor financieel advies een deskundige zoals een
                  financieel adviseur, bankmedewerker of beleggingsadviseur.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  3. Nauwkeurigheid van Informatie
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  Wij streven naar nauwkeurige en actuele informatie, maar:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Informatie kan fouten of onnauwkeurigheden bevatten
                  </li>
                  <li>
                    Prijzen, prestaties en technische gegevens kunnen wijzigen
                  </li>
                  <li>
                    Regelgeving, subsidies en wettelijke vereisten zijn onderhevig
                    aan wijzigingen
                  </li>
                  <li>
                    Berekeningen zijn gebaseerd op landelijke gemiddelden, niet
                    op jouw specifieke situatie
                  </li>
                </ul>
                <p className="mt-4">
                  Verifieer belangrijke informatie altijd met lokale
                  installateurs en instanties voor actuele, lokaal-specifieke
                  gegevens.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <Link2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  4. Externe Links en Verwijzingen
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  Deze website kan links bevatten naar externe websites. Met
                  betrekking tot deze links:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Wij zijn <strong>niet verantwoordelijk</strong> voor de
                    inhoud van externe websites
                  </li>
                  <li>
                    Externe websites hebben hun eigen <strong>privacybeleid en
                    voorwaarden</strong>
                  </li>
                  <li>
                    Links zijn voor informatiedoeleinden; wij onderschrijven niet
                    noodzakelijk de inhoud
                  </li>
                  <li>
                    We controleren externe links regelmatig, maar kunnen niet
                    garanderen dat ze actueel zijn
                  </li>
                </ul>
                <p className="mt-4">
                  Controleer altijd de voorwaarden en privacybeleid van externe
                  websites zelf.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <Scale className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  5. Aansprakelijkheidsbeperkingen
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  <strong>Zonnepanelenkenner.nl is niet aansprakelijk</strong> voor:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Directe of indirecte schade voortvloeiend uit het gebruik
                    van deze website
                  </li>
                  <li>
                    Financiële verliezen op basis van adviezen of berekeningen
                    op deze site
                  </li>
                  <li>
                    Technische storingen, fouten of onderbreking van
                    websitebeschikbaarheid
                  </li>
                  <li>
                    Het niet nakomen van overeenkomsten met installateurs of
                    andere dienstverleners
                  </li>
                  <li>
                    Schade voortvloeiend uit reliance op externe links of
                    informatie van derde partijen
                  </li>
                  <li>
                    Werkgevers- of bedrijfsgeheimen die zichtbaar gemaakt
                    worden door het gebruik van deze site
                  </li>
                </ul>
                <p className="mt-4 font-semibold text-stone-900">
                  Dit geldt voor alle hypothetische gevallen, zelfs als
                  Zonnepanelenkenner.nl op de hoogte is gesteld van mogelijke
                  schade.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  6. Geen Garantie
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  Deze website wordt aangeboden <strong>"as is"</strong> zonder
                  garanties van enig soort:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Geen garantie voor <strong>nauwkeurigheid</strong> van
                    informatie
                  </li>
                  <li>
                    Geen garantie voor <strong>beschikbaarheid</strong> van de
                    website
                  </li>
                  <li>
                    Geen garantie voor <strong>geschiktheid</strong> voor een
                    bepaald doel
                  </li>
                  <li>
                    Geen garantie dat <strong>virussen of malware</strong> niet
                    aanwezig zijn
                  </li>
                  <li>
                    Geen garantie voor <strong>toekomstige prestaties</strong> van
                    panelen of systemen
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <Scale className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  7. Gebruik Op Eigen Risico
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  Je gebruik van deze website is volledig op eigen risico.
                  Zonnepanelenkenner.nl:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Is niet aansprakelijk voor enige schade of verlies
                  </li>
                  <li>
                    Geeft geen garanties over beschikbaarheid of functionaliteit
                  </li>
                  <li>
                    Kan de inhoud op elk moment wijzigen of verwijderen
                  </li>
                  <li>
                    Garandeert niet dat berekeningen door installateurs zullen
                    worden aanvaard
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  8. Installateursvergelijking
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  Onze installateursvergelijking is:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Informatief:</strong> Bedoeld om je te helpen keuzes
                    te evalueren
                  </li>
                  <li>
                    <strong>Niet volledig:</strong> We kunnen niet alle
                    installateurs in Nederland opnemen
                  </li>
                  <li>
                    <strong>Ontvormende inhoud:</strong> Gebaseerd op openbare
                    informatie die kan verouderen
                  </li>
                  <li>
                    <strong>Geen garantie:</strong> We controleren niet of
                    informatie volledig of juist is
                  </li>
                </ul>
                <p className="mt-4">
                  Voor bindende offertes en gespecialiseerde adviezen moet je
                  direct contact opnemen met installateurs.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <Scale className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  9. Beperking van Aansprakelijkheid
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  Zelfs als enig onderdeel van deze disclaimer ongeldig zou
                  blijken, beperken we de totale aansprakelijkheid van
                  Zonnepanelenkenner.nl tot het minimaal mogelijke onder de wet.
                </p>
                <p className="mt-4">
                  Sommige rechtsgebieden limiteren beperkingen van
                  aansprakelijkheid. Dit mag echter niet betekenen dat je meer
                  rechten hebt dan het formaat van deze disclaimer toestaat.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-stone-900">
                  10. Wijzigingen in Disclaimer
                </h2>
              </div>
              <div className="ml-10 space-y-4 text-stone-700">
                <p>
                  We behouden het recht deze disclaimer op elk moment te
                  wijzigen. Jouw voortgezet gebruik van de website betekent
                  acceptatie van de huidige disclaimer.
                </p>
                <p className="text-sm text-stone-600 mt-4">
                  <strong>Laatst gewijzigd:</strong> April 2026
                </p>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-12 p-6 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="text-lg font-bold text-red-900 mb-2">
              ⚠️ Belangrijke Opmerking
            </h3>
            <p className="text-red-800">
              Lees alles zorgvuldig voordat je beslissingen neemt op basis van
              deze website. Raadpleeg altijd erkende professionals voordat je
              financiële investeringen doet. Deze website biedt geen binding
              advies of aanbevelingen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            Vragen over onze disclaimer?
          </h2>
          <p className="text-stone-700 mb-6">
            Neem contact met ons op als je vragen hebt over deze voorwaarden.
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
