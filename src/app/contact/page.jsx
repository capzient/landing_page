import Contact from '@/components/contact';
import ViewportTrigger from '@/components/utils/viewPortTrigger';

export default function contact() {
  return (
    <div>
      <ViewportTrigger />
      <Contact />
    </div>
  );
}
