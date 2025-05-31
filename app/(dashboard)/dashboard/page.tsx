'use client'

import HomeLayout from '@/components/layouts/HomeLayout'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Welcome to AlephCode Academy</h2>
      <p className="mb-6 text-gray-700 max-w-2xl">
        Teach, learn, and grow with fun code missions, progress tracking, and interactive assignments.
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold mb-2">🚀 Try a Sample Mission</h3>
          <p className="text-sm text-gray-600">Jump into a Blockly mission and see how it works!</p>
          <Link href="/dashboard/child" className="inline-block mt-2 text-blue-600 hover:underline">Try Now</Link>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold mb-2">👨‍👩‍👧 Parent Tools</h3>
          <p className="text-sm text-gray-600">Track your child’s XP, progress, and badges.</p>
          <Link href="/dashboard/parent" className="inline-block mt-2 text-blue-600 hover:underline">Go to Parent View</Link>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold mb-2">🧑‍🏫 Teacher Panel</h3>
          <p className="text-sm text-gray-600">Assign missions and monitor student progress.</p>
          <Link href="/dashboard/teacher" className="inline-block mt-2 text-blue-600 hover:underline">Enter Panel</Link>
        </div>
      </div>
    </>
  )
}
