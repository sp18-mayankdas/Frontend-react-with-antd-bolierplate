import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { authRoutes, notFoundRoute } from './routes';
import { AuthGate, PrivateGate } from './routes/gates';
import { LoadingSpinner } from './components';

const AppRouter = () => {
  const routes = [
    {
      path: '/',
      element: <AuthGate />,
      children: [...authRoutes],
    },
    {
      path: 'dashboard',
      element: <PrivateGate />,
      children: [],
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
