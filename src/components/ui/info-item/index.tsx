import { cn } from '@/utils';
import type { ReactNode } from 'react';

type Layout = 'vertical' | 'inline';

export interface InfoItemProps {
  heading?: ReactNode;
  value?: ReactNode;
  extra?: ReactNode;
  layout?: Layout;
  className?: string;
  headingClassName?: string;
  valueClassName?: string;
  extraClassName?: string;
  children?: ReactNode;
}

/**
 * A generic label/value display primitive.
 */
export const InfoItem = ({
  heading,
  value,
  extra,
  layout = 'vertical',
  className,
  headingClassName,
  valueClassName,
  extraClassName,
  children,
}: InfoItemProps) => (
  <div
    className={cn(
      'min-w-0',
      layout === 'inline' ? 'flex items-start justify-between gap-2' : 'flex flex-col',
      className
    )}
  >
    {heading !== undefined && (
      <p className={cn('font-medium text-sm text-gray-900', headingClassName)}>{heading}</p>
    )}

    {value !== undefined && <p className={cn('text-sm text-gray-500', valueClassName)}>{value}</p>}

    {extra !== undefined && <p className={cn('text-xs text-gray-400', extraClassName)}>{extra}</p>}

    {children}
  </div>
);
