import { useState } from 'react';

// Simplified types inside the file to avoid import issues
interface MenuItem {
  name: string;
  price: number;
}

interface Restaurant {
  id: number;
  name: string;
  waitTime: number;
  menu: MenuItem[];
}

const MOCK_DATA: Restaurant[] = [
  {
    id: 1,
    name: 'Campus Bistro',
    waitTime: 15,
    menu: [{ name: 'Salad', price: 10 }, { name: 'Soup', price: 5 }]
  },
  {
    id: 2,
    name: 'Tech Pizza',
    waitTime: 5,
    menu: [{ name: 'Pizza', price: 12 }, { name: 'Soda', price: 2 }]
  }
];

export default function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedRes = MOCK_DATA.find(r => r.id === selectedId);

  return (
    <div style={{ padding: '20px', background: '#0f172a', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#6366f1' }}>🍴 Foodie Campus</h1>
        <p style={{ color: '#94a3b8' }}>Find your next meal on campus.</p>
      </header>

      <main style={{ display: 'grid', gap: '20px' }}>
        {!selectedId ? (
          MOCK_DATA.map(res => (
            <div 
              key={res.id} 
              onClick={() => setSelectedId(res.id)}
              style={{ 
                padding: '20px', 
                background: 'rgba(255,255,255,0.05)', 
                borderRadius: '12px', 
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <h2 style={{ margin: '0 0 10px 0' }}>{res.name}</h2>
              <p style={{ color: '#10b981', fontWeight: 'bold' }}>⏱ {res.waitTime} mins wait</p>
            </div>
          ))
        ) : (
          <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
            <button 
              onClick={() => setSelectedId(null)}
              style={{ background: 'transparent', border: 'none', color: '#6366f1', cursor: 'pointer', fontWeight: 'bold', marginBottom: '100px' }}
            >
              ← Back to list
            </button>
            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{selectedRes?.name}</h2>
            
            <div style={{ marginTop: '20px' }}>
              <h3 style={{ borderBottom: '1px solid #334155', paddingBottom: '10px' }}>Menu</h3>
              {selectedRes?.menu.map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                  <span>{item.name}</span>
                  <span style={{ fontWeight: 'bold' }}>${item.price}</span>
                </div>
              ))}
            </div>

            {/* INTENTIONAL MISTAKE FOR PROFESSOR */}
            <div style={{ marginTop: '40px', padding: '15px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <p style={{ fontSize: '0.8rem', color: '#f87171', fontWeight: 'bold' }}>
                STATUS: {selectedRes?.name} is currently showing { (selectedRes as any).missingProp } occupancy.
              </p>
              <p style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '5px' }}>
                (Friend: Fix the line above by replacing 'missingProp' with a real property like 'waitTime')
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
