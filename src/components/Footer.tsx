import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#efe8dc]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="font-serif text-4xl tracking-[0.22em]">VELORA</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted">
            Contemporary clothing for men and women. Quiet luxury, considered
            fabrics, and pieces designed to last beyond the season.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.22em] uppercase text-muted">Shop</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link href="/shop?category=women" className="hover:text-accent">
              Women
            </Link>
            <Link href="/shop?category=men" className="hover:text-accent">
              Men
            </Link>
            <Link href="/shop" className="hover:text-accent">
              All pieces
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.22em] uppercase text-muted">Atelier</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <span>Free shipping over $150</span>
            <span>Easy 30-day returns</span>
            <span>hello@velora.studio</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--line)] py-6 text-center text-xs tracking-[0.18em] uppercase text-muted">
        © {new Date().getFullYear()} Velora · Dummy storefront
      </div>
    </footer>
  );
}
