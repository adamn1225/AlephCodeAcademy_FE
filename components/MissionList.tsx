'use client';

import React, { useEffect, useState } from 'react';
import MissionEditor from './MissionEditor';
import { CheckCircle, Clock, Flame } from 'lucide-react';

type Mission = {
  ID: number;
  title: string;
  description: string;
  blockly_xml: string;
};

type MissionStatus = 'new' | 'in-progress' | 'completed';

export default function MissionList() {
  const [missions, setMissions] = useState<Mission[]>([]);

  // Mock: Assign XP + status
  const getMockStatus = (index: number): { xp: number; status: MissionStatus } => {
    const statuses: MissionStatus[] = ['new', 'in-progress', 'completed'];
    return {
      xp: 10 + index * 5,
      status: statuses[index % statuses.length],
    };
  };

  useEffect(() => {
    fetch('http://localhost:8080/api/missions')
      .then(res => res.json())
      .then(data => setMissions(data))
      .catch(err => console.error('Failed to load missions', err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🧠 Coding Missions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((mission, i) => {
          const { xp, status } = getMockStatus(i);

          return (
            <div
              key={mission.ID}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-indigo-700">{mission.title}</h2>
                <span className="text-sm text-gray-500">+{xp} XP</span>
              </div>

              <p className="text-gray-700 mb-4">{mission.description}</p>

              <MissionEditor xml={mission.blockly_xml} />

              <div className="mt-4 flex items-center gap-2 text-sm">
                {status === 'completed' && (
                  <span className="text-green-600 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" /> Completed
                  </span>
                )}
                {status === 'in-progress' && (
                  <span className="text-yellow-600 flex items-center gap-1">
                    <Clock className="w-4 h-4" /> In Progress
                  </span>
                )}
                {status === 'new' && (
                  <span className="text-blue-600 flex items-center gap-1">
                    <Flame className="w-4 h-4" /> New
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
