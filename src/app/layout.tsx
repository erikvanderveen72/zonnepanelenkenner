import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zonnepanelenkenner.nl"),
  title: {
    default: "Zonnepanelen Advies 2026 | Zonnepanelenkenner.nl",
    template: "%s | Zonnepanelenkenner.nl 2026",
  },
  description:
    "Onafhankelijk advies over zonnepanelen. Vergelijk installateurs, bereken je terugverdientijd en ontdek welke zonnepanelen bij jou passen. 100% gratis.",
  keywords: [
    "zonnepanelen",
    "zonnepanelen kopen",
    "zonnepanelen advies",
    "terugverdientijd",
    "installateurs vergelijken",
  ],
  authors: [{ name: "Zonnepanelenkenner.nl" }],
  creator: "Zonnepanelenkenner",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://zonnepanelenkenner.nl",
    siteName: "Zonnepanelenkenner.nl",
    title: "Zonnepanelen Advies 2026 | Zonnepanelenkenner.nl",
    description:
      "Onafhankelijk advies over zonnepanelen. Vergelijk installateurs, bereken je terugverdientijd en ontdek welke zonnepanelen bij jou passen.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonnepanelenkenner.nl",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zonnepanelen Advies 2026 | Zonnepanelenkenner.nl",
    description:
      "Onafhankelijk advies over zonnepanelen. Vergelijk installateurs, bereken je terugverdientijd en ontdek welke zonnepanelen bij jou passen.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zonnepanelenkenner.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://zonnepanelenkenner.nl/#website",
        url: "https://zonnepanelenkenner.nl",
        name: "Zonnepanelenkenner.nl",
        description:
          "Onafhankelijk advies over zonnepanelen. Vergelijk installateurs, bereken je terugverdientijd en ontdek welke zonnepanelen bij jou passen.",
        inLanguage: "nl-NL",
        publisher: {
          "@id": "https://zonnepanelenkenner.nl/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://zonnepanelenkenner.nl/begrippenlijst?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://zonnepanelenkenner.nl/#organization",
        name: "Zonnepanelenkenner",
        url: "https://zonnepanelenkenner.nl",
        logo: "https://zonnepanelenkenner.nl/logo.svg",
        description:
          "Onafhankelijk advies over zonnepanelen in Nederland",
        address: {
          "@type": "PostalAddress",
          addressCountry: "NL",
          addressRegion: "Nederland",
        },
        sameAs: [],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "info@zonnepanelenkenner.nl",
          availableLanguage: "Dutch",
        },
      },
    ],
  };

  return (
    <html lang="nl">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P2DHVR0VVS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P2DHVR0VVS');
          `}
        </Script>
        <meta name="geo.placename" content="Netherlands" />
        <meta name="geo.region" content="NL" />
        <meta name="ICBM" content="52.1326, 5.2913" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
