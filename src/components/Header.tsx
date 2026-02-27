'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

function DropdownImage({ src, alt = '' }: { src: string; alt?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <img
        src="/logo.png"
        alt="CRES Dynamics"
        className="absolute inset-0 w-full h-full object-contain p-3"
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
      onError={() => setFailed(true)}
    />
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isWhoWeAreDropdownOpen, setIsWhoWeAreDropdownOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileWhoWeAreOpen, setIsMobileWhoWeAreOpen] = useState(false);
  const dropdownCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const whoWeAreCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openSystemsDropdown = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
    setIsServicesDropdownOpen(false);
    setIsWhoWeAreDropdownOpen(false);
    setIsSolutionsDropdownOpen(true);
  };

  const closeSystemsDropdown = () => {
    setIsSolutionsDropdownOpen(false);
  };

  const scheduleCloseSystemsDropdown = () => {
    dropdownCloseTimer.current = setTimeout(() => setIsSolutionsDropdownOpen(false), 120);
  };

  const openServicesDropdown = () => {
    if (servicesCloseTimer.current) {
      clearTimeout(servicesCloseTimer.current);
      servicesCloseTimer.current = null;
    }
    setIsSolutionsDropdownOpen(false);
    setIsWhoWeAreDropdownOpen(false);
    setIsServicesDropdownOpen(true);
  };

  const closeServicesDropdown = () => {
    setIsServicesDropdownOpen(false);
  };

  const scheduleCloseServicesDropdown = () => {
    servicesCloseTimer.current = setTimeout(() => setIsServicesDropdownOpen(false), 120);
  };

  const openWhoWeAreDropdown = () => {
    if (whoWeAreCloseTimer.current) {
      clearTimeout(whoWeAreCloseTimer.current);
      whoWeAreCloseTimer.current = null;
    }
    setIsSolutionsDropdownOpen(false);
    setIsWhoWeAreDropdownOpen(true);
  };

  const closeWhoWeAreDropdown = () => {
    setIsWhoWeAreDropdownOpen(false);
  };

  const scheduleCloseWhoWeAreDropdown = () => {
    whoWeAreCloseTimer.current = setTimeout(() => setIsWhoWeAreDropdownOpen(false), 120);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--cres-black)]/98 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
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
              setIsMobileWhoWeAreOpen(false);
            }
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* NAV: Tesla-style – minimal, hover-reveal mega menu for Systems */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <Link href="/" prefetch={true} className="text-white/90 hover:text-white text-[13px] font-medium transition-colors duration-200 py-2">
              Home
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={openWhoWeAreDropdown}
            onMouseLeave={scheduleCloseWhoWeAreDropdown}
          >
            <button
              type="button"
              className="text-white/90 hover:text-white text-[13px] font-medium transition-colors duration-200 py-2 flex items-center gap-1"
              aria-expanded={isWhoWeAreDropdownOpen}
              aria-haspopup="true"
            >
              <span>Who We Are</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isWhoWeAreDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </li>
          <li>
            <Link href="/cresos" prefetch={true} className="text-white/90 hover:text-white text-[13px] font-medium transition-colors duration-200 py-2">
              CresOS
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={openSystemsDropdown}
            onMouseLeave={scheduleCloseSystemsDropdown}
          >
            <button
              type="button"
              className="text-white/90 hover:text-white text-[13px] font-medium transition-colors duration-200 py-2 flex items-center gap-1"
              onClick={() => {
                if (isSolutionsDropdownOpen) {
                  closeSystemsDropdown();
                } else {
                  openSystemsDropdown();
                }
              }}
              aria-expanded={isSolutionsDropdownOpen}
              aria-haspopup="true"
            >
              <span>Systems</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isSolutionsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </li>
          <li
            className="relative"
            onMouseEnter={openServicesDropdown}
            onMouseLeave={scheduleCloseServicesDropdown}
          >
            <button
              type="button"
              className="text-white/90 hover:text-white text-[13px] font-medium transition-colors duration-200 py-2 flex items-center gap-1"
              onClick={() => {
                if (isServicesDropdownOpen) {
                  closeServicesDropdown();
                } else {
                  openServicesDropdown();
                }
              }}
              aria-expanded={isServicesDropdownOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </li>
          <li>
            <Link href="/case-studies" prefetch={true} className="text-white/90 hover:text-white text-[13px] font-medium transition-colors duration-200 py-2">
              Case Proof
            </Link>
          </li>
        </ul>

        <Link href="/contact" prefetch={true} className="hidden lg:inline-flex items-center bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold px-4 py-2 rounded text-[11px] tracking-wide whitespace-nowrap transition-opacity duration-200 hover:opacity-90">
          Book Session
        </Link>
      </nav>

      {/* Who We Are – full-width dropdown with image above each section */}
      <div
        className={`hidden lg:block fixed left-0 right-0 top-[57px] z-40 bg-[#0f1419] border-b border-white/10 shadow-2xl transition-all duration-200 ease-out ${
          isWhoWeAreDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
        }`}
        onMouseEnter={openWhoWeAreDropdown}
        onMouseLeave={closeWhoWeAreDropdown}
        style={{ minHeight: '260px' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
            {[
              { name: 'Who We Are', href: '/about', desc: 'Our story and mission', image: '/logo.png' },
              { name: 'Why Us', href: '/why-us', desc: 'Why serious businesses choose us', image: '/logo.png' },
              { name: 'How We Build', href: '/how-we-build', desc: 'Our system engineering framework', image: '/logo.png' },
              { name: 'Contact', href: '/contact', desc: 'Book a systems discovery session', image: '/logo.png' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className="group block"
              >
                <div className="relative w-full h-24 rounded-lg overflow-hidden bg-white/5 mb-3 shrink-0">
                  <DropdownImage src={item.image} />
                </div>
                <span className="text-white font-medium text-[15px] group-hover:text-[var(--cres-orange-primary)] transition-colors duration-150">
                  {item.name}
                </span>
                <span className="block text-white/50 text-[13px] mt-1 group-hover:text-white/70 transition-colors duration-150">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Systems – full-width dropdown with image above each, linked to respective page */}
      <div
        className={`hidden lg:block fixed left-0 right-0 top-[57px] z-40 bg-[#0f1419] border-b border-white/10 shadow-2xl transition-all duration-200 ease-out ${
          isSolutionsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
        }`}
        onMouseEnter={openSystemsDropdown}
        onMouseLeave={closeSystemsDropdown}
        style={{ minHeight: '320px' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pb-1">
            {[
              { name: 'CresOS', href: '/cresos', desc: 'Business operating system', image: '/cresOs.businessoperatingsystem.png' },
              { name: 'Finance Platforms', href: '/finance-platforms', desc: 'Revenue, invoices, dashboards', image: '/finance.and.revenue.png' },
              { name: 'Operations & Workflow', href: '/operations-workflow', desc: 'Projects, approvals, reporting', image: '/operations.and.workflow.png' },
              { name: 'AI & Automation', href: '/ai-automation', desc: 'Workflows, triggers, intelligence', image: '/ai.automation.png' },
              { name: 'Custom ERP', href: '/erp', desc: 'Modular ERP & governance', image: '/erp.png' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className="group block"
              >
                <div className="relative w-full h-16 rounded-xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.45)] mb-2">
                  <DropdownImage src={item.image} />
                </div>
                <span className="text-white font-medium text-[14px] group-hover:text-[var(--cres-orange-primary)] transition-colors duration-150">
                  {item.name}
                </span>
                <span className="block text-white/50 text-[12px] mt-1 group-hover:text-white/70 transition-colors duration-150">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Services – full-width dropdown for web-facing services like Websites & E-commerce */}
      <div
        className={`hidden lg:block fixed left-0 right-0 top-[57px] z-40 bg-[#0f1419] border-b border-white/10 shadow-2xl transition-all duration-200 ease-out ${
          isServicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
        }`}
        onMouseEnter={openServicesDropdown}
        onMouseLeave={closeServicesDropdown}
        style={{ minHeight: '260px' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-1">
            {[
              {
                name: 'Websites',
                href: '/websites',
                desc: 'Professional websites that convert, not just look good',
                image: '/systems/websites.jpg',
              },
              {
                name: 'E-Commerce',
                href: '/e-commerce',
                desc: 'Online stores built for Kenyan businesses',
                image: '/logo.png',
              },
              {
                name: 'Finance Platforms',
                href: '/finance-platforms',
                desc: 'Revenue, invoices, and dashboards as a service',
                image: '/finance.and.revenue.png',
              },
              {
                name: 'AI & Automation',
                href: '/ai-automation',
                desc: 'Automation and intelligence on top of your systems',
                image: '/ai.automation.png',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className="group block"
              >
                <div className="relative w-full h-16 rounded-xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.45)] mb-2">
                  <DropdownImage src={item.image} />
                </div>
                <span className="text-white font-medium text-[14px] group-hover:text-[var(--cres-orange-primary)] transition-colors duration-150">
                  {item.name}
                </span>
                <span className="block text-white/50 text-[12px] mt-1 group-hover:text-white/70 transition-colors duration-150">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu open lg:hidden">
          <Link href="/" prefetch={true} className="text-[var(--cres-white)] text-base font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 block w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setIsMobileWhoWeAreOpen(!isMobileWhoWeAreOpen)}
              className="text-[var(--cres-white)] text-base font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 flex items-center justify-between w-full text-left"
            >
              <span>Who We Are</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileWhoWeAreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMobileWhoWeAreOpen && (
              <div className="mt-2 ml-4 space-y-2">
                {[
                  { name: 'Who We Are', href: '/about' },
                  { name: 'Why Us', href: '/why-us' },
                  { name: 'How We Build', href: '/how-we-build' },
                  { name: 'Contact', href: '/contact' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} prefetch={true} className="text-[var(--cres-white)]/80 text-sm font-medium hover:text-[var(--cres-orange-primary)] transition-all duration-300 block w-full text-left" onClick={() => { setIsMobileMenuOpen(false); setIsMobileWhoWeAreOpen(false); }}>
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/cresos" prefetch={true} className="text-[var(--cres-white)] text-base font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 block w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
            CresOS
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="text-[var(--cres-white)] text-base font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 flex items-center justify-between w-full text-left"
            >
              <span>Services</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMobileServicesOpen && (
              <div className="mt-2 ml-4 space-y-2">
                {[
                  { name: 'Websites', href: '/websites' },
                  { name: 'E-Commerce', href: '/e-commerce' },
                  { name: 'Finance Platforms', href: '/finance-platforms' },
                  { name: 'AI & Automation', href: '/ai-automation' },
                ].map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    prefetch={true}
                    className="text-[var(--cres-white)]/80 text-sm font-medium hover:text-[var(--cres-orange-primary)] transition-all duration-300 block w-full text-left"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              type="button"
              onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
              className="text-[var(--cres-white)] text-base font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 flex items-center justify-between w-full text-left"
            >
              <span>Systems</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          <Link href="/case-studies" prefetch={true} className="text-[var(--cres-white)] text-base font-medium uppercase hover:text-[var(--cres-orange-primary)] transition-all duration-300 block w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
            Case Proof
          </Link>
        </div>
      )}
    </header>
  );
}
