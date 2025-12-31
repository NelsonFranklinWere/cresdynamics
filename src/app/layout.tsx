import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Cres Dynamics - Websites, SEO & AI Solutions | Nairobi Digital Agency',
  description: 'Stop losing leads. Turn clicks into clients. Free strategy session for Kenyan businesses.',
  openGraph: {
    images: '/og-image.jpg',
    type: 'website',
    locale: 'en_KE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DigitalAgency",
    "name": "Cres Dynamics",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    }
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
