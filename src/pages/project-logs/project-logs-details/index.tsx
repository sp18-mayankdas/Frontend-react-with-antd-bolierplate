import { useMemo, useState, useCallback } from 'react';
import { PrinterOutlined } from '@ant-design/icons';

import { Button, DataViewer, PageCard } from '../../../components';
import { PageHeader } from '@/components/page-header';
import { PROJECT_LOGS_MOCK } from '@/query/project-logs';
import { Tag } from 'antd';

type SortOrder = 'asc' | 'desc';

interface BaseFilters {
  q: string;
  status?: string;
  isActive?: boolean;
  bulkAction?: string;
  orderBy?: string | null;
  order?: SortOrder | null;
  view?: string;
}

const ProjectLogsDetails = () => {
  const [filters, setFilters] = useState<BaseFilters>({
    q: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const onFiltersChange = useCallback((next: Record<string, any>) => {
    setFilters(next as BaseFilters);
    setCurrentPage(1);
  }, []);

  const onPageChange = useCallback((page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
  }, []);

  const filteredLogs = useMemo(() => {
    if (!filters.q) return PROJECT_LOGS_MOCK;

    return PROJECT_LOGS_MOCK.filter(
      (log) =>
        log.message.toLowerCase().includes(filters.q.toLowerCase()) ||
        log.service.toLowerCase().includes(filters.q.toLowerCase()) ||
        log.traceId?.toLowerCase().includes(filters.q.toLowerCase())
    );
  }, [filters.q]);

  const columns = useMemo(
    () => [
      {
        title: 'Timestamp',
        dataIndex: 'timestamp',
        key: 'timestamp',
        width: 200,
        render: (value: string) => (
          <span className="text-(--color-black-40)">{new Date(value).toLocaleString()}</span>
        ),
      },
      {
        title: 'Service',
        dataIndex: 'service',
        key: 'service',
        width: 200,
        render: (value: string) => (
          <span className="font-medium text-(--color-black-60)">{value}</span>
        ),
      },
      {
        title: 'Environment',
        dataIndex: 'environment',
        key: 'environment',
        width: 150,
        render: (env: string) => <Tag color={env === 'Production' ? 'red' : 'blue'}>{env}</Tag>,
      },
      {
        title: 'Message',
        dataIndex: 'message',
        key: 'message',
        render: (value: string) => <span className="text-(--color-black-40)">{value}</span>,
      },
      {
        title: 'Trace ID',
        dataIndex: 'traceId',
        key: 'traceId',
        width: 160,
        render: (value?: string) =>
          value ? <span className="font-mono text-xs text-(--color-black-50)">{value}</span> : '-',
      },
    ],
    []
  );

  return (
    <>
      <PageHeader
        heading="Payment Service"
        actions={[
          <Button key="print" type="default" icon={<PrinterOutlined />}>
            Print Logs
          </Button>,
        ]}
      />

      <PageCard>
        <DataViewer
          data={filteredLogs}
          loading={false}
          tableConfig={{
            columns,
            rowKey: 'id',
          }}
          filtersGroup={{
            leftContent: [
              {
                key: 'q',
                type: 'text',
                placeholder: 'Search logs, service, or trace ID',
                componentProps: { className: 'max-w-sm' },
              },
            ],
          }}
          filterValues={filters}
          onFiltersChange={onFiltersChange}
          pagination={{
            current: currentPage,
            pageSize,
            total: filteredLogs.length,
            onChange: onPageChange,
          }}
        />
      </PageCard>
    </>
  );
};

export default ProjectLogsDetails;
