import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva('input text-base', {
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
  label?: {
    text: string;
    type?: 'warning' | 'error' | 'success';
  };
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, label, legend, ...props }, ref) => {
    const labelClasses = cn(
      'label mt-2',
      label?.type === 'warning' && 'text-sm text-warning mt-1',
      label?.type === 'error' && 'text-sm text-error mt-1',
    );
    return (
      <fieldset className="flex flex-col w-full">
        {legend && <legend className="fieldset-legend">{legend}</legend>}
        <input
          ref={ref}
          type="text"
          className={cn(inputVariants({ variant, size }), className)}
          {...props}
        />
        {label && <p className={labelClasses}>{label.text}</p>}
      </fieldset>
    );
  },
);

export default Input;
