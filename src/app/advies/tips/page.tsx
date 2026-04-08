import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema, { FAQItem } from '@/components/FAQSchema';
import {
  Lightbulb,
  CheckCircle,
  Zap,
  Sun,
  Battery,
  Wrench,
  Droplets,
  TrendingUp,
  Shield,
  Thermometer,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Zonnepanelen Tips & Tricks 2026 | Zonnepanelenkenner.nl',
  description:
    'Ontdek praktische tips en trucs voor het maximaliseren van je zonnepanelen. Van optimale plaatsing tot onderhoud en batterijopslag – alles wat je moet weten voor het best rendement.',
};

export const revalidate = 3600;

interface Tip {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PreAndPost {
  title: string;
  tips: string[];
}

const practicalTips: Tip[] = [
  {
    id: 'optimal-angle',
    icon: <Sun className="w-8 h-8" />,
    title: 'Optimale dakhoek',
    description:
      'Voor maximaal rendement is een dakhoek van 35-40 graden ideaal in Nederland. Dit zorgt voor de beste zonnestraling het hele jaar door.',
  },
  {
    id: 'regular-cleaning',
    icon: <Droplets className="w-8 h-8" />,
    title: 'Regelmatig reinigen',
    description:
      'Schoon zonnepanelen leveren tot 25% meer energie op. Reinig je panelen 2-4 keer per jaar, vooral na stofstormen of vogelpoep.',
  },
  {
    id: 'system-monitoring',
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Systeembewaking',
    description:
      'Installeer een monitoring systeem om real-time prestaties te volgen. Spot problemen vroeg en zorg dat je systeem altijd optimaal werkt.',
  },
  {
    id: 'battery-storage',
    icon: <Battery className="w-8 h-8" />,
    title: 'Batterieopslag',
    description:
      'Een thuisbatterij stelt je in staat om zelf opgewekte energie op te slaan en later te gebruiken, verhogend je zelfvoorzieningsgraad tot 80-90%.',
  },
  {
    id: 'heat-pump',
    icon: <Thermometer className="w-8 h-8" />,
    title: 'Combineer met warmtepomp',
    description:
      'Een warmtepomp en zonnepanelen vormen een perfect duo. Verwarmd je huis met zelf opgewekte energie en bespaar massief op energiekosten.',
  },
  {
    id: 'proper-insurance',
    icon: <Shield className="w-8 h-8" />,
    title: 'Goede verzekering',
    description:
      'Zorg voor passende verzekering die diefstal, storm en defecten dekt. Dit beschermt je investeringen tegen onverwachte schade.',
  },
  {
    id: 'shade-analysis',
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Schaduwanalyse',
    description:
      'Controleer op schaduw van bomen, gebouwen en objecten. Zelfs gedeeltelijke schaduw kan het rendement aanzienlijk verminderen.',
  },
  {
    id: 'maintenance-plan',
    icon: <Wrench className="w-8 h-8" />,
    title: 'Onderhoudsprogramma',
    description:
      'Laat je installatie jaarlijks inspecteer door een professional. Dit verlengt de levensduur en zorgt dat alles veilig en efficiënt werkt.',
  },
  {
    id: 'grid-connection',
    icon: <Zap className="w-8 h-8" />,
    title: 'Slimme netaansluiting',
    description:
      'Gebruik slimme inverters en energiemanagement systemen om je verbruik aan te passen aan je productie. Dit maximaliseert je besparing.',
  },
  {
    id: 'quality-components',
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Kwaliteitscomponenten',
    description:
      'Investeer in gerenommeerde merken met stevige garanties. Goede panelen hebben vaak 25+ jaar garantie en beter rendement.',
  },
];

const beforeInstallation: PreAndPost = {
  title: 'Voor installatie',
  tips: [
    'Controleer je dak op sterkte en conditie voordat je panelen installeert',
    'Vraag meerder offerta aan en vergelijk niet alleen prijs maar ook kwaliteit',
    'Zorg dat je elektriciteit goed gedocumenteerd is voor installatieplannen',
    'Onderzoek subsidies en belastingvoordelen in jouw regio',
    'Zorg voor juiste vergunningen en bouwtoestemming waar nodig',
  ],
};

const afterInstallation: PreAndPost = {
  title: 'Na installatie',
  tips: [
    'Download en lees alle documentatie van panelen, inverter en monitoring systeem',
    'Maak een onderhoudschema en markeer reinigingsdaten in je kalender',
    'Zet monitoring op en leer je dagelijkse/wekelijkse energieproductie begrijpen',
    'Sluit je pv-systeem aan op je huishoudboekhouding voor fiscale voordelen',
    'Controleer je energierekening maandelijks en stuur feedback aan je installateur',
  ],
};

const faqItems: FAQItem[] = [
  {
    question: 'Hoe vaak moeten zonnepanelen schoongemaakt worden?',
    answer:
      'Het hangt af van jouw omgeving. In de meeste gevallen is 2-4 keer per jaar voldoende. Als je in een stofig gebied woont of veel vogelpoep hebt, kan vaker nodig zijn. Maak je panelen schoon na stofstormen of zware regenval die niet genoeg stof wegwast.',
  },
  {
    question: 'Wat is het optimale rendement dat ik kan verwachten?',
    answer:
      'Moderne zonnepanelen hebben een rendement van 18-22%. Je totale opbrengst hangt af van locatie, dakhoek, schaduw, klimaat en panelkwaliteit. In Nederland kun je gemiddeld 800-900 kWh per kWp per jaar verwachten.',
  },
  {
    question: 'Zijn monitorsystemen echt nodig?',
    answer:
      'Ja, het is sterk aanbevolen. Een goed monitorsysteem helpt je defecten vroeg op te sporen, je rendement te optimaliseren en je energieverbruik beter te begrijpen. Veel systemen zijn tegenwoordig gratis via een app beschikbaar.',
  },
  {
    question: 'Kan ik mijn zonnepanelen zelf schoonmaken?',
    answer:
      'Ja, maar wees voorzichtig. Gebruik zacht water en niet-schurende materialen. Vermijd hoogtevrees – veel mensen huren professionele reinigingsservices in. Schakel altijd je systeem uit voordat je ze aanraakt.',
  },
  {
    question: 'Wat is het verschil tussen een micro-inverter en een centrale inverter?',
    answer:
      'Een centrale inverter verwerkt alle stroom van je panelen tegelijk (goedkoper, meer simpel). Micro-inverters zitten op elk paneel (beter bij schaduw, efficiënter maar duurder). Kies micro-inverters als je schaduwproblemen hebt.',
  },
  {
    question: 'Hoe kan ik mijn zelfvoorzieningsgraad verbeteren?',
    answer:
      'Combineer zonnepanelen met batterijopslag, installeer een warmtepomp, en gebruik verbruikersapparatuur overdag. Slimme huisvermogen management systemen helpen je ook om energie op piektijden te gebruiken.',
  },
];

export default function TipsPage() {
  return (
    <>
      <PageHero
        title="Tips & Tricks"
        badge="Slimme bespaartips"
        breadcrumbs={[
          { label: 'Advies', href: '/advies' },
          { label: 'Tips & Tricks', href: '/advies/tips' },
        ]}
      />

      {/* Practical Tips Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              10 Praktische tips voor maximaal rendement
            </h2>
            <p className="text-lg text-stone-600">
              Volg deze essentiële tips om het meeste uit je zonnepanelen te halen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalTips.map((tip) => (
              <div
                key={tip.id}
                className="rounded-2xl bg-stone-50 border border-stone-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-amber-600 mb-4">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-stone-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Installation */}
      <section className="py-16 px-4 md:px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
            Checklist: Voor en Na installatie
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Installation */}
            <div className="rounded-2xl bg-white border border-stone-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">
                  {beforeInstallation.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {beforeInstallation.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-stone-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After Installation */}
            <div className="rounded-2xl bg-white border border-stone-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">
                  {afterInstallation.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {afterInstallation.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <Zap className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-stone-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
            Veelgestelde vragen
          </h2>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-stone-50 border border-stone-200 p-6"
              >
                <h3 className="text-lg font-semibold text-stone-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-stone-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-amber-50 to-emerald-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Klaar om meer te leren?
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            Bekijk onze complete gids en krijg persoonlijk advies van onze zonnepaneel experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/advies"
              className="inline-block px-8 py-3 bg-amber-600 text-white font-semibold rounded-2xl hover:bg-amber-700 transition-colors"
            >
              Terug naar advies
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-stone-900 text-white font-semibold rounded-2xl hover:bg-stone-800 transition-colors"
            >
              Gratis offerta aanvragen
            </a>
          </div>
        </div>
      </section>

      <FAQSchema items={faqItems} />
    </>
  );
}
