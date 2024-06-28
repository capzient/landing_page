import './globals.css';
// import { Footer } from '@/components/layout/footer/Footer';
import { Montserrat } from 'next/font/google';

import { Footer } from '@/components/layout/footer/Footer';
import { Navbar } from '@/components/layout/navbar';
import { siteConfig } from '@/config/site';

import { GoogleAnalytics } from '../components/Analytics/GoogleAnalytics';

import { Providers } from './providers';

const montserrat = Montserrat({
  subsets: ['cyrillic'],
});

export const metadata = {
  title: {
    template: '%s | Capzinet',
    default: 'Capzinet',
  },
  description: siteConfig.description,
  metadataBase: new URL(`https://${siteConfig.domain}`),
  openGraph: {
    siteName: siteConfig.name,
    url: '/',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitterHandle,
    title: 'Capzient',
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 2250,
        height: 675,
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={siteConfig.ga_tracking_id} />
      <body className={`${montserrat.className}`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
