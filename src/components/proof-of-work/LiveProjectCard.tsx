'use client';

import { useEffect, useRef, useState } from 'react';
import type { LiveProject } from '@/data/liveProjects';

function sectionLabel(text: string) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--navy-primary)]/45 mb-1.5">{text}</p>
  );
}

export default function LiveProjectCard({ project }: { project: LiveProject }) {
  const [open, setOpen] = useState(false);
  const drawerEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia('(max-width: 767px)');
    if (!mq.matches) return;
    const t = window.setTimeout(() => {
      drawerEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 320);
    return () => window.clearTimeout(t);
  }, [open]);

  const toggle = () => setOpen((v) => !v);

  return (
    <article
      className="rounded-[10px] border border-[#E0E4EA] bg-white p-5 md:p-6 shadow-sm transition-opacity duration-300"
      data-category={project.filters.join(' ')}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <span className="inline-block rounded-full bg-[#EEF1F6] px-3 py-1 text-xs font-medium text-[var(--navy-primary)]">
          {project.industryTag} · {project.deliverableType}
        </span>
        {project.status === 'live' ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#166534] shrink-0">
            <span className="h-2 w-2 rounded-full bg-[#22c55e]" aria-hidden />
            Live
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#b45309] shrink-0">
            <span className="h-2 w-2 rounded-full bg-[#f59e0b]" aria-hidden />
            Confirm URL
          </span>
        )}
      </div>

      <h2 className="text-lg md:text-xl font-bold text-[var(--navy-primary)] leading-snug mb-1">{project.clientName}</h2>
      <p className="text-sm text-[var(--navy-primary)]/75 leading-relaxed mb-5 border-b border-[#EEF1F6] pb-5">
        {project.oneLiner}
      </p>

      <div className="space-y-4 mb-6">
        <div>
          {sectionLabel('Problem')}
          <p className="text-sm text-[var(--navy-primary)]/90 leading-relaxed">{project.problem}</p>
        </div>
        <div>
          {sectionLabel('Solution')}
          <p className="text-sm text-[var(--navy-primary)]/90 leading-relaxed">{project.solution}</p>
        </div>
        <div>
          {sectionLabel('Outcome')}
          <p className="text-sm text-[var(--navy-primary)]/90 leading-relaxed">{project.outcome}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 min-w-[10rem] items-center justify-center gap-2 rounded-lg border-2 border-[var(--navy-primary)] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-[var(--navy-primary)] hover:bg-[var(--navy-primary)]/5 transition-colors"
        >
          Visit Live Site
          <span aria-hidden>↗</span>
        </a>
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          className="inline-flex flex-1 min-w-[10rem] items-center justify-center gap-2 rounded-lg bg-[var(--cres-orange-primary)] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white hover:bg-[var(--cres-orange-hover)] transition-colors"
        >
          View Case Study
          <span aria-hidden className="text-[10px]">
            {open ? '▴' : '▾'}
          </span>
        </button>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden min-h-0">
          <div className="pt-6 mt-6 border-t border-dashed border-[#D1D5DB] space-y-5">
            <div>
              {sectionLabel('Business context')}
              <p className="text-sm text-[var(--navy-primary)]/90 leading-relaxed">{project.expanded.businessContext}</p>
            </div>
            <div>
              {sectionLabel('The real constraint')}
              <p className="text-sm text-[var(--navy-primary)]/90 leading-relaxed">{project.expanded.realConstraint}</p>
            </div>
            <div>
              {sectionLabel('What we built')}
              <p className="text-sm text-[var(--navy-primary)]/90 leading-relaxed">{project.expanded.whatWeBuilt}</p>
            </div>
            <div>
              {sectionLabel('Outcome in detail')}
              <p className="text-sm text-[var(--navy-primary)]/90 leading-relaxed">{project.expanded.outcomeInDetail}</p>
            </div>
            {project.expanded.whatMadeItHard ? (
              <div>
                {sectionLabel('What made it hard')}
                <p className="text-sm text-[var(--navy-primary)]/90 leading-relaxed">{project.expanded.whatMadeItHard}</p>
              </div>
            ) : null}
            <div>
              {sectionLabel('Stack / Tools used')}
              <div className="flex flex-wrap gap-2">
                {project.expanded.stack.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full bg-[#F0F2F5] px-2.5 py-1 text-[11px] font-medium text-[var(--navy-primary)]/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 min-w-[10rem] items-center justify-center gap-2 rounded-lg border-2 border-[var(--navy-primary)] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-[var(--navy-primary)] hover:bg-[var(--navy-primary)]/5 transition-colors"
              >
                Visit Live Site
                <span aria-hidden>↗</span>
              </a>
              <button
                type="button"
                onClick={toggle}
                className="inline-flex flex-1 min-w-[10rem] items-center justify-center gap-2 rounded-lg bg-[var(--cres-orange-primary)] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white hover:bg-[var(--cres-orange-hover)] transition-colors"
              >
                View Case Study
                <span aria-hidden className="text-[10px]">
                  ▴
                </span>
              </button>
            </div>
            <div ref={drawerEndRef} className="h-px w-full" aria-hidden />
          </div>
        </div>
      </div>
    </article>
  );
}
