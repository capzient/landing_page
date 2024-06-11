import Footer from '@/components/layout/footer/Footer';
import Careers from '@/components/main/careers';
import EmergingTech from '@/components/main/emergingtech';
import Hero from '@/components/main/hero';
import NewsLetter from '@/components/main/newsletter';
import Welcome from '@/components/main/welcome';

export default function Home() {
  return (
    <main className="h-full w-full">
      <Hero />
      <Welcome />
      <EmergingTech />
      <NewsLetter />
      <Careers />
      <Footer />
    </main>
  );
}
