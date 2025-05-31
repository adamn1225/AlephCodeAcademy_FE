'use client';
import "../../globals.css";
import DashboardSidebar from '@/components/DashboardSidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <DashboardSidebar />
          <main className="flex-1 bg-gray-50 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}