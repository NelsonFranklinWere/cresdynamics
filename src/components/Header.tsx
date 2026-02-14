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

        {/* Mobile Menu Button - show on tablet/iPad and below (lg breakpoint = 1024px) */}
        <button
          className="lg:hidden text-[var(--cres-white)]"
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

        {/* NAV: Home • Who We Are • Why Us • CresOS • Systems • How We Build • Case Proof • Contact */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link href="/" prefetch={true} className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" prefetch={true} className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4">
              Who We Are
            </Link>
          </li>
          <li>
            <Link href="/why-us" prefetch={true} className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4">
              Why Us
            </Link>
          </li>
          <li>
            <Link href="/cresos" prefetch={true} className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4">
              CresOS
            </Link>
          </li>
          <li className="relative">
            <button
              onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
              onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
              className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 flex items-center space-x-1"
            >
              <span>Systems</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isSolutionsDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-[var(--cres-black)] border border-[var(--cres-charcoal)] rounded-lg shadow-xl z-50"
                onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
                onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
              >
                <div className="py-2">
                  {[
                    { name: 'CresOS – Business Operating System', href: '/cresos' },
                    { name: 'Finance & Revenue Systems', href: '/solutions/digital-sales' },
                    { name: 'Operations & Workflow', href: '/solutions/web-growth' },
                    { name: 'AI & Automation', href: '/solutions/ai-automation' },
                    { name: 'ERP & Custom ERP', href: '/erp' },
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
            <Link href="/how-we-build" prefetch={true} className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4">
              How We Build
            </Link>
          </li>
          <li>
            <Link href="/case-studies" prefetch={true} className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4">
              Case Proof
            </Link>
          </li>
          <li>
            <Link href="/contact" prefetch={true} className="text-[var(--cres-white)] text-sm font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 hover:underline underline-offset-4">
              Contact
            </Link>
          </li>
        </ul>

        <Link href="/contact" prefetch={true} className="hidden lg:inline-flex items-center bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-[var(--cres-white)] font-bold px-3 py-1 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-[10px] leading-tight uppercase tracking-wide whitespace-nowrap">
          Book Session
        </Link>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu open lg:hidden">
          {[
            { name: 'Home', href: '/' },
            { name: 'Who We Are', href: '/about' },
            { name: 'Why Us', href: '/why-us' },
            { name: 'CresOS', href: '/cresos' },
            { name: 'Systems', href: '#systems', isDropdown: true },
            { name: 'How We Build', href: '/how-we-build' },
            { name: 'Case Proof', href: '/case-studies' },
            { name: 'Contact', href: '/contact' }
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
                        { name: 'CresOS', href: '/cresos' },
                        { name: 'Finance & Revenue Systems', href: '/solutions/digital-sales' },
                        { name: 'Operations & Workflow', href: '/solutions/web-growth' },
                        { name: 'AI & Automation', href: '/solutions/ai-automation' },
                        { name: 'ERP', href: '/erp' },
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
