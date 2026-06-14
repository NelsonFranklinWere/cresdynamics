import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  CompanyCard,
  CompanyCTA,
  CompanyEyebrow,
  CompanyHero,
  CompanyPhotoSection,
  ScrollReveal,
  ScrollRevealStagger,
} from '@/components/company/CompanyPageUI';
import { COMPANY_PAGE_IMAGES } from '@/lib/company-page-images';

export default function AboutPageContent() {
  return (
    <div className="min-h-screen bg-[#060B18] text-white">
      <Header />

      <CompanyHero
        eyebrow="Who we are · Cres Dynamics"
        title={
          <>
            When the tools you started with
            <span className="block text-[var(--teal-accent)] mt-1">stop working.</span>
          </>
        }
        subtitle="Most Kenyan businesses hit a ceiling when WhatsApp, Excel, and disconnected apps cannot keep up. We build the infrastructure you actually need to grow past it."
        imageSrc={COMPANY_PAGE_IMAGES.about}
        imageAlt="Innovation and connected business systems"
        primaryLabel="Tell us your situation"
      />

      <CompanyPhotoSection
        imageSrc={COMPANY_PAGE_IMAGES.aboutMoment}
        imageAlt="Business partnership and growth"
        overlay="medium"
      >
        <ScrollReveal className="max-w-3xl">
          <CompanyEyebrow>The moment</CompanyEyebrow>
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-white/90">
            <p>
              WhatsApp cannot manage 200 orders a day. Excel cannot track inventory across three locations. A basic
              website cannot convert a visitor into a customer. Manual invoicing cannot give you real-time visibility
              of your revenue.
            </p>
            <p className="font-semibold text-[var(--teal-accent)]">
              Cres Dynamics exists for that moment — when a business is ready to build the infrastructure it actually
              needs to grow.
            </p>
          </div>
        </ScrollReveal>
      </CompanyPhotoSection>

      <CompanyPhotoSection
        imageSrc={COMPANY_PAGE_IMAGES.aboutWhoWeAre}
        imageAlt="Nairobi engineering team in a strategy session"
        overlay="medium"
      >
        <ScrollReveal className="max-w-3xl mb-12">
          <CompanyEyebrow>Who we are</CompanyEyebrow>
          <h2 className="text-2xl md:text-3xl font-black leading-tight mb-5">
            Nairobi engineers building systems businesses run on.
          </h2>
          <p className="text-white/85 leading-relaxed">
            We are a Nairobi-based software engineering company. We build custom ERP systems, finance platforms, AI
            automation, e-commerce systems, and business operating systems for organisations across Kenya. Everything we
            build is production-grade, designed around how our clients actually operate, and delivered with full source
            code ownership to the client.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger className="grid sm:grid-cols-3 gap-4" staggerDelay={0.06}>
          {[
            { title: 'Production-grade', body: 'Live systems across finance, logistics, operations, and commerce — not demos.' },
            { title: 'Your workflows', body: 'We map how you operate before we write code. No forced templates.' },
            { title: 'You own it', body: 'Full source code ownership. Your competitive advantage stays yours.' },
          ].map((item) => (
            <CompanyCard key={item.title} title={item.title} body={item.body} />
          ))}
        </ScrollRevealStagger>
      </CompanyPhotoSection>

      <CompanyPhotoSection
        imageSrc={COMPANY_PAGE_IMAGES.aboutApproach}
        imageAlt="Streamlined workflow automation"
        overlay="medium"
      >
        <ScrollReveal className="max-w-3xl">
          <CompanyEyebrow>Our approach</CompanyEyebrow>
          <h2 className="text-2xl md:text-3xl font-black leading-tight mb-5">Map the business first. Build second.</h2>
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              We begin every engagement by mapping the business before touching technology. We spend time understanding
              the workflows, the decisions, the money movement, and the friction points. Only after that mapping is
              complete do we design and build.
            </p>
            <p>
              The result is systems that fit the business precisely — not systems that force the business to adapt to
              software that was never designed for it.
            </p>
          </div>
        </ScrollReveal>
      </CompanyPhotoSection>

      <CompanyCTA
        title="Dealing with something similar?"
        body="Tell us what you are facing. We will tell you honestly what we can build to fix it."
        imageSrc={COMPANY_PAGE_IMAGES.aboutCta}
        imageAlt="Nairobi connected business infrastructure"
      />

      <Footer />
    </div>
  );
}
