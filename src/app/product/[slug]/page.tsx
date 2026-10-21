import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";
import {
  formatPrice,
  getProduct,
  getRelated,
  products,
} from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return { title: product.name, description: product.description };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelated(product);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <p className="text-xs tracking-[0.18em] uppercase text-muted">
        <Link href="/shop" className="hover:text-foreground">
          Shop
        </Link>{" "}
        / {product.category} / {product.type}
      </p>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#e7dfd2]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="animate-fade-in object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="lg:pt-6">
          {product.isNew && (
            <span className="text-xs tracking-[0.2em] uppercase text-accent">
              New arrival
            </span>
          )}
          <h1 className="mt-2 font-serif text-4xl sm:text-5xl">{product.name}</h1>
          <div className="mt-4 flex items-center gap-3 text-lg">
            {product.originalPrice && (
              <span className="text-muted line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span>{formatPrice(product.price)}</span>
          </div>
          <p className="mt-6 max-w-lg text-sm leading-7 text-muted">
            {product.description}
          </p>
          <p className="mt-4 text-xs tracking-[0.16em] uppercase text-muted">
            {product.fabric}
          </p>
          <div className="mt-8">
            <AddToCart product={product} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-serif text-3xl sm:text-4xl">You may also like</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {related.map((item, index) => (
              <ProductCard key={item.id} product={item} index={index} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
