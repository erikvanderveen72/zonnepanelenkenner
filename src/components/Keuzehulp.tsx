"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface KeuzeStep {
  title: string;
  description: string;
  options: {
    id: string;
    label: string;
    icon?: string;
    description?: string;
  }[];
}

interface KeuzehulpProps {
  steps: KeuzeStep[];
  onComplete: (answers: Record<string, string>) => void;
}

export default function Keuzehulp({ steps, onComplete }: KeuzehulpProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSelect = (optionId: string) => {
    const newAnswers = {
      ...answers,
      [currentStep]: optionId,
    };
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;
  const step = steps[currentStep];

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-3">
          <h3 className="text-sm font-semibold text-stone-900">
            Stap {currentStep + 1} van {steps.length}
          </h3>
          <span className="text-sm font-semibold text-amber-600">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-stone-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-amber-500 to-orange-500 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-3">
          {step.title}
        </h2>
        <p className="text-stone-600 mb-8">{step.description}</p>

        {/* Options */}
        <div className="space-y-3">
          {step.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                answers[currentStep] === option.id
                  ? "border-amber-500 bg-amber-50 shadow-md"
                  : "border-stone-200 bg-white hover:border-amber-300"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-0.5 transition-all ${
                    answers[currentStep] === option.id
                      ? "bg-amber-500 border-amber-500"
                      : "border-stone-300"
                  }`}
                />
                <div>
                  <p className="font-semibold text-stone-900">{option.label}</p>
                  {option.description && (
                    <p className="text-sm text-stone-600 mt-1">
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-4 justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-300 text-stone-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-stone-50 transition-colors"
        >
          <ChevronLeft size={18} />
          Terug
        </button>

        <button
          onClick={handleNext}
          disabled={!(currentStep in answers)}
          className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
        >
          {currentStep === steps.length - 1 ? "Afronden" : "Volgende"}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
