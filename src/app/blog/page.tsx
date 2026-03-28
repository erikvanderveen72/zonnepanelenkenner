import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/fallback-data";
import PageHero from "@/components/PageHero";
import { Clock, Tag } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog over Zonnepanelen 2026 | Zonnepanelenkenner.nl",
  description:
    "Lees het laatste nieuws en tips over zonnepanelen. Van salderingsregeling tot subsidies, batterijopslag en installatie.",
  keywords: "blog, artikel, zonnepanelen, nieuws, tips, gids",
};

const categories = [...new Set(blogPosts.map((post) => post.category))];

export default function BlogPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <PageHero
        title="Blog"
        subtitle="Actueel nieuws en tips over zonnepanelen"
        badge="5+ artikelen"
        showBreadcrumbs={true}
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Laatste Artikelen
            </h2>
            <p className="text-lg text-stone-600">
              Lees onze nieuwste artikelen over zonnepanelen, subsidies,
              installatie en meer.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-3">
            <button className="px-6 py-2 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition">
              Alles
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-stone-200 text-stone-900 font-medium hover:bg-stone-300 transition"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-amber-500 hover:shadow-lg transition"
              >
                {/* Placeholder Image */}
                <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-300 group-hover:from-amber-300 group-hover:to-orange-400 transition flex items-center justify-center">
                  <span className="text-stone-900/30 text-sm font-semibold">
                    Blog Afbeelding
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <Tag className="w-4 h-4 text-amber-600 mb-3" />

                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition">
                    {post.title}
                  </h3>

                  <p className="text-stone-600 mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-stone-500 pt-4 border-t border-stone-200">
                    <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readingTime} min</span>
                    </div>
                    <span className="text-xs">
                      {new Date(post.date).toLocaleDateString("nl-NL", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-16 text-center">
            <button className="px-8 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition">
              Meer artikelen laden
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Blijf op de hoogte
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            Ontvang tips en het nieuwste nieuws over zonnepanelen in je inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="je@voorbeeld.nl"
              className="flex-1 px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition">
              Inschrijven
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
