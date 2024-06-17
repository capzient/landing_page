import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const companyLinks = [
  { name: 'About Us', link: '#' },
  { name: 'Contact Us', link: '#' },
  { name: 'Location', link: '#' },
  { name: 'Careers', link: '#' },
];

const legalLinks = [
  { name: 'Privacy Statement', link: '#' },
  { name: 'Terms and Condition', link: '#' },
  { name: 'Cookies Policy', link: '#' },
];

const socialLinks = [
  { name: 'Facebook', icon: <FaFacebook className="text-xl" />, link: '#' },
  { name: 'Xing', icon: <FaXTwitter className="text-xl" />, link: '#' },
  { name: 'Instagram', icon: <FaInstagram className="text-xl" />, link: '#' },
];

export function Footer() {
  return (
    <div className=" bg-black text-zinc-50">
      <div>
        <div className="md:grid md:grid-cols-6 flex flex-col md:justify-start gap-10 items-center pt-16">
          <div>
            <ul className="mx-0">
              <li className=" text-4xl mx-16">Capzient</li>
            </ul>
          </div>
          <div className="col-start-3">
            <ul className="flex flex-col items-center  gap-1">
              <li className="font-bold my-2">Company</li>
              {companyLinks.map((link) => (
                <Link
                  href={link.link}
                  key={link.name}
                  className=" flex justify-center items-center md:justify-start text-white/70 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex flex-col items-center  gap-1">
              <li className="font-bold my-2 ">Legal and Policy</li>
              {legalLinks.map((link) => (
                <Link
                  href={link.link}
                  key={link.name}
                  className=" flex justify-center items-center md:justify-start text-white/70 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>

          <div className="flex justify-end">
            <ul className="flex flex-col items-center  gap-1">
              <li className="font-bold my-2">FOLLOW US</li>
              <li className="flex justify-center items-center md:justify-start">
                {socialLinks.map((link) => (
                  <Link href={link.link} key={link.name} className="mx-2 text-white/70 hover:text-white">
                    {link.icon}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 my-10 p-4 pt-6 pb-6 mb-0">
          <div className="mx-16">
            <ion-icon name="business-outline"></ion-icon> 2024 Company
          </div>
          <div className="col-start-3">
            <span className="mx-2 ">Term of Services</span>
            <span className="mx-2">Privacy Policy</span>
            <span className="mx-2">English</span>
            <span className="mx-2">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
            <span className="mx-8">
              <ion-icon name="arrow-up-outline"></ion-icon>
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
