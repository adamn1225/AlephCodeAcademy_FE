'use client'

import XPProgress from '@/components/XPProgress'

export default function ParentDashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Child’s Progress Overview</h2>
      
      <XPProgress xp={60} maxXp={100} />
      <p className="text-sm text-gray-600 mt-2">Current XP: 60 / 100</p>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Recent Missions</h3>
        <ul className="space-y-2">
          <li className="bg-white p-3 rounded shadow">✅ Fix the Greeting Bug</li>
          <li className="bg-white p-3 rounded shadow">🕐 Launch the Rocket Code (In Progress)</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Earned Badges</h3>
        <div className="flex gap-2 flex-wrap">
          <span className="bg-yellow-300 text-yellow-900 px-2 py-1 rounded text-xs">🌟 First Mission</span>
          <span className="bg-green-300 text-green-900 px-2 py-1 rounded text-xs">🔥 50 XP Club</span>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <p>Last Activity: May 27, 2025</p>
        <p>Child Login Streak: 3 days</p>
      </div>
    </div>
  )
}
