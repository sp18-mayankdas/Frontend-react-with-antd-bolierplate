import { LeftMenu } from '@/components/left-menu';
import { Outlet } from 'react-router-dom';

export const PrivateLayout = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      {/* Sidebar */}
      <aside className="bg-white w-60 hidden md:block border-r relative">
        <LeftMenu />
      </aside>
      {/* Right side */}
      <div className="flex-1 min-w-0 min-h-0 h-full flex flex-col overflow-hidden">
        <header className="p-4 border-b border-b-gray-400 flex items-center bg-white sticky top-0">
          <span className="h-10 w-10 bg-red-200 rounded-full ml-auto" />
        </header>

        <main className="min-w-0 min-h-0 overflow-hidden p-4 pb-0 bg-gray-200 flex flex-col h-full">
          <div className="max-w-full flex-1 min-h-0 overflow-hidden">
            <Outlet />
          </div>
          <div className="flex items-center justify-between py-3 px-2">
            <p>© 2025 Roobiks. All Rights Reserved. </p>
            <div className="flex items-center gap-8">
              <p>Privacy Policy</p>
              <p>License</p>
              <p>Terms of Use</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
