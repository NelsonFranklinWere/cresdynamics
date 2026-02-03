'use client';

import { useState } from 'react';
import Link from 'next/link';

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
            fetchPriority="high"
            loading="eager"
            width="32"
            height="32"
          />
          <span className="text-[var(--cres-white)] font-bold text-xs md:text-sm uppercase tracking-wide">
            <span className="font-black">CRES</span> Dynamics
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--cres-white)]"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            if (isMobileMenuOpen) {
              setIsMobileSolutionsOpen(false);
            }
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* NAV LINKS: Muted white → Orange hover, compact spacing */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link
              href="/"
              prefetch={true}
              className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              Who We Are
            </Link>
          </li>

          {/* Solutions Dropdown */}
          <li className="relative">
            <button
              onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
              onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
              className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 flex items-center space-x-1"
            >
              <span>What We Do</span>
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
                    <Link
                      key={solution.href}
                      href={solution.href}
                      prefetch={true}
                      className="flex items-center px-4 py-3 text-[var(--cres-white)] hover:bg-[var(--cres-dark)] hover:text-[var(--cres-electric-teal)] transition-all duration-200"
                    >
                      <span className="text-sm font-medium">{solution.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link
              href="/case-studies"
              prefetch={true}
              className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              Case Impact
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              prefetch={true}
              className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              Why We Exist
            </Link>
          </li>

          <li>
            <Link
              href="/insights"
              prefetch={true}
              className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              Growth Insights
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              prefetch={true}
              className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4"
            >
              Talk to Us
            </Link>
          </li>
        </ul>

        {/* CTA BUTTON: Book a Free Consultation → Orange, rounded-xl, shadow */}
        <Link href="/contact" prefetch={true} className="hidden md:block bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-[var(--cres-white)] font-bold px-4 py-1.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-xs uppercase tracking-wide">
          Book a Free Consultation
        </Link>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu open md:hidden">
          {[
            { name: 'Who We Are', href: '/' },
            { name: 'What We Do', href: '#solutions', isDropdown: true },
            { name: 'Case Impact', href: '/case-studies' },
            { name: 'Why We Exist', href: '/about' },
            { name: 'Growth Insights', href: '/insights' },
            { name: 'Talk to Us', href: '/contact' }
          ].map((item) => (
            <div key={item.name}>
              {item.isDropdown ? (
                <div>
                  <button
                    onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                    className="text-[var(--cres-white)] text-base font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 flex items-center justify-between w-full text-left"
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isMobileSolutionsOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {[
                        { name: 'Web Growth Systems', href: '/solutions/web-growth' },
                        { name: 'AI & Automation', href: '/solutions/ai-automation' },
                        { name: 'SEO & Online Visibility', href: '/solutions/seo-visibility' },
                        { name: 'Digital Sales Systems', href: '/solutions/digital-sales' },
                        { name: 'Content & Brand Authority', href: '/solutions/content-brand' },
                        { name: 'Consulting & Strategy', href: '/solutions/consulting-strategy' }
                      ].map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          prefetch={true}
                          className="text-[var(--cres-white)]/80 text-sm font-medium hover:text-[var(--cres-orange-primary)] transition-all duration-300 block w-full text-left"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileSolutionsOpen(false);
                          }}
                        >
                          {solution.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  prefetch={true}
                  className="text-[var(--cres-white)] text-base font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 block w-full text-left"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
