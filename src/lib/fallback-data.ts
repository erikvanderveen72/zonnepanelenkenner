// Solar Panel Types
export interface SolarPanelType {
  id: string;
  name: string;
  efficiency: number;
  lifespan: number;
  description: string;
  pricePerWatt: number;
}

export const solarPanelTypes: SolarPanelType[] = [
  {
    id: "monocrystalline",
    name: "Monokristallijn",
    efficiency: 18,
    lifespan: 30,
    description:
      "Hoogste rendement en langste levensduur. Ideaal voor kleinere daken met hoge stroomvraag.",
    pricePerWatt: 0.65,
  },
  {
    id: "polycrystalline",
    name: "Polykristallijn",
    efficiency: 15,
    lifespan: 25,
    description:
      "Goed rendement met betere prijs-kwaliteit verhouding. Meest populair in Nederland.",
    pricePerWatt: 0.55,
  },
  {
    id: "thin-film",
    name: "Thin-film",
    efficiency: 12,
    lifespan: 20,
    description:
      "Laagste rendement maar beter in grijze omstandigheden. Minder ruimte nodig.",
    pricePerWatt: 0.45,
  },
];

// Provincial Installation Prices
export interface ProvincialPrice {
  province: string;
  pricePerPanel: number;
  installationCost: number;
}

export const provincialPrices: ProvincialPrice[] = [
  { province: "Noord-Holland", pricePerPanel: 280, installationCost: 1200 },
  { province: "Zuid-Holland", pricePerPanel: 285, installationCost: 1200 },
  { province: "Utrecht", pricePerPanel: 275, installationCost: 1100 },
  { province: "Noord-Brabant", pricePerPanel: 270, installationCost: 1100 },
  { province: "Limburg", pricePerPanel: 275, installationCost: 1150 },
  { province: "Gelderland", pricePerPanel: 280, installationCost: 1200 },
  { province: "Overijssel", pricePerPanel: 270, installationCost: 1100 },
  { province: "Flevoland", pricePerPanel: 265, installationCost: 1050 },
  { province: "Friesland", pricePerPanel: 270, installationCost: 1150 },
  { province: "Groningen", pricePerPanel: 275, installationCost: 1200 },
  { province: "Drenthe", pricePerPanel: 270, installationCost: 1100 },
];

// Glossary Terms
export interface GlossaryTerm {
  term: string;
  definition: string;
  category: "technical" | "financial" | "legal" | "general";
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Zonnepaneel",
    definition:
      "Een apparaat dat zonlicht omzet in elektrische energie door middel van het fotovoltaïsche effect.",
    category: "technical",
  },
  {
    term: "Wattage (Wp)",
    definition:
      "De piekcapaciteit van een zonnepaneel gemeten in Watt-piek onder standaardomstandigheden.",
    category: "technical",
  },
  {
    term: "Terugverdientijd",
    definition:
      "Het aantal jaren dat nodig is om de investering in zonnepanelen terug te verdienen met energiebesparing.",
    category: "financial",
  },
  {
    term: "Rendement",
    definition:
      "Het percentage zonlicht dat een paneel omzet in bruikbare elektrische energie.",
    category: "technical",
  },
  {
    term: "Groene Stroom Certificaten (GSC)",
    definition:
      "Certificaten waarmee je kan handelen door zelf groene energie op te wekken.",
    category: "financial",
  },
  {
    term: "Netmetering",
    definition:
      "Systeem waarbij je teruggeleverde stroom aan het net kan verrekenen met je verbruik.",
    category: "legal",
  },
  {
    term: "Omvormer (Inverter)",
    definition:
      "Apparaat dat gelijkstroom van de panelen omzet in wisselstroom voor huishoudelijk gebruik.",
    category: "technical",
  },
  {
    term: "Zonneurenkaart",
    definition:
      "Kaart die aangeeft hoeveel uur zonlicht per jaar in verschillende regio's van Nederland schijnt.",
    category: "general",
  },
  {
    term: "Kantelfactor (Tilt Factor)",
    definition:
      "De hoek waaronder zonnepanelen geplaatst worden voor optimaal rendement.",
    category: "technical",
  },
  {
    term: "Subsidie/Teruggave",
    definition:
      "Financiële steun van de overheid of gemeente voor de aanschaf van zonnepanelen.",
    category: "financial",
  },
  {
    term: "Voorzieningsbilans",
    definition:
      "Jaarlijkse afrekening van je energie-opbrengsten tegen verbruik bij netmetering.",
    category: "financial",
  },
  {
    term: "Monokristallijn",
    definition:
      "Type zonnepaneel gemaakt uit één kristalstructuur, met het hoogste rendement.",
    category: "technical",
  },
  {
    term: "Polykristallijn",
    definition:
      "Type zonnepaneel gemaakt uit meerdere kristallen, met goed rendement en lagere prijs.",
    category: "technical",
  },
  {
    term: "Thin-film",
    definition:
      "Dun type zonnepaneel met lager rendement maar betere werking in grijze omstandigheden.",
    category: "technical",
  },
  {
    term: "SDE++ Subsidie",
    definition:
      "Nederlandse overheidssubsidie voor duurzame energieopwekking, inclusief zonnepanelen.",
    category: "financial",
  },
  {
    term: "CO2-besparing",
    definition:
      "De hoeveelheid CO2-uitstoot die je voorkomt door zelf schone energie op te wekken.",
    category: "general",
  },
  {
    term: "kWh",
    definition:
      "Kilowattuur - eenheid van energie-opbrengst of verbruik per uur.",
    category: "technical",
  },
  {
    term: "Opbrengstgarantie",
    definition:
      "Garantie van fabrikanten dat zonnepanelen gedurende jaren een bepaald prestatieniveau halen.",
    category: "legal",
  },
  {
    term: "Dakkwaliteit",
    definition:
      "Assessment van de toestand van je dak om geschiktheid voor zonnepanelen te bepalen.",
    category: "technical",
  },
  {
    term: "Maandelijkse afrekening",
    definition:
      "Maandelijkse afrekening van elektriciteit bij netmetering zonder vast contract.",
    category: "financial",
  },
];

// Blog Posts
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readingTime?: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Hoeveel zonnepanelen heb je nodig voor een Nederlands gezin?",
    slug: "aantal-zonnepanelen-nederlands-gezin",
    excerpt:
      "Een gemiddelijk Nederlands huishouden verbruikt ongeveer 3500 kWh per jaar. Dit artikel helpt je bepalen hoeveel panelen je nodig hebt.",
    date: "2026-03-15",
    author: "Jan van der Linde",
    category: "Advies",
    readingTime: 6,
  },
  {
    id: "2",
    title: "Zonnepanelen en je inkomstenbelasting: wat moet je weten?",
    slug: "zonnepanelen-inkomstenbelasting",
    excerpt:
      "Sinds 2023 hoef je niet langer belasting te betalen over de opbrengsten van zonnepanelen. Ontdek de juridische details hier.",
    date: "2026-03-10",
    author: "Maria Jansen",
    category: "Juridisch",
    readingTime: 8,
  },
  {
    id: "3",
    title: "Onderhoud van zonnepanelen: tips voor langdurig rendement",
    slug: "onderhoud-zonnepanelen",
    excerpt:
      "Zonnepanelen zijn onderhoudsarm, maar wat kun je doen om ze in topconditie te houden? Dit zijn onze beste tips.",
    date: "2026-03-05",
    author: "Peter Bakker",
    category: "Tips",
    readingTime: 5,
  },
  {
    id: "4",
    title: "2026 Zonnepanel prijzen en trends: alles wat je moet weten",
    slug: "zonnepanel-prijzen-2026",
    excerpt:
      "De prijzen van zonnepanelen zijn in 2026 verder gedaald. Wat zijn de verwachtingen voor het komende jaar?",
    date: "2026-02-28",
    author: "Emma Scholten",
    category: "Markt",
    readingTime: 7,
  },
  {
    id: "5",
    title: "Netmetering in Nederland: hoe werkt het eigenlijk?",
    slug: "netmetering-nederland",
    excerpt:
      "Netmetering is een cruciaal systeem voor zonnepaneel eigenaren. Lees hoe het werkt en wat de voordelen zijn.",
    date: "2026-02-20",
    author: "Tom de Vries",
    category: "Educatie",
    readingTime: 6,
  },
];

// FAQ Items
export interface FAQItem {
  question: string;
  answer: string;
}

export const homepageFAQ: FAQItem[] = [
  {
    question: "Hoeveel kost een zonnepaneel installatie gemiddeld?",
    answer:
      "Een gemiddelde Nederlandse huishouden betaalt tussen de €6.000 en €10.000 voor een installatie van 8-10 panelen. De kosten per watt liggen rond de €0.80-€1.20 inclusief installatie, wat gunstiger is dan ooit tevoren.",
  },
  {
    question: "Wat is de terugverdientijd van zonnepanelen in Nederland?",
    answer:
      "De gemiddelde terugverdientijd bedraagt 7-9 jaar, afhankelijk van je locatie, energieverbruik en beschikbare subsidies. Na terugbetaling profiteer je nog 20+ jaar van schone, goedkope energie.",
  },
  {
    question: "Heb ik een batterijaansluiting nodig?",
    answer:
      "Niet direct nodig. In Nederland hebben we netmetering, waardoor je teruggeleverde stroom tegen dezelfde prijs als je verbruik wordt verrekend. Een batterij kan interessant zijn voor onafhankelijkheid, maar is investering.",
  },
  {
    question: "Werken zonnepanelen ook 's winters?",
    answer:
      "Ja! Zonnepanelen werken ook 's winters, hoewel het rendement lager is. Zelfs op bewolkte dagen produceren ze nog stroom. In Nederland komen panelen gemiddeld op 1050 uren zonlicht per jaar.",
  },
];

// Installers
export interface Installer {
  id: number;
  name: string;
  pricePerWp: number;
  guarantee: string;
  rating: number;
  reviews: number;
  region: string;
}

export const installers: Installer[] = [
  {
    id: 1,
    name: "ZonneExperts",
    pricePerWp: 0.32,
    guarantee: "20 jaar",
    rating: 4.8,
    reviews: 342,
    region: "Heel Nederland",
  },
  {
    id: 2,
    name: "SolarEnergy Pro",
    pricePerWp: 0.29,
    guarantee: "15 jaar",
    rating: 4.6,
    reviews: 218,
    region: "West, Midden",
  },
  {
    id: 3,
    name: "Groene Energie BV",
    pricePerWp: 0.35,
    guarantee: "25 jaar",
    rating: 4.9,
    reviews: 156,
    region: "Noord, Oost",
  },
  {
    id: 4,
    name: "Sustainable Solar",
    pricePerWp: 0.31,
    guarantee: "20 jaar",
    rating: 4.7,
    reviews: 289,
    region: "Hele land",
  },
  {
    id: 5,
    name: "PanelMasters",
    pricePerWp: 0.28,
    guarantee: "10 jaar",
    rating: 4.4,
    reviews: 167,
    region: "Randstad",
  },
  {
    id: 6,
    name: "Zonne & CO",
    pricePerWp: 0.33,
    guarantee: "20 jaar",
    rating: 4.8,
    reviews: 324,
    region: "Heel Nederland",
  },
  {
    id: 7,
    name: "EnergiePlus Installaties",
    pricePerWp: 0.30,
    guarantee: "15 jaar",
    rating: 4.5,
    reviews: 201,
    region: "Zuid, Midden",
  },
  {
    id: 8,
    name: "TechnoSolar",
    pricePerWp: 0.34,
    guarantee: "25 jaar",
    rating: 4.7,
    reviews: 245,
    region: "Hele land",
  },
];

// Calculator Defaults
export interface CalculatorDefaults {
  averageAnnualConsumption: number;
  wattPerPanel: number;
  pricePerPanel: number;
  installationCostBase: number;
  electricityPrice: number;
  sunHoursPerYear: number;
  co2PerKwh: number;
}

export const calculatorDefaults: CalculatorDefaults = {
  averageAnnualConsumption: 3500, // kWh/year for average Dutch household
  wattPerPanel: 400, // Modern panel capacity
  pricePerPanel: 300, // EUR, average
  installationCostBase: 1150, // EUR, average per province
  electricityPrice: 0.28, // EUR/kWh, 2026 estimate
  sunHoursPerYear: 1050, // Average for Netherlands
  co2PerKwh: 0.385, // kg CO2 per kWh
};
