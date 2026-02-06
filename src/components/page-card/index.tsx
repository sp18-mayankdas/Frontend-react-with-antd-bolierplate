import { cn } from '@/utils';

export const PageCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('bg-white rounded-xl p-6 flex-1 min-h-0 overflow-auto', className)}>
      {children}
    </div>
  );
};
