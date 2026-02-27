export default function Footer() {
  const linkClass =
    'text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors duration-200 text-xs block py-0.5';
  const headingClass = 'text-[var(--cres-white)] font-bold text-sm mb-4';

  return (
    <footer className="bg-[var(--cres-deep-navy)] border-t border-[var(--cres-charcoal)]/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-6">
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
          </div>

          {/* GET STARTED */}
          <div>
            <h3 className={headingClass}>Get Started</h3>
            <ul className="space-y-1">
              <li><a href="/pricing" className={linkClass}>Pricing</a></li>
              <li><a href="/book-strategy-call" className={linkClass}>Book Strategy Call</a></li>
              <li><a href="/contact" className={linkClass}>Contact</a></li>
              <li><a href="/how-we-build" className={linkClass}>How We Build</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className={headingClass}>Services</h3>
            <ul className="space-y-1">
              <li><a href="/websites" className={linkClass}>Websites</a></li>
              <li><a href="/erp" className={linkClass}>Custom ERP</a></li>
              <li><a href="/cresos" className={linkClass}>Cres OS</a></li>
              <li><a href="/e-commerce" className={linkClass}>E-commerce Systems</a></li>
              <li><a href="/finance-platforms" className={linkClass}>Finance Platforms</a></li>
              <li><a href="/ai-automation" className={linkClass}>AI &amp; Automation</a></li>
              <li><a href="/operations-workflow" className={linkClass}>Operations &amp; Workflow Systems</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className={headingClass}>Company</h3>
            <ul className="space-y-1">
              <li><a href="/about" className={linkClass}>About Us</a></li>
              <li><a href="/who-we-are" className={linkClass}>Who We Are</a></li>
              <li><a href="/why-us" className={linkClass}>Why Us</a></li>
              <li><a href="/careers" className={linkClass}>Careers</a></li>
              <li><a href="/finance-revenue-philosophy" className={linkClass}>Finance &amp; Revenue Philosophy</a></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className={headingClass}>Resources</h3>
            <ul className="space-y-1">
              <li><a href="/projects" className={linkClass}>Projects</a></li>
              <li><a href="/insights" className={linkClass}>Insights / Blog</a></li>
              <li><a href="/case-studies" className={linkClass}>Case Studies</a></li>
              <li><a href="/growth-guides" className={linkClass}>Growth Guides</a></li>
            </ul>
          </div>

          {/* CONTACT & LEGAL */}
          <div>
            <h3 className={headingClass}>Contact Us</h3>
            <p className="text-gray-400 text-xs mb-3">
              Reach out to discuss your system needs. We respond within 24 hours.
            </p>
            <div className="space-y-2 mb-4">
              <a href="tel:+254708805496" className={linkClass}>+254 708 805 496</a>
              <a href="tel:+254743869564" className={linkClass}>+254 743 869 564</a>
              <a href="mailto:info@cresdynamics.com" className={linkClass}>info@cresdynamics.com</a>
              <span className="text-gray-300 text-xs block">Kivuli Tower, 3rd Floor Westlands, Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <a href="https://x.com/cresdynamics" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors" aria-label="X (Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.instagram.com/cresdynamics?igsh=MWN1M2xnOTlkc2huYQ==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--cres-electric-teal)] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
            <h3 className={headingClass}>Legal</h3>
            <ul className="space-y-1">
              <li><a href="/privacy" className={linkClass}>Privacy Policy</a></li>
              <li><a href="/terms" className={linkClass}>Terms</a></li>
              <li><a href="/data-security" className={linkClass}>Data &amp; Security</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--cres-charcoal)]/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-xs">© 2026 CRES Dynamics. All rights reserved.</p>
            <p className="text-[var(--cres-electric-teal)] text-xs font-medium">Business systems that companies actually run on.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
