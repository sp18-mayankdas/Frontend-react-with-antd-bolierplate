import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import SortIconSVG from '@/assets/sort.svg?react';

type AntdOrder = 'ascend' | 'descend' | undefined;

interface SortIconProps {
  order: AntdOrder;
  columnKey: string;
  onSortClick: (columnKey: string, currentOrder: AntdOrder) => void;
}

export default function SortIcon({ order, columnKey, onSortClick }: SortIconProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent header click

    // Toggle sort order: null -> ascend -> descend -> null
    let nextOrder: AntdOrder;
    if (order === undefined || order === null) {
      nextOrder = 'ascend';
    } else if (order === 'ascend') {
      nextOrder = 'descend';
    } else {
      nextOrder = undefined;
    }

    onSortClick(columnKey, nextOrder);
  };

  // Determine tooltip text based on current sort state
  const getTooltipTitle = () => {
    if (order === undefined || order === null) {
      return 'Click to sort ascending';
    }
    if (order === 'ascend') {
      return 'Click to sort descending';
    }
    return 'Click to cancel sorting';
  };

  return (
    <Tooltip title={getTooltipTitle()}>
      <span
        className="inline-flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={handleClick}
      >
        <SortIconSVG className={`w-4 h-4`} style={{ fill: 'black' }} />
        {order === 'ascend' && <ArrowUpOutlined className="text-xs" />}
        {order === 'descend' && <ArrowDownOutlined className="text-xs" />}
      </span>
    </Tooltip>
  );
}
