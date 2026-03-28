"use client";

import { useState, useMemo } from "react";
import { installers } from "@/lib/fallback-data";
import { ArrowUpDown, Star } from "lucide-react";

type SortField = "name" | "price" | "rating";
type SortOrder = "asc" | "desc";

export function InstallateurVergelijker() {
  const [sortField, setSortField] = useState<SortField>("rating");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const sortedInstallers = useMemo(() => {
    const sorted = [...installers];
    sorted.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (sortField) {
        case "name":
          aValue = a.name;
          bValue = b.name;
          break;
        case "price":
          aValue = a.pricePerWp;
          bValue = b.pricePerWp;
          break;
        case "rating":
          aValue = a.rating;
          bValue = b.rating;
          break;
      }

      if (typeof aValue === "string") {
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    });

    return sorted;
  }, [sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("desc");
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-border">
        <table className="w-full">
          <thead className="bg-surface border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort("name")}
                  className="flex items-center gap-2 font-semibold text-text-main hover:text-primary transition"
                >
                  Installateur <ArrowUpDown className="w-4 h-4" />
                </button>
              </th>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort("price")}
                  className="flex items-center gap-2 font-semibold text-text-main hover:text-primary transition"
                >
                  Prijs per Wp <ArrowUpDown className="w-4 h-4" />
                </button>
              </th>
              <th className="px-6 py-4 text-left">Garantie</th>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort("rating")}
                  className="flex items-center gap-2 font-semibold text-text-main hover:text-primary transition"
                >
                  Beoordeling <ArrowUpDown className="w-4 h-4" />
                </button>
              </th>
              <th className="px-6 py-4 text-left">Regio</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sortedInstallers.map((installer) => (
              <tr
                key={installer.id}
                className="hover:bg-surface transition"
              >
                <td className="px-6 py-4 font-semibold text-text-main">
                  {installer.name}
                </td>
                <td className="px-6 py-4 text-text-main">
                  €{installer.pricePerWp.toFixed(2)}/Wp
                </td>
                <td className="px-6 py-4 text-text-muted">
                  {installer.guarantee}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-semibold text-text-main">
                      {installer.rating}
                    </span>
                    <span className="text-sm text-text-muted">
                      ({installer.reviews} beoordelingen)
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-text-muted">
                  {installer.region}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {sortedInstallers.map((installer) => (
          <div
            key={installer.id}
            className="bg-white border border-border rounded-lg p-4 space-y-3"
          >
            <h3 className="font-semibold text-text-main text-lg">
              {installer.name}
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-text-muted">Prijs</span>
                <p className="font-semibold text-primary">
                  €{installer.pricePerWp.toFixed(2)}/Wp
                </p>
              </div>
              <div>
                <span className="text-text-muted">Garantie</span>
                <p className="font-semibold text-text-main">
                  {installer.guarantee}
                </p>
              </div>
              <div>
                <span className="text-text-muted">Beoordeling</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <p className="font-semibold text-text-main">
                    {installer.rating}
                  </p>
                </div>
              </div>
              <div>
                <span className="text-text-muted">Regio</span>
                <p className="font-semibold text-text-main">
                  {installer.region}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
