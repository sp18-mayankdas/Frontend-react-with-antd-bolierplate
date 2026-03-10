import { cn } from '@/utils';
import { Select as AntSelect, type SelectProps as AntSelectProps } from 'antd';
import type { BaseOptionType } from 'antd/es/select';
import { useMemo } from 'react';
import { EllipsisTooltip } from '../../ellipsis-tooltip';
export interface SelectProps extends AntSelectProps {
  tooltipThreshold?: number;
}

function withTooltips<T extends BaseOptionType>(
  options: T[] | undefined,
  threshold: number
): T[] | undefined {
  if (!options || threshold === 0) return options;

  return options.map((option) => {
    const raw = option?.label;
    const label = typeof raw === 'string' || typeof raw === 'number' ? String(raw) : null;

    if (!label || label.length <= threshold) return option;

    return {
      ...option,
      label: (
        <EllipsisTooltip text={label ?? ''} placement="topLeft" mouseEnterDelay={0.3}>
          <span className="block truncate">{label}</span>
        </EllipsisTooltip>
      ),
    };
  });
}

export const Select = ({
  tooltipThreshold = 40,
  className,
  size = 'large',
  options,
  ...rest
}: SelectProps) => {
  const enhancedOptions = useMemo(
    () => withTooltips(options as BaseOptionType[] | undefined, tooltipThreshold),
    [options, tooltipThreshold]
  );

  return (
    <AntSelect
      className={cn('w-full', className)}
      size={size}
      options={enhancedOptions}
      popupClassName="select-dropdown"
      {...rest}
    />
  );
};
