import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

function FaqItem({ question, answer, accentColor }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 bg-transparent border-0 cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-semibold text-[15px] text-foreground leading-snug pr-2">
          {question}&nbsp;<ExampleBadge />
        </span>
        <ChevronDown
          size={18}
          className="shrink-0 transition-transform duration-200"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            color: open ? accentColor : 'var(--muted-foreground)',
          }}
        />
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-muted-foreground text-[14px] leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function UseCaseFaq({ data, accentColor }) {
  return (
    <section className="bg-muted/30 py-20 border-y border-border">
      <div className="max-w-[720px] mx-auto px-6">
        <SectionHeading
          eyebrow="Veelgestelde vragen"
          title={<>Wat anderen willen weten&nbsp;<ExampleBadge /></>}
        />
        <div className="rounded-2xl border border-border bg-card px-6">
          {data.faq.map((item, i) => (
            <FaqItem
              key={i}
              question={item.question}
              answer={item.answer}
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
