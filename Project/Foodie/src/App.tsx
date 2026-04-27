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
    menu: [
      { name: 'Quinoa Power Bowl', price: 12 },
      { name: 'Tomato Basil Soup', price: 6 },
      { name: 'Avocado Toast', price: 9 },
      { name: 'Green Smoothie', price: 7 },
      { name: 'Grilled Chicken Salad', price: 11 }
    ]
  },
  {
    id: 2,
    name: 'Tech Pizza',
    waitTime: 5,
    menu: [
      { name: 'Margherita Slice', price: 4 },
      { name: 'Pepperoni Feast', price: 5 },
      { name: 'Garlic Knots (4pc)', price: 3 },
      { name: 'Caesar Salad', price: 8 },
      { name: 'Italian Soda', price: 3 },
      { name: 'Tiramisu Cup', price: 6 }
    ]
  },
  {
    id: 3,
    name: 'Green Leaf Cafe',
    waitTime: 20,
    menu: [
      { name: 'Vegan Burger', price: 13 },
      { name: 'Sweet Potato Fries', price: 5 },
      { name: 'Iced Matcha Latte', price: 6 },
      { name: 'Berry Parfait', price: 7 }
    ]
  }
];

export default function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(true);

  const selectedRes = MOCK_DATA.find(r => r.id === selectedId);

  const theme = {
    bg: isDark ? '#0f172a' : '#f8fafc',
    text: isDark ? 'white' : '#1e293b',
    muted: isDark ? '#94a3b8' : '#64748b',
    card: isDark ? 'rgba(255,255,255,0.05)' : 'white',
    border: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
    shadow: isDark ? 'none' : '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  };

  return (
    <div style={{
      padding: '20px',
      background: theme.bg,
      color: theme.text,
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      transition: 'all 0.3s ease'
    }}>
      <header style={{
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ color: '#6366f1', margin: 0 }}>🍴 Foodie Campus</h1>
          <p style={{ color: theme.muted, margin: '5px 0 0 0' }}>Find your next meal on campus.</p>
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            background: theme.card,
            border: `1px solid ${theme.border}`,
            color: theme.text,
            padding: '10px 15px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '1.2rem',
            transition: 'all 0.2s'
          }}
        >
          {isDark ? '🌙' : '☀️'}
        </button>
      </header>

      <main style={{ display: 'grid', gap: '20px' }}>
        {!selectedId ? (
          MOCK_DATA.map(res => (
            <div
              key={res.id}
              onClick={() => setSelectedId(res.id)}
              style={{
                padding: '20px',
                background: theme.card,
                borderRadius: '16px',
                cursor: 'pointer',
                border: `1px solid ${theme.border}`,
                boxShadow: theme.shadow,
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h2 style={{ margin: '0 0 10px 0' }}>{res.name}</h2>
              <p style={{ color: '#10b981', fontWeight: 'bold' }}>⏱ {res.waitTime} mins wait</p>
            </div>
          ))
        ) : (
          <div style={{
            padding: '20px',
            background: theme.card,
            borderRadius: '16px',
            border: `1px solid ${theme.border}`,
            boxShadow: theme.shadow
          }}>
            <button
              onClik={() => setSelectedId(null)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#6366f1',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginBottom: '20px',
                padding: 0
              }}
            >
              ← Back to list
            </button>
            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{selectedRes?.name}</h2>

            <div style={{ marginTop: '20px' }}>
              <h3 style={{ borderBottom: `1px solid ${theme.border}`, paddingBottom: '10px', color: theme.muted }}>Menu</h3>
              {selectedRes?.menu.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: i === (selectedRes?.menu.length || 0) - 1 ? 'none' : `1px solid ${theme.border}`
                }}>
                  <span>{item.name}</span>
                  <span style={{ fontWeight: 'bold', color: '#6366f1' }}>${item.price}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '40px', padding: '15px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <p style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 'bold' }}>
                STATUS: {selectedRes?.name} is currently showing a {selectedRes?.waitTime} minute wait.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
