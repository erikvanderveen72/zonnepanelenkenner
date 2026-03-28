"use client";

import { useEffect, useRef, useState } from "react";
import { LucideIcon, TrendingUp } from "lucide-react";

interface Stat {
  label: string;
  value: number;
  icon?: LucideIcon;
  suffix?: string;
  prefix?: string;
  trend?: "up" | "down";
}

interface StatsBarProps {
  stats: Stat[];
}

const AnimatedCounter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isVisible, value, duration]);

  return <div ref={ref}>{count}</div>;
};

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all"
              >
                {Icon && (
                  <Icon className="w-8 h-8 text-amber-600 mb-3" />
                )}
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  {stat.prefix}
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-stone-600 font-medium">{stat.label}</p>
                {stat.trend === "up" && (
                  <div className="flex items-center gap-1 mt-2 text-emerald-600 text-sm">
                    <TrendingUp size={14} />
                    <span>+12% YoY</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
