import { cn } from '@/utils';
import { Input as AntInput, type InputProps as AntInputProps } from 'antd';
import { type PasswordProps } from 'antd/es/input';

export const Input = (props: AntInputProps) => {
  const { className, size = 'middle', ...rest } = props;
  return <AntInput className={cn(className)} size={size} {...rest} />;
};

const InputPassword = (props: PasswordProps) => {
  const { className, size = 'middle', ...rest } = props;
  return <AntInput.Password className={cn(className)} size={size} {...rest} />;
};

Input.Password = InputPassword;
