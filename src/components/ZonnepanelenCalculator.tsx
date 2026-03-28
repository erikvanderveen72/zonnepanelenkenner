"use client";

import { useState, useMemo } from "react";
import Calculator from "./Calculator";
import {
  berekenJaarlijkseOpbrengst,
  berekenBesparing,
  berekenCO2Besparing,
  berekenTerugverdientijd,
} from "@/lib/calculations";

export function ZonnepanelenCalculator() {
  const [stroomverbruik, setStroomverbruik] = useState(3500);
  const [energieprijs, setEnergieprijs] = useState(0.28);
  const [aantalPanelen, setAantalPanelen] = useState(10);
  const [wpPerPaneel, setWpPerPaneel] = useState(400);
  const [kostenPerPaneel, setKostenPerPaneel] = useState(300);

  const results = useMemo(() => {
    const opbrengst = berekenJaarlijkseOpbrengst(aantalPanelen, wpPerPaneel);
    const besparing = berekenBesparing(opbrengst, energieprijs);
    const co2Besparing = berekenCO2Besparing(opbrengst);
    const totaleInvestering = aantalPanelen * kostenPerPaneel * 1.2; // ×1.2 voor installatie
    const terugverdientijd = berekenTerugverdientijd(
      totaleInvestering,
      besparing
    );
    const besparingOver25Jaar = besparing * 25;

    return {
      totaleInvestering: Math.round(totaleInvestering),
      opbrengst,
      besparing: Math.round(besparing * 100) / 100,
      terugverdientijd,
      co2Besparing,
      besparingOver25Jaar: Math.round(besparingOver25Jaar),
    };
  }, [aantalPanelen, wpPerPaneel, kostenPerPaneel, energieprijs]);

  return (
    <Calculator
      title="Zonnepanelen Calculator"
      description="Berekenen hoeveel je kunt besparen met zonnepanelen"
      result={
        <div className="space-y-4">
          <div className="pb-4 border-b border-border">
            <div className="text-sm text-text-muted mb-1">
              Totale investering
            </div>
            <div className="text-3xl font-bold text-primary">
              €{results.totaleInvestering.toLocaleString("nl-NL")}
            </div>
          </div>

          <div className="pb-4 border-b border-border">
            <div className="text-sm text-text-muted mb-1">
              Jaarlijkse opbrengst
            </div>
            <div className="text-3xl font-bold text-accent">
              {results.opbrengst.toLocaleString("nl-NL")} kWh
            </div>
          </div>

          <div className="pb-4 border-b border-border">
            <div className="text-sm text-text-muted mb-1">
              Jaarlijkse besparing
            </div>
            <div className="text-3xl font-bold text-accent">
              €{results.besparing.toLocaleString("nl-NL", { minimumFractionDigits: 2 })}
            </div>
          </div>

          <div className="pb-4 border-b border-border">
            <div className="text-sm text-text-muted mb-1">
              Terugverdientijd
            </div>
            <div className="text-3xl font-bold text-primary">
              {results.terugverdientijd} jaar
            </div>
          </div>

          <div className="pb-4 border-b border-border">
            <div className="text-sm text-text-muted mb-1">
              CO2 besparing per jaar
            </div>
            <div className="text-3xl font-bold text-accent">
              {results.co2Besparing.toLocaleString("nl-NL")} kg
            </div>
          </div>

          <div>
            <div className="text-sm text-text-muted mb-1">
              Besparing over 25 jaar
            </div>
            <div className="text-3xl font-bold text-primary">
              €{results.besparingOver25Jaar.toLocaleString("nl-NL")}
            </div>
          </div>
        </div>
      }
    >
      <div>
        <label className="block text-sm font-semibold text-text-main mb-2">
          Jaarlijks stroomverbruik (kWh)
        </label>
        <div className="space-y-2">
          <input
            type="range"
            min="1000"
            max="10000"
            step="100"
            value={stroomverbruik}
            onChange={(e) => setStroomverbruik(Number(e.target.value))}
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-text-muted">
            <span>1.000</span>
            <span className="text-primary font-semibold">{stroomverbruik}</span>
            <span>10.000</span>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-text-main mb-2">
          Energieprijs per kWh (€)
        </label>
        <input
          type="number"
          min="0.10"
          max="1.00"
          step="0.01"
          value={energieprijs}
          onChange={(e) => setEnergieprijs(Number(e.target.value))}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-text-main mb-2">
          Aantal panelen
        </label>
        <div className="space-y-2">
          <input
            type="range"
            min="4"
            max="20"
            step="1"
            value={aantalPanelen}
            onChange={(e) => setAantalPanelen(Number(e.target.value))}
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-text-muted">
            <span>4</span>
            <span className="text-primary font-semibold">{aantalPanelen}</span>
            <span>20</span>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-text-main mb-2">
          Wattpiek per paneel (Wp)
        </label>
        <select
          value={wpPerPaneel}
          onChange={(e) => setWpPerPaneel(Number(e.target.value))}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="350">350 Wp</option>
          <option value="400">400 Wp</option>
          <option value="450">450 Wp</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-text-main mb-2">
          Kosten per paneel (€)
        </label>
        <input
          type="number"
          min="200"
          max="500"
          step="10"
          value={kostenPerPaneel}
          onChange={(e) => setKostenPerPaneel(Number(e.target.value))}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </Calculator>
  );
}
