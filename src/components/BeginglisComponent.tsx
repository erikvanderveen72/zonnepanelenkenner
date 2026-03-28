"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { glossaryTerms } from "@/lib/fallback-data";

interface GlossaryTerm {
  term: string;
  definition: string;
}

export function BeginglisComponent() {
  const [search, setSearch] = useState("");

  const groupedTerms = useMemo(() => {
    const filtered = glossaryTerms.filter(
      (item) =>
        item.term.toLowerCase().includes(search.toLowerCase()) ||
        item.definition.toLowerCase().includes(search.toLowerCase())
    );

    const grouped: Record<string, GlossaryTerm[]> = {};
    filtered.forEach((item) => {
      const firstLetter = item.term[0].toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(item);
    });

    return grouped;
  }, [search]);

  const letters = Object.keys(groupedTerms).sort();

  return (
    <div className="w-full space-y-8">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
        <input
          type="text"
          placeholder="Zoeken in begrippenlijst..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Letter Navigation */}
      {letters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="px-3 py-1 rounded-full bg-surface border border-border text-text-main hover:bg-primary hover:text-white hover:border-primary transition text-sm font-medium"
            >
              {letter}
            </a>
          ))}
        </div>
      )}

      {/* Terms */}
      <div className="space-y-8">
        {letters.map((letter) => (
          <div key={letter} id={`letter-${letter}`}>
            <h2 className="text-2xl font-bold text-text-main mb-4 pb-2 border-b-2 border-primary">
              {letter}
            </h2>
            <div className="space-y-4">
              {groupedTerms[letter].map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg border border-border hover:border-primary transition"
                >
                  <h3 className="font-semibold text-primary mb-2">
                    {item.term}
                  </h3>
                  <p className="text-text-muted">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {letters.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-muted">
            Geen begrippen gevonden voor "{search}"
          </p>
        </div>
      )}
    </div>
  );
}
