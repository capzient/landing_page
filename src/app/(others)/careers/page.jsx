import { ViewportTrigger } from '@/utils/viewPortTrigger';

import { Careers } from './components/Careers';
import { generateSeo } from '@/utils/generateSeo';

export const generateMetadata = () => {
  return generateSeo({
    title: `Careers`,
    description: 'Hello world',
    url: '/careers',
  });
};

export default function careers() {
  return (
    <div>
      <ViewportTrigger />
      <Careers />
    </div>
  );
}
