export default function XPProgress({ xp, maxXp }: { xp: number, maxXp: number }) {
    const percent = Math.min((xp / maxXp) * 100, 100);
  
    return (
      <div className="mb-4">
        <div className="text-sm font-medium text-gray-700">XP Progress</div>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-1">
          <div className="bg-green-500 h-4 rounded-full" style={{ width: `${percent}%` }} />
        </div>
      </div>
    );
  }
  