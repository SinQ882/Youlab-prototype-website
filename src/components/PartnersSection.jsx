const partners = [
  'Saxion',
  'HAN',
  'Windesheim',
  'Pioneering',
  'Smart.af',
  'TriMotion',
];

export default function PartnersSection() {
  return (
    <section className="bg-background py-14 border-b border-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-center text-[13px] font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          Partners & samenwerkingen
        </p>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          {partners.map((name, i) => (
            <span
              key={i}
              className="text-[15px] font-bold tracking-tight leading-none select-none"
              style={{ color: 'var(--foreground)', opacity: 0.28 }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
