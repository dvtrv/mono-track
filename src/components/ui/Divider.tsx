import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const dividerVariants = cva('divider', {
  variants: {
    variant: {
      default: 'divider-vertical',
      horizontal: 'divider-horizontal',
    },
    position: {
      start: 'divider-start',
      end: 'divider-end',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface DividerProps
  extends
    React.ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof dividerVariants> {}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, children, variant, position, ...props }, ref) => {
    return (
      <div
        className={cn(dividerVariants({ variant, position }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export default Divider;
