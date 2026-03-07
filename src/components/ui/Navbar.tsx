import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const navbarProps = cva('navbar px-4', {
  variants: {
    variant: {
      default: 'bg-base-300',
      neutral: 'bg-neutral text-neutral-content',
      primary: 'bg-primary text-primary-content',
    },
  },
  defaultVariants: {
    variant: 'neutral',
  },
});

interface NavbarProps
  extends
    React.ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof navbarProps> {}

const Navbar = ({ className, variant, children, ...props }: NavbarProps) => {
  return (
    <div className={cn(navbarProps({ variant }), className)} {...props}>
      {children}
    </div>
  );
};

export default Navbar;
