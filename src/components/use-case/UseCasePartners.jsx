import SectionHeading from '../SectionHeading.jsx';

const ALL_PARTNERS = ['Saxion', 'HAN', 'Windesheim', 'Pioneering', 'Smart.af', 'TriMotion'];

export default function UseCasePartners({ data }) {
  const partners = data.partnerIds.length > 0
    ? ALL_PARTNERS.filter(p => data.partnerIds.includes(p.toLowerCase()))
    : ALL_PARTNERS;

  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Zij werken al met YouLab"
          title="Partners"
        />
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {partners.map(name => (
            <span
              key={name}
              className="text-[15px] font-bold tracking-tight"
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
