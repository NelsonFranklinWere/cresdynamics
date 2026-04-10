'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LIVE_PROJECT_FILTERS, LIVE_PROJECTS, type LiveProjectFilter } from '@/data/liveProjects';
import LiveProjectCard from './LiveProjectCard';

export default function LiveProjectsSection() {
  const [active, setActive] = useState<LiveProjectFilter | 'all'>('all');

  const visible = useMemo(() => {
    if (active === 'all') return LIVE_PROJECTS;
    return LIVE_PROJECTS.filter((p) => p.filters.includes(active));
  }, [active]);

  return (
    <section className="relative py-16 md:py-24 bg-[var(--neutral-bg)] text-[var(--navy-primary)]">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <header className="max-w-3xl mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-[var(--navy-primary)] leading-tight mb-3">
            Live in Production
          </h2>
          <p className="text-base md:text-lg text-[var(--navy-primary)]/75 font-medium">
            Systems we shipped. Businesses they run.
          </p>
        </header>

        <div
          className="flex flex-wrap gap-2 mb-10 md:mb-12"
          role="toolbar"
          aria-label="Filter projects by type"
        >
          {LIVE_PROJECT_FILTERS.map((f) => {
            const isOn = active === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide border transition-all duration-300 ${
                  isOn
                    ? 'bg-[var(--navy-primary)] text-white border-[var(--navy-primary)]'
                    : 'bg-white text-[var(--navy-primary)]/80 border-[#E0E4EA] hover:border-[var(--navy-primary)]/30'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {visible.length === 0 ? (
          <p className="text-sm text-[var(--navy-primary)]/60 text-center py-12">No projects in this filter yet.</p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
            >
              {visible.map((project) => (
                <LiveProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
