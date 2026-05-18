'use client';

import { EVENT_LANYARDS, type LanyardCategory } from '@/lib/event-lanyards';

type Props = {
  value: LanyardCategory;
  onChange: (value: LanyardCategory) => void;
  compact?: boolean;
};

export default function EventLanyardPicker({ value, onChange, compact }: Props) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2 font-mono">
        Colour lanyard at registration *
      </p>
      <p className="text-[11px] text-white/45 mb-3">
        Pick the category that matches you — your lanyard colour helps others find the right conversations.
      </p>
      <div className={`grid gap-2 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        {EVENT_LANYARDS.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => onChange(l.id)}
            className={`flex items-center gap-3 rounded-xl p-3 text-left border transition-all ${
              value === l.id ? 'border-[#2FA6B3] bg-[#2FA6B3]/10' : 'border-white/10 bg-white/[0.02] hover:border-white/20'
            }`}
          >
            <span className="w-4 h-4 rounded-full shrink-0 ring-2 ring-white/20" style={{ background: l.color }} />
            <div className="min-w-0">
              <p className="text-xs font-bold text-white">{l.label}</p>
              <p className="text-[10px] text-white/45 truncate">{l.role}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
