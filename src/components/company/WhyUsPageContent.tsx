import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  CompanyCard,
  CompanyCTA,
  CompanyDarkSection,
  CompanyEyebrow,
  CompanyHero,
  CompanyPanelSection,
  CompanyPhotoSection,
  ScrollReveal,
  ScrollRevealStagger,
} from '@/components/company/CompanyPageUI';
import { COMPANY_PAGE_IMAGES } from '@/lib/company-page-images';

const WHY_POINTS = [
  {
    title: 'We own our technology',
    body: 'The Cres Core Engine is proprietary. No licensing fees to third-party platforms, no dependency on SaaS tools that change pricing or shut down.',
  },
  {
    title: 'We start with your business, not a brief',
    body: 'Before any code is written, we understand how your business actually operates — decisions, approvals, money flows, edge cases.',
  },
  {
    title: 'We have proof in the Nairobi market',
    body: '127 active users. KES 4.97M tracked. Live systems across logistics, church management, finance, and operations.',
  },
  {
    title: 'We understand Kenyan business realities',
    body: 'M-Pesa integration. Kenyan accounting expectations. How Nairobi companies actually sell and collect.',
  },
  {
    title: 'We stay after the launch',
    body: 'Every system comes with support and a relationship. We monitor, improve, and keep systems accountable over time.',
  },
];

const DIFFERENTIATORS = [
  { icon: '🧱', title: 'System-first thinking', body: 'We start with operations and data, not a template. Every build fits your business logic and growth path.' },
  { icon: '⚡', title: 'Speed without compromise', body: 'Phased delivery so you see value early. Production-ready modules, then iteration.' },
  { icon: '📈', title: 'Revenue-focused builds', body: 'Dashboards that answer where you are and what is next — not just pretty charts.' },
  { icon: '🤝', title: 'Long-term partnership', body: 'We support, extend, and optimize. Your system evolves with your business.' },
  { icon: '🔧', title: 'In-house technical depth', body: 'Architecture, backend, integrations, and security under one roof.' },
  { icon: '🛡️', title: 'Infrastructure-level security', body: 'RBAC, audit trails, encryption, and governance from day one.' },
];

const FRAMEWORK_STEPS = [
  { step: '1', title: 'Diagnose', body: 'We map processes, data flows, pain points, and goals. No build before clarity.' },
  { step: '2', title: 'Architect', body: 'Modules, roles, integrations, and security aligned to your operations and scale.' },
  { step: '3', title: 'Build', body: 'Core first, then automation and intelligence. Each phase is production-ready.' },
  { step: '4', title: 'Integrate', body: 'Connect payments, tools, and data sources. One coherent system, not another silo.' },
  { step: '5', title: 'Optimize', body: 'Monitor, refine, and extend as you grow.' },
];

export default function WhyUsPageContent() {
  return (
    <div className="min-h-screen bg-[#060B18] text-white">
      <Header />

      <CompanyHero
        eyebrow="Why Cres Dynamics"
        title={
          <>
            Why serious businesses
            <span className="block text-[var(--teal-accent)] mt-1">choose us.</span>
          </>
        }
        subtitle="We do not build websites. We build operational systems that drive growth, visibility, and measurable business control."
        imageSrc={COMPANY_PAGE_IMAGES.whyUs}
        imageAlt="Why businesses choose Cres Dynamics"
        primaryLabel="Book strategy call"
        secondaryHref="/how-we-build"
        secondaryLabel="How we build"
      />

      <CompanyPhotoSection imageSrc={COMPANY_PAGE_IMAGES.workspace} imageAlt="Business systems workspace">
        <ScrollReveal className="max-w-3xl mb-10">
          <CompanyEyebrow>The real problem</CompanyEyebrow>
          <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4">
            Most agencies build pages. <span className="text-[var(--teal-accent)]">We build engines.</span>
          </h2>
          <p className="text-white/75 text-lg mb-8">Businesses do not fail for lack of effort. They fail because they lack systems.</p>
        </ScrollReveal>
        <ScrollRevealStagger className="grid sm:grid-cols-2 gap-3 max-w-4xl" staggerDelay={0.05}>
          {[
            'No CRM — leads live in spreadsheets and inboxes.',
            'No financial visibility — revenue and cash flow are guesswork.',
            'No automation — repetitive work burns time and creates errors.',
            'No measurable data — decisions are gut feel, not evidence.',
            'No growth structure — scaling means chaos, not control.',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/85">
              <span className="text-[var(--cres-orange-primary)] shrink-0">→</span>
              {item}
            </div>
          ))}
        </ScrollRevealStagger>
      </CompanyPhotoSection>

      <CompanyDarkSection>
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <CompanyEyebrow>Why CRES</CompanyEyebrow>
          <h2 className="text-2xl md:text-4xl font-black mb-4">Not another tech vendor. A different category.</h2>
          <p className="text-white/65 text-sm md:text-base">
            We sit at the infrastructure layer between your business and its ability to scale — when campaigns and
            templates are no longer enough.
          </p>
        </ScrollReveal>
        <ScrollRevealStagger className="grid md:grid-cols-2 gap-5" staggerDelay={0.06}>
          {WHY_POINTS.map((item) => (
            <CompanyCard key={item.title} title={item.title} body={item.body} />
          ))}
        </ScrollRevealStagger>
      </CompanyDarkSection>

      <CompanyPanelSection>
        <ScrollReveal className="mb-10">
          <CompanyEyebrow>Comparison</CompanyEyebrow>
          <h2 className="text-2xl md:text-3xl font-black">Freelancer vs agency vs Cres Dynamics</h2>
        </ScrollReveal>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-black/50 text-left">
                <th className="p-4 font-bold border-b border-white/10">Criteria</th>
                <th className="p-4 text-white/60 border-b border-white/10">Freelancer</th>
                <th className="p-4 text-white/60 border-b border-white/10">Agency</th>
                <th className="p-4 text-[var(--teal-accent)] border-b border-white/10">Cres Dynamics</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {[
                ['Deliverable', 'Pages, templates', 'Campaigns, sites', 'Systems — ERP, finance, automation'],
                ['Focus', 'Task completion', 'Aesthetics, campaigns', 'Revenue, visibility, control'],
                ['Starting point', 'Design or code', 'Creative brief', 'Structure, process, data'],
                ['Outcome', 'Handoff', 'Launch and handoff', 'System you run and extend'],
              ].map(([criteria, a, b, c]) => (
                <tr key={criteria} className="bg-black/20">
                  <td className="p-4 font-medium">{criteria}</td>
                  <td className="p-4 text-white/55">{a}</td>
                  <td className="p-4 text-white/55">{b}</td>
                  <td className="p-4 text-white/90">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CompanyPanelSection>

      <CompanyPhotoSection imageSrc={COMPANY_PAGE_IMAGES.office} imageAlt="Startup team office">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <CompanyEyebrow>What makes us different</CompanyEyebrow>
          <h2 className="text-2xl md:text-4xl font-black">Foundations, not claims.</h2>
        </ScrollReveal>
        <ScrollRevealStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
          {DIFFERENTIATORS.map((card) => (
            <CompanyCard key={card.title} icon={card.icon} title={card.title} body={card.body} />
          ))}
        </ScrollRevealStagger>
      </CompanyPhotoSection>

      <CompanyDarkSection>
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <CompanyEyebrow>The Cres Advantage</CompanyEyebrow>
          <h2 className="text-2xl md:text-4xl font-black">How we work with you</h2>
        </ScrollReveal>
        <div className="space-y-4 max-w-3xl mx-auto">
          {FRAMEWORK_STEPS.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 0.04}>
              <div className="flex gap-5 items-start rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--cres-orange-primary)]/20 text-[var(--cres-orange-primary)] font-black">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed">{item.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </CompanyDarkSection>

      <CompanyCTA
        title="If you want a website, there are many agencies."
        body="If you want a system, you are in the right place. ERP, finance, CRM, automation — designed for control, scale, and longevity."
        label="Schedule strategic call"
      />

      <Footer />
    </div>
  );
}
