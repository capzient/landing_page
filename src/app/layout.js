import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/nav";
import { Roboto, Poppins } from "next/font/google";

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
});

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Capzient",
  description: "Capzient Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_init.variable} ${poppins_init.variable}`}>
        <div className="">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
