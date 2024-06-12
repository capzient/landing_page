import Careers from '@/components/careers';
import ViewportTrigger from '@/components/utils/viewPortTrigger';

export default function careers() {
  return (
    <div>
      <ViewportTrigger />
      <Careers />
    </div>
  );
}
