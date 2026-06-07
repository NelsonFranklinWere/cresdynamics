import EventProgrammeContent from '@/components/EventProgrammeContent';
import {
  futureAiProgrammeJsonLd,
  futureAiProgrammeMetadata,
} from '@/lib/future-ai-event-seo';

export const metadata = futureAiProgrammeMetadata();

export default function FutureAiProgrammePage() {
  const schemas = futureAiProgrammeJsonLd();
  return (
    <>
      <EventProgrammeContent />
      {schemas.map((schema, i) => (
        <script
          key={`${schema['@type']}-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
