'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function DropdownImage({ src, alt = '' }: { src: string; alt?: string }) {
  const [failed, setFailed] = useState(false);
  const imageSrc = failed ? '/logo.png' : src;
  return (
    <Image
      src={imageSrc}
      alt={failed ? 'CRES Dynamics' : alt}
      fill
      unoptimized
      sizes="280px"
      className={`absolute inset-0 w-full h-full ${failed ? 'object-contain p-3' : 'object-cover group-hover:scale-105 transition-transform duration-200'}`}
      onError={() => setFailed(true)}
    />
  );
}

const navLinkClass = (active?: boolean) => {
  const base = 'nav-link-glass';
  return active ? `${base} nav-link-glass-active` : base;
};

function eventsNavActive(pathname: string) {
  return pathname === '/events' || pathname.startsWith('/events/');
}

function blogNavActive(pathname: string) {
  return pathname === '/blog' || pathname.startsWith('/blog/');
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  const isEventsRoute = eventsNavActive(pathname);
  const headerSurface = isEventsRoute
    ? scrolled
      ? 'nav-glass-events nav-glass-events-scrolled'
      : 'nav-glass-events'
    : scrolled
      ? 'nav-glass nav-glass-scrolled'
      : 'nav-glass';

  const brandTextClass = 'text-white';
  const menuIconClass = 'text-white';

  return (
    <header className={`fixed top-0 w-full z-50 ${headerSurface}`}>
      <nav className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
        {/* LOGO: Cres Dynamics */}
        <div className="flex items-center space-x-1 md:space-x-2">
          <Image
            src="/logo.png"
            alt="Cres Dynamics Logo"
            className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover"
            priority
            unoptimized
            width={32}
            height={32}
          />
          <span className={`${brandTextClass} font-bold text-xs md:text-sm uppercase tracking-wide transition-colors duration-300`}>
            <span className="font-black">CRES</span> Dynamics
          </span>
        </div>

        <button
          className={`lg:hidden ${menuIconClass} p-2 rounded-lg hover:bg-white/10 transition-colors`}
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

        <ul className="hidden lg:flex items-center gap-2 xl:gap-3">
          <li>
            <Link href="/" prefetch={false} className={navLinkClass( pathname === '/')}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/events" prefetch={false} className={navLinkClass( eventsNavActive(pathname))}>
              Events
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={openWhoWeAreDropdown}
            onMouseLeave={scheduleCloseWhoWeAreDropdown}
          >
            <button
              type="button"
              className={navLinkClass()}
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
            <Link href="/cresos" prefetch={false} className={navLinkClass( pathname === '/cresos')}>
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
              className={navLinkClass()}
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
              className={navLinkClass()}
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
          <li className="flex items-center gap-1 shrink-0">
            <Link
              href="/blog"
              prefetch={false}
              className={`${navLinkClass( blogNavActive(pathname))} text-[11px] whitespace-nowrap`}
            >
              Blog
            </Link>
            <Link
              href="/case-studies"
              prefetch={false}
              className={`${navLinkClass( pathname.startsWith('/case-studies'))} text-[11px] whitespace-nowrap`}
            >
              Case Proof
            </Link>
            <Link href="/projects" prefetch={false} className={navLinkClass( pathname === '/projects')}>
              Projects
            </Link>
          </li>
        </ul>

        <a
          href="https://wa.me/254708805496?text=Hi%2C%20I'd%20like%20to%20book%20a%20strategy%20session%20with%20CRES%20Dynamics."
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden lg:inline-flex nav-cta-glass whitespace-nowrap`}
        >
          Book Session
        </a>
      </nav>

      {/* Who We Are – full-width dropdown (brand dark panel) */}
      <div
        className={`hidden lg:block fixed left-0 right-0 top-[57px] z-40 bg-black/75 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-200 ease-out ${
          isWhoWeAreDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
        }`}
        onMouseEnter={openWhoWeAreDropdown}
        onMouseLeave={closeWhoWeAreDropdown}
        style={{ minHeight: '280px' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
            {[
              { name: 'Who We Are', href: '/about', desc: 'Our story and mission', image: '/wh0-we-wre.jpg' },
              { name: 'Why Us', href: '/why-us', desc: 'Why serious businesses choose us', image: '/why-us-us.jpg' },
              { name: 'How We Work', href: '/how-we-work', desc: 'Discovery to go-live — our delivery process', image: '/how-we-work.jpg' },
              { name: 'How We Build', href: '/how-we-build', desc: 'Our system engineering framework', image: '/how-we-build.jpg' },
              { name: 'Events', href: '/events', desc: 'Upcoming events and registrations', image: '/events-westlands.jpg' },
              { name: 'Contact', href: 'https://wa.me/254708805496?text=Hi%2C%20I\'d%20like%20to%20book%20a%20systems%20discovery%20session.', desc: 'Book a systems discovery session (WhatsApp)', image: '/contact-us.jpg' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={false}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block"
              >
                <div className="relative w-full h-24 rounded-lg overflow-hidden bg-white/5 mb-3 shrink-0">
                  <DropdownImage src={item.image} />
                </div>
                <span className="text-white font-medium text-[15px] group-hover:text-[var(--teal-accent)] transition-colors duration-150">
                  {item.name}
                </span>
                <span className="block text-white/70 text-[13px] mt-1 group-hover:text-white transition-colors duration-150">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Systems – full-width dropdown (brand dark panel) */}
      <div
        className={`hidden lg:block fixed left-0 right-0 top-[57px] z-40 bg-black/75 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-200 ease-out ${
          isSolutionsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
        }`}
        onMouseEnter={openSystemsDropdown}
        onMouseLeave={closeSystemsDropdown}
        style={{ minHeight: '320px' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pb-1">
            {[
              { name: 'CresOS', href: '/cresos', desc: 'Business operating system', image: '/business-operating system.jpg' },
              { name: 'Finance Platforms', href: '/finance-platforms', desc: 'Revenue, invoices, dashboards', image: '/finance-plartforms.jpg' },
              { name: 'Operations & Workflow', href: '/operations-workflow', desc: 'Projects, approvals, reporting', image: '/streamline-your-workflow.jpg' },
              { name: 'AI & Automation', href: '/ai-automation', desc: 'Workflows, triggers, intelligence', image: '/workflow-automation.jpg' },
              { name: 'Custom ERP', href: '/erp', desc: 'Modular ERP & governance', image: '/modern-erp.jpg' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className="group block"
              >
                <div className="relative w-full h-24 rounded-lg overflow-hidden bg-white/5 shadow-[0_10px_25px_rgba(0,0,0,0.45)] mb-3">
                  <DropdownImage src={item.image} />
                </div>
                <span className="text-white font-medium text-[14px] group-hover:text-[var(--teal-accent)] transition-colors duration-150">
                  {item.name}
                </span>
                <span className="block text-white/70 text-[12px] mt-1 group-hover:text-white transition-colors duration-150">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Services – full-width dropdown */}
      <div
        className={`hidden lg:block fixed left-0 right-0 top-[57px] z-40 bg-black/75 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-200 ease-out ${
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
                image: '/websites.jpg',
              },
              {
                name: 'E-Commerce',
                href: '/e-commerce',
                desc: 'Online stores built for Kenyan businesses',
                image: '/e-commerce.jpg',
              },
              {
                name: 'Finance',
                href: '/finance-platforms',
                desc: 'Revenue, invoices, and dashboards as a service',
                image: '/finance.jpg',
              },
              {
                name: 'Operations & Workflow',
                href: '/operations-workflow',
                desc: 'Projects, approvals, and reporting',
                image: '/streamline-your-workflow.jpg',
              },
              {
                name: 'AI & Automation',
                href: '/ai-automation',
                desc: 'Automation and intelligence on top of your systems',
                image: '/time-automation.jpg',
              },
              {
                name: 'Custom Software',
                href: '/software',
                desc: 'Portals, dashboards, booking and internal tools',
                image: '/custome-software.jpg',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className="group block"
              >
                <div className="relative w-full h-24 rounded-lg overflow-hidden bg-white/5 shadow-[0_10px_25px_rgba(0,0,0,0.45)] mb-3">
                  <DropdownImage src={item.image} />
                </div>
                <span className="text-white font-medium text-[14px] group-hover:text-[var(--teal-accent)] transition-colors duration-150">
                  {item.name}
                </span>
                <span className="block text-white/70 text-[12px] mt-1 group-hover:text-white transition-colors duration-150">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay – brand: light bg, navy text, teal hover */}
      {isMobileMenuOpen && (
        <div className="mobile-menu open lg:hidden">
          <Link href="/" prefetch={false} className="text-white/90 text-base font-medium uppercase hover:text-white hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-200 block w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>

          <Link href="/events" prefetch={false} className="text-white/90 text-base font-medium uppercase hover:text-white hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-200 block w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
            Events
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setIsMobileWhoWeAreOpen(!isMobileWhoWeAreOpen)}
              className="text-white/90 text-base font-medium uppercase hover:text-white hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-200 flex items-center justify-between w-full text-left"
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
                  { name: 'How We Work', href: '/how-we-work' },
                  { name: 'How We Build', href: '/how-we-build' },
                  { name: 'Events', href: '/events' },
                  { name: 'Contact', href: '/contact' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} prefetch={false} className="text-white/75 text-sm font-medium hover:text-white hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-200 block w-full text-left" onClick={() => { setIsMobileMenuOpen(false); setIsMobileWhoWeAreOpen(false); }}>
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/cresos" prefetch={false} className="text-white/90 text-base font-medium uppercase hover:text-white hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-200 block w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
            CresOS
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="text-white/90 text-base font-medium uppercase hover:text-white hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-200 flex items-center justify-between w-full text-left"
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
                  { name: 'Custom Software', href: '/software' },
                  { name: 'Finance', href: '/finance-platforms' },
                  { name: 'Operations & Workflow', href: '/operations-workflow' },
                  { name: 'AI & Automation', href: '/ai-automation' },
                ].map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    prefetch={false}
                    className="text-white/75 text-sm font-medium hover:text-white hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-200 block w-full text-left"
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
              className="text-white/90 text-base font-medium uppercase hover:text-white hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-200 flex items-center justify-between w-full text-left"
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
                  { name: 'Finance & Revenue Systems', href: '/finance-platforms' },
                  { name: 'Operations & Workflow', href: '/operations-workflow' },
                  { name: 'AI & Automation', href: '/ai-automation' },
                  { name: 'ERP', href: '/erp' },
                ].map((solution) => (
                  <Link
                    key={solution.href}
                    href={solution.href}
                    prefetch={false}
                    className="text-white/75 text-sm font-medium hover:text-white hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-200 block w-full text-left"
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

          <Link href="/blog" prefetch={false} className="text-white/90 text-base font-medium uppercase hover:text-white hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-200 block w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/case-studies" prefetch={false} className="text-white/90 text-base font-medium uppercase hover:text-white hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-200 block w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
            Case Proof
          </Link>
          <Link href="/projects" prefetch={false} className="text-white/90 text-base font-medium uppercase hover:text-white hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-200 block w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </Link>
        </div>
      )}
    </header>
  );
}
