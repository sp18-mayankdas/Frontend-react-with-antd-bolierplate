import { cn } from '@/utils';
import { Tooltip as AntTooltip, type TooltipProps } from 'antd';
import { useEffect, useRef, useState } from 'react';

export interface EllipsisTooltipProps extends Omit<TooltipProps, 'title'> {
  /** Text to display and show in tooltip when truncated */
  text: string | undefined;
  className?: string;
  /** Custom tooltip title override — defaults to `text` */
  tooltipTitle?: TooltipProps['title'];
}

/**
 * Renders text truncated with ellipsis.
 * Only shows the tooltip when the text is actually overflowing — no unnecessary tooltips.
 */
export const EllipsisTooltip = ({
  text,
  className,
  tooltipTitle,
  placement = 'top',
  ...rest
}: EllipsisTooltipProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const el = ref.current;

    let observer: ResizeObserver | undefined;

    if (el) {
      observer = new ResizeObserver(() => {
        setIsTruncated(el.scrollWidth > el.offsetWidth);
      });
      observer.observe(el);
    }

    return () => {
      observer?.disconnect();
    };
  }, [text]);

  return (
    <AntTooltip
      title={isTruncated ? (tooltipTitle ?? text) : undefined}
      placement={placement}
      {...rest}
    >
      <p ref={ref} className={cn('truncate', className)}>
        {text ?? '—'}
      </p>
    </AntTooltip>
  );
};
