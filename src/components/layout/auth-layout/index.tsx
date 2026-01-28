import type { ReactNode } from 'react';
import AuthBg from '@assets/Auth-Background.png';
import { Button } from '@/components/ui';
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface IAuthLayoutProps {
  children: ReactNode;
  imagePosition?: 'right' | 'left';
}

export const AuthLayout = ({ children, imagePosition = 'right' }: IAuthLayoutProps) => {
  const loginPath = window.location.href.split('/').pop();
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Section */}
      <div className={`${imagePosition === 'left' ? 'order-2' : 'order-1'} flex flex-col  p-8`}>
        {/* Top section - Button */}
        {loginPath !== 'login' && (
          <Link to="/login">
            <Button type="link" icon={<LeftOutlined />}>
              Back to website
            </Button>
          </Link>
        )}

        {/* Middle section - Form */}
        <div className="flex-1 flex items-center justify-center ">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>

      {/* Right Section */}
      <div className={`hidden lg:block ${imagePosition === 'left' ? 'order-1' : 'order-2'}`}>
        <img src={AuthBg} alt="Auth Background" className="object-cover w-full h-full" />
      </div>
    </main>
  );
};
