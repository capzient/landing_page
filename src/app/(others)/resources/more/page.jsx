import { ViewportTrigger } from '@/utils/viewPortTrigger';

import { More } from './components/More';

export default function readMorePage() {
  return (
    <>
      <ViewportTrigger />
      <More />
    </>
  );
}
