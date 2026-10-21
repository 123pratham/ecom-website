export default function Loading() {
  return (
    <div className="grid min-h-[70vh] place-items-center pt-24">
      <div className="h-px w-24 origin-center bg-accent" style={{ animation: "pulse-line 1.2s ease-in-out infinite" }} />
    </div>
  );
}