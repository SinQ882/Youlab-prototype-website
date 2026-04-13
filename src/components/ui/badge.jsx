import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default:   'bg-primary text-primary-foreground px-2.5 py-0.5',
        secondary: 'bg-secondary text-secondary-foreground px-2.5 py-0.5',
        outline:   'border border-border text-foreground px-2.5 py-0.5',
        pill:      'border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] tracking-[0.2px]',
        phase:     'px-2.5 py-0.5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({ className, variant, style, ...props }) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      style={style}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
