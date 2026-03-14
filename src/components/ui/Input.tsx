import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva('input font-normal', {
  variants: {
    variant: {
      default: '',
      ghost: 'input-ghost',
    },
    size: {
      xs: 'input-xs',
      sm: 'input-sm',
      md: 'input-md',
      lg: 'input-lg',
      xl: 'input-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  legend?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, label, legend, ...props }, ref) => {
    return (
      <fieldset className="flex flex-col w-full">
        {legend && <legend className="fieldset-legend">{legend}</legend>}
        <input
          ref={ref}
          type="text"
          className={cn(inputVariants({ variant, size }), className)}
          {...props}
        />
        {label && <p className="text-sm text-error mt-1">{label}</p>}
      </fieldset>
    );
  },
);

export default Input;
