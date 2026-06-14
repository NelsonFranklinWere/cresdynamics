import { FUTURE_AI_EVENT, FUTURE_AI_RESCHEDULE_NOTICE } from '@/lib/future-ai-event';

type Props = {
  className?: string;
};

/** Static inline reschedule letter — sits in page flow, not fixed or animated. */
export default function EventRescheduleNotice({ className = '' }: Props) {
  if (FUTURE_AI_EVENT.status !== 'rescheduled') return null;

  const notice = FUTURE_AI_RESCHEDULE_NOTICE;

  return (
    <section
      role="alert"
      aria-live="polite"
      className={`relative z-10 pt-24 border-y border-amber-500/25 bg-gradient-to-b from-amber-950/70 to-[#060B18]/90 ${className}`}
    >
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <p className="mb-5 text-base font-semibold text-amber-100 sm:text-lg">{notice.lead}</p>

        <div className="space-y-4 text-sm leading-relaxed text-white/90 sm:text-[15px]">
          {notice.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}

          <p>
            {notice.refundLead}{' '}
            <a
              href={`mailto:${FUTURE_AI_EVENT.contactEmail}`}
              className="font-semibold text-amber-200 underline underline-offset-2 hover:text-white"
            >
              {FUTURE_AI_EVENT.contactEmail}
            </a>{' '}
            or{' '}
            <a
              href="https://wa.me/254708805496"
              className="font-semibold text-amber-200 underline underline-offset-2 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp +254 708 805 496
            </a>{' '}
            {notice.refundTail}
          </p>

          <p>{notice.closing}</p>
        </div>

        <footer className="mt-8 border-t border-white/10 pt-6">
          <p className="font-bold text-white">{notice.signoff}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/60">
            {notice.signoffRole}
          </p>
        </footer>
      </div>
    </section>
  );
}
