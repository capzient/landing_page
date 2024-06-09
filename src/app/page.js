import Hero from "../components/main/hero";
import Welcome from "../components/main/welcome";
import Careers from "../components/main/careers";
import Footer from "../components/layout/footer/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Hero />
      <Welcome />
      <Careers />
      <Footer />
    </main>
  );
}
