import { CareersSection } from './components/CareersSection';
import { EmergingTechSection } from './components/EmergingTechSection';
import { HeroSection } from './components/HeroSection';
import { WeKeepYouAhead } from './components/WeKeepYouAhead';
import { WelcomeSection } from './components/WelcomeSection';

export default function Home() {
  return (
    <>
        <HeroSection />
        {/* <div className='w-full h-screen bg-black' /> */}
      {/* <div className="pt-5 bg-pink-400"> */}
      {/* </div> */}
      <div className="bg-pink-300">
        <WelcomeSection />
        <WeKeepYouAhead />
        <EmergingTechSection />
        <CareersSection />
      </div>
    </>
  );
}
