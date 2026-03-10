import { cn } from '@/utils';
import { Input as AntInput, type InputProps as AntInputProps } from 'antd';
import type { PasswordProps } from 'antd/es/input';
import type { TextAreaProps as AntTextAreaProps } from 'antd/es/input/TextArea';

// ─── Input ────────────────────────────────────────────────────────────────────

export type { AntInputProps as InputProps };

export const Input = ({ className, size = 'large', ...rest }: AntInputProps) => (
  <AntInput className={cn('w-full', className)} size={size} {...rest} />
);

// ─── Password Input ─────────────────────────────────────────────────────────────────

const InputPassword = ({ className, size = 'large', ...rest }: PasswordProps) => (
  <AntInput.Password className={cn('w-full', className)} size={size} {...rest} />
);

// ─── TextArea ─────────────────────────────────────────────────────────────────

export interface TextAreaProps extends AntTextAreaProps {
  /** Consistent resize control — defaults to vertical only */
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

const TextArea = ({ className, resize = 'vertical', style, ...rest }: TextAreaProps) => (
  <AntInput.TextArea className={cn('w-full', className)} style={{ resize, ...style }} {...rest} />
);

Input.Password = InputPassword;
Input.TextArea = TextArea;
