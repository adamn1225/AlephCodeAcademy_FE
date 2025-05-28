// alephcodeacademy/app/missions/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getMissionById, Mission } from '@/lib/api';
import BlocklyEditor from '@/components/BlocklyEditor';

export default function MissionPage() {
    const { id } = useParams();
    const [mission, setMission] = useState<Mission | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function load() {
        if (!id) return;
        const missionId = Array.isArray(id) ? id[0] : id;
        const data = await getMissionById(missionId);
        setMission(data);
        setLoading(false);
      }
      load();
    }, [id]);
  
    if (loading) return <div className="p-4">Loading mission...</div>;
    if (!mission) return <div className="p-4 text-red-600">Mission not found</div>;
  
    return (
      <div className="flex flex-col md:flex-row h-full p-4 gap-4">
        <div className="flex-1 border rounded p-2">
          <BlocklyEditor xml={mission.blockly_xml} />
        </div>
        <div className="w-full md:w-1/3 border rounded p-4">
          <h2 className="text-lg font-bold">{mission.title}</h2>
          <p>{mission.description}</p>
        </div>
      </div>
    );
  }
