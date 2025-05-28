'use client'

import { ReactNode, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'

export default function HomeLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-br from-sky-100 via-pink-50 to-indigo-100">
      {/* Top Nav */}
      <header className="bg-gradient-to-r from-sky-200 via-pink-100 to-indigo-200 border-b px-8 py-5 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <span className="text-3xl">👾</span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-700 drop-shadow">AlephCode Academy</h1>
        </div>
        <Link
          href="/login"
          className="bg-gradient-to-r from-pink-400 to-blue-600 hover:from-pink-500 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-lg text-lg font-semibold transition"
        >
          Parent Login
        </Link>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={clsx(
            'relative transition-all duration-300 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 text-white p-4 shadow-lg flex flex-col',
            collapsed ? 'w-16' : 'w-60'
          )}
        >
          <div className="flex justify-between items-center mb-6">
            {!collapsed && (
              <h2 className="text-lg font-bold tracking-wide flex items-center gap-2">
                <span>🌈</span> Menu
              </h2>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hover:scale-110 transition-transform"
              aria-label={collapsed ? 'Expand menu' : 'Collapse menu'}
            >
              {collapsed ? <Menu size={24} /> : <X size={24} />}
            </button>
          </div>

          {!collapsed && (
            <nav className="space-y-3 text-base flex-1 font-medium">
              <Link href="#" className="flex items-center gap-2 hover:bg-blue-700 px-3 py-2 rounded-lg transition"><span>🧑‍💻</span> Getting Started</Link>
              <Link href="#" className="flex items-center gap-2 hover:bg-blue-700 px-3 py-2 rounded-lg transition"><span>🎯</span> Sample Missions</Link>
              <Link href="#" className="flex items-center gap-2 hover:bg-blue-700 px-3 py-2 rounded-lg transition"><span>📅</span> Schedule a Meeting</Link>
              <Link href="#" className="flex items-center gap-2 hover:bg-blue-700 px-3 py-2 rounded-lg transition"><span>🛟</span> Support</Link>
              <Link href="#" className="flex items-center gap-2 hover:bg-blue-700 px-3 py-2 rounded-lg transition"><span>📚</span> Code Guides</Link>
              <Link href="#" className="flex items-center gap-2 hover:bg-blue-700 px-3 py-2 rounded-lg transition"><span>✨</span> Why AlephCode?</Link>
            </nav>
          )}

          <span className="absolute bottom-0 left-0 w-full border-t border-blue-300 text-center text-xs text-blue-100 py-4 bg-gradient-to-t from-blue-600 to-blue-500">
            <p>
              AlephCode Academy © 2025<br />
              <span className="text-pink-200">Learn. Code. Grow.</span>
            </p>
          </span>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 md:p-12 overflow-y-auto">
          {/* Welcome Banner */}
          <div className="mb-8 bg-gradient-to-r from-pink-200 via-sky-100 to-indigo-100 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-extrabold text-blue-700 mb-2">Welcome to AlephCode Academy!</h2>
              <p className="text-lg md:text-xl text-blue-900 mb-4">
                Where kids become confident coders and parents stay connected. <span className="text-pink-600 font-bold">Fun, safe, and effective</span> coding lessons for ages 7–14.
              </p>
              <ul className="list-disc pl-6 text-blue-800 space-y-1 text-base">
                <li>Live 1:1 and group tutoring</li>
                <li>Interactive coding missions and games</li>
                <li>Progress tracking for parents</li>
                <li>Friendly, expert instructors</li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span className="text-[5rem] md:text-[7rem] drop-shadow">🚀</span>
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  )
}