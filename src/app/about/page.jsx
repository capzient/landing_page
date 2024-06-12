import About from '@/components/about';
import ViewportTrigger from '@/components/utils/viewPortTrigger';

export default function aboutPage() {
  return (
    <>
      <ViewportTrigger />
      <About />
    </>
  );
}
