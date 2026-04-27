import { MapPin, Filter, MessageSquare, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

interface Props {
  onComplete: () => void;
}

const STEPS = [
  {
    title: 'Find Your Next Meal',
    description: 'Grant location access to see all dining spots around your current building.',
    icon: <MapPin size={48} className="text-primary" />,
    color: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    title: 'Filter by Dietary Needs',
    description: 'Set your preferences once and we will automatically highlight safe options for you.',
    icon: <Filter size={48} className="text-emerald-400" />,
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    title: 'Real-Time Updates',
    description: 'Help the community by reporting seat availability and wait times.',
    icon: <MessageSquare size={48} className="text-amber-400" />,
    color: 'from-amber-500/20 to-orange-500/20'
  }
];

export default function Onboarding({ onComplete }: Props) {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(s => s + 1);
    } else {
      onComplete();
    }
  };

  const step = STEPS[currentStep];

  return (
    <div className="fixed inset-0 z-[500] glass-dark flex items-center justify-center p-6 animate-fade-in">
      <div className="w-full max-w-sm glass rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
        <div className={`h-64 bg-gradient-to-br ${step.color} flex items-center justify-center`}>
          <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md animate-slide-up">
            {step.icon}
          </div>
        </div>

        <div className="p-8 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
          <p className="text-text-muted text-sm leading-relaxed mb-8">
            {step.description}
          </p>

          <div className="flex gap-2 mb-8">
            {STEPS.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentStep ? 'w-8 bg-primary' : 'w-2 bg-white/10'}`} 
              />
            ))}
          </div>

          <button 
            onClick={next}
            className="w-full btn btn-primary py-4 justify-center shadow-lg shadow-indigo-500/20"
          >
            {currentStep === STEPS.length - 1 ? 'Get Started' : 'Next'}
            <ChevronRight size={18} />
          </button>
          
          <button 
            onClick={onComplete}
            className="mt-4 text-xs text-text-muted font-bold hover:text-white transition-colors"
          >
            Skip Tutorial
          </button>
        </div>
      </div>
    </div>
  );
}
