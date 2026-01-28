import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const LoginPage = lazy(() => import('@pages/login'));
const SignUpPage = lazy(() => import('@pages/sign-up'));
const ForgotPasswordPage = lazy(() => import('@pages/forgot-password'));
const ForgotPasswordSentPage = lazy(() => import('@pages/forgot-password-sent-page'));
const ResetPasswordPage = lazy(() => import('@pages/reset-password-page'));
const ResetPasswordDonePage = lazy(() => import('@pages/reset-password-done-page'));
const VerifyEmailPage = lazy(() => import('@pages/verify-email-page'));
const NotFoundPage = lazy(() => import('@/pages/not-found-page'));

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
