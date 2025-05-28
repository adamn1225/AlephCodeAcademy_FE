export async function fetchMissions() {
    const res = await fetch('http://localhost:8080/api/missions');
    if (!res.ok) throw new Error('Failed to fetch missions');
    return res.json();
  }

  // lib/api.ts
export type Mission = {
    id: number;
    title: string;
    description: string;
    blockly_xml: string;
  };
  
  export async function getMissionById(id: string | number): Promise<Mission | null> {
    const res = await fetch('http://localhost:8080/api/missions');
    if (!res.ok) {
      console.error('[getMissionById] Failed:', res.statusText);
      return null;
    }
  
    const missions: Mission[] = await res.json();
    return missions.find((m) => m.id === Number(id)) || null;
  }
  