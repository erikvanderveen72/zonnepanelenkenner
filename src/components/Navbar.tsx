"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Shield } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkColor = scrolled ? "#1c1917" : "#ffffff";
  const linkHoverClass = scrolled ? "hover:text-amber-600" : "hover:text-amber-300";

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-stone-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">☀</span>
            <div className="flex">
              <span className="font-bold" style={{ color: linkColor }}>
                zonnepanelenkenner
              </span>
              <span className="text-amber-500 font-bold">.nl</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`transition-colors ${linkHoverClass}`}
              style={{ color: linkColor }}
            >
              Home
            </Link>

            {/* Advies Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 transition-colors ${linkHoverClass}`}
                style={{ color: linkColor }}
              >
                Advies
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/advies/keuzehulp"
                  className="block px-4 py-2 text-stone-900 hover:bg-amber-50 first:rounded-t-lg"
                >
                  Keuzehulp
                </Link>
                <Link
                  href="/advies/tips"
                  className="block px-4 py-2 text-stone-900 hover:bg-amber-50 last:rounded-b-lg"
                >
                  Tips & Tricks
                </Link>
              </div>
            </div>

            <Link
              href="/calculator"
              className={`transition-colors ${linkHoverClass}`}
              style={{ color: linkColor }}
            >
              Calculator
            </Link>

            <Link
              href="/begrippenlijst"
              className={`transition-colors ${linkHoverClass}`}
              style={{ color: linkColor }}
            >
              Begrippenlijst
            </Link>

            <Link
              href="/vergelijken"
              className={`transition-colors ${linkHoverClass}`}
              style={{ color: linkColor }}
            >
              Vergelijken
            </Link>

            <Link
              href="/blog"
              className={`transition-colors ${linkHoverClass}`}
              style={{ color: linkColor }}
            >
              Blog
            </Link>

            {/* Trust Badge */}
            <div className="flex items-center gap-1 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200">
              <Shield size={14} className="text-emerald-600" />
              <span className="text-xs font-medium text-emerald-700">Onafhankelijk & gratis</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? (
              <X size={24} style={{ color: linkColor }} />
            ) : (
              <Menu size={24} style={{ color: linkColor }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <div className="px-4 py-4 space-y-4">
              <Link href="/" className="block text-stone-900 hover:text-amber-600">
                Home
              </Link>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-stone-900 hover:text-amber-600"
              >
                Advies
                <ChevronDown
                  size={16}
                  className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {dropdownOpen && (
                <div className="pl-4 space-y-2">
                  <Link href="/advies/keuzehulp" className="block text-stone-900 hover:text-amber-600">
                    Keuzehulp
                  </Link>
                  <Link href="/advies/tips" className="block text-stone-900 hover:text-amber-600">
                    Tips & Tricks
                  </Link>
                </div>
              )}
              <Link href="/calculator" className="block text-stone-900 hover:text-amber-600">
                Calculator
              </Link>
              <Link href="/begrippenlijst" className="block text-stone-900 hover:text-amber-600">
                Begrippenlijst
              </Link>
              <Link href="/vergelijken" className="block text-stone-900 hover:text-amber-600">
                Vergelijken
              </Link>
              <Link href="/blog" className="block text-stone-900 hover:text-amber-600">
                Blog
              </Link>
              <div className="flex items-center gap-1 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200 w-fit">
                <Shield size={14} className="text-emerald-600" />
                <span className="text-xs font-medium text-emerald-700">Onafhankelijk & gratis</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
