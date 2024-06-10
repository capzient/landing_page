import Contact from "@/src/components/contact";
import ViewportTrigger from "@/src/components/utils/viewPortTrigger";
export default function contact() {
  return (
    <div>
      <ViewportTrigger />
      <Contact />
    </div>
  );
}
