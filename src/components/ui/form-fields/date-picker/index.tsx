import { cn } from '@/utils';
import { DatePicker as AntDatePicker, type DatePickerProps as AntDatePickerProps } from 'antd';
import dayjs from 'dayjs';

export interface DatePickerProps extends Omit<AntDatePickerProps, 'value' | 'onChange'> {
  value?: string | null;
  onChange?: (value: string | null) => void;
  className?: string;
}

export const DatePicker = ({
  value,
  onChange,
  className,
  size = 'large',
  ...rest
}: DatePickerProps) => (
  <AntDatePicker
    value={value ? dayjs(value) : null}
    onChange={(date) => onChange?.(date?.toString() || null)}
    className={cn('w-full', className)}
    size={size}
    {...rest}
  />
);
