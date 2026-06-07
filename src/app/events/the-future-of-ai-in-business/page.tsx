import EventsContent from '@/components/EventsContent';
import {
  futureAiEventMetadata,
  futureAiEventPageJsonLd,
} from '@/lib/future-ai-event-seo';

export const metadata = futureAiEventMetadata();

export default function FutureAiEventPage() {
  const schemas = futureAiEventPageJsonLd();
  return (
    <>
      <EventsContent />
      {schemas.map((schema, i) => (
        <script
          key={`ld-${i}-${schema['@type'] as string}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
