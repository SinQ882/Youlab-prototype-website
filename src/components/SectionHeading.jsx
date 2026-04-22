import { cn } from '../lib/utils.js';

export default function SectionHeading({ eyebrow, title, subtitle, center = true, className }) {
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold tracking-[0.2px] mb-4">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-foreground font-extrabold tracking-tight leading-tight mt-1"
          style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-muted-foreground text-lg leading-relaxed mt-3 max-w-[600px]"
          style={center ? { margin: '12px auto 0' } : {}}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
