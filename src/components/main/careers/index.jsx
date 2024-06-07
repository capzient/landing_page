import Image from "next/image";
import WithRedRect from "../../utils/withRedRect";
import Button from "./Button";

const Careers = () => {
  return (
    <div className="bg-[#030303] w-full">
      <div className="pl-11 pt-32 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999] text-9xl">
        <WithRedRect>Careers</WithRedRect>
      </div>
      <div className="flex mb-0 flex-wrap">
        {" "}
        <div className="w-full md:w-1/2 lg:w-1/2">
          {" "}
          <Image
            src={"/assets/images/careerImg.png"}
            alt="careers img"
            className="mt-32 pl-11 mx-auto md:mx-0"
            width={950}
            height={950}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 text-white text-left mt-12 p-20 mr-50 text-4xl">
          <p>
            At Capzient, we live for change, thrive in disruption, and champion
            those who dare to dream bigger. If you're the kind of innovator
            who's hungry for growth and not afraid to challenge the status quo,
            this is your time. We're looking for the curious, the bold, and the
            brilliant. So, if you’re ready to push the boundaries of what’s
            possible, come join us and together, we’ll redefine the future of
            business, technology, and society.
          </p>
          <div className="flex mt-20 justify-center md:justify-start">
            {" "}
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
