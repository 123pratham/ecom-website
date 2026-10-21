const phrases = [
  "New season",
  "Italian wool",
  "Linen days",
  "Quiet luxury",
  "Women",
  "Men",
  "Made to last",
  "Velora atelier",
];

export default function Marquee() {
  const row = [...phrases, ...phrases];
  return (
    <div className="overflow-hidden border-y border-[var(--line)] bg-[#efe8dc] py-4">
      <div className="marquee-track animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-serif text-3xl tracking-[0.08em] text-foreground/80 sm:text-4xl"
          >
            {item}
            <span className="ml-10 text-accent">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
