import { ViewportTrigger } from '@/utils/viewPortTrigger';

import { About } from './components/About';

export default function aboutPage() {
  return (
    <>
      <ViewportTrigger />
      <About />
    </>
  );
}
