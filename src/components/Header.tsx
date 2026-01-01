'use client';

import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[var(--cres-black)]/95 to-[var(--cres-dark)]/95 backdrop-blur-xl border-b border-[var(--cres-charcoal)]/50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO: Cres Dynamics - White, Bold, 24px, No underline */}
        <div className="text-2xl font-black text-[var(--cres-white)] tracking-tight">
          Cres<span className="text-[var(--cres-orange-primary)]">Dynamics</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--cres-white)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* NAV LINKS: Muted white → Orange hover, 16px Inter, uppercase */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="/"
              className="text-[var(--cres-muted)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              Home
            </a>
          </li>

          {/* Solutions Dropdown */}
          <li className="relative">
            <button
              onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
              onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
              className="text-[var(--cres-muted)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 flex items-center space-x-1"
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
                      className="flex items-center space-x-3 px-4 py-3 text-[var(--cres-light)] hover:bg-[var(--cres-dark)] hover:text-[var(--cres-electric-teal)] transition-all duration-200"
                    >
                      <span className="text-lg">{solution.icon}</span>
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
              className="text-[var(--cres-muted)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              Case Studies
            </a>
          </li>

          <li>
            <a
              href="#how-it-works"
              className="text-[var(--cres-muted)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              How It Works
            </a>
          </li>

          <li>
            <a
              href="/case-studies"
              className="text-[var(--cres-muted)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              Case Studies
            </a>
          </li>

          <li>
            <a
              href="/about"
              className="text-[var(--cres-muted)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              About Cres
            </a>
          </li>

          <li>
            <a
              href="/insights"
              className="text-[var(--cres-muted)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              Insights
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="text-[var(--cres-muted)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* CTA BUTTON: Book a Free Consultation → Orange, rounded-xl, shadow */}
        <a href="#book-session" className="hidden md:block bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-[var(--cres-black)] font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-wide">
          Book a Free Consultation
        </a>

        {/* Mobile CTA Button */}
        <a href="#book-session" className="md:hidden bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-[var(--cres-black)] font-bold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm uppercase tracking-wide">
          Free
        </a>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full h-screen bg-[var(--cres-black)]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 pt-20">
          {[
            { name: 'Home', href: '/' },
            { name: 'Solutions', href: '#solutions' },
            { name: 'How It Works', href: '#how-it-works' },
            { name: 'Case Studies', href: '/case-studies' },
            { name: 'About Cres', href: '/about' },
            { name: 'Insights', href: '/insights' },
            { name: 'Contact', href: '/contact' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[var(--cres-muted)] text-lg font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
