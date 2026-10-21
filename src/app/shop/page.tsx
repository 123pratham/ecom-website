import type { Metadata } from "next";
import ShopGrid from "@/components/ShopGrid";
import type { Category } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop",
};

type Search = Promise<{ category?: string }>;

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Search;
}) {
  const { category } = await searchParams;
  const initial =
    category === "men" || category === "women"
      ? (category as Category)
      : "all";

  const heading =
    initial === "women"
      ? "Women"
      : initial === "men"
        ? "Men"
        : "The collection";

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <p className="animate-fade-up text-xs tracking-[0.28em] uppercase text-muted">
        Shop
      </p>
      <h1 className="animate-fade-up delay-1 mt-2 font-serif text-5xl sm:text-6xl">
        {heading}
      </h1>
      <p className="animate-fade-up delay-2 mt-4 max-w-xl text-sm leading-7 text-muted">
        Dummy menswear and womenswear — coats, knits, shirts, dresses, and
        denim with a boutique feel.
      </p>
      <div className="mt-10">
        <ShopGrid initialCategory={initial} />
      </div>
    </div>
  );
}
