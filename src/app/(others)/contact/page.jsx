import { generateSeo } from '@/utils/generateSeo';
import { ViewportTrigger } from '@/utils/viewPortTrigger';

import { ContactBanner } from './components/ContactBanner';
import { ContactForm } from './components/ContactForm';

export const generateMetadata = () =>
  generateSeo({
    title: `Contact Us`,
    description: 'Hello world',
    url: '/contact',
  });

const ContactPage = () => (
  <div>
    <ViewportTrigger />
    <ContactBanner />
    <ContactForm />
  </div>
);
export default ContactPage;
