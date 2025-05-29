"use client";
import { ReactNode, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'

export default function PublicSideNav() {
  const [collapsed, setCollapsed] = useState(false)

    return (
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
    
    )}