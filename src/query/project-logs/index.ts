type LogLevel = 'INFO' | 'WARN' | 'ERROR';

export type ProjectLog = {
  id: string;
  timestamp: string;
  projectName: string;
  environment: 'Development' | 'Production';
  level: LogLevel;
  service: string;
  message: string;
};

export const MOCK_PROJECT_LOGS: ProjectLog[] = [
  {
    id: '1',
    timestamp: '2026-02-06T10:12:44Z',
    projectName: 'Payment Service',
    environment: 'Production',
    level: 'ERROR',
    service: 'payment-api',
    message: 'Database connection timeout',
  },
  {
    id: '2',
    timestamp: '2026-02-06T09:55:21Z',
    projectName: 'User Management',
    environment: 'Development',
    level: 'WARN',
    service: 'auth-service',
    message: 'JWT token expiry nearing threshold',
  },
  {
    id: '3',
    timestamp: '2026-02-06T09:32:10Z',
    projectName: 'Analytics Engine',
    environment: 'Production',
    level: 'INFO',
    service: 'analytics-worker',
    message: 'Daily metrics aggregation completed',
  },
  {
    id: '4',
    timestamp: '2026-02-06T08:58:02Z',
    projectName: 'Inventory System',
    environment: 'Production',
    level: 'ERROR',
    service: 'inventory-api',
    message: 'Redis cache unavailable',
  },
  {
    id: '5',
    timestamp: '2026-02-06T08:41:18Z',
    projectName: 'Notification Service',
    environment: 'Development',
    level: 'INFO',
    service: 'email-worker',
    message: 'Queued 120 emails successfully',
  },
];

//Project Logs details

export type ProjectDetailLog = {
  id: string;
  timestamp: string;
  level: 'INFO' | 'WARN' | 'ERROR';
  service: string;
  message: string;
  traceId?: string;
};

export const PROJECT_LOGS_MOCK: ProjectDetailLog[] = [
  {
    id: 'log-1',
    timestamp: '2026-02-06T11:02:41Z',
    level: 'ERROR',
    service: 'payment-api',
    message: 'Stripe charge failed due to invalid API key',
    traceId: 'trc_91af2',
  },
  {
    id: 'log-2',
    timestamp: '2026-02-06T10:58:03Z',
    level: 'WARN',
    service: 'payment-api',
    message: 'Retrying payment request (attempt 2)',
    traceId: 'trc_91af2',
  },
  {
    id: 'log-3',
    timestamp: '2026-02-06T10:45:12Z',
    level: 'INFO',
    service: 'payment-worker',
    message: 'Scheduled settlement job started',
  },
  {
    id: 'log-4',
    timestamp: '2026-02-06T10:44:58Z',
    level: 'INFO',
    service: 'payment-worker',
    message: 'Settlement job completed successfully',
  },
  {
    id: 'log-5',
    timestamp: '2026-02-06T10:33:09Z',
    level: 'ERROR',
    service: 'database',
    message: 'Connection pool exhausted',
    traceId: 'trc_78cc1',
  },
];
