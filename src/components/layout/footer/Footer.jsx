import Image from 'next/image';
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
  { name: 'Privacy Statement', link: '/privacy-policy' },
  { name: 'Terms of Service', link: '/terms-of-service' },
  { name: 'Cookies Policy', link: '/cookies-policy' },
];

const socialLinks = [
  { name: 'Facebook', icon: <FaFacebook className="text-xl" />, link: '#' },
  { name: 'Xing', icon: <FaXTwitter className="text-xl" />, link: '#' },
  { name: 'Instagram', icon: <FaInstagram className="text-xl" />, link: '#' },
];

export function Footer() {
  return (
    <div className=" bg-black text-zinc-50 py-6">
      <div>
        <div className="md:grid md:grid-cols-5 flex flex-col md:justify-start gap-10 items-center pt-16">
          <div className="px-10 col-span-2">
            <Image src="/assets/images/capzient_logo_white.png" height={250} width={250} alt="logo"></Image>
            <p className="text-start opacity-70">(c) 2024 Capzient, All rights reserved.</p>
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

          <div className="flex justify-center">
            <ul className="flex flex-col items-center gap-1">
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
      </div>
    </div>
  );
}
