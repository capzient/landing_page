import { generateSeo } from '@/utils/generateSeo';
import { ViewportTrigger } from '@/utils/viewPortTrigger';

import { Careers } from './components/Careers';

export const generateMetadata = () =>
  generateSeo({
    title: `Careers`,
    url: '/careers',
  });

export default function careers() {
  return (
    <div>
      <ViewportTrigger />
      <Careers />
    </div>
  );
}
