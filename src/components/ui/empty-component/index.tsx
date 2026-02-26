import { cn } from '@/utils/cn';
import { InfoItem } from '../info-item';

interface EmptyComponentProps {
  title: string;
  description?: string;
  className?: string;
  headingClassName?: string;
  valueClassName?: string;
}

export const EmptyComponent = ({
  title,
  description,
  className = '',
  headingClassName = '',
  valueClassName = '',
}: EmptyComponentProps) => {
  return (
    <div className={`text-center py-8 ${className}`}>
      <InfoItem
        heading={title}
        headingClassName={cn(
          'text-[var(--color-black-40)] text-sm font-medium mb-1',
          headingClassName
        )}
      />
      {description && (
        <InfoItem
          value={description}
          valueClassName={cn('text-[var(--color-black-90)] text-xs font-normal', valueClassName)}
        />
      )}
    </div>
  );
};
