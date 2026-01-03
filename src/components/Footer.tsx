export default function Footer() {
  return (
    <footer className="bg-[var(--cres-deep-navy)] border-t border-[var(--cres-charcoal)]/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

          {/* COLUMN 1 — BRAND */}
          <div className="col-span-2 lg:col-span-1">
            <div className="text-2xl font-black text-[var(--cres-white)] mb-4">
              CRES<span className="text-[var(--cres-electric-teal)]"> Dynamics</span>
            </div>
            <p className="text-[var(--cres-white)] font-semibold mb-3">
              Smart Websites, SEO & AI Automation
            </p>
            <p className="text-gray-300 text-sm mb-3">
              Built to help businesses get found, convert, and scale.
            </p>
            <p className="text-[var(--cres-electric-teal)] text-sm font-medium italic">
              Turning digital chaos into measurable growth.
            </p>
          </div>

          {/* COLUMN 2 — SOLUTIONS */}
          <div>
            <h3 className="text-[var(--cres-white)] font-bold text-base md:text-lg mb-4 md:mb-6">Solutions</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="/solutions/web-growth" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs md:text-sm">
                  Website Development
                </a>
              </li>
              <li>
                <a href="/solutions/seo-visibility" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs md:text-sm">
                  SEO & Google Visibility
                </a>
              </li>
              <li>
                <a href="/solutions/ai-automation" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs md:text-sm">
                  AI & Sales Automation
                </a>
              </li>
              <li>
                <a href="/solutions/digital-sales" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs md:text-sm">
                  WhatsApp Business Systems
                </a>
              </li>
              <li>
                <a href="/solutions/web-growth" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs md:text-sm">
                  Conversion Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — COMPANY */}
          <div>
            <h3 className="text-[var(--cres-white)] font-bold text-base md:text-lg mb-4 md:mb-6">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs md:text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs md:text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs md:text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/insights" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs md:text-sm">
                  Insights
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs md:text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 — CONTACT & ACTION */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-[var(--cres-white)] font-bold text-base md:text-lg mb-4 md:mb-6">Get in Touch</h3>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-center space-x-2 md:space-x-3">
                <span className="text-[var(--cres-electric-teal)]">📧</span>
                <a href="mailto:info@cresdynamics.com" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs md:text-sm">
                  info@cresdynamics.com
                </a>
              </div>

              <div className="flex items-center space-x-2 md:space-x-3">
                <span className="text-[var(--cres-electric-teal)]">📞</span>
                <a href="tel:0708805496" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs md:text-sm">
                  0708 805 496
                </a>
              </div>

              <div className="flex items-center space-x-2 md:space-x-3">
                <span className="text-[var(--cres-electric-teal)]">📞</span>
                <a href="tel:0743869564" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs md:text-sm">
                  0743 869 564
                </a>
              </div>
            </div>

            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs md:text-sm"
            >
              Book a Free Strategy Session
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="border-t border-[var(--cres-charcoal)]/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-xs md:text-sm">
              © 2026 CRES Dynamics. All rights reserved.
            </p>
            <p className="text-[var(--cres-electric-teal)] text-xs md:text-sm font-medium">
              Built for businesses that want growth — not guesswork.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
