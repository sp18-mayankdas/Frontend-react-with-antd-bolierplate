import { cn } from '@/utils';
import { Select as AntSelect, type SelectProps, Tooltip } from 'antd';
import React from 'react';

interface ISelectProps extends SelectProps {
  type?: string;
}

export const Select: React.FC<ISelectProps & { borderless?: boolean }> = ({
  type = '',
  className = '',
  borderless = false,
  size,
  options,
  ...rest
}) => {
  // Add tooltip to options with long text
  const enhancedOptions = React.useMemo(() => {
    if (!options) return options;
    return options.map((option: any) => {
      const label = option?.label?.toString() || '';
      // If label is longer than 40 characters, add tooltip
      if (label.length > 40) {
        return {
          ...option,
          label: (
            <Tooltip title={label} placement="topLeft" mouseEnterDelay={0.3}>
              <span className="block truncate">{label}</span>
            </Tooltip>
          ),
        };
      }
      return option;
    });
  }, [options]);

  return (
    <AntSelect
      className={cn(
        className,
        {
          '[&>.ant-select-selector]:border-0! [&>.ant-select-selector]:shadow-none! [&_.ant-select-arrow]:text-(--color-black-50)!':
            borderless,
        },
        {
          '[&>.ant-select-selector]:bg-[#5E636614]! [&>.ant-select-selector]:border-0!  [&>.ant-select-selector]:shadow-none!':
            type === 'filled',
        }
      )}
      size={size ?? 'large'}
      options={enhancedOptions}
      popupClassName="select-dropdown-with-tooltips"
      {...rest}
    />
  );
};
