import { X, CheckCircle, AlertTriangle, Send } from 'lucide-react';
import { useState } from 'react';

interface Props {
  type: 'status' | 'report' | 'review';
  onClose: () => void;
}

export default function ActionModals({ type, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 2000);
  };

  return (
    <div className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
      <div className="w-full max-w-sm glass rounded-3xl p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-text-muted">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-8 text-center animate-fade-in">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-xl font-bold">Thank You!</h3>
            <p className="text-text-muted text-sm mt-2">Your report helps the campus community.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h3 className="text-xl font-bold">
                {type === 'status' ? 'Update Seating Status' : type === 'report' ? 'Report Incorrect Info' : 'Post Review'}
              </h3>
              <p className="text-sm text-text-muted mt-1">
                {type === 'status' ? 'Is it crowded right now?' : 'Let us know what is wrong.'}
              </p>
            </div>

            {type === 'status' && (
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button type="button" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors text-center">
                  <span className="block text-2xl mb-1">🪑</span>
                  <span className="text-xs font-bold">Seats Available</span>
                </button>
                <button type="button" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-500/50 transition-colors text-center">
                  <span className="block text-2xl mb-1">🚫</span>
                  <span className="text-xs font-bold">Fully Booked</span>
                </button>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Additional Comments</label>
              <textarea 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-primary min-h-[100px]"
                placeholder="Share more details..."
              />
            </div>

            <button type="submit" className="w-full btn btn-primary py-4 justify-center">
              <Send size={18} />
              Submit Report
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
