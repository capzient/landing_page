import WithRedRect from "../../utils/withRedRect";
import WithRedLeftBar from "../../utils/withRedLeftBar";
import Image from "next/image";
import { bullets } from "./data";
const Welcome = () => {
  return (
    <div>
      <div className="h-[100vh]"></div>
      <div className="px-[100px] py-[150px] flex bg-cover bg-center bg-[url('/assets/images/welcome/bg_1.svg')] flex-col w-full">
        <div className="text-white text-title">
          <WithRedLeftBar width={10}>
            <div>
              Welcome to the stellar standard of technology
              <WithRedRect>solutions</WithRedRect>
            </div>
          </WithRedLeftBar>
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-title-lg text-white">We Re-imagine</div>
            <Image
              src={"/assets/images/welcome/video.svg"}
              width={650}
              height={380}
              alt="video"
            />
          </div>
          <div className="text-white text-content pt-[70px]">
            We are an emerging technology company empowering leaders to disrupt
            markets with visionary ideas and groundbreaking technology.
          </div>
        </div>
      </div>
      <div className="bg-[#111111] text-white p-[30px]">
        {bullets.map((aBullet, idx) => (
          <div key={idx} className="flex flex-wrap pb-[100px]">
            <div className="w-[200px]">
              {`[ ${idx + 1 < 10 ? "0" : ""}${idx + 1} ]`}
            </div>
            <div className="text-bullet w-[300px]">
              <div>{aBullet.title_1}</div>
              <div className="text-red-500">{aBullet.title_2}</div>
            </div>
            <div className="grow">
              <div className="w-[300px] m-auto">{aBullet.description}</div>
            </div>
            <div>
              <div className="link link--metis text-sm">Learn more</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#111111] p-[30px] ">
        <div className="flex bg-cover p-[30px] bg-center bg-[url('/assets/images/welcome/bg_2.svg')]">
          <div className="w-[50%]"></div>
          <div className="w-[50%]">
            <div className="pt-[40vh] text-white text-title-lg">
              WE KEEP YOU AHEAD.
            </div>
            <div className="flex gap-[10px]">
              <div className="text-[19px] text-white w-full border border-white rounded-md p-[15px]">
                <div className="h-[70px]">
                  No
                  <div>Interruptions</div>
                </div>
                <div className="flex justify-end w-full p-[10px] pt-[30px]">
                  <Image
                    width={50}
                    height={50}
                    alt="graphic"
                    src={"/assets/images/welcome/graphic/interruption.svg"}
                  />
                </div>
              </div>
              <div className="text-[19px] text-white w-full border border-white rounded-md p-[15px]">
                <div className="h-[70px]">
                  Emissionless
                  <div>Energy</div>
                </div>

                <div className="flex justify-end w-full p-[10px] pt-[30px]">
                  <Image
                    width={50}
                    height={50}
                    alt="graphic"
                    src={"/assets/images/welcome/graphic/energy.svg"}
                  />
                </div>
              </div>
              <div className="text-[19px] text-white w-full border border-white rounded-md p-[15px]">
                <div className="h-[70px]">Unlimited</div>
                <div className="flex justify-end w-full p-[10px] pt-[30px]">
                  <Image
                    width={50}
                    height={50}
                    alt="graphic"
                    src={"/assets/images/welcome/graphic/unlimited.svg"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
