// Re-export shadcn/ui primitives
export { Button, buttonVariants } from './ui/button.jsx';
export { Badge, badgeVariants }   from './ui/badge.jsx';
export { Card, CardHeader, CardContent, CardFooter } from './ui/card.jsx';

import { cn } from '../lib/utils.js';

/** Full-width section with centred max-width container */
export function Section({ children, className, id, style }) {
  return (
    <section
      id={id}
      style={style}
      className={cn('py-20', className)}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

/** Pill-shaped label above section headings */
export function PillBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold tracking-[0.2px]">
      {children}
    </span>
  );
}
