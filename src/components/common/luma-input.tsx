import type { ReactNode } from 'react';
import { forwardRef } from 'react';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type LumaInputProps = Omit<React.ComponentProps<typeof Input>, 'size'> & {
  label?: string;
  description?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
};

export const LumaInput = forwardRef<HTMLInputElement, LumaInputProps>(
  (
    {
      id,
      label,
      description,
      error,
      leftIcon,
      rightIcon,
      className,
      wrapperClassName,
      labelClassName,
      inputClassName,
      descriptionClassName,
      errorClassName,
      disabled,
      ...props
    },
    ref,
  ) => {
    const inputId = id ?? props.name;

    return (
      <div className={cn('flex w-full flex-col gap-2', wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn('text-sm font-bold text-foreground', labelClassName)}
          >
            {label}
          </label>
        )}

        <div className="relative flex w-full items-center">
          {leftIcon && (
            <span className="pointer-events-none absolute left-3 flex items-center text-muted-foreground">
              {leftIcon}
            </span>
          )}

          <Input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputId}-error` : description ? `${inputId}-description` : undefined
            }
            className={cn(
              'h-12 rounded-lg border-border bg-white text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-brand-blue/30',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              error && 'border-destructive focus-visible:ring-destructive/20',
              disabled && 'cursor-not-allowed opacity-60',
              className,
              inputClassName,
            )}
            {...props}
          />

          {rightIcon && (
            <span className="pointer-events-none absolute right-3 flex items-center text-muted-foreground">
              {rightIcon}
            </span>
          )}
        </div>

        {error ? (
          <p
            id={`${inputId}-error`}
            className={cn('text-sm text-destructive', errorClassName)}
            role="alert"
          >
            {error}
          </p>
        ) : description ? (
          <p
            id={`${inputId}-description`}
            className={cn('text-sm text-muted-foreground', descriptionClassName)}
          >
            {description}
          </p>
        ) : null}
      </div>
    );
  },
);

LumaInput.displayName = 'LumaInput';
