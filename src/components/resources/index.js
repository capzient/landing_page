import Image from 'next/image';
import Link from 'next/link';

import ArrowButton from '@/components/atoms/arrowButton';
import Card from '@/components/atoms/card';
import Container from '@/components/atoms/container';

const Resources = () => {
  const footerText = ['CLOUD STORAGE', 'VIRTUALIZATION', 'LOAD BALANCING', 'BACKUP AND RECOVERY'];
  const renderFooterText = () => {
    let textArray = [];
    for (let i = 0; i < 1; i++) {
      textArray = [...textArray, ...footerText];
    }
    return (
      <div className="flex m-auto justify-center overflow-hidden gap-[15px] ">
        {textArray.map((a, idx) => (
          <div className="flex gap-[15px] items-center" key={idx}>
            {idx !== 0 && <div className="w-[5px] h-[5px] rounded-full bg-red-500"></div>}
            {a}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-[50px] bg-black px-[130px] py-[100px] pt-[200px]">
      <div className="flex gap-[40px]">
        <Card bodyClassName="grow w-[60%]">
          <div className="flex gap-[15px] p-[80px]">
            <div>
              <div className="flex items-center flex-wrap gap-[20px]">
                <div className="text-[50px] font-bold text-white">CAPZIENT RESOURCES</div>
                <div className="cursor-pointer flex  gap-[20px] items-center ">
                  <div className="w-[40px] h-[40px]">
                    <Image src={'/assets/images/industry/shape.svg'} width={40} height={40} alt="" />
                  </div>
                  <div className="text-red-500">SEE ALL</div>
                </div>
              </div>
              <div className="text-[18px] text-[#676665]">
                Every day, Capzient amplifies innovation through cloud computing, driving digital revolution and
                transforming global experiences.
              </div>
            </div>
          </div>
          <div className="animation-element appear w-full	bg-[#0F0F0F]  p-[10px] mb-[20px] text-[#676665]">
            {renderFooterText()}
          </div>
        </Card>
        <div className="animation-element appear rounded-lg w-[40%] h-grow bg-center bg-cover bg-[url('/assets/images/industry/sub_container.svg')]">
          <div className="flex h-full p-[30px] items-end">
            <div className="flex justify-between w-full items-center">
              <ArrowButton
                arrowColor="black"
                titleClassName="text-white"
                hoverColor="#ffffff81"
                arrowClassName="duration-500 color-white border-white border-[1px]  p-[15px] rounded-full bg-white"
                title="LOREM IPSUM"
              />
            </div>
          </div>
        </div>
      </div>
      <Card bodyClassName="flex items-center justify-between p-[50px] flex text-white text-[50px] gap-[20px] w-full">
        RESOURCES
        <div className="cursor-pointer flex gap-[15px] items-center">
          <ArrowButton
            arrowColor="normal"
            titleClassName="text-[#B3B3B2]  text-[20px]"
            hoverColor="#ffffff81"
            arrowClassName="duration-500 color-white  border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
            title="VIEW WORKS"
          />
        </div>
      </Card>
      <Container className="p-[20px] flex flex-col gap-[20px]">
        <div className="flex">
          <div className="pr-[10px] w-[50%]">
            <div className=" bg-[#1A1A1A] text-white text-[50px] w-full rounded-lg">
              <div className="w-full">
                <Image
                  src={'/assets/images/resources/image_1.svg'}
                  layout="responsive"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="pl-[10px] w-[50%]">
            <div className="bg-[#1A1A1A] p-[30px] flex h-full flex-col justify-between text-white text-[50px] gap-[20px] w-full rounded-lg">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-[20px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[15px]">
                      <Image src={'/assets/images/industry/icon_1.svg'} width={60} height={60} alt="" />

                      <div className="text-[25px] text-white">CLOUD DATA AND AI</div>
                    </div>
                    <div className="cursor-pointer flex gap-[15px] items-center">
                      <ArrowButton
                        arrowColor="normal"
                        titleClassName="text-[#B3B3B2]  text-[20px]"
                        hoverColor="#ffffff81"
                        arrowClassName="duration-500 color-white  border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
                        title="READ THE STORY"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[20px]">
                    <div className="flex gap-[10px] items-center text-[14px] p-[10px] bg-[#1F1F1F] rounded-[45px]">
                      <div className="text-[#B3B3B2]">May 30,2024</div>
                      <div className="w-[5px] h-[5px] bg-red-500 rounded-full"></div>
                      <div className="text-[#E6E6E6]">Most seen</div>
                    </div>
                    <div className="flex gap-[10px] items-center text-[14px] p-[10px] bg-[#1F1F1F] rounded-[45px]">
                      <div className="text-[#B3B3B2]">Category</div>
                      <div className="w-[5px] h-[5px] bg-red-500 rounded-full"></div>
                      <div className="text-[#E6E6E6]">Lorem ipsum dolor</div>
                    </div>
                  </div>
                </div>

                <div className="text-[#B3B3B2] pb-[40px] text-[20px]">By - Lorem Ipsum</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full">
        <button className="animation-element appear bg-[#F51101] text-[14px] block text-black rounded-md px-[150px] m-auto py-[15px]">
          <Link href={'/resources/more'}>LOAD MORE</Link>
        </button>
      </div>
    </div>
  );
};

export default Resources;
