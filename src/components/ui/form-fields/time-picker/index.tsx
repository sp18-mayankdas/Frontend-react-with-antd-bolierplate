import { cn } from '@/utils';
import { TimePicker as AntTimePicker, type TimePickerProps as AntTimePickerProps } from 'antd';
import dayjs, { type Dayjs } from 'dayjs';

export interface TimePickerProps extends Omit<AntTimePickerProps, 'value' | 'onChange'> {
  value?: string | null;
  onChange?: (value: string | null) => void;
  /**
   * dayjs format string for both display and the string value emitted via onChange.
   * @default 'HH:mm'
   */
  format?: string;
  className?: string;
}

const toTimeString = (date: Dayjs | null | undefined, format: string): string | null =>
  date?.isValid() ? date.format(format) : null;

const toTimeDayjs = (value: string | null | undefined, format: string): Dayjs | null => {
  if (!value) return null;
  const parsed = dayjs(value, format);
  return parsed.isValid() ? parsed : null;
};

export const TimePicker = ({
  value,
  onChange,
  format = 'HH:mm',
  className,
  size = 'large',
  ...rest
}: TimePickerProps) => (
  <AntTimePicker
    value={toTimeDayjs(value, format)}
    onChange={(time) => onChange?.(toTimeString(time, format))}
    format={format}
    className={cn('w-full', className)}
    size={size}
    {...rest}
  />
);
