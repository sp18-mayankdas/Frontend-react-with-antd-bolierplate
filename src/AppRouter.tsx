import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { notFoundRoute, publicRoutes } from './routes';
import { PrivateGate, PublicGate } from './routes/gates';
import { LoadingSpinner, PrivateLayout } from './components';

const DashboardPage = lazy(() => import('@/pages/dashboard'));

const AppRouter = () => {
  const routes = [
    { path: '/', element: <Navigate to="/dashboard" replace /> },
    { element: <PublicGate />, children: [...publicRoutes] },
    {
      element: <PrivateGate />,
      children: [
        {
          element: <PrivateLayout />,
          children: [{ path: '/dashboard', element: <DashboardPage /> }],
        },
      ],
    },
    notFoundRoute,
  ];

  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
