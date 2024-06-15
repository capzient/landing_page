import { ViewportTrigger } from '@/utils/viewPortTrigger';

import { Careers } from './components/Careers';

export default function careers() {
  return (
    <div>
      <ViewportTrigger />
      <Careers />
    </div>
  );
}
