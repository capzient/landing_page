import { Poppins, Roboto } from 'next/font/google';

import './globals.css';
import { Footer } from '@/components/layout/footer/Footer';
import { Navbar } from '@/components/layout/nav';
import { siteConfig } from '@/config/site';

import { Providers } from './providers';

const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto',
});

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['400', '800'],
  variable: '--font-poppins',
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
        width: 1200,
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
      <body className={`${roboto_init.variable} ${poppins_init.variable} relative`}>
        <Providers>
          <div className="">
            <Navbar />
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
