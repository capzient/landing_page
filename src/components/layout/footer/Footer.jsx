import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { FaEnvelope, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

import { siteConfig } from '@/config/site';

const companyLinks = [
  { name: 'About Us', link: '/about' },
  { name: 'Contact Us', link: '/contact' },
  // { name: 'Location', link: '/' },
  { name: 'Careers', link: '/#careers' },
];

const legalLinks = [
  { name: 'Privacy Statement', link: '/privacy-policy' },
  { name: 'Terms of Service', link: '/terms-of-service' },
  { name: 'Cookies Policy', link: '/cookies-policy' },
];

const socialLinks = [
  { name: 'LinkedIN', icon: <FaLinkedin className="text-xl" />, link: siteConfig.links.linkedin },
  { name: 'X', icon: <FaXTwitter className="text-xl" />, link: siteConfig.links.twitter },
  { name: 'Instagram', icon: <FaInstagram className="text-xl" />, link: siteConfig.links.instagram },
  { name: 'Email', icon: <FaEnvelope className="text-xl" />, link: `mailto:${siteConfig.email}` },
];

export function Footer() {
  return (
    <div className="bg-gradient-to-r from-black to-neutral-950 text-zinc-50 py-6">
      <div>
        <div className="md:grid md:grid-cols-5 flex flex-col md:justify-start gap-10 items-center pt-16 ">
          <div className="px-10 col-span-2">
            <Image src="/assets/images/capzient_logo_white.png" height={250} width={250} alt="logo"></Image>
            <p className="text-start opacity-70">(c) 2024 Capzient, All rights reserved.</p>
          </div>
          <div className="col-start-3 ">
            <ul className="flex flex-col items-center  gap-1">
              <li className="font-bold my-2">Company</li>
              {companyLinks.map((link) => (
                <Link
                  href={link.link}
                  key={link.name}
                  className="flex justify-center leading-loose items-center md:justify-start text-white/70 hover:text-white"
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
                  className=" flex justify-center leading-loose items-center md:justify-start text-white/70 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>

          <div className="flex justify-center ">
            <ul className="flex flex-col items-center gap-1">
              <li className="font-bold my-2">FOLLOW US</li>
              <li className="flex justify-center items-center md:justify-start">
                {socialLinks.map((link) => (
                  <Link
                    href={link.link}
                    key={link.name}
                    target="_blank"
                    className="mx-2 text-white/70 hover:text-white"
                  >
                    {link.icon}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
