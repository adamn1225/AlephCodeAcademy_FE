'use client'

import Link from 'next/link';

export default function TeacherDashboard() {
  return (
    <div className="space-y-8">
      <section className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-3">📋 Student List</h3>
        <ul className="space-y-3 text-sm">
          {[
            { name: 'Jamie Rivera', xp: 120, mission: 'Fix the Greeting Bug', lastLogin: '2h ago', id: 1 },
            { name: 'Sasha Lin', xp: 85, mission: 'Launch the Rocket Code', lastLogin: 'Yesterday', id: 2 },
            { name: 'Devon Mills', xp: 45, mission: 'Design a Custom Badge', lastLogin: '3 days ago', id: 3 },
          ].map(student => (
            <li key={student.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">{student.name}</p>
                <p className="text-xs text-gray-500">
                  XP: {student.xp} • Last Mission: {student.mission} • Last Login: {student.lastLogin}
                </p>
              </div>
              <Link href={`/dashboard/teacher/students/${student.id}`} className="text-blue-600 hover:underline">
                View Progress
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-3">📝 Assignment Center</h3>
        <ul className="list-disc ml-5 text-sm mb-4">
          <li>Fix the Greeting Bug</li>
          <li>Launch the Rocket Code</li>
          <li>Design a Custom Badge</li>
        </ul>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Assign to Class</button>
          <button className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">Create New Mission</button>
        </div>
      </section>
    </div>
  );
}
