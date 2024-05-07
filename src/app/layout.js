import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import ClientReviews from "../components/ClientReviews";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Capzient",
  description: "Capzient Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <AboutUs />
        <Services />
        <ClientReviews />
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
