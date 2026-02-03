import type { Metadata } from "next";
import "./globals.css";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import AIChatWidget from "@/components/AIChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL('https://cresdynamics.com'),
  title: 'CRES Dynamics - Business Growth Through Technology | Nairobi Digital Solutions',
  description: 'Struggling with business growth? Get more customers online. Websites, SEO & AI automation that actually work. Free strategy session for Nairobi businesses.',
  icons: {
    icon: [
      { url: '/favicon-circular.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-circular.png?v=2', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-circular.png?v=2', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/favicon-circular.png?v=2',
    shortcut: '/favicon-circular.png?v=2',
  },
  openGraph: {
    title: 'CRES Dynamics - Business Growth Through Technology | Nairobi',
    description: 'Struggling with business growth? Get more customers online. Websites, SEO & AI automation that actually work. Free strategy session.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'CRES Dynamics - Business Growth Solutions',
      },
    ],
    type: 'website',
    locale: 'en_KE',
    siteName: 'CRES Dynamics',
    url: 'https://cresdynamics.com',
  },
  twitter: {
    card: 'summary_large_image',
    images: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CRES Dynamics",
    "alternateName": "Cres Dynamics Digital Growth Company",
    "url": "https://cresdynamics.com",
    "logo": "https://cresdynamics.com/logo.png",
    "description": "Digital Growth & Software Engineering Company helping Nairobi businesses turn clicks into clients through websites, SEO, AI automation, and measurable business outcomes.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi",
      "addressCountry": "KE"
    },
    "areaServed": {
      "@type": "City",
      "name": "Nairobi"
    },
    "serviceType": [
      "Digital Growth Solutions",
      "Software Engineering",
      "Business Automation",
      "Website Development",
      "SEO & Online Visibility",
      "AI-Powered Sales Systems",
      "Business Transformation",
      "Technology Growth Consulting"
    ],
    "priceRange": "$$",
    "telephone": "+254708805496",
    "email": "info@cresdynamics.com",
    "knowsAbout": [
      "Business Growth",
      "Digital Transformation",
      "Software Engineering",
      "AI Automation",
      "SEO Optimization",
      "Lead Generation",
      "Sales Automation",
      "Website Development"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Growth Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "High-converting websites that turn visitors into customers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Online Visibility",
            "description": "Get found by customers searching for your services in Nairobi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Automation",
            "description": "Automate your sales and customer follow-ups with AI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Growth Consulting",
            "description": "Strategic guidance to scale your Nairobi business"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    },
    "sameAs": [
      "https://cresdynamics.com",
      "https://x.com/cresdynamics",
      "https://www.instagram.com/cresdynamics"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P2WR5M5FGH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P2WR5M5FGH');
            `,
          }}
        />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Resource hints for performance */}
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />

        {/* Prefetch likely navigation targets */}
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/contact" />
        <link rel="prefetch" href="/solutions/seo-visibility" />
        <link rel="prefetch" href="/case-studies" />

        {/* Favicon and App Icons - Circular Logo as favicon */}
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon-circular.png?v=2" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-circular.png?v=2" sizes="192x192" type="image/png" />
        <link rel="icon" href="/favicon-circular.png?v=2" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon-circular.png?v=2" sizes="180x180" />
        <link rel="manifest" href="/manifest.json?v=2" />
        <meta name="theme-color" content="#0D1B2A" />
        <meta name="msapplication-TileColor" content="#0D1B2A" />
        <meta name="msapplication-TileImage" content="/favicon-circular.png?v=2" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Open Graph Images */}
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="CRES Dynamics Logo" />

        {/* Preload critical fonts - multiple weights for hero */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZ9hjp-Ek-_EeA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        
        {/* Preload logo for instant display */}
        <link rel="preload" href="/favicon-circular.png" as="image" fetchPriority="high" />
        
        {/* Preload background image for hero */}
        <link rel="preload" href="/backround.png" as="image" fetchPriority="high" />

        {/* Optimized font loading with display=swap for instant FCP */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome - deferred loading for better FCP */}
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          as="style"
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
              link.media = 'print';
              link.onload = function() { this.media = 'all'; };
              document.head.appendChild(link);
            })();
          `
        }} />

        {/* Critical inline styles for instant FCP */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for instant render - prevents FCP delay */
            body{margin:0;padding:0;background:#0B0F14;color:#fff;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
            header{position:fixed;top:0;width:100%;z-index:50;background:rgba(11,15,20,0.95);backdrop-filter:blur(12px);border-bottom:1px solid rgba(26,31,42,0.5)}
            nav{max-width:1280px;margin:0 auto;padding:8px 16px;display:flex;align-items:center;justify-content:space-between}
            /* Prevent layout shift for logo */
            img[src="/logo.png"]{width:32px;height:32px;border-radius:50%;object-fit:cover;display:block}
            /* Hero section critical styles */
            section:first-of-type{min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;padding:80px 24px}
            h1{font-size:clamp(1.875rem,4vw,3rem);font-weight:900;line-height:1.2;margin:0 0 2rem;color:#fff;text-shadow:3px 3px 6px rgba(0,0,0,0.95)}
          `
        }} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Additional Schema for SEO Targeting */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "CRES Dynamics - Digital Growth Company",
              "description": "Nairobi's leading digital growth and software engineering company. We help businesses get found, convert leads, and scale using technology.",
              "url": "https://cresdynamics.com",
              "telephone": "+254708805496",
              "email": "info@cresdynamics.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-1.2864",
                "longitude": "36.8172"
              },
              "areaServed": "Nairobi",
              "priceRange": "$$"
            })
          }}
        />

        {/* FAQ Schema for Problem Searches */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Why is my website not generating leads?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most websites fail because they're not optimized for conversions. At CRES Dynamics, we build websites that turn visitors into customers through strategic design, clear calls-to-action, and conversion optimization."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I get more customers online in Nairobi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Focus on SEO, content marketing, and conversion optimization. We help Nairobi businesses get found by their ideal customers and convert more visitors into paying clients."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I automate my business operations?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Business automation involves streamlining repetitive tasks with software and AI. We build custom automation solutions that save time and increase efficiency for Nairobi businesses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What should I do when sales are down?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Focus on three areas: improve visibility (SEO), optimize conversions (website), and automate follow-ups (AI). We help businesses turn sales challenges into growth opportunities."
                  }
                }
              ]
            })
          }}
        />

        {/* Organization Schema with Growth Focus */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CRES Dynamics",
              "legalName": "CRES Dynamics Digital Growth Company",
              "url": "https://cresdynamics.com",
              "logo": "https://cresdynamics.com/logo.png",
              "description": "Digital Growth & Software Engineering Company. We don't sell services - we sell business outcomes. More customers, more revenue, less chaos.",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+254708805496",
                "email": "info@cresdynamics.com",
                "areaServed": "KE",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://cresdynamics.com",
                "https://x.com/cresdynamics",
                "https://www.instagram.com/cresdynamics"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <PerformanceMonitor />
        {children}
        <AIChatWidget />

        {/* Performance optimizations */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Critical resource loading optimization
              window.addEventListener('load', function() {
                // Preload likely user interactions
                const links = document.querySelectorAll('a[href^="/"]');
                links.forEach(link => {
                  const href = link.getAttribute('href');
                  if (href && href !== '/' && !href.includes('#')) {
                    const linkEl = document.createElement('link');
                    linkEl.rel = 'prefetch';
                    linkEl.href = href;
                    document.head.appendChild(linkEl);
                  }
                });
              });

              // Service Worker Registration
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
