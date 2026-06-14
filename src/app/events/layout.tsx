import EventsBodyTheme from '@/components/EventsBodyTheme';

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EventsBodyTheme />
      {children}
    </>
  );
}
