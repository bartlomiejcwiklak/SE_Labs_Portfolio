import type { Restaurant } from '../types';
import { MapPin, Clock, Users, ChevronRight, Info } from 'lucide-react';

interface Props {
  restaurant: Restaurant;
  onOpenMenu: () => void;
  onUpdateStatus: () => void;
  onClose: () => void;
}

export default function RestaurantOverlay({ restaurant, onOpenMenu, onUpdateStatus, onClose }: Props) {
  const waitTimeColor = restaurant.waitTime < 10 ? 'text-green-400' : restaurant.waitTime < 20 ? 'text-yellow-400' : 'text-red-400';
  
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md glass rounded-2xl p-4 z-[100] animate-slide-up shadow-2xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-white">{restaurant.name}</h2>
          <div className="flex items-center gap-1 text-text-muted text-sm mt-1">
            <MapPin size={14} />
            <span>{restaurant.address}</span>
          </div>
        </div>
        <button onClick={onClose} className="text-text-muted hover:text-white">
          <ChevronRight size={24} className="rotate-90" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Clock size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-text-muted font-bold">Wait Time</p>
            <p className={`text-sm font-semibold ${waitTimeColor}`}>{restaurant.waitTime} mins</p>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${restaurant.seatsAvailable ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
            <Users size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-text-muted font-bold">Seating</p>
            <p className="text-sm font-semibold">
              {restaurant.seatsAvailable ? 'Available' : 'Full'}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button 
          onClick={onOpenMenu}
          className="flex-1 btn btn-primary justify-center"
        >
          View Menu
        </button>
        <button className="w-12 h-12 glass rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          <Info size={20} />
        </button>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2 group relative">
          <span className="text-xs text-text-muted">Crowdsourced 2 mins ago</span>
          <Info size={12} className="text-text-muted cursor-help" />
          <div className="absolute bottom-full left-0 mb-2 w-48 p-2 glass rounded-lg text-[10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[110]">
            This data is updated by students like you. Reliability is based on recent reports.
          </div>
        </div>
        <button 
          onClick={onUpdateStatus}
          className="text-xs text-primary font-bold hover:underline"
        >
          Update Status
        </button>
      </div>
    </div>
  );
}
