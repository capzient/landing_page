import { ViewportTrigger } from '@/utils/viewPortTrigger';

import { Resources } from './components/Resources';

const ResourcePage = () => (
  <>
    <ViewportTrigger />
    <Resources />
  </>
);

export default ResourcePage;
