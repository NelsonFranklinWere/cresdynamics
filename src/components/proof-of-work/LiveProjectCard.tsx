'use client';

import { useEffect, useRef, useState } from 'react';
import type { LiveProject } from '@/data/liveProjects';

function sectionLabel(text: string) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 mb-1.5">{text}</p>
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
      className="rounded-[10px] border border-white/10 bg-black p-5 md:p-6 shadow-sm transition-opacity duration-300 text-white"
      data-category={project.filters.join(' ')}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
          {project.industryTag} · {project.deliverableType}
        </span>
        {project.status === 'live' ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4ade80] shrink-0">
            <span className="h-2 w-2 rounded-full bg-[#22c55e]" aria-hidden />
            Live
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#fbbf24] shrink-0">
            <span className="h-2 w-2 rounded-full bg-[#f59e0b]" aria-hidden />
            Confirm URL
          </span>
        )}
      </div>

      <h2 className="text-sm md:text-base font-bold text-white leading-snug mb-1">{project.clientName}</h2>
      <p className="text-xs text-white/70 leading-relaxed mb-4 border-b border-white/10 pb-4">
        {project.oneLiner}
      </p>

      <div className="space-y-3 mb-4">
        <div>
          {sectionLabel('Problem')}
          <p className="text-xs text-white/85 leading-relaxed">{project.problem}</p>
        </div>
        <div>
          {sectionLabel('Solution')}
          <p className="text-xs text-white/85 leading-relaxed">{project.solution}</p>
        </div>
        <div>
          {sectionLabel('Outcome')}
          <p className="text-xs text-white/85 leading-relaxed">{project.outcome}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 min-w-[8rem] items-center justify-center gap-1.5 rounded-md border border-white/40 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white hover:bg-white/10 transition-colors"
        >
          Visit Live Site
          <span aria-hidden>↗</span>
        </a>
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          className="inline-flex flex-1 min-w-[8rem] items-center justify-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-black hover:bg-white/90 transition-colors"
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
          <div className="pt-6 mt-6 border-t border-dashed border-white/15 space-y-5">
            <div>
              {sectionLabel('Business context')}
              <p className="text-xs text-white/85 leading-relaxed">{project.expanded.businessContext}</p>
            </div>
            <div>
              {sectionLabel('The real constraint')}
              <p className="text-xs text-white/85 leading-relaxed">{project.expanded.realConstraint}</p>
            </div>
            <div>
              {sectionLabel('What we built')}
              <p className="text-xs text-white/85 leading-relaxed">{project.expanded.whatWeBuilt}</p>
            </div>
            <div>
              {sectionLabel('Outcome in detail')}
              <p className="text-xs text-white/85 leading-relaxed">{project.expanded.outcomeInDetail}</p>
            </div>
            {project.expanded.whatMadeItHard ? (
              <div>
                {sectionLabel('What made it hard')}
                <p className="text-xs text-white/85 leading-relaxed">{project.expanded.whatMadeItHard}</p>
              </div>
            ) : null}
            <div>
              {sectionLabel('Stack / Tools used')}
              <div className="flex flex-wrap gap-2">
                {project.expanded.stack.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/80"
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
                className="inline-flex flex-1 min-w-[8rem] items-center justify-center gap-1.5 rounded-md border border-white/40 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white hover:bg-white/10 transition-colors"
              >
                Visit Live Site
                <span aria-hidden>↗</span>
              </a>
              <button
                type="button"
                onClick={toggle}
                className="inline-flex flex-1 min-w-[8rem] items-center justify-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-black hover:bg-white/90 transition-colors"
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
