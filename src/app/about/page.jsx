import About from "@/src/components/about";
import ViewportTrigger from "@/src/components/utils/viewPortTrigger";
export default function aboutPage() {
  return (
    <>
      <ViewportTrigger />
      <About />
    </>
  );
}
