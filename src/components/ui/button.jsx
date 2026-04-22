import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:     'bg-primary text-primary-foreground shadow-sm hover:opacity-90 active:scale-[0.98]',
        secondary:   'bg-secondary text-secondary-foreground hover:opacity-90',
        outline:     'border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
        ghost:       'hover:bg-accent hover:text-accent-foreground',
        link:        'text-primary underline-offset-4 hover:underline p-0 h-auto',
        destructive: 'bg-destructive text-white shadow-sm hover:opacity-90',
        gradient:    'bg-gradient-to-r from-primary to-[#7B68EE] text-white shadow-[0_4px_14px_rgba(64,87,255,0.35)] hover:shadow-[0_6px_20px_rgba(64,87,255,0.45)] hover:-translate-y-px active:translate-y-0',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm:      'h-8 rounded-md px-3 text-xs',
        lg:      'h-11 rounded-xl px-8 text-base',
        xl:      'h-13 rounded-xl px-10 text-base',
        icon:    'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { Button, buttonVariants };
