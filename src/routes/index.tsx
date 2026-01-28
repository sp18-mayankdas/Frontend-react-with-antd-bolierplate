import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const LoginPage = lazy(() => import('@/pages/login'));
const SignUpPage = lazy(() => import('@/pages/sign-up'));
const ForgotPasswordPage = lazy(() => import('@pages/forgot-password'));
const ForgotPasswordSentPage = lazy(() => import('@/pages/forgot-password-sent'));
const ResetPasswordPage = lazy(() => import('@/pages/reset-password'));
const ResetPasswordDonePage = lazy(() => import('@/pages/reset-password-done'));
const VerifyEmailPage = lazy(() => import('@/pages/verify-email'));
const NotFoundPage = lazy(() => import('@/pages/not-found'));

export const authRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/forgot-password-sent',
    element: <ForgotPasswordSentPage />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordPage />,
  },
  {
    path: '/reset-password-done',
    element: <ResetPasswordDonePage />,
  },
  {
    path: '/verify-email',
    element: <VerifyEmailPage />,
  },
];

// 404 route
export const notFoundRoute: RouteObject = {
  path: '*',
  element: <NotFoundPage />,
};
