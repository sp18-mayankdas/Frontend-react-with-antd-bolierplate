import { Tag as AntTag, type TagProps as AntTagProps } from 'antd';
import { cn } from '@/utils';

interface TagProps extends AntTagProps {
  className?: string;
}

export const Tag = ({ className = '', ...props }: TagProps) => {
  return (
    <AntTag
      className={cn('text-xs font-medium border-none rounded-2xl py-1.5 px-4', className)}
      {...props}
    />
  );
};
