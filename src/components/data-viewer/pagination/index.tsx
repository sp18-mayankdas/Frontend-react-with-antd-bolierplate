import React from 'react';
import type { PaginationConfig } from '../types';
import { CustomPagination } from '@/components/ui';

export const PaginationBar: React.FC<{ cfg: PaginationConfig }> = ({ cfg }) => {
  return (
    <CustomPagination
      config={{
        current: cfg.current,
        total: cfg.total ?? 0,
        pageSize: cfg.pageSize,
      }}
      onChange={cfg.onChange}
      onShowSizeChange={(current, size) => cfg.onChange(current, size)}
    />
  );
};
