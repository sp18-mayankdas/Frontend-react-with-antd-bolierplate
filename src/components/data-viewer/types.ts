export type FilterType =
  | 'text'
  | 'select'
  | 'multiSelect'
  | 'dateRange'
  | 'numberRange'
  | 'switch'
  | 'segmented';

export type Option = { label: string; value: string | number };

import type { InputProps, SegmentedProps, SelectProps, SwitchProps } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { ColumnsType, TableProps } from 'antd/es/table';

// Per-filter strongly-typed component props (omit controlled fields)
type Controlled = 'value' | 'onChange';
type VisibleFn = (values: Record<string, any>) => boolean;

type BaseCommon<T extends FilterType> = {
  key: string;
  type: T;
  label?: string;
  placeholder?: string;
  options?: Option[];
  visible?: VisibleFn;
};

// Text -> SearchBar props surface
type TextComponentProps = { className?: string; delay?: number };
export type TextFilterConfig = BaseCommon<'text'> & {
  componentProps?: Omit<TextComponentProps, Controlled>;
};

export type SelectFilterConfig = BaseCommon<'select' | 'multiSelect'> & {
  componentProps?: Omit<SelectProps<any>, Controlled | 'mode' | 'options' | 'placeholder'>;
};

export type DateRangeFilterConfig = BaseCommon<'dateRange'> & {
  componentProps?: Omit<RangePickerProps, Controlled | 'value'>;
};

export type NumberRangeFilterConfig = BaseCommon<'numberRange'> & {
  componentProps?: Omit<InputProps, Controlled | 'placeholder'>;
};

export type SwitchFilterConfig = BaseCommon<'switch'> & {
  componentProps?: Omit<SwitchProps, 'checked'> & { onChange?: SwitchProps['onChange'] };
};

export type SegmentedFilterConfig = BaseCommon<'segmented'> & {
  componentProps?: Omit<SegmentedProps, Controlled | 'options' | 'value'>;
};

export type FilterConfigItem =
  | TextFilterConfig
  | SelectFilterConfig
  | DateRangeFilterConfig
  | NumberRangeFilterConfig
  | SwitchFilterConfig
  | SegmentedFilterConfig;

export type FilterGroupConfig = {
  leftContent?: FilterConfigItem[];
  rightContent?: FilterConfigItem[];
  rightExtra?: React.ReactNode; // node to render on the far right
};

export type PaginationConfig = {
  current: number;
  pageSize: number;
  total?: number;
  pageSizeOptions?: number[];
  onChange: (page: number, pageSize: number) => void;
};

export type ViewCtx<T> = {
  items: T[];
  loading?: boolean;
  rowKey: (item: T) => React.Key;
  empty?: React.ReactNode;
};

export type ViewChildren<T> = (ctx: ViewCtx<T>) => React.ReactNode;

export type ViewMode = 'table' | 'grid';

// Table + DataViewer props
export type TableConfig<T> = {
  columns: ColumnsType<T>;
  rowKey: string | ((row: T) => string | number);
  onRow?: TableProps<T>['onRow'];
  tableProps?: Omit<
    TableProps<T>,
    'dataSource' | 'columns' | 'rowKey' | 'loading' | 'pagination' | 'fixed' | 'onRow'
  >;
};

export type DataViewerProps<T> = {
  className?: string;
  // base
  data: T[];
  loading?: boolean;
  empty?: React.ReactNode;

  // table
  tableConfig: TableConfig<T>;

  // shell
  filtersGroup?: FilterGroupConfig;
  filterValues?: Record<string, any>;
  onFiltersChange?: (values: Record<string, any>) => void;
  pagination?: PaginationConfig;

  // sorting
  sortableKeys?: Array<string>;

  // view switch
  viewModeKey?: string;
  viewMode?: ViewMode;
  renderContent?: ViewChildren<T>;
};
