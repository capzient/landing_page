import { Inter, Poppins, Roboto } from 'next/font/google';

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
const inter_init = Inter({
  subsets: ['latin'],
  weight: ['400', '800'],
  variable: '--font-inter',
});

export { roboto_init, poppins_init, inter_init };
