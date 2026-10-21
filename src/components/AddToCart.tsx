"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

export default function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-muted">Color</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.colors.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                color === c
                  ? "border-foreground bg-foreground text-[var(--card)]"
                  : "border-[var(--line)] hover:border-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-muted">Size</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`h-11 w-11 rounded-full border text-sm transition-all ${
                size === s
                  ? "border-foreground bg-foreground text-[var(--card)]"
                  : "border-[var(--line)] hover:border-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-full border border-[var(--line)]">
          <button
            type="button"
            className="px-4 py-3"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <span className="w-6 text-center">{qty}</span>
          <button
            type="button"
            className="px-4 py-3"
            onClick={() => setQty((q) => q + 1)}
          >
            +
          </button>
        </div>
        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            addItem(product, size, color, qty);
            setAdded(true);
            setTimeout(() => setAdded(false), 1600);
          }}
          className="flex-1 bg-foreground py-3 text-sm tracking-[0.2em] uppercase text-[var(--card)] transition-colors hover:bg-accent"
        >
          {added ? "Added to bag" : "Add to bag"}
        </motion.button>
      </div>
    </div>
  );
}
