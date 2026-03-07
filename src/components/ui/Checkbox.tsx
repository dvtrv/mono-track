import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const checkboxVariants = cva('checkbox', {
  variants: {
    variant: {
      default: '',
    },
    size: {
      xs: 'checkbox-xs',
      sm: 'checkbox-sm',
      md: 'checkbox-md',
      lg: 'checkbox-lg',
      xl: 'checkbox-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

interface CheckboxProps
  extends
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        className={cn(checkboxVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Checkbox.displayName = 'Checkbox';
export default Checkbox;
