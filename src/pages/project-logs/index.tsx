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

import { useMemo, useState, useCallback } from 'react';
import { MOCK_PROJECT_LOGS, type ProjectLog } from '@/query/project-logs';
import { DataViewer, PageCard, PageHeader } from '@/components';
import { useNavigate } from 'react-router-dom';

const ProjectLogs = () => {
  const EnvironmentOptions = [
    { label: 'Development', value: 'Development' },
    { label: 'Production', value: 'Production' },
    { label: 'Demo', value: 'Demo' },
    { label: 'Testing', value: 'Testing' },
  ];
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState<BaseFilters>({
    q: '',
    status: 'Development',
  });

  const onFiltersChange = useCallback((next: Record<string, any>) => {
    setFilters(next as BaseFilters);
    setCurrentPage(1);
  }, []);

  const onPageChange = useCallback((page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
  }, []);

  const filteredLogs = useMemo(() => {
    if (!filters.q) return MOCK_PROJECT_LOGS;

    return MOCK_PROJECT_LOGS.filter(
      (log) =>
        log.projectName.toLowerCase().includes(filters.q.toLowerCase()) ||
        log.message.toLowerCase().includes(filters.q.toLowerCase())
    );
  }, [filters.q]);

  const columns = useMemo(
    () => [
      {
        title: 'Date',
        dataIndex: 'timestamp',
        key: 'timestamp',
        width: 180,
        render: (value: string) => (
          <span className="text-(--color-black-40)">{new Date(value).toLocaleString()}</span>
        ),
      },
      {
        title: 'Project',
        dataIndex: 'projectName',
        key: 'projectName',
        width: 220,
        render: (value: string) => (
          <span className="font-medium text-(--color-black-60)">{value}</span>
        ),
      },
      {
        title: 'Service',
        dataIndex: 'service',
        key: 'service',
        width: 180,
        render: (value: string) => <span className="text-(--color-black-40)">{value}</span>,
      },
      {
        title: 'Log Message',
        dataIndex: 'message',
        key: 'message',
        render: (value: string) => (
          <span className="text-(--color-black-40) truncate block max-w-[500px]">{value}</span>
        ),
      },
    ],
    []
  );

  return (
    <>
      <PageHeader heading="Project Logs" />

      <PageCard className="max-h-full">
        <DataViewer
          data={filteredLogs}
          loading={false}
          tableConfig={{
            columns,
            rowKey: 'id',
            onRow: (record: ProjectLog) => ({
              onClick: () => {
                navigate(`/project/${record.id}/logs`);
              },
              className: 'cursor-pointer',
            }),
          }}
          filtersGroup={{
            leftContent: [
              {
                key: 'q',
                type: 'text',
                placeholder: 'Search project or message',
                componentProps: { className: 'max-w-sm' },
              },
            ],
            rightContent: [
              {
                key: 'status',
                type: 'select',
                label: 'Filter By:',
                placeholder: 'Environment',
                options: EnvironmentOptions,
                componentProps: {
                  borderless: true,
                  style: { minWidth: 200 },
                  clearable: false,
                } as any,
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

export default ProjectLogs;
