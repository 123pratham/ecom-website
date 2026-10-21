"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, type Category } from "@/data/products";

const filters: { label: string; value: "all" | Category }[] = [
  { label: "All", value: "all" },
  { label: "Women", value: "women" },
  { label: "Men", value: "men" },
];

export default function ShopGrid({
  initialCategory = "all",
}: {
  initialCategory?: "all" | Category;
}) {
  const [category, setCategory] = useState<"all" | Category>(initialCategory);
  const [type, setType] = useState("All");

  useEffect(() => {
    setCategory(initialCategory);
    setType("All");
  }, [initialCategory]);

  const types = useMemo(() => {
    const pool =
      category === "all"
        ? products
        : products.filter((p) => p.category === category);
    return ["All", ...Array.from(new Set(pool.map((p) => p.type)))];
  }, [category]);

  const visible = products.filter((p) => {
    const catOk = category === "all" || p.category === category;
    const typeOk = type === "All" || p.type === type;
    return catOk && typeOk;
  });

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <Link
            key={f.value}
            href={f.value === "all" ? "/shop" : `/shop?category=${f.value}`}
            onClick={() => {
              setCategory(f.value);
              setType("All");
            }}
            className={`rounded-full px-5 py-2 text-sm tracking-[0.14em] uppercase transition-colors ${
              category === f.value
                ? "bg-foreground text-[var(--card)]"
                : "border border-[var(--line)] hover:border-foreground"
            }`}
          >
            {f.label}
          </Link>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`text-xs tracking-[0.16em] uppercase ${
              type === t ? "text-foreground" : "text-muted hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted">{visible.length} pieces</p>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {visible.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
