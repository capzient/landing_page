import { generateSeo } from '@/utils/generateSeo';
import { ViewportTrigger } from '@/utils/viewPortTrigger';

import { About } from './components/About';

export const generateMetadata = () =>
  generateSeo({
    title: `About`,
    description: 'Hello world',
    url: '/about',
  });

export default function aboutPage() {
  return (
    <>
      <ViewportTrigger />
      <About />
    </>
  );
}
