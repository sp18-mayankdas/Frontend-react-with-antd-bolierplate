import { DatePicker as AntDatePicker } from 'antd';
import React from 'react';
import type { FilterConfigItem } from '../../types';

type Props = {
  config: FilterConfigItem;
  value: any;
  onChange: (next: any) => void;
};

export const DateFilter: React.FC<Props> = ({ config, value, onChange }) => {
  const common = { style: { minWidth: 240 }, ...(config.componentProps ?? {}) } as any;
  if (config.type === 'dateRange') {
    return <AntDatePicker.RangePicker {...common} value={value} onChange={(v) => onChange(v)} />;
  }
  return <AntDatePicker {...common} value={value} onChange={(v) => onChange(v)} />;
};
