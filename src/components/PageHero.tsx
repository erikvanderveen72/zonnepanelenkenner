"use client";

import Breadcrumbs, { Breadcrumb } from "./Breadcrumbs";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  highlightedSubtitle?: string;
  badge?: string;
  showBreadcrumbs?: boolean;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHero({
  title,
  subtitle,
  highlightedSubtitle,
  badge,
  showBreadcrumbs = false,
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <section className="relative min-h-[400px] bg-stone-900 overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Amber blob */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

        {/* Orange blob */}
        <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        {/* Emerald blob */}
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Plus Pattern Overlay */}
        <div className="absolute inset-0 plus-pattern opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {showBreadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        {/* Badge */}
        {badge && (
          <div className="flex items-center gap-2 mb-6 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 text-sm font-medium">{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>

        {/* Subtitle & Highlighted */}
        {(subtitle || highlightedSubtitle) && (
          <p className="text-lg sm:text-xl text-stone-300 mb-8 max-w-2xl leading-relaxed">
            {subtitle}
            {highlightedSubtitle && (
              <span className="block mt-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent font-semibold">
                {highlightedSubtitle}
              </span>
            )}
          </p>
        )}
      </div>
    </section>
  );
}
