import CalendarIcon from '@/assets/Calendar.svg?react';
import { cn } from '@/utils/cn';
import { DatePicker as AntDatePicker, type DatePickerProps as AntDatePickerProps } from 'antd';
import dayjs from 'dayjs';

interface IDatePickerProps extends Omit<AntDatePickerProps, 'value' | 'onChange'> {
  value?: string | null;
  onChange?: (value: string | null) => void;
  className?: string;
  suffixIcon?: React.ReactNode;
}

export const DatePicker = ({
  value,
  onChange,
  className,
  suffixIcon,
  size,
  ...rest
}: IDatePickerProps) => {
  return (
    <AntDatePicker
      value={value ? dayjs(value) : null}
      onChange={(date) => onChange?.(date?.toString() || null)}
      className={cn(className)}
      size={size ?? 'large'}
      suffixIcon={suffixIcon ?? <CalendarIcon />}
      disabledDate={(current) => {
        return current && current < dayjs().startOf('day');
      }}
      {...rest}
    />
  );
};
