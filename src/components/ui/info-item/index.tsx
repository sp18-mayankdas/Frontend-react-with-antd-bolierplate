import { cn } from '@/utils';
import React from 'react';

type InfoItemProps = {
  heading?: React.ReactNode;
  value?: React.ReactNode;
  layout?: 'vertical' | 'inline';
  extra?: React.ReactNode;

  className?: string;
  headingClassName?: string;
  valueClassName?: string;
  extraClassName?: string;

  children?: React.ReactNode;
};

export const InfoItem = (props: InfoItemProps) => {
  const {
    heading,
    value,
    layout = 'vertical',
    extra,
    className,
    headingClassName,
    valueClassName,
    extraClassName,
    children,
  } = props;
  return (
    <div
      className={cn(
        layout === 'inline' ? 'flex items-start justify-between gap-2' : 'flex flex-col ',
        'min-w-0',
        className
      )}
    >
      {heading && (
        <p className={cn('font-medium  font-poppins text-xl mb-4', headingClassName)}>{heading}</p>
      )}

      {value && (
        <p className={cn('font-normal text-[#6E7079] max-w-full', valueClassName)}>{value}</p>
      )}

      {extra && <p className={cn(' font-normal text-xs md:text-sm ', extraClassName)}>{extra}</p>}

      {children}
    </div>
  );
};
