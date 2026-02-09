import { Table as AntdTable, type PaginationProps } from 'antd';
import { type AnyObject } from 'antd/es/_util/type';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useEffect, useRef, useState } from 'react';
import SortIcon from './sort-icon';

export interface IPagination extends PaginationProps {
  current: number;
  pageSize: number;
  total: number;
}

interface ITableProps {
  rows: any[];
  columns: ColumnsType<any>;
  pagination?: IPagination | boolean;
  rowKey: string | ((record: any) => string | number);
  showSearch?: boolean;
  onRow?: (
    record: any,
    index: number
  ) => {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onDoubleClick?: (event: React.MouseEvent<HTMLElement>) => void;
  };
  searchText?: string;
  loading?: boolean;
  bordered?: boolean;
  rightContent?: React.ReactNode;
  rowSelection?: any;
  rowClassName?: string | ((record: any, index: number, indent: number) => string);
  className?: string;
  locale?: { emptyText?: string | React.ReactNode | (() => React.ReactNode) };
  scroll?: { x?: number | string; y?: number };
  onChange?: TableProps<any>['onChange'];
  title?: TableProps<any>['title'];
  style?: React.CSSProperties;
  footer?: TableProps<any>['footer'];
  darkHeader?: boolean;
  summary?: ((data: readonly AnyObject[]) => React.ReactNode) | undefined;
  summaryList?: { dataIndex?: number; value?: string | React.ReactNode; key: string }[];
  sortableKeys?: Array<string>;
  orderBy?: string | null;
  order?: 'asc' | 'desc' | null;
  onSortChange?: (s: { orderBy: string | null; order: 'asc' | 'desc' | null }) => void;
}

export const Table = ({
  rows,
  columns,
  bordered,
  pagination,
  rowKey,
  rowSelection,
  rowClassName,
  onRow,
  loading,
  onChange,
  footer,
  title,
  scroll,
  sortableKeys,
  orderBy,
  order,
  onSortChange,
}: ITableProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [yProp, setYProp] = useState<number | undefined>(undefined);

  const measureY = () => {
    const el = wrapperRef.current;
    if (!el) return;

    const headerEl =
      el.querySelector('[class*="-table-header"]') || el.querySelector('.ant-table-header');
    const bodyEl =
      el.querySelector('[class*="-table-body"]') || el.querySelector('.ant-table-body');
    const bodyTable = bodyEl?.querySelector('table') || el.querySelector('.ant-table-tbody');

    const containerH = el.clientHeight || el.getBoundingClientRect().height;
    const headerH = (headerEl as HTMLElement)?.clientHeight ?? 0;

    let contentH = 0;
    if (bodyTable as HTMLElement) {
      contentH =
        (bodyTable as HTMLElement).scrollHeight || (bodyTable as HTMLElement).clientHeight || 0;
    }

    if (contentH === 0 && bodyEl) {
      contentH = (bodyEl as HTMLElement).scrollHeight || (bodyEl as HTMLElement).clientHeight || 0;
    }

    // Only set scroll if container has height and content exceeds it
    if (containerH > 0) {
      const available = containerH - headerH;
      if (contentH > 0 && contentH > available) {
        setYProp(Math.max(available, 200)); // Minimum 200px
      } else {
        setYProp(undefined);
      }
    }
  };

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return undefined;

    let timeoutId: NodeJS.Timeout;
    const debouncedMeasure = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(measureY, 100);
    };

    // ResizeObserver for container size changes
    const resizeObserver = new ResizeObserver(debouncedMeasure);
    resizeObserver.observe(el);

    // Initial measurement
    setTimeout(measureY, 200);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  // Re-measure when data changes
  useEffect(() => {
    const timeoutId = setTimeout(measureY, 200);
    return () => clearTimeout(timeoutId);
  }, [rows.length, columns.length, loading]);

  const getWidth = (width: any) =>
    typeof width === 'string' ? Number(width.replace('px', '')) : (width ?? 0);

  const width = wrapperRef.current?.clientWidth ?? 0;
  const accumulatedWidth = (columns.reduce((acc, col) => {
    return { width: getWidth(acc.width) + getWidth(col.width) };
  })?.width ?? 0) as number;

  // x only when columns overflow
  const SCROLLBAR_WIDTH = 15; // assumed scrollbar width
  const borderOffset = bordered ? columns.length - 1 : 0;
  const xBase = accumulatedWidth > width ? accumulatedWidth - borderOffset : undefined;

  // If y exists, subtract scrollbar width from x to avoid tiny horizontal overflow
  const tableScrollX = yProp && xBase ? Math.max(xBase - SCROLLBAR_WIDTH, 0) : xBase;

  // Prefer provided scroll; else use computed overflow-based scroll
  const scrollCfg =
    scroll ||
    (tableScrollX !== undefined || yProp !== undefined ? { x: tableScrollX, y: yProp } : undefined);

  const tableExtraProps: any = {};

  if (pagination || pagination === false) {
    tableExtraProps.pagination = typeof pagination === 'boolean' ? pagination : { ...pagination };
    tableExtraProps.onChange = onChange;
  }

  // Handler for sort icon clicks
  const handleSortIconClick = (columnKey: string, nextOrder: 'ascend' | 'descend' | undefined) => {
    if (onSortChange) {
      const sortOrder = nextOrder === 'ascend' ? 'asc' : nextOrder === 'descend' ? 'desc' : null;
      onSortChange({ orderBy: nextOrder ? columnKey : null, order: sortOrder });
    }
  };

  const finalColumns = columns.map((col) => {
    const colKey = (col as any)?.key as string;
    const dataIndex = (col as any)?.dataIndex;
    const key =
      colKey || (dataIndex ? (typeof dataIndex === 'string' ? dataIndex : String(dataIndex)) : '');
    const isSortable = sortableKeys?.includes(key);
    const isActive = orderBy && orderBy === key;
    const antdSortOrder = isActive
      ? order === 'asc'
        ? 'ascend'
        : order === 'desc'
          ? 'descend'
          : null
      : null;

    // Wrap title with sort icon for sortable columns
    let finalTitle: any = col.title;
    if (isSortable && col.title) {
      // If title is a function, we need to handle it differently
      if (typeof col.title === 'function') {
        // For function titles, wrap the result
        const originalTitleFn = col.title;
        finalTitle = (props: any) => {
          const titleContent = originalTitleFn(props);
          return (
            <div className="flex items-center gap-2">
              {titleContent}
              <SortIcon
                order={antdSortOrder ?? undefined}
                columnKey={key}
                onSortClick={handleSortIconClick}
              />
            </div>
          );
        };
      } else {
        // For ReactNode titles, wrap directly
        finalTitle = (
          <div className="flex items-center gap-2">
            {typeof col.title === 'string' ? <span>{col.title}</span> : col.title}
            <SortIcon
              order={antdSortOrder ?? undefined}
              columnKey={key}
              onSortClick={handleSortIconClick}
            />
          </div>
        );
      }
    }

    return {
      ...col,
      title: finalTitle,
      // Ensure columnKey is set for AntD to identify the column
      key: colKey || key,
      // Disable default header click sorting by setting sorter to false
      sorter: isSortable ? false : (col as any).sorter,
      sortOrder: antdSortOrder ?? (col as any).sortOrder,
      sortIcon: () => null, // Hide Ant Design's default sort icon since we're including it in the title
      // Disable header click pointer cursor
      onHeaderCell: isSortable
        ? () => ({
            style: { cursor: 'default' },
          })
        : undefined,
    } as any;
  });

  return (
    <div ref={wrapperRef} className="max-h-full h-full min-w-0 overflow-hidden flex flex-col">
      <AntdTable
        loading={loading}
        dataSource={rows}
        columns={finalColumns}
        rowKey={rowKey}
        rowSelection={rowSelection}
        sticky={Boolean(scrollCfg)}
        scroll={scrollCfg}
        onRow={onRow}
        bordered={bordered}
        rowClassName={rowClassName}
        title={title}
        className="flex-1 min-h-0"
        footer={footer}
        {...tableExtraProps}
        onChange={(paginationCfg, filters, sorter, extra) => {
          tableExtraProps.onChange?.(paginationCfg, filters, sorter, extra);

          if (onSortChange) {
            const s = Array.isArray(sorter) ? sorter[0] : sorter;
            if (!s) {
              onSortChange({ orderBy: null, order: null });
              return;
            }
            // AntD provides columnKey or field - prefer columnKey as it matches our column key
            const key = (s?.columnKey as string) || (s?.field as string) || null;
            const sortOrder =
              s?.order === 'ascend' ? 'asc' : s?.order === 'descend' ? 'desc' : null;
            onSortChange({ orderBy: key, order: sortOrder });
          }
        }}
      />
    </div>
  );
};
