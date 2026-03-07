import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions — CRES Dynamics',
  description: 'Terms and conditions governing all engagements between CRES Dynamics and its clients.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)] text-[var(--navy-primary)]">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <div
          className="text-white text-center px-6 py-16 md:py-20"
          style={{ background: 'var(--cres-gradient-bg)' }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Terms & <span style={{ color: 'var(--orange-energy)' }}>Conditions</span>
          </h1>
          <p className="text-white/90 max-w-xl mx-auto text-sm md:text-base">
            This agreement governs all engagements between CRES Dynamics and its clients. Please read carefully before proceeding.
          </p>
          <p className="text-white/70 text-xs md:text-sm mt-4">
            Effective: January 1, 2025 &nbsp;|&nbsp; Version 1.0 &nbsp;|&nbsp; cresdynamics.com
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-14">
          {/* 1. Overview */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl mb-6 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-[#E5E7EB] bg-[#fafbff]">
              <h2 className="text-lg font-bold text-[var(--navy-primary)]">1. Overview & Acceptance of Terms</h2>
            </div>
            <div className="px-6 py-7">
              <p className="text-[var(--navy-primary)]/90 text-sm md:text-base mb-4">
                <strong>CRES Dynamics</strong> is a digital innovation company operating through cresdynamics.com, specializing in custom software, ERP systems, web platforms, and AI-powered solutions.
              </p>
              <p className="text-[var(--navy-primary)]/90 text-sm md:text-base mb-4">
                By engaging our services, submitting a project inquiry, signing a proposal, or making any payment to CRES Dynamics, the client agrees to be fully bound by these Terms and Conditions.
              </p>
              <div className="bg-[#fffbeb] border border-[#fcd34d] rounded-xl p-4 md:p-5 my-4 text-sm">
                <strong>⚠️ Important:</strong> Proceeding with any service engagement constitutes full acceptance of this agreement. These terms apply to all services including websites, mobile apps, ERP systems, AI integrations, consulting, and support.
              </div>
            </div>
          </section>

          {/* 2. Scope of Services */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl mb-6 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-[#E5E7EB] bg-[#fafbff]">
              <h2 className="text-lg font-bold text-[var(--navy-primary)]">2. Scope of Services</h2>
            </div>
            <div className="px-6 py-7">
              <p className="text-[var(--navy-primary)]/90 text-sm md:text-base mb-4">
                All project scopes are defined in a <strong>Statement of Work (SOW)</strong> or signed project proposal. The SOW takes precedence over verbal agreements.
              </p>
              <ul className="terms-list space-y-0 text-sm md:text-base">
                {[
                  'Services are limited to what is outlined in the agreed SOW or proposal.',
                  'Additional features or revisions beyond agreed limits constitute a Change Request and will be separately quoted.',
                  'CRES Dynamics may subcontract portions of work to vetted third parties while maintaining full accountability.',
                  'The Client must provide required assets, credentials, and content within agreed timelines. Client-caused delays adjust project timelines accordingly.',
                ].map((item, i) => (
                  <li key={i} className="py-2 pl-6 pr-0 border-b border-[#E5E7EB] last:border-0 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--teal-accent)] before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-l-4 border-[var(--teal-accent)] bg-[#f8faff] rounded-r-lg py-3 px-4 my-4 text-sm">
                <strong>Change Request Policy:</strong> Any scope change must be submitted in writing. CRES Dynamics responds with a revised quote within 3 business days. Work begins only upon written approval and required upfront payment.
              </div>
            </div>
          </section>

          {/* 3. Payment Terms */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl mb-6 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-[#E5E7EB] bg-[#fafbff]">
              <h2 className="text-lg font-bold text-[var(--navy-primary)]">3. Payment Terms</h2>
            </div>
            <div className="px-6 py-7">
              <p className="text-[var(--navy-primary)]/90 text-sm md:text-base mb-4">
                All fees are quoted in <strong>KES, ZAR or USD</strong> as specified in the proposal. Quoted prices exclude VAT unless stated otherwise.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[var(--navy-dark)] text-white">
                      <th className="p-3 text-left font-semibold">Project Type</th>
                      <th className="p-3 text-left font-semibold">Deposit</th>
                      <th className="p-3 text-left font-semibold">Milestone</th>
                      <th className="p-3 text-left font-semibold">Final</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--navy-primary)]/90">
                    <tr className="border-b border-[#E5E7EB]"><td className="p-3">Website / Web App</td><td className="p-3">50% upfront</td><td className="p-3">—</td><td className="p-3">50% on delivery</td></tr>
                    <tr className="border-b border-[#E5E7EB]"><td className="p-3">ERP / Enterprise System</td><td className="p-3">40% upfront</td><td className="p-3">30% at mid-point</td><td className="p-3">30% on delivery</td></tr>
                    <tr className="border-b border-[#E5E7EB]"><td className="p-3">AI System / Integration</td><td className="p-3">50% upfront</td><td className="p-3">25% at testing</td><td className="p-3">25% on handover</td></tr>
                    <tr className="border-b border-[#E5E7EB]"><td className="p-3">Monthly Retainer</td><td className="p-3">1st month upfront</td><td className="p-3">—</td><td className="p-3">1st of each month</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-[#fef2f2] border border-[#fca5a5] rounded-xl p-4 my-4 text-sm text-[#7f1d1d]">
                <strong>🔴 Late Payment:</strong> Invoices unpaid after 7 days attract 2% monthly interest. After 30 days, CRES Dynamics may suspend services, withhold deliverables, and pursue legal recovery.
              </div>
              <ul className="terms-list space-y-0 text-sm md:text-base">
                {[
                  <>Refunds: Deposits are non-refundable once development commences. Cancellation after work starts incurs charges proportional to work completed.</>,
                  <>Payment Methods: EFT, M-Pesa, PayFast, PayPal, Stripe, or any method agreed in writing.</>,
                  <>Disputed Invoices: Must be raised in writing within 5 business days. Undisputed amounts remain due regardless.</>,
                  <>Third-party Costs: Hosting, domain, and API fees are billed separately or included at cost.</>,
                ].map((item, i) => (
                  <li key={i} className="py-2 pl-6 pr-0 border-b border-[#E5E7EB] last:border-0 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--teal-accent)] before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-[#f0fdf4] border border-[#86efac] rounded-xl p-4 my-4 text-sm text-[#14532d]">
                <strong>✅ Our Commitment:</strong> A full cost breakdown is provided before work begins. No hidden fees. No surprise invoices.
              </div>
            </div>
          </section>

          {/* 4. IP */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl mb-6 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-[#E5E7EB] bg-[#fafbff]">
              <h2 className="text-lg font-bold text-[var(--navy-primary)]">4. Intellectual Property Rights</h2>
            </div>
            <div className="px-6 py-7">
              <div className="border-l-4 border-[var(--teal-accent)] bg-[#f8faff] rounded-r-lg py-3 px-4 my-4 text-sm">
                <strong>Client-Owned IP:</strong> Upon full and final payment, the Client receives full ownership of all custom code, designs, and deliverables created specifically for their project.
              </div>
              <div className="border-l-4 border-[var(--teal-accent)] bg-[#f8faff] rounded-r-lg py-3 px-4 my-4 text-sm">
                <strong>CRES Dynamics Retained IP:</strong> CRES Dynamics retains ownership of proprietary frameworks, libraries, and pre-existing code. A royalty-free license to use these within the delivered project is granted to the Client.
              </div>
              <ul className="terms-list space-y-0 text-sm md:text-base">
                {[
                  'The Client warrants that all provided assets and content are owned by the Client or used with proper authorization.',
                  'CRES Dynamics may display completed projects in its portfolio unless the Client requests confidentiality in writing prior to commencement.',
                  'IP transfers only upon full payment settlement — no partial IP transfers apply.',
                ].map((item, i) => (
                  <li key={i} className="py-2 pl-6 pr-0 border-b border-[#E5E7EB] last:border-0 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--teal-accent)] before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. Confidentiality */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl mb-6 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-[#E5E7EB] bg-[#fafbff]">
              <h2 className="text-lg font-bold text-[var(--navy-primary)]">5. Confidentiality & Non-Disclosure (NDA)</h2>
            </div>
            <div className="px-6 py-7">
              <p className="text-[var(--navy-primary)]/90 text-sm md:text-base mb-4">
                Both parties may be exposed to proprietary or sensitive information during the engagement. Both parties agree to mutual confidentiality obligations.
              </p>
              <ul className="terms-list space-y-0 text-sm md:text-base">
                {[
                  <>Confidential Information includes: business strategies, source code, product roadmaps, client databases, financial data, system architecture, and any information marked confidential.</>,
                  <>Obligation: Neither party shall disclose, reproduce, or use the other party&apos;s confidential information outside the agreed scope without prior written consent.</>,
                  <>Duration: Confidentiality obligations remain in force for 3 years from engagement conclusion, unless a separate NDA specifies otherwise.</>,
                  <>Exclusions: Publicly available information, independently developed information, or legally required disclosures are excluded.</>,
                  <>Team Members: All CRES Dynamics employees and subcontractors working on client projects are bound by equivalent confidentiality obligations.</>,
                ].map((item, i) => (
                  <li key={i} className="py-2 pl-6 pr-0 border-b border-[#E5E7EB] last:border-0 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--teal-accent)] before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-[#fffbeb] border border-[#fcd34d] rounded-xl p-4 my-4 text-sm">
                <strong>📜 Standalone NDA:</strong> For enterprise clients or highly sensitive projects, contact <strong>legal@cresdynamics.com</strong> to execute a standalone signed NDA before sharing business-critical information.
              </div>
              <div className="border-l-4 border-[var(--teal-accent)] bg-[#f8faff] rounded-r-lg py-3 px-4 my-4 text-sm">
                <strong>Breach:</strong> Unauthorized disclosure constitutes a material breach entitling the affected party to seek immediate injunctive relief and damages.
              </div>
            </div>
          </section>

          {/* 6. Data Protection */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl mb-6 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-[#E5E7EB] bg-[#fafbff]">
              <h2 className="text-lg font-bold text-[var(--navy-primary)]">6. Data Protection & Security</h2>
            </div>
            <div className="px-6 py-7">
              <p className="text-[var(--navy-primary)]/90 text-sm md:text-base mb-4">
                CRES Dynamics complies with applicable data protection laws including the <strong>Kenya Data Protection Act</strong> and, where applicable, the <strong>GDPR</strong>.
              </p>
              <ul className="terms-list space-y-0 text-sm md:text-base">
                {[
                  'Data Minimization: We collect only data necessary to deliver agreed services.',
                  'Secure Storage: Client data is stored on encrypted servers accessible only to authorized personnel.',
                  'No Selling of Data: We never sell, trade, or share client data for commercial purposes.',
                  'Access Credentials: Any credentials shared with CRES Dynamics are used solely for project purposes and deleted or returned upon completion.',
                  'Breach Notification: We notify affected clients within 72 hours of becoming aware of a data breach.',
                  'Client Responsibilities: Clients are responsible for their own system security. We are not liable for breaches resulting from client-side failures.',
                ].map((item, i) => (
                  <li key={i} className="py-2 pl-6 pr-0 border-b border-[#E5E7EB] last:border-0 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--teal-accent)] before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-l-4 border-[var(--teal-accent)] bg-[#f8faff] rounded-r-lg py-3 px-4 my-4 text-sm">
                <strong>Data Processing:</strong> Where CRES Dynamics builds systems processing end-user personal data, the Client acts as Data Controller and CRES Dynamics as Data Processor. A Data Processing Agreement (DPA) will be executed for such engagements.
              </div>
            </div>
          </section>

          {/* 7. Delivery & Timelines */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl mb-6 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-[#E5E7EB] bg-[#fafbff]">
              <h2 className="text-lg font-bold text-[var(--navy-primary)]">7. Project Delivery & Timelines</h2>
            </div>
            <div className="px-6 py-7">
              <p className="text-[var(--navy-primary)]/90 text-sm md:text-base mb-4">
                Timelines are agreed in the project proposal. CRES Dynamics makes every reasonable effort to meet deadlines, which are estimates unless explicitly stated as hard deadlines in the SOW.
              </p>
              <ul className="terms-list space-y-0 text-sm md:text-base">
                {[
                  'Client Delays: Failure to provide content, feedback, or approvals within agreed timeframes adjusts the project timeline accordingly.',
                  'Revisions: Projects include revision rounds as defined in the proposal. Additional revisions are billed at our hourly rate.',
                  'Acceptance Testing: The Client has 7 business days post-delivery to test and provide feedback. Silence after this period constitutes acceptance.',
                  'Handover: Final files, source code, and documentation are delivered upon receipt of final payment.',
                  'Force Majeure: We are not liable for delays caused by events beyond our reasonable control.',
                ].map((item, i) => (
                  <li key={i} className="py-2 pl-6 pr-0 border-b border-[#E5E7EB] last:border-0 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--teal-accent)] before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 8. Warranties & Liability */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl mb-6 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-[#E5E7EB] bg-[#fafbff]">
              <h2 className="text-lg font-bold text-[var(--navy-primary)]">8. Warranties & Limitation of Liability</h2>
            </div>
            <div className="px-6 py-7">
              <p className="text-[var(--navy-primary)]/90 text-sm md:text-base mb-4">
                CRES Dynamics warrants all services will be performed with reasonable skill and care, and deliverables will materially conform to agreed specifications at delivery.
              </p>
              <div className="border-l-4 border-[var(--teal-accent)] bg-[#f8faff] rounded-r-lg py-3 px-4 my-4 text-sm">
                <strong>Bug Warranty:</strong> We provide a <strong>30-day post-delivery warranty</strong> for bugs directly related to our work. Bugs from third-party changes, client modifications, or hosting environment issues are excluded.
              </div>
              <div className="bg-[#fef2f2] border border-[#fca5a5] rounded-xl p-4 my-4 text-sm text-[#7f1d1d]">
                <strong>🔴 Limitation of Liability:</strong> CRES Dynamics&apos; total liability shall not exceed the total fees paid by the Client for the specific project. We are not liable for indirect, consequential, or loss-of-profit damages.
              </div>
              <ul className="terms-list space-y-0 text-sm md:text-base">
                {[
                  'We do not guarantee specific business outcomes, revenue, or performance metrics for any product built.',
                  'We do not warrant uninterrupted operation of software once the client controls hosting and infrastructure.',
                  'Third-party integrations are subject to their own terms. We are not liable for third-party failures or policy changes.',
                ].map((item, i) => (
                  <li key={i} className="py-2 pl-6 pr-0 border-b border-[#E5E7EB] last:border-0 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--teal-accent)] before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 9. Termination */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl mb-6 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-[#E5E7EB] bg-[#fafbff]">
              <h2 className="text-lg font-bold text-[var(--navy-primary)]">9. Termination of Agreement</h2>
            </div>
            <div className="px-6 py-7">
              <ul className="terms-list space-y-0 text-sm md:text-base">
                {[
                  'By Client: 14 days written notice required. The Client remains liable for all work completed and costs incurred up to termination.',
                  'By CRES Dynamics: 14 days written notice if the Client breaches terms, fails to pay, or makes continuation unreasonable.',
                  'Immediate Termination: Either party may terminate immediately for material breach including non-payment, confidentiality violation, or fraud.',
                  <>Upon Termination: Each party returns or destroys the other&apos;s confidential information. Outstanding payments become immediately due.</>,
                  'Surviving Clauses: Confidentiality, IP ownership, payment obligations, and liability limitations survive termination.',
                ].map((item, i) => (
                  <li key={i} className="py-2 pl-6 pr-0 border-b border-[#E5E7EB] last:border-0 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--teal-accent)] before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 10. Dispute Resolution */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl mb-6 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-[#E5E7EB] bg-[#fafbff]">
              <h2 className="text-lg font-bold text-[var(--navy-primary)]">10. Dispute Resolution</h2>
            </div>
            <div className="px-6 py-7">
              <ul className="terms-list space-y-0 text-sm md:text-base">
                {[
                  'Step 1 — Negotiation: Written notice of dispute. 14 days to resolve through direct negotiation.',
                  'Step 2 — Mediation: If unresolved, non-binding mediation by a mutually agreed mediator within 30 days.',
                  'Step 3 — Legal: Referral to a competent court or arbitration as agreed.',
                ].map((item, i) => (
                  <li key={i} className="py-2 pl-6 pr-0 border-b border-[#E5E7EB] last:border-0 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--teal-accent)] before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-l-4 border-[var(--teal-accent)] bg-[#f8faff] rounded-r-lg py-3 px-4 my-4 text-sm">
                <strong>Governing Law:</strong> This agreement is governed by the laws of the Republic of Kenya. International clients are governed by Kenyan law unless otherwise agreed in writing.
              </div>
            </div>
          </section>

          {/* 11. AI Special Provisions */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl mb-6 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-[#E5E7EB] bg-[#fafbff]">
              <h2 className="text-lg font-bold text-[var(--navy-primary)]">11. AI Systems Special Provisions</h2>
            </div>
            <div className="px-6 py-7">
              <p className="text-[var(--navy-primary)]/90 text-sm md:text-base mb-4">
                Additional terms applying to all AI-related products and services:
              </p>
              <ul className="terms-list space-y-0 text-sm md:text-base">
                {[
                  'No Guaranteed Outcomes: AI systems are probabilistic. CRES Dynamics does not guarantee accuracy rates or prediction results.',
                  'Human Oversight Required: Clients using AI for consequential decisions must ensure appropriate human oversight.',
                  'Bias Disclaimer: AI models may reflect biases in training data. Clients must conduct their own fairness assessments for regulated use cases.',
                  'Client Data for Training: Unless explicitly agreed, client-specific data will not be used to train AI models beyond the scope of the delivered product.',
                  'Regulatory Compliance: Clients are responsible for ensuring AI usage complies with applicable AI regulations.',
                ].map((item, i) => (
                  <li key={i} className="py-2 pl-6 pr-0 border-b border-[#E5E7EB] last:border-0 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--teal-accent)] before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-[#fffbeb] border border-[#fcd34d] rounded-xl p-4 my-4 text-sm">
                <strong>⚠️ AI Users:</strong> By using AI-powered services you agree that CRES Dynamics may process data as Data Processor. A DPA must be signed where required before processing personal information.
              </div>
            </div>
          </section>

          {/* 12. General Provisions */}
          <section className="bg-white border border-[#E5E7EB] rounded-2xl mb-6 overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-[#E5E7EB] bg-[#fafbff]">
              <h2 className="text-lg font-bold text-[var(--navy-primary)]">12. General Provisions</h2>
            </div>
            <div className="px-6 py-7">
              <ul className="terms-list space-y-0 text-sm md:text-base">
                {[
                  'Entire Agreement: These T&Cs and any signed SOW constitute the entire agreement, superseding all prior communications.',
                  'Amendments: CRES Dynamics may update these terms with 14 days notice. Continued engagement constitutes acceptance.',
                  'Severability: If any clause is unenforceable, remaining clauses continue in full force.',
                  'No Waiver: Failure to enforce any provision does not waive the right to enforce it in future.',
                  'Independent Contractor: CRES Dynamics operates as an independent contractor. No employment, partnership, or agency relationship is created.',
                  'Non-Solicitation: Clients may not directly solicit or hire CRES Dynamics team members who worked on their project for 12 months after project completion.',
                  'Communication: Formal communications must be in writing via email or registered mail.',
                ].map((item, i) => (
                  <li key={i} className="py-2 pl-6 pr-0 border-b border-[#E5E7EB] last:border-0 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--teal-accent)] before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Signature block */}
          <div
            className="rounded-2xl p-6 md:p-8 mb-8 text-white"
            style={{ background: 'var(--navy-dark)' }}
          >
            <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--orange-energy)' }}>Agreement Acknowledgement</h3>
            <p className="text-white/80 text-sm mb-6">By signing below, both parties confirm they have read, understood, and agree to be bound by these Terms and Conditions.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <label className="text-[11px] text-white/60 uppercase tracking-wider block mb-2">For and on behalf of CRES Dynamics</label>
                <div className="border-b border-white/20 h-9 mb-2" />
                <span className="text-xs text-white/60">Authorized Signatory | cresdynamics.com</span>
                <span className="text-xs text-white/60 block mt-2">Date: ___________________</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <label className="text-[11px] text-white/60 uppercase tracking-wider block mb-2">For and on behalf of the Client</label>
                <div className="border-b border-white/20 h-9 mb-2" />
                <span className="text-xs text-white/60">Full Name: ___________________</span>
                <span className="text-xs text-white/60 block">Company: ___________________</span>
                <span className="text-xs text-white/60 block mt-2">Date: ___________________</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
