import { LeftMenu } from '@/components/left-menu';
import { Outlet } from 'react-router-dom';
import { AvatarIcon } from '@/components';
import { getUserName, getUserProfilePic } from '@/utils';
import { Dropdown, type MenuProps } from 'antd';

export const PrivateLayout = () => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    rgbIcon: '#000000',
    email: 'john.doe@example.com',
    // profilePic: 'https://via.placeholder.com/150',
  };

  const items: MenuProps['items'] = [
    {
      label: (
        <div className="flex items-center gap-2 px-1 py-3 border-b border-slate-200">
          <div>
            <AvatarIcon
              firstName={getUserName(user) || 'User'}
              lastName={user?.lastName ?? ''}
              color={user?.rgbIcon || 'var(--color-bg-avatar-default)'}
              profilePic={getUserProfilePic(user) || ''}
              wrapperClassName="cursor-pointer text-white"
              size={54}
            />
          </div>
          <div className="flex-1 flex-col justify-center space-y-1">
            <p className="text-sm font-medium">{getUserName(user) || 'User'}</p>
            <p className="text-xs text-gray-500">{user?.email || ''}</p>
          </div>
        </div>
      ),
      key: 'profile',
    },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-screen w-full flex overflow-hidden bg-[#f8fafc]">
      {/* Sidebar */}
      <aside className="w-60 hidden md:block border-r border-slate-200 relative">
        <LeftMenu />
      </aside>

      {/* Right side */}
      <div className="flex-1 min-w-0 min-h-0 h-full flex flex-col overflow-hidden">
        {/* Header */}
        <header className="p-4 border-b border-slate-200 bg-white/70 backdrop-blur-md flex items-center sticky top-0 z-10">
          {/* Profile Avatar */}
          <div className="flex items-center gap-5 p-1.5  ml-auto">
            <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <div>
                <AvatarIcon
                  firstName={getUserName(user) || 'User'}
                  lastName={user?.lastName ?? ''}
                  color={user?.rgbIcon || 'var(--color-bg-avatar-default)'}
                  profilePic={getUserProfilePic(user) || ''}
                  wrapperClassName="cursor-pointer text-white"
                />
              </div>
            </Dropdown>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-w-0 min-h-0 overflow-hidden p-6 pb-0 bg-[#f1f5f9] flex flex-col h-full">
          <div className="max-w-full flex flex-col flex-1 min-h-0 overflow-hidden">
            <Outlet />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between py-4 px-2 text-xs text-slate-500 border-t border-slate-200 mt-4">
            <p>© {currentYear} Website. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <p className="hover:text-slate-700 cursor-pointer transition-colors">
                Privacy Policy
              </p>
              <p className="hover:text-slate-700 cursor-pointer transition-colors">License</p>
              <p className="hover:text-slate-700 cursor-pointer transition-colors">Terms of Use</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
