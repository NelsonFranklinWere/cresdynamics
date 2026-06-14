import Link from 'next/link';
import ImageSection from '@/components/ImageSection';
import { HOMEPAGE_SECTION_IMAGES } from '@/lib/section-backgrounds';

export default function FinalCTA() {
  return (
    <ImageSection
      imageSrc={HOMEPAGE_SECTION_IMAGES.cta}
      imageAlt="Business connectivity and growth in Nairobi"
      overlay="dark"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-28 text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
          Ready to stop running your business on WhatsApp?
        </h2>
        <p className="text-base md:text-xl text-white/90 mb-8 leading-relaxed">
          Tell us what you are dealing with. We will tell you exactly what we can build to fix it.
        </p>

        <Link href="/contact" className="hero-btn-primary inline-flex">
          Start the conversation
          <span className="hero-btn-arrow" aria-hidden>
            →
          </span>
        </Link>

        <p className="text-white/70 text-sm md:text-base mt-6 max-w-xl mx-auto">
          No commitment. No generic proposal. Just an honest conversation about your specific situation.
        </p>
      </div>
    </ImageSection>
  );
}
