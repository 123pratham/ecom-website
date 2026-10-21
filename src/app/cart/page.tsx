"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { useState } from "react";

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal, clear, ready } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  if (!ready) {
    return (
      <div className="grid min-h-[70vh] place-items-center pt-24">
        <div className="h-px w-24 bg-accent" />
      </div>
    );
  }

  if (checkedOut) {
    return (
      <div className="mx-auto max-w-xl px-4 pb-24 pt-36 text-center">
        <p className="text-xs tracking-[0.28em] uppercase text-muted">Thank you</p>
        <h1 className="mt-3 font-serif text-5xl">Order placed</h1>
        <p className="mt-4 text-sm leading-7 text-muted">
          This is a dummy checkout — no payment was taken. Your bag has been
          cleared.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-block bg-foreground px-6 py-3 text-sm tracking-[0.18em] uppercase text-[var(--card)]"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <h1 className="font-serif text-5xl">Bag</h1>
      {items.length === 0 ? (
        <div className="mt-10">
          <p className="text-muted">Your bag is empty.</p>
          <Link
            href="/shop"
            className="mt-6 inline-block border border-foreground px-6 py-3 text-sm tracking-[0.18em] uppercase"
          >
            Shop the collection
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {items.map((item) => (
              <li key={item.key} className="flex gap-4 py-6 sm:gap-6">
                <Link
                  href={`/product/${item.slug}`}
                  className="relative h-32 w-24 shrink-0 overflow-hidden bg-[#e7dfd2] sm:h-40 sm:w-28"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link href={`/product/${item.slug}`} className="font-serif text-2xl">
                        {item.name}
                      </Link>
                      <p className="mt-1 text-sm text-muted">
                        {item.color} · Size {item.size}
                      </p>
                    </div>
                    <p className="text-sm">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] px-3 py-1">
                      <button
                        type="button"
                        onClick={() => updateQty(item.key, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-4 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.key, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="text-xs uppercase tracking-[0.14em] text-muted hover:text-accent"
                      onClick={() => removeItem(item.key)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <aside className="h-fit border border-[var(--line)] bg-[var(--card)] p-6">
            <h2 className="font-serif text-3xl">Summary</h2>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Shipping</span>
                <span>{subtotal >= 150 ? "Free" : formatPrice(12)}</span>
              </div>
            </div>
            <div className="mt-6 flex justify-between border-t border-[var(--line)] pt-4 text-base">
              <span>Total</span>
              <span>{formatPrice(subtotal + (subtotal >= 150 ? 0 : 12))}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                clear();
                setCheckedOut(true);
              }}
              className="mt-6 w-full bg-foreground py-3 text-sm tracking-[0.18em] uppercase text-[var(--card)] hover:bg-accent"
            >
              Checkout
            </button>
            <p className="mt-3 text-center text-xs text-muted">
              Dummy checkout — no payment required.
            </p>
          </aside>
        </div>
      )}
    </div>
  );
}
