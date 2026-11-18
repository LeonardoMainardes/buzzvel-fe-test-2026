import { cva, type VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const lumaButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-brand-blue text-white',
        secondary: 'bg-brand-lavender text-foreground',
        outline: 'border border-border bg-transparent text-foreground',
        ghost: 'bg-transparent text-foreground',
        link: 'bg-brand-yellow text-foreground',
        white: 'border border-border bg-white text-foreground',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

type LumaButtonProps = Omit<React.ComponentProps<typeof Button>, 'variant' | 'size'> &
  VariantProps<typeof lumaButtonVariants> & {
    label?: string;
    hover?: boolean;
    icon?: ReactNode;
    iconPosition?: 'start' | 'end';
    href?: string;
  };

const hoverVariants = {
  primary: 'hover:bg-brand-blue/90',
  secondary: 'hover:bg-brand-lavender/80',
  outline: 'hover:bg-muted',
  ghost: 'hover:bg-muted',
  link: 'hover:bg-brand-yellow/80',
  white: 'hover:bg-muted',
};

export function LumaButton({
  variant = 'primary',
  size = 'md',
  hover = true,
  label,
  icon,
  iconPosition = 'start',
  className,
  children,
  href,
  ...props
}: LumaButtonProps) {
  const buttonClassName = cn(
    lumaButtonVariants({ variant, size }),
    hover && hoverVariants[variant ?? 'primary'],
    className,
  );

  const content = (
    <>
      {label}
      {icon && iconPosition === 'start' && <span aria-hidden="true">{icon}</span>}
      {children}
      {icon && iconPosition === 'end' && <span aria-hidden="true">{icon}</span>}
    </>
  );

  return (
    <Button
      {...props}
      className={buttonClassName}
      render={href ? <a href={href}>{content}</a> : undefined}
    >
      {content}
    </Button>
  );
}
