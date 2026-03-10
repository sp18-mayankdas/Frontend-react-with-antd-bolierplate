import { Empty as AntEmpty, type EmptyProps as AntEmptyProps } from 'antd';

import { InfoItem } from '../info-item';
import { cn } from '@/utils';
import type { ReactNode } from 'react';

export interface EmptyProps extends Omit<AntEmptyProps, 'description'> {
  title: string;
  description?: string;
  icon?: ReactNode;
  /** Extra content below description e.g. a CTA button */
  action?: ReactNode;

  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const EmptyComponent = ({
  title,
  description,
  icon,
  action,
  className,
  titleClassName,
  descriptionClassName,
  image = AntEmpty.PRESENTED_IMAGE_SIMPLE,
  ...rest
}: EmptyProps) => (
  <AntEmpty
    image={icon ?? image}
    className={cn('py-8', className)}
    description={
      <div className="flex flex-col items-center gap-1">
        <InfoItem
          heading={title}
          headingClassName={cn(
            'text-[var(--color-black-40)] text-sm font-medium mb-1',
            titleClassName
          )}
        />
        {description && (
          <InfoItem
            value={description}
            valueClassName={cn(
              'text-[var(--color-black-90)] text-xs font-normal',
              descriptionClassName
            )}
          />
        )}
      </div>
    }
    {...rest}
  >
    {action}
  </AntEmpty>
);
