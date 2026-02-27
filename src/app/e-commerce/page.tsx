import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ECommercePage() {
  const whoItsFor = [
    'Retailers and distributors selling online or via WhatsApp',
    'Brands with a product catalog and recurring orders',
    'Businesses that need Mpesa, card, or bank reconciliation in one place',
    'Teams ready to move off spreadsheets and DMs into a real order and inventory system',
  ];

  const painPoints = [
    {
      title: 'Orders live in WhatsApp and DMs',
      body: 'You can’t scale when every order is a chat. No single view of what sold, who paid, or what’s pending. Follow-ups and disputes eat time.',
    },
    {
      title: 'No real-time view of inventory',
      body: 'Selling the same stock on website, WhatsApp, and walk-ins leads to overselling or manual “is it available?” checks. Stock counts are guesses.',
    },
    {
      title: 'Mpesa and payments are a mess',
      body: 'Payments land in personal till, business till, and bank. Matching payments to orders and reconciling at month-end is manual and error-prone.',
    },
    {
      title: 'Customer and order history are scattered',
      body: 'Repeat buyers have no profile. You can’t see order history, preferences, or loyalty without digging through chats and sheets.',
    },
    {
      title: 'Reporting is manual or missing',
      body: 'Revenue by product, channel, or period isn’t at your fingertips. Decisions are based on gut feel, not data.',
    },
  ];

  const solutions = [
    {
      title: 'Single product catalog',
      body: 'One source of truth for products, prices, and stock. Use it on your website, in order forms, and—when we integrate—in CresOS or your ERP.',
    },
    {
      title: 'Structured orders, not chat threads',
      body: 'Orders created as records: customer, items, amounts, status. Track pending, confirmed, paid, and fulfilled without scrolling through messages.',
    },
    {
      title: 'Mpesa and payment tracking',
      body: 'Link payments to orders, reconcile against Mpesa statements, and keep business and personal money clearly separated. Less guesswork at month-end.',
    },
    {
      title: 'Customer profiles and history',
      body: 'Each customer has a record: contact details, order history, and preferences. Support repeat sales and better service without digging through DMs.',
    },
    {
      title: 'Reports that drive decisions',
      body: 'Sales by product, channel, and time period. Stock movement and low-stock alerts. Data you can use weekly, not only at audit time.',
    },
    {
      title: 'Integration with CresOS and ERP',
      body: 'When you grow into operations, workflow, or full ERP, your e-commerce layer can sit inside the same platform—one login, one data model.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cres-primary-bg)] via-[#0D1B2A] to-[#020611]" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              <span className="text-[var(--cres-orange-primary)]">E-Commerce</span> Built for How You Sell
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Product structure, inventory clarity, payment flow, conversion strategy, mobile optimization, abandoned-cart handling. One business-ready platform. Outcome: turn traffic into predictable revenue.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide">
              Discuss your store
            </Link>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 text-center">
              Who This Is <span className="text-[var(--cres-orange-primary)]">For</span>
            </h2>
            <p className="text-white/70 text-center mb-10 max-w-2xl mx-auto">
              E-commerce and order systems for Kenyan businesses that sell products and need more than a simple website.
            </p>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {whoItsFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <span className="text-[var(--cres-orange-primary)] mt-1 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 text-center">
              The <span className="text-[var(--cres-orange-primary)]">Pain</span> of Selling Without a System
            </h2>
            <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              These are the operational and financial pains we solve with a proper e-commerce and order system.
            </p>
            <ul className="space-y-6">
              {painPoints.map((item, i) => (
                <li key={i} className="bg-black/40 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="relative py-16 md:py-20 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 text-center">
              What We <span className="text-[var(--cres-orange-primary)]">Deliver</span>
            </h2>
            <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              A business-focused e-commerce layer: catalog, orders, payments, customers, and reporting—with a path to CresOS or full ERP when you need it.
            </p>
            <ul className="space-y-6">
              {solutions.map((item, i) => (
                <li key={i} className="bg-black/40 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* INTEGRATION / FIT */}
        <section className="relative py-16 bg-[var(--cres-primary-bg)]">
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-4">
            <h2 className="text-xl md:text-2xl font-black text-white">
              From Store to Full Business System
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Start with e-commerce and order management. When you’re ready for operations, workflow, finance, or full ERP, we build on the same platform—CresOS and custom ERP—so your store isn’t an island. One data model, one place to run the business.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide mt-4">
              Talk to us about your setup
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 bg-[var(--cres-secondary-bg)]">
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <p className="text-white/80 mb-6">Ready to move off WhatsApp and spreadsheets into a real e-commerce system?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide">
              Book a discovery
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
