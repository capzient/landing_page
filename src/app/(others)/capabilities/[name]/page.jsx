import React from 'react';

import { ViewportTrigger } from '@/utils/viewPortTrigger';

import { CapabilitiesComponent } from './components/CapabilitiesComponent';

const page = async ({ params }) => (
  <>
    <ViewportTrigger />
    <CapabilitiesComponent params={params} />
  </>
);

export default page;
