"use client";

import { ReactNode } from "react";

interface CalculatorProps {
  title: string;
  description?: string;
  children: ReactNode;
  result?: ReactNode;
}

export default function Calculator({
  title,
  description,
  children,
  result,
}: CalculatorProps) {
  return (
    <div className="w-full bg-gradient-to-b from-amber-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-stone-600 max-w-2xl">{description}</p>
          )}
        </div>

        {/* Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Inputs Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100">
              {children}
            </div>
          </div>

          {/* Results Section */}
          {result && (
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-b from-emerald-50 to-emerald-100 rounded-xl shadow-lg p-8 border-2 border-emerald-300">
                {result}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
