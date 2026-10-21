import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 pb-24 pt-36 text-center">
      <p className="text-xs tracking-[0.28em] uppercase text-muted">404</p>
      <h1 className="mt-3 font-serif text-5xl">Piece not found</h1>
      <p className="mt-4 text-sm text-muted">
        That look has left the atelier. Browse the current collection instead.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-block bg-foreground px-6 py-3 text-sm tracking-[0.18em] uppercase text-[var(--card)]"
      >
        Shop
      </Link>
    </div>
  );
}
