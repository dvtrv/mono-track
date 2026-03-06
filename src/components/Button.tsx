import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

interface ButtonProps
  extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {}

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      primary: 'btn-primary',
      secondary: 'btn-primary btn-soft',
      ghost: 'btn-ghost',
      warning: 'btn-warning btn-ghost',
      error: 'btn-error btn-ghost',
    },
    size: {
      sm: 'btn-sm',
      lg: 'btn-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'lg',
  },
});

function Button({
  className,
  variant,
  size,
  onClick,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
