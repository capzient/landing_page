import { ViewportTrigger } from '@/utils/viewPortTrigger';

import { CareersSection } from './components/CareersSection';
import { EmergingTechSection } from './components/EmergingTechSection';
import { HeroSection } from './components/HeroSection';
// import { NewsLetterSection } from './components/NewsLetterSection';
import { WeKeepYouAhead } from './components/WeKeepYouAhead';
import { WelcomeSection } from './components/WelcomeSection';

export default function Home() {
  return (
    <div className="h-full w-full">
      <ViewportTrigger />
      <HeroSection />
      <WelcomeSection />
      <WeKeepYouAhead />
      <EmergingTechSection />
      {/* <NewsLetterSection /> */}
      <CareersSection />
    </div>
  );
}
