export default function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}
