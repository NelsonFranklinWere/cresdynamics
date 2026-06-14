import Image from 'next/image';
import type { SectionOverlay } from '@/lib/section-backgrounds';
import { OVERLAY_CLASS } from '@/lib/section-backgrounds';

type Props = {
  imageSrc: string;
  imageAlt?: string;
  overlay?: SectionOverlay;
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export default function ImageSection({
  imageSrc,
  imageAlt = '',
  overlay = 'medium',
  className = '',
  children,
  id,
}: Props) {
  return (
    <section id={id} className={`relative isolate overflow-hidden bg-[#0A1628] min-h-[280px] ${className}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden={!imageAlt}
      />
      <div className={`absolute inset-0 ${OVERLAY_CLASS[overlay]}`} aria-hidden />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
