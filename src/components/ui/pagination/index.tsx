import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';
import { Select } from '../form-fields';

interface CustomPaginationProps {
  config: {
    current: number;
    total: number;
    pageSize: number;
  };
  onChange: (page: number, pageSize: number) => void;
  onShowSizeChange: (current: number, size: number) => void;
}

export const CustomPagination: React.FC<CustomPaginationProps> = ({
  config,
  onChange,
  onShowSizeChange,
}) => {
  const { current, total, pageSize } = config;
  const totalPages = Math.ceil(total / pageSize);
  const startItem = (current - 1) * pageSize + 1;
  const endItem = Math.min(current * pageSize, total);

  const handlePageChange = (page: number) => {
    onChange(page, pageSize);
  };

  const handlePageSizeChange = (size: number) => {
    onShowSizeChange(current, size);
  };

  // page options for dropdown
  const pageOptions = Array.from({ length: totalPages }, (_, i) => ({
    label: `${i + 1}`,
    value: i + 1,
  }));

  return (
    <div className="custom-pagination-wrapper border-t border-[#e1e2e9]">
      <div className="pt-3 flex items-center justify-between w-full">
        {/* Left side - Items per page */}
        <div className="flex items-center gap-2">
          <Select
            value={pageSize}
            onChange={handlePageSizeChange}
            type="filled"
            size="middle"
            className="w-16"
            // suffixIcon={<DownOutlined className="text-xs" />}
            options={[
              { label: '10', value: 10 },
              { label: '12', value: 12 },
              { label: '20', value: 20 },
              { label: '50', value: 50 },
              { label: '100', value: 100 },
            ]}
          />
          <span className="text-sm text-gray-600">Items per page</span>
          <div className="text-sm text-gray-600">
            {startItem}-{endItem} of {total} items
          </div>
        </div>

        {/* Right side - Page navigation */}
        <div className="flex items-center gap-2">
          <Select
            type="filled"
            size="middle"
            value={current}
            onChange={handlePageChange}
            className="w-16"
            // suffixIcon={<DownOutlined className="text-xs" />}
            options={pageOptions}
          />
          <span className="text-sm text-gray-600">of {totalPages} pages</span>
          <div className="flex items-center gap-1 ml-2">
            <button
              onClick={() => handlePageChange(current - 1)}
              disabled={current === 1}
              className="w-8 h-8 bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <LeftOutlined className="text-sm" />
            </button>
            <button
              onClick={() => handlePageChange(current + 1)}
              disabled={current === totalPages}
              className="w-8 h-8 bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RightOutlined className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
