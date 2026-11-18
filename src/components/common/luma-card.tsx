import { cva, type VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const lumaCardVariants = cva('rounded-xl bg-white text-foreground shadow-none ring-1 ring-border', {
  variants: {
    variant: {
      default: '',
      floating: 'shadow-lg ring-0',
      outline: 'bg-transparent shadow-none ring-1 ring-border',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type LumaCardProps = Omit<React.ComponentProps<typeof Card>, 'size'> &
  VariantProps<typeof lumaCardVariants> & {
    size?: 'default' | 'sm';
    icon?: ReactNode;
    iconClassName?: string;
  };

export function LumaCard({
  variant,
  size = 'default',
  icon,
  iconClassName,
  className,
  children,
  ...props
}: LumaCardProps) {
  return (
    <Card size={size} className={cn(lumaCardVariants({ variant }), className)} {...props}>
      {icon ? (
        <div className="flex items-center gap-3">
          <div className={cn('shrink-0', iconClassName)}>{icon}</div>
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      ) : (
        children
      )}
    </Card>
  );
}
