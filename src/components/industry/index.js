import Image from 'next/image';

import ArrowButton from '@/components/common/atoms/arrowButton';
import Card from '@/components/common/atoms/card';
import Container from '@/components/common/atoms/container';

const Industry = () => {
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
        <Card bodyClassName={'grow w-[60%]'}>
          <div className="flex gap-[15px] p-[80px]">
            <div>
              <div className="flex items-start flex-wrap ">
                <div className="text-[50px] max-w-[70%] font-bold text-white">TAKE THE WORLD WITH CLOUD</div>
                <div className="cursor-pointer pt-[20px] flex w-[30%] gap-[20px] items-center ">
                  <div className="w-[40px] h-[40px]">
                    <Image src={'/assets/images/industry/shape.svg'} width={40} height={40} alt="" />
                  </div>
                  <div className="text-red-500">START A PROJECT</div>
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
            <div className="flex  justify-between w-full items-center">
              <ArrowButton
                arrowType="black"
                titleClassName="text-white"
                hoverColor="#ffffff81"
                arrowClassName="duration-500 color-white border-white border-[1px]  p-[15px] rounded-full bg-white"
                title="LOREM IPSUM"
              />
              <button className="animation-element appear text-white rounded-lg white-blur-btn p-[10px] px-[15px]">
                CLOUD COMPUTING
              </button>
            </div>
          </div>
        </div>
      </div>
      <Container containerClassName={'flex gap-[20px]'}>
        <Card bodyClassName={'p-[30px] flex flex-col gap-[20px] w-full text-center'}>
          <div className="text-[#B3B3B2] text-[20px]">CLIENTS</div>
          <div className="text-red-500 text-[60px]">200+</div>
        </Card>
        <Card bodyClassName={'p-[30px] flex flex-col gap-[20px] w-full text-center'}>
          <div className="text-[#B3B3B2] text-[20px]">PROJECTS</div>
          <div className="text-red-500 text-[60px]">280</div>
        </Card>
        <Card bodyClassName={'p-[30px] flex flex-col gap-[20px] w-full text-center'}>
          <div className="text-[#B3B3B2] text-[20px]">HAPPY CLIENTS</div>
          <div className="text-red-500 text-[60px]">100%</div>
        </Card>
      </Container>
      <Container containerClassName={'flex flex-col gap-[20px]'}>
        <Card bodyClassName={'p-[50px] flex flex-col text-white text-[50px] gap-[20px] w-full'}>OUR SERVICES</Card>
        <div className="flex">
          <div className="pr-[10px] w-[50%]">
            <Card
              bodyClassName={'p-[80px] flex h-full flex-col justify-between text-white text-[50px] gap-[20px] w-full'}
            >
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[15px]">
                  <Image src={'/assets/images/industry/icon_1.svg'} width={60} height={60} alt="" />

                  <div className="text-[25px] text-white">CLOUD DATA AND AI</div>
                </div>
                <div className="text-[#B3B3B2] text-[20px]">
                  Lorem ipsum dolor sit amet consectetur. Sapien ut sit molestie dui nunc.
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-[#F9EFEC]  text-right text-[30px]">
                  DATA IS THE DRIVER AND AI IS THE DIFFERENTIATOR
                </div>
              </div>
            </Card>
          </div>
          <div className="h-full  h-grow pl-[10px] w-[50%]">
            <Card bodyClassName={'grow p-[40px] text-white text-[50px] gap-[20px] w-full'}>
              <div className="flex items-center justify-between">
                <div className="text-white text-[25px]">LOREM IPSUM DOLOR</div>
                <ArrowButton
                  arrowType="normal"
                  hoverColor="#ffffff81"
                  arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
                  title="VIEW ALL"
                  titleClassName="text-[#B3B3B2] text-[20px]"
                />
              </div>
              <div className="w-full border-[1px] border-[#333333] mt-[20px] flex flex-col justify-end h-[300px] grow pt-[20px] bg-cover p-[30px] bg-center rounded-[20px] bg-[url(/assets/images/industry/image_1.svg)]">
                <ArrowButton
                  arrowType="black"
                  titleClassName="text-white text-[20px]"
                  hoverColor="#ffffff81"
                  arrowClassName="duration-500 color-white border-white border-[1px]  p-[15px] rounded-full bg-white"
                  title="KNOW MORE"
                />
              </div>
            </Card>
          </div>
        </div>
        <div className="flex">
          <div className="pr-[10px] w-[50%]">
            <Card bodyClassName="grow p-[40px] text-white text-[50px] gap-[20px] w-full">
              <div className="flex items-center justify-between">
                <div className="text-white text-[25px]">LOREM IPSUM DOLOR</div>
                <ArrowButton
                  arrowType="normal"
                  hoverColor="#ffffff81"
                  arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
                  title="VIEW ALL"
                  titleClassName="text-[#B3B3B2] text-[20px]"
                ></ArrowButton>
              </div>
              <div className="w-full border-[1px] border-[#333333] mt-[20px] flex flex-col justify-end h-[300px] grow pt-[20px] bg-cover p-[30px] bg-center rounded-[20px] bg-[url(/assets/images/industry/image_1.svg)]">
                <ArrowButton
                  arrowType="black"
                  titleClassName="text-white text-[20px]"
                  hoverColor="#ffffff81"
                  arrowClassName="duration-500 color-white border-white border-[1px]  p-[15px] rounded-full bg-white"
                  title="KNOW MORE"
                />
              </div>
            </Card>
          </div>
          <div className="pl-[10px] w-[50%]">
            <Card bodyClassName="p-[80px] flex h-full flex-col justify-between text-white text-[50px] gap-[20px] w-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[15px]">
                  <Image src={'/assets/images/industry/icon_1.svg'} width={60} height={60} alt="" />

                  <div className="text-[25px] text-white">CLOUD DATA AND AI</div>
                </div>
                <div className="text-[#B3B3B2] text-[20px]">
                  Lorem ipsum dolor sit amet consectetur. Sapien ut sit molestie dui nunc.
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-[#F9EFEC]  text-right text-[30px]">
                  DATA IS THE DRIVER AND AI IS THE DIFFERENTIATOR
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex">
          <div className="pr-[10px] w-[50%]">
            <Card bodyClassName="p-[80px] flex h-full flex-col justify-between text-white text-[50px] gap-[20px] w-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[15px]">
                  <Image src={'/assets/images/industry/icon_1.svg'} width={60} height={60} alt="" />

                  <div className="text-[25px] text-white">TRANSFORMATION JOURNEY</div>
                </div>
                <div className="text-[#B3B3B2] text-[20px]">
                  Expert managed services drive stability, optimization and transformation in complex cloud-based IT
                  environments.
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-[#F9EFEC]  text-right text-[30px]">
                  Stabilizing, Optimizing and Elevating IT Performance
                </div>
              </div>
            </Card>
          </div>
          <div className="pl-[10px] w-[50%]">
            <Card bodyClassName="p-[80px] flex h-full flex-col justify-between text-white text-[50px] gap-[20px] w-full">
              <div className="flex items-center justify-between">
                <div className="text-white text-[25px]">LOREM IPSUM DOLOR</div>
                <ArrowButton
                  arrowType="normal"
                  hoverColor="#ffffff81"
                  arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
                  title="VIEW ALL"
                  titleClassName="text-[#B3B3B2] text-[20px]"
                ></ArrowButton>
              </div>
              <div className="w-full border-[1px] border-[#333333] mt-[20px] flex flex-col justify-end h-[300px] grow pt-[20px] bg-cover p-[30px] bg-center rounded-[20px] bg-[url(/assets/images/industry/image_1.svg)]">
                <ArrowButton
                  arrowType="black"
                  titleClassName="text-white text-[20px]"
                  hoverColor="#ffffff81"
                  arrowClassName="duration-500 color-white border-white border-[1px]  p-[15px] rounded-full bg-white"
                  title="KNOW MORE"
                />
              </div>
            </Card>
          </div>
        </div>
      </Container>
      <Container containerClassName={'flex flex-col gap-[20px]'}>
        <Card bodyClassName="p-[50px] flex flex-col text-white text-[50px] gap-[20px] w-full">SEGMENT WE SUPPORT</Card>
        <div className="animation-element appear flex">
          <div className="w-[45%]">
            <div className="animation-element appear flex items-center gap-[15px]">
              <div className="w-[10px] h-[10px] bg-red-500"></div>
              <div className="text-[#B3B3B2] text-[25px]">LOREM IPSUM DOLOR SIT</div>
            </div>
            <button className="animation-element appear my-[30px] bg-[#F51101] rounded-lg p-[10px] px-[15px]">
              <div className="text-[#B3B3B2] text-[25px]">LOREM IPSUM DOLOR SIT</div>
            </button>
            <div className="flex flex-col gap-[20px]">
              <div className="animation-element appear text-[#B3B3B2] text-[25px]">LOREM IPSUM DOLOR SIT</div>
              <div className="animation-element appear text-[#B3B3B2] text-[25px]">LOREM IPSUM DOLOR SIT</div>
              <div className="animation-element appear text-[#B3B3B2] text-[25px]">LOREM IPSUM DOLOR SIT</div>
              <div className="animation-element appear text-[#B3B3B2] text-[25px]">LOREM IPSUM DOLOR SIT</div>
            </div>
          </div>
          <Card bodyClassName="w-[55%] p-[60px]">
            <div className="flex justify-between border-[#262626] border-b-[1px] pb-[20px]">
              <div className="text-[#F9EFEC] text-[20px]">
                How long does it take to complete a web development project?
              </div>
              <Image src={'/assets/images/industry/button_1.svg'} width={40} height={40} alt="" />
            </div>
            <div className="w-full  pt-[20px]">
              <Image src={'/assets/images/industry/image.svg'} layout="responsive" width={100} height={100} alt="" />
            </div>
          </Card>
        </div>
      </Container>

      <Container containerClassName={'flex flex-col gap-[20px]'}>
        <Card bodyClassName="p-[50px] flex flex-col text-white text-[50px] gap-[20px] w-full">
          WHAT`S TRENDING WITH DATA AND AI?
        </Card>
        <div className="flex gap-[20px]">
          <Card bodyClassName="w-[55%] bg-[#1A1A1A] rounded-lg p-[40px]">
            <Image src={'/assets/images/industry/icon_2.svg'} width={60} height={60} alt="" />
            <div className="text-[#F9EFEC] text-[30px] h-[200px] pt-[40px]">
              Real-Time Predictive Maintenance using Edge AI and IoT sensors
            </div>
            <div className="text-[#B3B3B2] text-[20px] pt-[20px]">A case study of Boeing 787 Dreamliner</div>
          </Card>
          <Card bodyClassName="w-[55%] p-[40px]">
            <Image src={'/assets/images/industry/icon_3.svg'} width={60} height={60} alt="" />
            <div className="text-[#F9EFEC] text-[30px] h-[200px] pt-[40px]">
              Using Generative AI to Boost Marketing Effectiveness
            </div>
            <div className="text-[#B3B3B2] text-[20px] pt-[20px]">
              A case study of Coca-Cola&apos;s personalized ad campaigns
            </div>
          </Card>
          <Card bodyClassName="w-[55%] p-[40px]">
            <Image src={'/assets/images/industry/icon_4.svg'} width={60} height={60} alt="" />
            <div className="text-[#F9EFEC] text-[30px] h-[200px] pt-[40px]">Explainable AI in Healthcare</div>
            <div className="text-[#B3B3B2] text-[20px] pt-[20px]">
              Improving patient outcomes with transparent predictive models
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Industry;
