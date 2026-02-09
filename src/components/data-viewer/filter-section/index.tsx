import { Input, Segmented, Space } from 'antd';
import React from 'react';
import type { FilterConfigItem, FilterGroupConfig } from '../types';
import { DateFilter, SelectFilter, SwitchFilter } from './filters';
import { SearchInput } from '@/components/ui';
import { cn } from '@/utils';

type Props = {
  group: FilterGroupConfig;
  values: Record<string, any>;
  onChange: (next: Record<string, any>) => void;
};

export const FilterSection: React.FC<Props> = ({ group, values, onChange }) => {
  const renderItem = (c: FilterConfigItem) => {
    if (c.visible && !c.visible(values)) return null;
    const common = { style: { minWidth: 200 }, ...(c.componentProps ?? {}) } as any;

    switch (c.type) {
      case 'text': {
        const { className, delay } = (c.componentProps ?? {}) as {
          className?: string;
          delay?: number;
        };
        return (
          <SearchInput
            placeholder={c.placeholder ?? 'Search'}
            className={cn('w-lg', className)}
            delay={delay}
            value={values[c.key] ?? ''}
            onChange={(val) => onChange({ ...values, [c.key]: val })}
          />
        );
      }
      case 'select':
      case 'multiSelect':
        return (
          <SelectFilter
            config={c}
            value={values[c.key]}
            options={c.options}
            onChange={(v) => onChange({ ...values, [c.key]: v })}
          />
        );
      case 'dateRange':
        return (
          <DateFilter
            config={c}
            value={values[c.key]}
            onChange={(v) => onChange({ ...values, [c.key]: v })}
          />
        );
      case 'numberRange':
        return (
          <Input
            {...common}
            placeholder={c.placeholder}
            value={values[c.key]}
            onChange={(e) => onChange({ ...values, [c.key]: e.target.value })}
          />
        );
      case 'switch':
        return (
          <SwitchFilter
            config={c}
            value={values[c.key]}
            onChange={(v) => onChange({ ...values, [c.key]: v })}
          />
        );
      case 'segmented':
        return (
          <Segmented
            {...common}
            options={c.options ?? []}
            value={values[c.key]}
            onChange={(v) => onChange({ ...values, [c.key]: v })}
          />
        );
      default:
        return null;
    }
  };

  const left = group.leftContent ?? [];
  const right = group.rightContent ?? [];

  return (
    <div className="flex items-center justify-between gap-3 mb-2">
      <Space wrap size="middle">
        {left.map((c) => (
          <div key={c.key}>{renderItem(c)}</div>
        ))}
      </Space>
      <div className="flex items-center gap-3">
        <Space wrap size="middle">
          {right.map((c) => (
            <div key={c.key}>{renderItem(c)}</div>
          ))}
        </Space>
        {group.rightExtra}
      </div>
    </div>
  );
};
