'use client'
import XPProgress from '@/components/XPProgress';
import MissionList from '@/components/MissionList';
export default function ChildDashboard() {
  return (
<div className="space-y-3">
  <section className="bg-white p-4 rounded shadow">
    <h2 className="text-lg font-semibold mb-2">XP Progress</h2>
    <XPProgress xp={60} maxXp={100} />
    <p className="text-green-700 mt-2 font-medium">🎉 Great job! You’ve earned a new badge!</p>
  </section>

  <section className="bg-white p-4 rounded shadow">
    <h2 className="text-lg font-semibold">Your Missions</h2>
    <MissionList />
  </section>
</div>
  );
}