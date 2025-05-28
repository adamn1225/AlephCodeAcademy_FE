'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Trophy, BookOpen, User, Home } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

export default function DashboardSidebar() {
  const pathname = usePathname()

  const links = [
    { href: '/dashboard/home', label: 'Home', icon: Home },
    { href: '/dashboard/child', label: 'My Missions', icon: BookOpen },
    { href: '/dashboard/parent', label: 'Parent View', icon: User },
    { href: '/dashboard/teacher', label: 'Teacher Panel', icon: Trophy },
  ]

  return (
    <aside className="w-64 h-screen bg-gray-100 border-r border-gray-300 p-4 flex flex-col">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-ntsBlue">AlephCode Academy</h2>
        <p className="text-sm text-gray-600">Learning Dashboard</p>
      </div>
      <nav className="flex-1">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-100 text-gray-800 transition-colors',
              pathname === href && 'bg-blue-200 font-semibold'
            )}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-6">
        <p className="text-sm text-gray-600 mb-1">Progress</p>
        <Progress value={60} className="h-2" />
        <p className="text-xs text-right text-gray-500 mt-1">60 XP</p>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Your Missions</h3>
        <ul className="space-y-2 text-sm text-gray-800">
          <li className="bg-white p-2 rounded shadow">🔧 Fix the Greeting Bug</li>
          <li className="bg-white p-2 rounded shadow">🚀 Launch the Rocket Code</li>
          <li className="bg-white p-2 rounded shadow">🎨 Design a Custom Badge</li>
        </ul>
      </div>

      <div className="mt-6 mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Badges</h3>
        <div className="flex gap-2 flex-wrap">
          <span className="bg-yellow-300 text-yellow-900 px-2 py-1 rounded text-xs">🌟 First Mission</span>
          <span className="bg-green-300 text-green-900 px-2 py-1 rounded text-xs">🔥 50 XP Club</span>
          <span className="bg-blue-300 text-blue-900 px-2 py-1 rounded text-xs">👨‍🚀 Code Explorer</span>
        </div>
      </div>

      <div className="mt-auto text-sm text-gray-500 pt-4 border-t">
        <p>AlephCode Academy © 2025</p>
      </div>
    </aside>
  )
}
