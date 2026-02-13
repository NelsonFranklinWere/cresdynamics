export default function Footer() {
  return (
    <footer className="bg-[var(--cres-deep-navy)] border-t border-[var(--cres-charcoal)]/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">

          {/* COLUMN 1 — BRAND */}
          <div className="lg:col-span-1">
            <div className="text-xl font-black text-[var(--cres-white)] mb-3">
              CRES<span className="text-[var(--cres-electric-teal)]"> Dynamics</span>
            </div>
            <p className="text-[var(--cres-white)] font-semibold text-sm mb-2">
              Business Systems That Run Companies
            </p>
            <p className="text-gray-300 text-xs mb-2">
              ERPs, finance platforms, and automation systems designed for scale, visibility, and control.
            </p>
            <p className="text-[var(--cres-electric-teal)] text-xs font-medium italic">
              CRES Dynamics is a systems engineering company that builds ERP platforms, financial infrastructure, and automation systems that enable businesses to operate with visibility, control, and scale.
            </p>
          </div>

          {/* COLUMN 2-4 — ERP Systems • Finance Platforms • Automation • Governance */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div>
              <h3 className="text-[var(--cres-white)] font-bold text-sm mb-4">ERP Systems</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/cresos" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs">
                    CresOS
                  </a>
                </li>
                <li>
                  <a href="/erp" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs">
                    Custom ERP
                  </a>
                </li>
                <li>
                  <a href="/how-we-build" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs">
                    How We Build
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[var(--cres-white)] font-bold text-sm mb-4">Finance Platforms</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/solutions/digital-sales" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs">
                    Finance & Revenue Systems
                  </a>
                </li>
                <li>
                  <a href="/case-studies" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs">
                    Case Proof
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[var(--cres-white)] font-bold text-sm mb-4">Automation Infrastructure</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/solutions/ai-automation" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs">
                    AI & Automation
                  </a>
                </li>
                <li>
                  <a href="/solutions/web-growth" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs">
                    Operations & Workflow
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[var(--cres-white)] font-bold text-sm mb-4">Governance & Security</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/how-we-build#security" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs">
                    Security & Governance
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* COLUMN 4 — CONTACT & ACTION */}
          <div className="lg:col-span-1">
            <h3 className="text-[var(--cres-white)] font-bold text-sm mb-4">Get in Touch</h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-[var(--cres-electric-teal)] text-xs">📧</span>
                <a href="mailto:info@cresdynamics.com" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs">
                  info@cresdynamics.com
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-[var(--cres-electric-teal)] text-xs">📞</span>
                <a href="tel:0708805496" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs">
                  0708 805 496
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-[var(--cres-electric-teal)] text-xs">📞</span>
                <a href="tel:0743869564" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs">
                  0743 869 564
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://x.com/cresdynamics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200"
                aria-label="Follow us on X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cresdynamics?igsh=MWN1M2xnOTlkc2huYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            <a
              href="/contact"
              className="inline-block bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold py-1.5 px-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs"
            >
              Book a Systems Discovery Session
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="border-t border-[var(--cres-charcoal)]/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-xs">
              © 2026 CRES Dynamics. All rights reserved.
            </p>
            <p className="text-[var(--cres-electric-teal)] text-xs font-medium">
              Business systems that companies actually run on.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
