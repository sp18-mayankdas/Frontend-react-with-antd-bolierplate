import { cn } from '@/utils';
import { Tag as AntTag, type TagProps as AntTagProps } from 'antd';

export type TagStatus = 'success' | 'warning' | 'error' | 'info' | 'neutral';

const statusClassMap: Record<TagStatus, string> = {
  success: 'bg-[var(--tag-success-bg)] text-[var(--tag-success-text)]',
  warning: 'bg-[var(--tag-warning-bg)] text-[var(--tag-warning-text)]',
  error: 'bg-[var(--tag-error-bg)]   text-[var(--tag-error-text)]',
  info: 'bg-[var(--tag-info-bg)]    text-[var(--tag-info-text)]',
  neutral: 'bg-[var(--tag-neutral-bg)] text-[var(--tag-neutral-text)]',
};

export interface TagProps extends Omit<AntTagProps, 'color' | 'variant'> {
  status?: TagStatus;
  color?: AntTagProps['color'];
  className?: string;
}

export const Tag = ({ status, color, className, ...rest }: TagProps) => (
  <AntTag
    color={status ? undefined : color}
    className={cn('border-none text-xs font-medium', status && statusClassMap[status], className)}
    {...rest}
  />
);
