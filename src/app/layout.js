import { Poppins, Roboto } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/layout/nav';
import SmoothScroll from '@/components/utils/smoothScroll/SmoothScroll';

import { Providers } from './provides';

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
  title: 'Capzient',
  description: 'Capzient Landing Page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${roboto_init.variable} ${poppins_init.variable}`}>
          <div className="">
            <Navbar />
            <SmoothScroll>{children}</SmoothScroll>
          </div>
        </body>
      </Providers>
    </html>
  );
}
