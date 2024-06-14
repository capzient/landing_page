import Footer from '@/components/layout/footer/Footer';
import Careers from '@/components/main/careers';
import EmergingTech from '@/components/main/emergingtech';
import Hero from '@/components/main/hero';
import NewsLetter from '@/components/main/newsletter';
import Welcome from '@/components/main/welcome';
import ViewportTrigger from '@/components/utils/viewPortTrigger';

export default function Home() {
  return (
    <div className="h-full w-full">
      <ViewportTrigger />
      <Hero />
      <Welcome />
      <EmergingTech />
      <NewsLetter />
      <Careers />
      <Footer />
    </div>
  );
}
