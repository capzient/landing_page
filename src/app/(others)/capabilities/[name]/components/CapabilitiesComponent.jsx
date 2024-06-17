import Image from 'next/image';
import { notFound } from 'next/navigation';

import { Card } from '@/components/common/atoms/card';
import { Container } from '@/components/common/atoms/container';

import { cloud, cybersecurity } from '../../data';

const getData = (page) => {
  switch (page) {
    case 'cloud':
      return cloud;
    case 'cybersecurity':
      return cybersecurity;
    default:
      return null;
  }
};

export const CapabilitiesComponent = ({ params }) => {
  const page = params.name;
  console.log(page);
  const data = getData(page);
  if (!data) return notFound();
  return (
    <div className="flex flex-col gap-[50px] bg-black px-[130px] py-[100px] pt-[200px]">
      <div className="flex gap-[40px]">
        <div bodyClassName={'grow w-[60%]'}>
          <div className="flex gap-[15px] p-[80px]">
            <div className="flex flex-col gap-7">
              <div className="cursor-pointer pt-[20px] flex w-[30%] gap-[20px] items-center ">
                <div className="w-[40px] h-[40px] animation-element appear">
                  <Image src={'/assets/images/industry/shape.svg'} width={40} height={40} alt="" />
                </div>
                <div className="text-red-500"></div>
              </div>
              <div className="flex items-start flex-wrap ">
                <div className="text-5xl max-w-[70%] font-bold text-white text-balance uppercase animation-element appear">
                  {data.main.heading}
                </div>
              </div>
              <div className="text-[18px] text-[#676665] animation-element appear">{data.main.subhead}</div>
            </div>
          </div>
        </div>
        <div className="animation-element appear rounded-lg w-[40%] h-grow bg-center bg-cover bg-[url('/assets/images/industry/sub_container.svg')]">
          <div className="flex h-full p-[30px] items-end">
            <div className="flex  justify-between w-full items-center">
              <button className=" text-white rounded-lg white-blur-btn p-[10px] px-[15px] uppercase">
                {data.main.name}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Container containerClassName={'flex gap-[20px]'}>
        {data.stats.map((item, index) => (
          <Card key={index} bodyClassName={'p-6 flex flex-col gap-[20px] w-full text-center'}>
            <div className="text-red-500 text-[60px] text-start">{item.number}</div>
            <div className="text-[#B3B3B2] text-[20px] text-start uppercase">{item.details}</div>
          </Card>
        ))}
      </Container>
      <Container containerClassName={'flex flex-col gap-[20px]'}>
        <Card bodyClassName={'p-[50px] flex flex-col text-white text-[50px] gap-[20px] w-full'}>
          Re-imagine {data.main.name}
        </Card>
        <div className="grid grid-cols-2 gap-4">
          {data.grid.map((item, index) => (
            <div key={index} className={`${item.cols === 2 && 'col-span-2'}`}>
              {item.cols === 2 ? (
                <Card bodyClassName={' flex h-full  justify-between text-white text-[50px] gap-[20px] w-full'}>
                  <div className="flex flex-col gap-[20px] w-1/2 p-[80px]">
                    <div className="flex items-center gap-[15px]">
                      <Image src={'/assets/images/industry/icon_1.svg'} width={60} height={60} alt="" />
                      <div className="text-[25px] text-white">{item.title}</div>
                    </div>
                    <div className="text-[#B3B3B2] text-[20px]">{item.description}</div>
                  </div>
                  {item.image && (
                    <div className="flex ">
                      <Image src={item.image} width={500} height={500} className="object-cover" alt="image" />
                    </div>
                  )}
                </Card>
              ) : (
                <Card
                  bodyClassName={
                    'p-[80px] flex h-full flex-col justify-between text-white text-[50px] gap-[20px] w-full'
                  }
                >
                  <div className="flex flex-col gap-[20px]">
                    <div className="flex items-center gap-[15px]">
                      <Image src={'/assets/images/industry/icon_1.svg'} width={60} height={60} alt="" />
                      <div className="text-[25px] text-white">{item.title}</div>
                    </div>
                    <div className="text-[#B3B3B2] text-[20px]">{item.description}</div>
                  </div>
                </Card>
              )}
            </div>
          ))}
        </div>
      </Container>
      <Container containerClassName={'flex flex-col gap-[20px]'}>
        <Card bodyClassName="p-[50px] flex flex-col text-white text-[50px] gap-[20px] w-full uppercase">
          {data.extras.title}
        </Card>
        <div className="grid grid-cols-3 gap-5">
          {data.extras.cards.map((item, index) => (
            <Card key={index} bodyClassName=" bg-[#1A1A1A] rounded-lg p-6">
              <Image src={item.image} alt={item.title} fill className="object-cover -z-10 opacity-75" />
              <div className="text-[#F9EFEC] text-[30px] h-[200px] pt-[40px]">{item.title}</div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};
