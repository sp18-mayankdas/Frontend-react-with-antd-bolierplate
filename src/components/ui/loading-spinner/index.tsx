import { Spin as AntSpin, type SpinProps } from 'antd';
import { cn } from '@/utils';

type SpinnerSize = SpinProps['size'];
export interface LoadingSpinnerProps {
  variant?: 'page' | 'section' | 'inline';
  size?: SpinnerSize;
  tip?: string;
  className?: string;
}

const wrapperStyles: Record<string, string> = {
  page: 'min-h-screen w-full flex items-center justify-center',
  section: 'h-full min-h-[200px] w-full flex items-center justify-center',
  inline: '',
};

export const LoadingSpinner = ({
  variant = 'page',
  size = 'default',
  tip,
  className,
}: LoadingSpinnerProps) => {
  const spinner = <AntSpin size={size} tip={tip} />;

  if (variant === 'inline') return spinner;

  return <div className={cn(wrapperStyles[variant], className)}>{spinner}</div>;
};
