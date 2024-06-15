import { Poppins, Roboto } from 'next/font/google';

import './globals.css';
import { Footer } from '@/components/layout/footer/Footer';
import { Navbar } from '@/components/layout/nav';

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
  title: 'Capzient',
  description: 'Capzient Landing Page',
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
