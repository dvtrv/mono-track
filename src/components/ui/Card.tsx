import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

interface CardContentProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContentVariants> {}

interface CardProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'style'>,
    VariantProps<typeof cardVariants> {}

const cardVariants = cva('card bg-base-200 p-4 shadow-sm', {
  variants: {
    size: {
      xs: 'card-xs',
      sm: 'card-sm',
      md: 'card-md',
      lg: 'card-lg',
      xl: 'card-xl',
    },
    style: {
      default: '',
      border: 'card-border',
      dashed: 'card-dash',
    },
  },
  defaultVariants: {
    size: 'md',
    style: 'default',
  },
});

const cardContentVariants = cva('card-body');

export const Card = ({
  className,
  size,
  style,
  children,
  ...props
}: CardProps) => {
  return (
    <div className={cn(cardVariants({ size, style }), className)} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({
  className,
  children,
  ...props
}: CardContentProps) => {
  return (
    <div className={cn(cardContentVariants(), className)} {...props}>
      {children}
    </div>
  );
};
