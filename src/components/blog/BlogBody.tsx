import type { ReactNode } from 'react';
import { estimateReadTimeMinutes } from '@/lib/blog-utils';

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function BlogBody({ body }: { body: string }) {
  const blocks = body.split(/\n\n+/).filter((b) => b.trim());
  const readMin = estimateReadTimeMinutes(body);

  return (
    <div
      className="blog-prose space-y-6 text-base md:text-lg text-white/85 leading-8 md:leading-8"
      data-read-minutes={readMin}
    >
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (trimmed.startsWith('## ')) {
          return (
            <h2
              key={i}
              id={trimmed
                .slice(3)
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')}
              className="scroll-mt-28 text-2xl md:text-3xl font-black text-white pt-8 first:pt-2 tracking-tight"
            >
              {trimmed.slice(3)}
            </h2>
          );
        }
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={i} className="text-xl md:text-2xl font-bold text-white pt-4 tracking-tight">
              {trimmed.slice(4)}
            </h3>
          );
        }
        const lines = trimmed.split('\n').map((l) => l.trim()).filter(Boolean);
        if (lines.length > 0 && lines.every((line) => line.startsWith('- '))) {
          return (
            <ul key={i} className="my-2 list-disc space-y-2.5 pl-6 marker:text-[var(--teal-accent)]">
              {lines.map((line) => (
                <li key={line} className="pl-1">
                  {renderInline(line.replace(/^- /, ''))}
                </li>
              ))}
            </ul>
          );
        }
        if (lines.length > 0 && lines.every((line) => /^\d+\.\s/.test(line))) {
          return (
            <ol key={i} className="my-2 list-decimal space-y-2.5 pl-6 marker:text-[var(--teal-accent)] marker:font-bold">
              {lines.map((line) => (
                <li key={line} className="pl-1">
                  {renderInline(line.replace(/^\d+\.\s/, ''))}
                </li>
              ))}
            </ol>
          );
        }
        return (
          <p key={i} className="text-white/80">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
