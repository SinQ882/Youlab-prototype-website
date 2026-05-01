import { CheckCircle } from 'lucide-react';
import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

function RoleTags({ roles, accentColor }) {
  if (!roles || roles.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-2 mb-10 -mt-6">
      <span className="text-muted-foreground text-[13px] font-medium mr-1">Vaak gebruikt door:</span>
      {roles.map((role, i) => (
        <span
          key={i}
          className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold border"
          style={{
            background: `${accentColor}0d`,
            borderColor: `${accentColor}28`,
            color: accentColor,
          }}
        >
          {role}&nbsp;<ExampleBadge />
        </span>
      ))}
    </div>
  );
}

export default function UseCaseRecognition({ data, accentColor }) {
  const { heading, forRoles, points } = data.recognition;
  return (
    <section className="bg-muted/40 py-20 border-y border-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Herkenbaar?"
          title={<>{heading}&nbsp;<ExampleBadge /></>}
        />
        <RoleTags roles={forRoles} accentColor={accentColor} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {points.map((point, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-7 flex flex-col gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${accentColor}14` }}
              >
                <CheckCircle size={20} style={{ color: accentColor }} />
              </div>
              <div>
                <h3 className="font-bold text-[16px] mb-2 text-foreground leading-snug">
                  {point.title}&nbsp;<ExampleBadge />
                </h3>
                <p className="text-muted-foreground text-[14px] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
