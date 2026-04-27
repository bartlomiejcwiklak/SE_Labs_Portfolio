import type { Restaurant, DietaryPreference } from '../types';
import { X, Filter, Flame, Info, Star, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface Props {
  restaurant: Restaurant;
  onClose: () => void;
}

const DIETARY_OPTIONS: DietaryPreference[] = ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free', 'Nut-Free'];

export default function MenuSection({ restaurant, onClose }: Props) {
  const [activeFilters, setActiveFilters] = useState<DietaryPreference[]>([]);

  const validateNutritionalData = (itemId: string) => {
    console.log(`Validating nutritional data for item: ${itemId}`);
    alert("Nutritional data validation submitted! Thank you for your feedback.");
  };

  const toggleFilter = (filter: DietaryPreference) => {
    setActiveFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const filteredMenu = restaurant.menu.filter(item => 
    activeFilters.length === 0 || activeFilters.every(f => item.allergens.includes(f))
  );

  return (
    <div className="fixed inset-0 z-[200] glass-dark flex flex-col animate-fade-in">
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src={restaurant.image} 
            alt={restaurant.name} 
            className="w-12 h-12 rounded-xl object-cover border border-white/10"
          />
          <div>
            <h2 className="text-xl font-bold">{restaurant.name}</h2>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={14} fill="currentColor" />
              <span className="text-sm font-semibold">4.8</span>
              <span className="text-text-muted text-xs font-normal ml-1">(120 reviews)</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="w-10 h-10 rounded-full glass flex items-center justify-center">
          <X size={20} />
        </button>
      </div>

      {/* Filters */}
      <div className="px-6 pb-4 overflow-x-auto no-scrollbar flex gap-2">
        <div className="flex items-center gap-2 pr-2 border-r border-white/10 mr-2">
          <Filter size={16} className="text-primary" />
          <span className="text-sm font-medium">Filters</span>
        </div>
        {DIETARY_OPTIONS.map(option => (
          <button
            key={option}
            onClick={() => toggleFilter(option)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeFilters.includes(option) 
                ? 'bg-primary text-white' 
                : 'bg-white/5 text-text-muted hover:bg-white/10'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Menu List */}
      <div className="flex-1 overflow-y-auto px-6 pb-20">
        <div className="grid gap-4">
          {filteredMenu.map(item => (
            <div key={item.id} className="glass rounded-2xl p-4 flex gap-4">
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-text-muted mt-1 line-clamp-2">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4 items-center">
                  <div className="flex items-center gap-1 px-2 py-1 bg-orange-500/10 text-orange-400 rounded-md text-[10px] font-bold uppercase tracking-wider group relative">
                    <Flame size={10} />
                    {item.calories} kcal
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 p-2 glass rounded-lg text-[8px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[250]">
                      Estimated value. Click check to validate.
                    </div>
                  </div>
                  {item.allergens.map(allergen => (
                    <span key={allergen} className="px-2 py-1 bg-white/5 text-text-muted rounded-md text-[10px] font-bold uppercase tracking-wider border border-white/5">
                      {allergen}
                    </span>
                  ))}
                  <button 
                    onClick={() => validateNutritionalData(item.id)}
                    title="Validate nutritional info"
                    className="ml-auto p-1.5 rounded-lg bg-white/5 text-text-muted hover:text-emerald-400 hover:bg-emerald-400/10 transition-all"
                  >
                    <CheckCircle size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredMenu.length === 0 && (
            <div className="py-20 text-center">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info size={32} className="text-text-muted" />
              </div>
              <p className="text-text-muted">No items match your filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="absolute bottom-6 left-6 right-6">
        <button className="w-full btn btn-primary py-4 justify-center shadow-xl shadow-indigo-500/20">
          Order Now (External)
        </button>
      </div>
    </div>
  );
}
