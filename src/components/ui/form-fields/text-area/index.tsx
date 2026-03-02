import { Input as AntInput } from 'antd';
import React from 'react';
import { cn } from '@/utils';

const { TextArea: AntTextArea } = AntInput;

export type TextAreaProps = React.ComponentProps<typeof AntTextArea>;

export const TextArea: React.FC<TextAreaProps> = ({ className = '', ...rest }) => {
  return <AntTextArea {...rest} className={cn(className)} />;
};
