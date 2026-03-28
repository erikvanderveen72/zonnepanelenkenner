"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQSchema({
  items,
  title = "Veelgestelde Vragen",
}: FAQSchemaProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full">
        {title && (
          <h2 className="text-3xl font-bold text-stone-900 mb-8">{title}</h2>
        )}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-stone-200 rounded-lg overflow-hidden hover:border-amber-500 transition-colors"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-stone-50 transition-colors"
              >
                <h3 className="font-semibold text-stone-900 text-left">
                  {item.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-amber-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-stone-50 border-t border-stone-200">
                  <p className="text-stone-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
