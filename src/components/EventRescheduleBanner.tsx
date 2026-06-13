import { FUTURE_AI_EVENT } from '@/lib/future-ai-event';

export default function EventRescheduleBanner() {
  if (FUTURE_AI_EVENT.status !== 'rescheduled') return null;

  return (
    <div
      role="status"
      className="sticky top-0 z-[60] border-b border-amber-400/50 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 px-4 py-3 text-[#060B18] shadow-lg"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-bold leading-snug md:text-[15px]">{FUTURE_AI_EVENT.rescheduleBanner}</p>
        <div className="flex shrink-0 flex-wrap gap-2 text-xs font-semibold">
          <a
            href={`mailto:${FUTURE_AI_EVENT.contactEmail}`}
            className="rounded-lg bg-[#060B18]/15 px-3 py-1.5 hover:bg-[#060B18]/25"
          >
            Email us
          </a>
          <a
            href="https://wa.me/254708805496"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#060B18]/15 px-3 py-1.5 hover:bg-[#060B18]/25"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
