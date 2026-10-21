import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import { getFeatured } from "@/data/products";

export default function Home() {
  const featured = getFeatured();

  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=80"
          alt="Velora campaign"
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1917]/78 via-[#1c1917]/40 to-[#1c1917]/15" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6 lg:px-8">
          <p className="animate-fade-up text-xs tracking-[0.32em] uppercase text-white/80">
            Autumn / Winter 26
          </p>
          <h1 className="animate-fade-up delay-1 mt-4 max-w-2xl font-serif text-5xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            Clothes that stay.
          </h1>
          <p className="animate-fade-up delay-2 mt-5 max-w-md text-sm leading-7 text-white/80 sm:text-base">
            Tailored coats, silk dresses, merino knits — a dummy collection for
            men and women, designed to feel like a real boutique.
          </p>
          <div className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop?category=women"
              className="bg-white px-6 py-3 text-sm tracking-[0.18em] uppercase text-foreground transition-transform hover:-translate-y-0.5"
            >
              Shop women
            </Link>
            <Link
              href="/shop?category=men"
              className="border border-white/70 px-6 py-3 text-sm tracking-[0.18em] uppercase text-white transition-transform hover:-translate-y-0.5"
            >
              Shop men
            </Link>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs tracking-[0.28em] uppercase text-muted">
              Featured
            </p>
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl">The edit</h2>
          </div>
          <Link
            href="/shop"
            className="text-sm tracking-[0.18em] uppercase underline-offset-4 hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          <Link
            href="/shop?category=women"
            className="group relative min-h-[420px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1400&q=80"
              alt="Women collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#1c1917]/25" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="text-xs tracking-[0.3em] uppercase">Collection</p>
              <h3 className="mt-2 font-serif text-5xl">Women</h3>
              <span className="mt-4 border-b border-white/80 pb-1 text-xs tracking-[0.2em] uppercase">
                Explore
              </span>
            </div>
          </Link>
          <Link
            href="/shop?category=men"
            className="group relative min-h-[420px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1400&q=80"
              alt="Men collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#1c1917]/25" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="text-xs tracking-[0.3em] uppercase">Collection</p>
              <h3 className="mt-2 font-serif text-5xl">Men</h3>
              <span className="mt-4 border-b border-white/80 pb-1 text-xs tracking-[0.2em] uppercase">
                Explore
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-[#1c1917] px-4 py-20 text-[var(--card)] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          {[
            {
              title: "Considered fabrics",
              copy: "Silk, merino, linen, and Italian wool — dummy copy, real-feeling materials.",
            },
            {
              title: "Ships in 2 days",
              copy: "Complimentary delivery on orders over $150. Easy 30-day returns.",
            },
            {
              title: "Made to last",
              copy: "Fewer pieces, better cuts. A wardrobe that does not expire with the trend.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="animate-fade-up border-t border-white/15 pt-6"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <h3 className="font-serif text-3xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
