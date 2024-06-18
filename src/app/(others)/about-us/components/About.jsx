import Image from 'next/image';

import { Card } from '@/components/common/atoms/card';
import { Container } from '@/components/common/atoms/container';

export function About() {
  return (
    <div className="gap-[50px] bg-black px-[60px] py-[100px] pt-[200px] flex flex-col">
      <div className="animation-element appear flex items-end  relative justify-">
        <Image
          src={'/assets/images/about/subContainer.svg'}
          width={1500}
          height={1000}
          alt=""
          className=""
          layout="responsive"
        />
        <div className="text-white text-[80px] absolute p-[30px] w-[750px]">Lorem ipsum dolor sit amet </div>
      </div>
      <Card bodyClassName="p-[40px] flex flex-col justify-end">
        <div className="text-[30px] text-[#F9EFEC]">THE ESSENCE OF MINIMALISM IN DESIGN.</div>
        <div className="pl-[45px] pt-4 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae expedita obcaecati, quisquam, aliquid
          repellat labore, animi odit at temporibus ea iusto fuga possimus culpa ullam porro quam maxime? Commodi?Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Cum eum totam aliquid maiores nemo minus ipsa neque, quam
          officiis enim veniam sequi harum repellendus provident Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Rem illum velit ipsa voluptas adipisci veritatis, odit explicabo quo aliquam nihil distinctio aliquid
          ullam. Iusto maxime, corrupti blanditiis nostrum delectus Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Unde quia a architecto <br />
          <br />
          voluptatibus aperiam eveniet in voluptas quis eaque harum, cupiditate ipsa, exercitationem pariatur maiores
          dolorem quasi quos, et repudianda//eslint-disable-next-lineimport/no-extraneous-dependencies\n//importmaxime,
          corrupti blanditiis nostrum delectus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quia a
          architecto voluptatibus aperiam eveniet in voluptas quis eaque harum, cupiditate ipsa, exercitationem pariatur
          maiores dolorem quasi quos, et repudianda//eslint-disable-next-lineimport/no-extraneous-dependencies\n//import
          uptas quis eaque harum, cupiditate ipsa, exercitationem pariatur maiores dolorem quasi quos, et
          repudianda//eslint-disable-next-lineimport/no-extraneous-dependencies\n//import
        </div>
      </Card>
      <div className="flex flex-row justify-end ">
        <Card className="flex justify-end  flex-col w-[40%] items-center">
          <div className="flex flex-row w-full rounded-xl justify-end bg-[#1A1A1A] items-center">
            <div className="flex flex-col px-[15px] rounded-xl w-1/2">
              <div className="animation-element appear bg-[#1F1F1F] m-4 px-[10px] py-[8px] flex flex-col gap-[5px] w-full text-center rounded-xl">
                <div className="text-[#B3B3B2] text-[13px]">CLIENTS</div>
                <div className="text-[#F51101] text-[45px] font-semibold">200+</div>
              </div>
              <div className="animation-element appear bg-[#1F1F1F] m-4 p-[10px] flex flex-col gap-[5px] w-full text-center rounded-xl">
                <div className="text-[#B3B3B2] text-[13px]">PROJECTS</div>
                <div className="text-[#F51102] text-[45px] font-semibold">280+</div>
              </div>
            </div>
            <div className="bg-[#1A1A1A] flex flex-col px-[20px] mx-[18px] rounded-xl w-1/2">
              <div className="animation-element appear bg-[#1F1F1F] m-4 p-[10px] flex flex-col gap-[5px] w-full text-center rounded-xl">
                <div className="text-[#B3B3B2] text-[13px]">HAPPY CLIENTS</div>
                <div className="text-[#F51101] text-[45px] font-semibold">100%</div>
              </div>
              <div className="animation-element appear bg-[#1F1F1F] m-4 p-[10px] flex flex-col gap-[5px] w-full text-center rounded-xl">
                <div className="text-[#B3B3B2] text-[13px]">FOLLOWER</div>
                <div className="text-[#F51101] text-[45px] font-semibold">420K</div>
              </div>
            </div>
          </div>
          <div className="animation-element appear flex py-3 items-center justify-center">
            <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full border border-gray-700 p-6">
              <Image src={'/assets/images/about/icon.svg'} width={20} height={20} alt="" className="absolute" />
            </div>
            <div className="pl-3 text-[#B3B3B2]">KNOW MORE</div>
          </div>
        </Card>
      </div>

      <Container containerClassName="p-[20px] flex flex-col gap-[20px]">
        <div className="flex gap-[20px]">
          <div className="animation-element appear w-[55%] bg-gradient-50-50 rounded-lg px-[20px] pb-[30px]">
            <div className=" flex flex-col items-center justify-center">
              {' '}
              <div className="text-[#F9EFEC] text-[25px] h-[100px] pt-[40px] flex justify-center">Aniket</div>
              <div className="text-[#B3B3B2] text-[20px] h-[10px] pb-[40px] flex items-center">Co-founder & CEO</div>
            </div>
            <div className="w-full">
              <Image src={'/assets/images/about/person1.svg'} width={450} height={150} layout="responsive" alt="" />
            </div>

            <div className="animation-element appear flex flex-row pt-4 space-x-3 items-center justify-center ">
              <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full border border-gray-700 p-7 ">
                <Image src={'/assets/images/about/facebook.svg'} width={16} height={16} alt="" className="absolute" />
              </div>
              <div className="flex pt-2 items-center flex-row justify-center">
                <div
                  className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full
               border border-gray-700 p-7 "
                >
                  <Image
                    src={'/assets/images/resources_more/twitter.svg'}
                    width={30}
                    height={30}
                    alt=""
                    className="absolute"
                  />
                </div>
              </div>
              <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full border border-gray-700 p-7 ">
                <Image src={'/assets/images/about/linkedIn.svg'} width={56} height={56} alt="" className="absolute" />
              </div>
            </div>
          </div>
          <div className="animation-element appear w-[55%] bg-gradient-50-50  rounded-lg px-[20px] pb-[30px]">
            <div className=" flex flex-col items-center justify-center">
              {' '}
              <div className="text-[#F9EFEC] text-[25px] h-[100px] pt-[40px] flex justify-center">SHIV</div>
              <div className="text-[#B3B3B2] text-[20px] h-[10px] pb-[40px] flex items-center">HEAD OF DESIGN</div>
            </div>
            <div className="w-full">
              <Image src={'/assets/images/about/person2.svg'} width={450} height={150} layout="responsive" alt="" />
            </div>

            <div className="animation-element appear flex pt-4 items-center justify-center space-x-3">
              <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full border border-gray-700 p-7 ">
                <Image src={'/assets/images/about/facebook.svg'} width={16} height={16} alt="" className="absolute" />
              </div>
              <div className="flex pt-2 items-center flex-row justify-center">
                <div
                  className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full
               border border-gray-700 p-7 "
                >
                  <Image
                    src={'/assets/images/resources_more/twitter.svg'}
                    width={30}
                    height={30}
                    alt=""
                    className="absolute"
                  />
                </div>
              </div>
              <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full border border-gray-700 p-7 ">
                <Image src={'/assets/images/about/linkedIn.svg'} width={56} height={56} alt="" className="absolute" />
              </div>
            </div>
          </div>
          <div className="animation-element appear w-[55%] bg-gradient-50-50  rounded-lg px-[20px] pb-[30px]">
            <div className=" flex flex-col items-center justify-center">
              {' '}
              <div className="text-[#F9EFEC] text-[25px] h-[100px] pt-[40px] flex justify-center">CHENG</div>
              <div className="text-[#B3B3B2] text-[20px] h-[10px] pb-[40px] flex items-center">
                Lead Backend Developer
              </div>
            </div>
            <div className="w-full">
              <Image src={'/assets/images/about/person3.svg'} width={450} height={150} layout="responsive" alt="" />
            </div>

            <div className="animation-element appear flex pt-4 items-center justify-center space-x-3">
              <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full border border-gray-700 p-7 ">
                <Image src={'/assets/images/about/facebook.svg'} width={16} height={16} alt="" className="absolute" />
              </div>
              <div className="flex pt-2 items-center flex-row justify-center">
                <div
                  className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full
               border border-gray-700 p-7 "
                >
                  <Image
                    src={'/assets/images/resources_more/twitter.svg'}
                    width={30}
                    height={30}
                    alt=""
                    className="absolute"
                  />
                </div>
              </div>
              <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full border border-gray-700 p-7 ">
                <Image src={'/assets/images/about/linkedIn.svg'} width={56} height={56} alt="" className="absolute" />
              </div>
            </div>
          </div>
        </div>

        <Card bodyClassName="flex flex-row justify-between items-center">
          <div className="p-[40px] flex flex-col text-white text-[48px] gap-[20px] w-full rounded-lg">
            MEET THE BRILLIANT MINDS BEHIND CAPZIENT
          </div>
          <div className="animation-element appear flex items-center px-4">
            <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full border border-gray-700 p-6">
              <Image src={'/assets/images/about/arrowup.svg'} width={20} height={20} alt="" className="absolute" />
            </div>
            <div className="px-3 text-[#B3B3B2] whitespace-nowrap">ALL MEMBERS</div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
