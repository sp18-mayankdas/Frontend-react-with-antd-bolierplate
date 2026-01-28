import { cn } from '@/utils';
import { Form, type FormItemProps as AntFormItemProps } from 'antd';

interface IFormItemProps extends AntFormItemProps {
  size?: 'small' | 'middle' | 'large';
}

export const Item = (props: IFormItemProps) => {
  const { children, size = 'default', className, ...rest } = props;
  const { Item: AntItem } = Form;

  return (
    <AntItem
      className={cn(className, {
        'mb-6': size === 'large',
        'mb-4': size === 'middle',
        'mb-2': size === 'small',
      })}
      {...rest}
    >
      {children}
    </AntItem>
  );
};
