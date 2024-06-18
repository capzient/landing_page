import { generateSeo } from '@/utils/generateSeo';
import { ViewportTrigger } from '@/utils/viewPortTrigger';

import { CareersSection } from './components/CareersSection';
import { EmergingTechSection } from './components/EmergingTechSection';
import { HeroSection } from './components/HeroSection';
import { NewsLetterSection } from './components/NewsLetterSection';
import { WelcomeSection } from './components/WelcomeSection';

export const generateMetadata = () =>
  generateSeo({
    title: `Home`,
    description: 'Hello world',
    url: '/',
  });

export default function Home() {
  return (
    <div className="h-full w-full">
      <ViewportTrigger />
      <HeroSection />
      <WelcomeSection />
      <EmergingTechSection />
      <NewsLetterSection />
      <CareersSection />
    </div>
  );
}
