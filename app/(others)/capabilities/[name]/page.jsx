import React from 'react';

import { generateSeo } from '@/utils/generateSeo';
import { ViewportTrigger } from '@/utils/viewPortTrigger';

import { CapabilitiesComponent } from './components/CapabilitiesComponent';

export const generateMetadata = ({ params }) =>
  generateSeo({
    title: `${params.name.replace(/[-_]/g, ' ').replace(/^\w/, (c) => c.toUpperCase())}`,
    url: '/capabilities/[name]',
  });

const page = async ({ params }) => (
  <>
    <ViewportTrigger />
    <CapabilitiesComponent params={params} />
  </>
);

export default page;
