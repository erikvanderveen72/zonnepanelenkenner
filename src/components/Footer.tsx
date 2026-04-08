import Link from "next/link";
import { Shield, Lock, Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Trust */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-3xl">☀</span>
              <div>
                <div className="font-bold text-white">
                  zonnepanelenkenner<span className="text-amber-500">.nl</span>
                </div>
              </div>
            </Link>
            <p className="text-sm text-stone-400 mb-6">
              Onafhankelijk advies over zonnepanelen in Nederland.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Lock size={16} className="text-emerald-500" />
                <span>SSL beveiligd</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield size={16} className="text-emerald-500" />
                <span>Onafhankelijk</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap size={16} className="text-emerald-500" />
                <span>Dagelijks bijgewerkt</span>
              </div>
            </div>
          </div>

          {/* Advies */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Advies</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/advies/keuzehulp" className="text-stone-400 hover:text-amber-500 transition-colors">
                  Keuzehulp
                </Link>
              </li>
              <li>
                <Link href="/advies/tips" className="text-stone-400 hover:text-amber-500 transition-colors">
                  Tips & Tricks
                </Link>
              </li>
              <li>
                <Link href="/soorten" className="text-stone-400 hover:text-amber-500 transition-colors">
                  Soorten Panelen
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Tools</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/calculator" className="text-stone-400 hover:text-amber-500 transition-colors">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/vergelijken" className="text-stone-400 hover:text-amber-500 transition-colors">
                  Vergelijken
                </Link>
              </li>
              <li>
                <Link href="/begrippenlijst" className="text-stone-400 hover:text-amber-500 transition-colors">
                  Begrippenlijst
                </Link>
              </li>
            </ul>
          </div>

          {/* Informatie */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Informatie</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-stone-400 hover:text-amber-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-stone-400 hover:text-amber-500 transition-colors">
                  Privacybeleid
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-stone-400 hover:text-amber-500 transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-400 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-stone-800 pt-8 text-center text-sm text-stone-400">
          <p>
            &copy; {currentYear} Zonnepanelenkenner.nl. Alle rechten voorbehouden.
          </p>
          <p className="mt-2">
            Gemaakt met ☀ voor duurzame energie in Nederland.
          </p>
        </div>
      </div>
    </footer>
  );
}
