import React, { useCallback, useEffect, useState } from 'react';
import { FilterSection } from './filter-section';
import { PaginationBar } from './pagination';
import type {
  DataViewerProps,
  FilterGroupConfig,
  PaginationConfig,
  ViewCtx,
  ViewMode,
} from './types';
import { cn } from '@/utils/cn';
import { Table } from '../ui';

export function DataViewer<T>(props: DataViewerProps<T>) {
  const { data, loading, empty, className = '' } = props;
  const rowKeyInput = props.tableConfig.rowKey;
  const getRowKey =
    typeof rowKeyInput === 'function' ? rowKeyInput : (r: any) => r[rowKeyInput] as string | number;
  const hasFilters =
    Boolean((props as any).filtersGroup) &&
    Boolean((props as any).onFiltersChange) &&
    (props as any).filterValues !== undefined;
  const paginationCfg = (props as any).pagination as PaginationConfig | undefined;
  const sortableKeys = (props as any).sortableKeys as Array<string> | undefined;

  const fv = (props as any).filterValues as Record<string, any> | undefined;
  const vmKey = (props as any).viewModeKey as string | undefined;
  const explicitVM = (props as any).viewMode as ViewMode | undefined;
  const resolvedViewMode: ViewMode =
    explicitVM ?? (vmKey && fv ? (fv[vmKey] as ViewMode) : 'table');

  const ctx = { items: data, loading, rowKey: getRowKey, empty } as ViewCtx<T>;

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (_selectedRowKeys: React.Key[], _selectedRows: any[]) => {
      // Handle row selection
    },
  };
  const [selectionType] = useState<'checkbox' | 'radio'>('checkbox');

  // Internal sorting state - initialize from filterValues if present
  const [internalOrderBy, setInternalOrderBy] = useState<string | null>(fv?.orderBy ?? null);
  const [internalOrder, setInternalOrder] = useState<'asc' | 'desc' | null>(fv?.order ?? null);

  // Sync internal sort state with filterValues when it changes externally
  useEffect(() => {
    if (fv?.orderBy !== undefined) {
      setInternalOrderBy(fv.orderBy ?? null);
    }
    if (fv?.order !== undefined) {
      setInternalOrder(fv.order ?? null);
    }
  }, [fv?.orderBy, fv?.order]);

  // Handle sort change - merge into filters and notify parent
  const onFiltersChangeFn = (props as any).onFiltersChange;
  const handleSortChange = useCallback(
    (s: { orderBy: string | null; order: 'asc' | 'desc' | null }) => {
      setInternalOrderBy(s.orderBy);
      setInternalOrder(s.order);
      // Merge sort into current filterValues and notify parent
      const updatedFilters = {
        ...(fv || {}),
        orderBy: s.orderBy,
        order: s.order,
      };
      onFiltersChangeFn?.(updatedFilters);
    },
    [fv, onFiltersChangeFn]
  );

  return (
    <div className={cn('h-full flex flex-col', className)}>
      {/* h-auto flex-grow-1 */}
      {hasFilters && (
        <FilterSection
          group={(props as any).filtersGroup as FilterGroupConfig}
          values={(props as any).filterValues as Record<string, any>}
          onChange={(next) => (props as any).onFiltersChange?.(next)}
        />
      )}

      <div className="flex-1 min-h-0 overflow-hidden">
        {resolvedViewMode !== 'table' && props.renderContent ? (
          props.renderContent(ctx)
        ) : (
          <Table
            rowKey={getRowKey as (record: any) => string | number}
            rows={data}
            columns={props.tableConfig.columns}
            loading={loading}
            pagination={false}
            rowSelection={{ type: selectionType, ...(rowSelection as any), columnWidth: 48 }}
            sortableKeys={sortableKeys}
            orderBy={internalOrderBy}
            order={internalOrder}
            onSortChange={handleSortChange}
            onRow={props.tableConfig.onRow}
          />
        )}
      </div>

      {paginationCfg && <PaginationBar cfg={paginationCfg} />}
    </div>
  );
}
