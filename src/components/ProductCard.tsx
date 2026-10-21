"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { formatPrice, type Product } from "@/data/products";

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
      className="group"
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#e7dfd2]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="product-image object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            {product.isNew && (
              <span className="bg-[var(--card)]/90 px-2 py-1 text-[10px] tracking-[0.16em] uppercase">
                New
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-accent px-2 py-1 text-[10px] tracking-[0.16em] uppercase text-[var(--card)]">
                Sale
              </span>
            )}
          </div>
          <div className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-[#1c1917]/55 to-transparent p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-center text-xs tracking-[0.2em] uppercase text-white">
              View piece
            </p>
          </div>
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase text-muted">
              {product.category} · {product.type}
            </p>
            <h3 className="mt-1 font-serif text-xl leading-tight">{product.name}</h3>
          </div>
          <div className="text-right text-sm">
            {product.originalPrice && (
              <p className="text-muted line-through">
                {formatPrice(product.originalPrice)}
              </p>
            )}
            <p>{formatPrice(product.price)}</p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
