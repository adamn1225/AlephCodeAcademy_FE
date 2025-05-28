'use client'

import { Home, Trophy, Settings } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-700 text-white p-4 space-y-6">
        <h1 className="text-2xl font-bold mb-6">AlephCode</h1>
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard" className="flex items-center gap-2 hover:underline"><Home size={20}/> Home</Link>
          <Link href="/missions" className="flex items-center gap-2 hover:underline"><Trophy size={20}/> Missions</Link>
          <Link href="/settings" className="flex items-center gap-2 hover:underline"><Settings size={20}/> Settings</Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}
