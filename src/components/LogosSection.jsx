const partners = [
  'Saxion',
  'HAN',
  'Windesheim',
  'Pioneering',
  'Smart.af',
  'TriMotion',
];

export default function LogosSection() {
  return (
    <section className="bg-background py-16 border-b border-border">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Heading */}
        <div className="flex flex-col gap-1 items-center text-center mb-8">
          <p className="text-3xl font-bold text-primary leading-9">
            Vertrouwd door onze partners
          </p>
          <p className="text-base text-muted-foreground leading-6">
            Gebruikt door teams in onderwijs, overheid en bedrijfsleven
          </p>
        </div>

        {/* Logo row */}
        <div className="flex flex-wrap gap-12 items-center justify-center">
          {partners.map((name, i) => (
            <span
              key={i}
              className="text-[15px] font-bold text-foreground/30 tracking-tight leading-none select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
