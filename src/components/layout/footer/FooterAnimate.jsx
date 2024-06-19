import { Footer } from './Footer';

export default function FooterAnimate() {
  return (
    <div className="relative h-[500px]" style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
