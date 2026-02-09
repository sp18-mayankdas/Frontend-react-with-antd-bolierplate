import React from 'react';
import type { FilterConfigItem } from '../../types';
import { Switch } from '@/components/ui';

type Props = {
  config: FilterConfigItem;
  value: any;
  onChange: (next: any) => void;
};

export const SwitchFilter: React.FC<Props> = ({ config, value, onChange }) => {
  const props = { ...(config.componentProps ?? {}) } as any;
  const handleChange = props.onChange ?? ((v: boolean) => onChange(v));
  return (
    <div className="flex items-center gap-2">
      <Switch checked={Boolean(value)} onChange={handleChange} {...props} />
      {config.label ? (
        <span className="text-(--color-black-50) text-sm font-medium">{config.label}</span>
      ) : null}
    </div>
  );
};
