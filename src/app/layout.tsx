import type { Metadata } from "next";
import "./globals.css";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: 'CRES Dynamics - AI Automation, Websites & SEO for Kenyan Businesses | Nairobi',
  description: 'Transform your Kenyan business with AI automation, fast websites, and SEO systems that convert traffic into revenue. Nairobi\'s trusted digital growth partner.',
  keywords: 'AI automation Kenya, website development Nairobi, SEO services Kenya, digital marketing East Africa, business growth systems',
  authors: [{ name: 'CRES Dynamics' }],
  creator: 'CRES Dynamics',
  publisher: 'CRES Dynamics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
  },
  openGraph: {
    title: 'CRES Dynamics - AI Automation, Websites & SEO for Kenyan Businesses',
    description: 'Transform your Kenyan business with AI automation, fast websites, and SEO systems that convert traffic into revenue. Nairobi\'s trusted digital growth partner.',
    url: 'https://cresdynamics.com',
    siteName: 'CRES Dynamics',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'CRES Dynamics - AI Automation & Digital Growth Systems',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRES Dynamics - AI Automation, Websites & SEO for Kenyan Businesses',
    description: 'Transform your Kenyan business with AI automation, fast websites, and SEO systems that convert traffic into revenue.',
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
  alternates: {
    canonical: 'https://cresdynamics.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = [
    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CRES Dynamics",
      "alternateName": "Cres Dynamics",
      "description": "AI automation, website development, and SEO services for growing businesses in Kenya. Transform your Nairobi business with digital systems that drive revenue.",
      "url": "https://cresdynamics.com",
      "logo": "https://cresdynamics.com/logo.png",
      "image": "https://cresdynamics.com/logo.png",
      "telephone": "+254708805496",
      "email": "info@cresdynamics.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE",
        "addressRegion": "Nairobi County"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -1.2864,
        "longitude": 36.8172
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Nairobi, Kenya"
        },
        {
          "@type": "Place",
          "name": "Kenya"
        },
        {
          "@type": "Place",
          "name": "East Africa"
        }
      ],
      "serviceType": ["AI Automation", "Website Development", "SEO Services", "Digital Marketing", "Business Growth Systems"],
      "knowsAbout": ["Artificial Intelligence", "Web Development", "Search Engine Optimization", "Digital Marketing", "Business Automation"],
      "sameAs": [
        "https://www.linkedin.com/company/cres-dynamics",
        "https://www.instagram.com/cresdynamics",
        "https://twitter.com/cresdynamics"
      ],
      "founder": {
        "@type": "Person",
        "name": "CRES Dynamics Team"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+254708805496",
        "contactType": "customer service",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      }
    },
    // LocalBusiness Schema
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://cresdynamics.com/#organization",
      "name": "CRES Dynamics",
      "image": "https://cresdynamics.com/logo.png",
      "description": "Leading AI automation and digital growth agency serving businesses in Nairobi, Kenya. Specializing in websites, SEO, and business systems.",
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
        "latitude": -1.2864,
        "longitude": 36.8172
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": -1.2864,
          "longitude": 36.8172
        },
        "geoRadius": 50000
      },
      "priceRange": "$$",
      "paymentAccepted": "Cash, Credit Card, Mobile Money",
      "currenciesAccepted": "KES, USD",
      "openingHours": "Mo-Fr 09:00-18:00"
    },
    // Services Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Automation Services",
      "description": "Automate your Kenyan business operations with AI-powered systems that save time and increase revenue.",
      "provider": {
        "@type": "Organization",
        "name": "CRES Dynamics"
      },
      "areaServed": "Kenya",
      "serviceType": "Business Automation"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Website Development",
      "description": "Fast, conversion-optimized websites for Nairobi businesses that turn visitors into customers.",
      "provider": {
        "@type": "Organization",
        "name": "CRES Dynamics"
      },
      "areaServed": "Kenya",
      "serviceType": "Web Development"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SEO Services Kenya",
      "description": "Google-first SEO strategies that help Kenyan businesses rank higher and get more qualified leads.",
      "provider": {
        "@type": "Organization",
        "name": "CRES Dynamics"
      },
      "areaServed": "Kenya",
      "serviceType": "Search Engine Optimization"
    },
    // Website Schema
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "CRES Dynamics",
      "url": "https://cresdynamics.com",
      "description": "AI automation, website development, and SEO services for growing businesses in Kenya.",
      "publisher": {
        "@type": "Organization",
        "name": "CRES Dynamics"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://cresdynamics.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <html lang="en">
      <head>
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

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icon-512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D1B2A" />
        <meta name="msapplication-TileColor" content="#0D1B2A" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Open Graph Images */}
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="CRES Dynamics Logo" />

        {/* Preload critical font */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZ9hjp-Ek-_EeA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />

        {/* Optimized font loading */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        {/* Preload critical CSS */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />

        {schema.map((schemaData, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        ))}
      </head>
      <body className="antialiased">
        <PerformanceMonitor />
        <Analytics />
        {children}

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
