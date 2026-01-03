'use client';

import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[var(--cres-black)]/95 to-[var(--cres-dark)]/95 backdrop-blur-xl border-b border-[var(--cres-charcoal)]/50">
      <nav className="max-w-7xl mx-auto px-3 md:px-4 py-2 md:py-3 flex items-center justify-between">
        {/* LOGO: Cres Dynamics */}
        <div className="flex items-center space-x-1 md:space-x-2">
          <img
            src="/logo.png"
            alt="Cres Dynamics Logo"
            className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover"
          />
          <span className="text-[var(--cres-white)] font-bold text-xs md:text-sm uppercase tracking-wide">
            <span className="font-black">CRES</span> Dynamics
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[var(--cres-white)] hover:bg-white/10 rounded-lg transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* NAV LINKS: Muted white → Orange hover, compact spacing */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a
              href="/"
              className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              Home
            </a>
          </li>

          {/* Solutions Dropdown */}
          <li className="relative">
            <button
              onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
              onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
              className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 flex items-center space-x-1"
            >
              <span>Solutions</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isSolutionsDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-[var(--cres-black)] border border-[var(--cres-charcoal)] rounded-lg shadow-xl z-50"
                onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
                onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
              >
                <div className="py-2">
                  {[
                    { name: 'Web Growth Systems', href: '/solutions/web-growth', icon: '🌐' },
                    { name: 'AI & Automation', href: '/solutions/ai-automation', icon: '🤖' },
                    { name: 'SEO & Online Visibility', href: '/solutions/seo-visibility', icon: '🔍' },
                    { name: 'Digital Sales Systems', href: '/solutions/digital-sales', icon: '💰' },
                    { name: 'Content & Brand Authority', href: '/solutions/content-brand', icon: '📝' },
                    { name: 'Consulting & Strategy', href: '/solutions/consulting-strategy', icon: '🎯' }
                  ].map((solution) => (
                    <a
                      key={solution.href}
                      href={solution.href}
                      className="flex items-center px-4 py-3 text-[var(--cres-white)] hover:bg-[var(--cres-dark)] hover:text-[var(--cres-electric-teal)] transition-all duration-200"
                    >
                      <span className="text-sm font-medium">{solution.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <a
              href="/case-studies"
              className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              Case Studies
            </a>
          </li>

          <li>
            <a
              href="/about"
              className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/insights"
              className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              Insights
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* CTA BUTTON: Book a Free Consultation → Orange, rounded-xl, shadow */}
        <a href="/contact" className="hidden md:block bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-[var(--cres-black)] font-bold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-xs uppercase tracking-wide">
          Book Free Consultation
        </a>

      </nav>

      {/* Mobile Menu Sliding Panel */}
      <div className={`md:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 bg-[var(--cres-light-grey)] backdrop-blur-xl border-l border-white/20 transform transition-transform duration-300 ease-in-out z-50 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-6 px-6 py-8">
          {/* Home */}
          <a
            href="/"
            className="text-gray-800 text-xl font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 py-2 border-b border-gray-200 hover:border-[var(--cres-orange-primary)]"
            style={{ animationDelay: '0ms' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>

          {/* Solutions Dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
              className="flex items-center justify-between text-gray-800 text-xl font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 py-2 border-b border-gray-200 hover:border-[var(--cres-orange-primary)]"
              style={{ animationDelay: '100ms' }}
            >
              <span>Solutions</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Solutions Dropdown Items */}
            <div className={`ml-4 mt-2 space-y-3 overflow-hidden transition-all duration-300 ${
              isMobileSolutionsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              {[
                { name: 'Web Development', href: '/solutions/web-growth' },
                { name: 'SEO & Visibility', href: '/solutions/seo-visibility' },
                { name: 'AI & Automation', href: '/solutions/ai-automation' },
                { name: 'WhatsApp Systems', href: '/solutions/digital-sales' },
                { name: 'Content Strategy', href: '/solutions/content-brand' },
              ].map((solution, subIndex) => (
                <a
                  key={solution.href}
                  href={solution.href}
                  className="block text-gray-700 text-lg font-medium hover:text-[var(--cres-orange-primary)] transition-all duration-300 py-1 pl-4 border-l-2 border-transparent hover:border-[var(--cres-orange-primary)]"
                  style={{ animationDelay: `${(subIndex + 1) * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {solution.name}
                </a>
              ))}
            </div>
          </div>

          {/* Other Menu Items */}
          {[
            { name: 'Case Studies', href: '/case-studies' },
            { name: 'About', href: '/about' },
            { name: 'Insights', href: '/insights' },
            { name: 'Contact', href: '/contact' }
          ].map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-800 text-xl font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 py-2 border-b border-gray-200 hover:border-[var(--cres-orange-primary)]"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="absolute bottom-8 left-6 right-6">
          <a
            href="/contact"
            className="block w-full bg-[var(--cres-orange-primary)] hover:bg-[#E87528] text-[var(--cres-black)] font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center uppercase tracking-wide"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Free Consultation
          </a>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30 cursor-pointer"
          onClick={(e) => {
            // Only close if clicking directly on backdrop (not on menu panel)
            if (e.target === e.currentTarget) {
              setIsMobileMenuOpen(false);
              setIsMobileSolutionsOpen(false);
            }
          }}
        />
      )}
    </header>
  );
}
