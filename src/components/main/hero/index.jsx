import HeroContent from "../../sub/heroContent";
// import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/assets/videos/video.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </div>
  );

};
export default Hero;
