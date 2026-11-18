import { forwardRef } from 'react';

import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

type LumaTextareaProps = Omit<React.ComponentProps<typeof Textarea>, 'size'> & {
  label?: string;
  description?: string;
  error?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  textareaClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
};

export const LumaTextarea = forwardRef<HTMLTextAreaElement, LumaTextareaProps>(
  (
    {
      id,
      label,
      description,
      error,
      className,
      wrapperClassName,
      labelClassName,
      textareaClassName,
      descriptionClassName,
      errorClassName,
      disabled,
      ...props
    },
    ref,
  ) => {
    const textareaId = id ?? props.name;

    return (
      <div className={cn('flex w-full flex-col gap-2', wrapperClassName)}>
        {label && (
          <label
            htmlFor={textareaId}
            className={cn('text-sm font-medium text-foreground', labelClassName)}
          >
            {label}
          </label>
        )}

        <Textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${textareaId}-error` : description ? `${textareaId}-description` : undefined
          }
          className={cn(
            'min-h-32 resize-y rounded-lg border-border bg-white text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-brand-blue/30',
            error && 'border-destructive focus-visible:ring-destructive/20',
            disabled && 'cursor-not-allowed opacity-60',
            className,
            textareaClassName,
          )}
          {...props}
        />

        {error ? (
          <p
            id={`${textareaId}-error`}
            className={cn('text-sm text-destructive', errorClassName)}
            role="alert"
          >
            {error}
          </p>
        ) : description ? (
          <p
            id={`${textareaId}-description`}
            className={cn('text-sm text-muted-foreground', descriptionClassName)}
          >
            {description}
          </p>
        ) : null}
      </div>
    );
  },
);

LumaTextarea.displayName = 'LumaTextarea';
