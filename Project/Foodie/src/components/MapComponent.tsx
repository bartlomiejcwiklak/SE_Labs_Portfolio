import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { Restaurant } from '../types';
import { mockRestaurants } from '../data/mockData';


// Custom Marker Icon
const createCustomIcon = (isSelected: boolean) => L.divIcon({
  className: 'custom-icon',
  html: `<div style="
    width: 32px; 
    height: 32px; 
    background: ${isSelected ? '#6366f1' : '#1e293b'}; 
    border: 2px solid white; 
    border-radius: 50%; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    transition: all 0.2s;
    ${isSelected ? 'transform: scale(1.2);' : ''}
  ">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" x2="18" y1="17" y2="17"/></svg>
  </div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

interface MapProps {
  userLocation: [number, number] | null;
  selectedId: string | null;
  onSelect: (id: string) => void;
}

// Helper to center map
function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  map.setView(center, 15);
  return null;
}

export default function MapComponent({ userLocation, selectedId, onSelect }: MapProps) {
  const center: [number, number] = userLocation || [51.747, 19.452];

  return (
    <MapContainer 
      center={center} 
      zoom={15} 
      zoomControl={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      
      {userLocation && (
        <Marker position={userLocation} icon={L.divIcon({
          className: 'user-icon',
          html: '<div style="width: 16px; height: 16px; background: #3b82f6; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 15px #3b82f6;"></div>',
          iconSize: [16, 16]
        })}>
          <Popup>You are here</Popup>
        </Marker>
      )}

      {mockRestaurants.map((res: Restaurant) => (
        <Marker 
          key={res.id} 
          position={res.coordinates}
          icon={createCustomIcon(selectedId === res.id)}
          eventHandlers={{
            click: () => onSelect(res.id)
          }}
        />
      ))}

      {selectedId && (
        <ChangeView center={mockRestaurants.find((r: Restaurant) => r.id === selectedId)?.coordinates || center} />
      )}
    </MapContainer>
  );
}
