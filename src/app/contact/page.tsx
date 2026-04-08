"use client";

import { useState } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQSchema, { FAQItem } from "@/components/FAQSchema";
import { Mail, Phone, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

// Note: Metadata cannot be used in client components, so this would be exported from a separate layout file
// For now, metadata is included as a comment for reference
/*
export const metadata: Metadata = {
  title: "Contact | Zonnepanelenkenner.nl",
  description:
    "Neem contact op met Zonnepanelenkenner.nl. Stel je vragen en ontvang advies over zonnepanelen. We helpen je graag verder.",
};
*/

const faqItems: FAQItem[] = [
  {
    question: "Hoe snel krijg ik antwoord op mijn vraag?",
    answer:
      "We streven ernaar alle vragen binnen 24-48 uur te beantwoorden. In het weekend kan het iets langer duren. Voor spoedeisende zaken raden we aan ons telefonisch te bellen.",
  },
  {
    question: "Geven jullie bindend advies via e-mail?",
    answer:
      "Nee, onze adviezen zijn niet-bindend. Dit zijn indicatieve aanbevelingen. Voor bindend advies en professionele offertes moet je contact opnemen met erkende lokale installateurs.",
  },
  {
    question: "Wat is de beste manier om contact met jullie op te nemen?",
    answer:
      "Je kunt het contactformulier op deze pagina gebruiken. Dit is meist het snelst. Uiteraard kun je ons ook direct mailen op info@zonnepanelenkenner.nl.",
  },
  {
    question: "Kunnen jullie me helpen met een offerte van een installateur?",
    answer:
      "We kunnen je helpen offertes te begrijpen en vragen te stellen. Echter, het onderhandelen over prijzen doet je het best direct met de installateur. Wij geven geen financieel advies.",
  },
  {
    question: "Werken jullie samen met installateurs?",
    answer:
      "We vergelijken installateurs en hun diensten, maar we werken niet exclusief met bepaalde bedrijven. Alle installateurs in onze vergelijker zijn onafhankelijk geselecteerd.",
  },
  {
    question: "Kan ik jullie ook bereiken via sociale media?",
    answer:
      "Momenteel bereik je ons het best via email of dit contactformulier. Je kunt ons vragen hier stellen en we zullen zo snel mogelijk antwoorden.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Vul alstublieft alle velden in");
      setLoading(false);
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Vul alstublieft een geldig e-mailadres in");
      setLoading(false);
      return;
    }

    try {
      // In a real application, you would send this to your backend
      // For now, we'll simulate success
      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError("Er is een fout opgetreden. Probeer het later opnieuw.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full">
      {/* Hero */}
      <PageHero
        title="Contact"
        subtitle="Heb je vragen over zonnepanelen? We helpen je graag verder"
        showBreadcrumbs={true}
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="p-6 bg-stone-50 rounded-lg border border-stone-200">
              <Mail className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-semibold text-stone-900 mb-2">E-mail</h3>
              <a
                href="mailto:info@zonnepanelenkenner.nl"
                className="text-amber-600 hover:text-amber-700 break-all"
              >
                info@zonnepanelenkenner.nl
              </a>
              <p className="text-sm text-stone-600 mt-3">
                We antwoorden meestal binnen 24-48 uur.
              </p>
            </div>

            <div className="p-6 bg-stone-50 rounded-lg border border-stone-200">
              <Clock className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-semibold text-stone-900 mb-2">
                Beschikbaarheid
              </h3>
              <p className="text-stone-700">
                <strong>Maandag - Vrijdag</strong>
                <br />
                09:00 - 17:00 uur
              </p>
              <p className="text-sm text-stone-600 mt-3">
                Weekend: Beperkte beschikbaarheid
              </p>
            </div>

            <div className="p-6 bg-stone-50 rounded-lg border border-stone-200">
              <Phone className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-semibold text-stone-900 mb-2">Telefoon</h3>
              <p className="text-stone-700">
                Bel ons voor spoedeisende zaken.
              </p>
              <p className="text-sm text-stone-600 mt-3">
                Stuur een mailtje met je telefoonnummer, dan bellen we je terug.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 mb-2">
              Stuur ons een bericht
            </h2>
            <p className="text-stone-600 mb-8">
              Vul het formulier in en we nemen zo snel mogelijk contact met je op.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-emerald-900">
                      Bericht verzonden!
                    </h3>
                    <p className="text-emerald-800 text-sm mt-1">
                      Dank je voor je bericht. We nemen zo snel mogelijk contact
                      met je op.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-900">Fout</h3>
                    <p className="text-red-800 text-sm mt-1">{error}</p>
                  </div>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block font-semibold text-stone-900 mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Jouw volledige naam"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block font-semibold text-stone-900 mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="jouw@email.nl"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block font-semibold text-stone-900 mb-2">
                  Onderwerp *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">-- Selecteer een onderwerp --</option>
                  <option value="advies">Advies/Aanbeveling</option>
                  <option value="vergelijking">Vragen over vergelijking</option>
                  <option value="calculator">Vragen over calculator</option>
                  <option value="feedback">Feedback of suggestie</option>
                  <option value="installer">Vraag voor installateur</option>
                  <option value="technical">Technisch probleem</option>
                  <option value="other">Overig</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block font-semibold text-stone-900 mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  placeholder="Vertel ons meer over je vraag of opmerking..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors disabled:bg-stone-400 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {loading ? "Verzenden..." : "Verzend bericht"}
                </button>
                <p className="text-sm text-stone-600">
                  * Verplichte velden
                </p>
              </div>
            </form>

            {/* Privacy Notice */}
            <div className="mt-8 p-4 bg-stone-50 rounded-lg border border-stone-200">
              <p className="text-sm text-stone-600">
                <strong>Privacy:</strong> Je gegevens worden alleen gebruikt om op
                je vraag te antwoorden. Lees ons{" "}
                <a
                  href="/privacy"
                  className="text-amber-600 hover:text-amber-700 font-semibold"
                >
                  privacybeleid
                </a>
                {" "}voor meer informatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-4 text-center">
            Veelgestelde Vragen
          </h2>
          <p className="text-center text-stone-600 mb-12">
            Kan je antwoord hier vinden? Dan hoef je niet eerst te mailen!
          </p>
          <FAQSchema items={faqItems} title="" />
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Over deze site
              </h3>
              <p className="text-stone-700 leading-relaxed">
                Zonnepanelenkenner.nl helpt je alles over zonnepanelen te leren.
                Van calculators tot vergelijkingen: we geven je de informatie die
                je nodig hebt om een weloverwogen keuze te maken.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Wat we niet doen
              </h3>
              <ul className="text-stone-700 space-y-2">
                <li>✗ We geven geen financieel advies</li>
                <li>✗ We zijn geen installateur</li>
                <li>✗ We ondersteunen geen commerciële installateurs</li>
                <li>✗ We vergelijken geen leaseopties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
