import { LeftMenu } from '@/components/left-menu';
import { Outlet } from 'react-router-dom';

export const PrivateLayout = () => {
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
          <div className="ml-auto h-10 w-10 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 shadow-md" />
        </header>

        {/* Main Content */}
        <main className="min-w-0 min-h-0 overflow-hidden p-6 pb-0 bg-[#f1f5f9] flex flex-col h-full">
          <div className="max-w-full flex flex-col flex-1 min-h-0 overflow-hidden">
            <Outlet />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between py-4 px-2 text-xs text-slate-500 border-t border-slate-200 mt-4">
            <p>© {currentYear} System Health Dashboard. All Rights Reserved.</p>
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
