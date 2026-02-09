import React from 'react';
import type { FilterConfigItem, Option } from '../../types';
import { Select } from '@/components/ui';

type Props = {
  config: FilterConfigItem;
  value: any;
  options: Option[] | undefined;
  onChange: (next: any) => void;
};

export const SelectFilter: React.FC<Props> = ({ config, value, options, onChange }) => {
  const common = { style: { minWidth: 200 }, ...(config.componentProps ?? {}) } as any;
  return (
    <Select
      {...common}
      mode={config.type === 'multiSelect' ? 'multiple' : undefined}
      allowClear
      showSearch
      filterOption={(input, option) =>
        (option?.label ?? '').toString().toLowerCase().includes(input.toLowerCase())
      }
      placeholder={config.placeholder}
      options={options ?? config.options ?? []}
      value={value}
      onChange={(v) => onChange(v)}
      popupMatchSelectWidth={false}
    />
  );
};
