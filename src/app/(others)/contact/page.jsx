import { ViewportTrigger } from '@/utils/viewPortTrigger';

import { ContactBanner } from './components/ContactBanner';
import { ContactForm } from './components/ContactForm';

const ContactPage = () => (
  <div>
    <ViewportTrigger />
    <ContactBanner />
    <ContactForm />
  </div>
);
export default ContactPage;
