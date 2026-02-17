import { cn } from '@/utils/cn';
import { Tooltip as AntdTooltip, type TooltipProps } from 'antd';
import { useEffect, useRef, useState } from 'react';

type Props = TooltipProps & {
  text: string | undefined;
  ClassName?: string;
};

export const EllipsesTooltip = (props: Props) => {
  const { text, ClassName, ...rest } = props;

  const childRef = useRef<HTMLParagraphElement>(null);
  const [isEllipsisActive, setIsEllipsisActive] = useState(false);

  useEffect(() => {
    if (childRef.current && childRef.current.offsetWidth < childRef.current.scrollWidth) {
      setIsEllipsisActive(true);
    } else {
      setIsEllipsisActive(false);
    }
  });

  return (
    <AntdTooltip
      title={isEllipsisActive ? text : undefined}
      {...rest}
      placement={rest.placement ?? 'top'}
    >
      <p
        style={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}
        ref={childRef}
        className={cn(ClassName)}
      >
        {text ?? '--'}
      </p>
    </AntdTooltip>
  );
};
