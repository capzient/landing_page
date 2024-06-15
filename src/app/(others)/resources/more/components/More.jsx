import Image from 'next/image';

import { ArrowButton } from '@/components/common/atoms/arrowButton';
import { Card } from '@/components/common/atoms/card';
import { Container } from '@/components/common/atoms/container';

export function More() {
  return (
    <div className="flex flex-col gap-[50px] bg-black px-[130px] py-[100px] pt-[200px]">
      <div className="flex gap-[40px]">
        <Card bodyClassName="grow w-[60%]">
          <div className="flex gap-[15px] p-[80px]">
            <div>
              <div className="flex items-start flex-wrap">
                <div className="text-[50px] max-w-[70%] font-bold text-white">LOREM IPSUM SIT CONSECTECTUR</div>
                <div className="cursor-pointer pt-[20px] flex w-[30%] gap-[20px] items-center">
                  <div className="w-[40px] h-[40px]">
                    <Image src={'/assets/images/resources_more/shape.svg'} width={40} height={40} alt="" className="" />
                  </div>
                  <div className="text-red-500">SEE ALL</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card bodyClassName="w-[40%] h-grow">
          <div className="flex flex-col p-8 gap-[40px] text-white">
            <div className="animation-element appear bg-[#1F1F1F] flex justify-between rounded-lg px-4 py-6 ">
              <p className="text-gray-400">AUTHOR</p>
              <p>LOREM IPSUM</p>
            </div>
            <div className="animation-element appear bg-[#1F1F1F] flex justify-between rounded-lg px-4 py-6 ">
              <p className="text-gray-400">Published Date</p>
              <p>25TH OCTOBER 2023</p>
            </div>
            <div className="animation-element appear bg-[#1F1F1F] flex justify-between rounded-lg px-4 py-6 ">
              <p className="text-gray-400">Category</p>
              <p>LOREM</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="animation-element appear">
        <Image
          src={'/assets/images/resources_more/readMore.svg'}
          layout="responsive"
          width={1500}
          height={1500}
          alt=""
        />
      </div>
      {/* middle */}
      <div className="animation-element appear px-[10px] rounded-lg flex flex-col">
        <div className="flex text-white bg-black  justify-between ">
          <div className="w-[25%]  px-[20px] flex justify-start items-end flex-col">
            {' '}
            <div className="flex pt-2 items-center ">
              <div
                className="relative flex justify-center items-center bg-[#1F1F1F] rounded-xl
               border border-[#333333] p-[30px] "
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
            <div className="flex pt-4 items-center ">
              <div
                className="relative flex justify-center items-center bg-[#1F1F1F] rounded-xl
               border border-[#333333] p-[30px] "
              >
                <Image
                  src={'/assets/images/resources_more/facebook.svg'}
                  width={18}
                  height={18}
                  alt=""
                  className="absolute"
                />
              </div>
            </div>
          </div>
          <div className="w-[75%]  p-[40px] flex flex-col justify-end bg-[#1A1A1A] rounded-lg">
            <div className="text-[30px]">THE ESSENCE OF MINIMALISM IN DESIGN.</div>
            <div className="pl-[40px] pt-[30px] text-[20px] text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae expedita obcaecati, quisquam, aliquid
              repellat labore, animi odit at temporibus ea iusto fuga possimus culpa ullam porro quam maxime?
              Commodi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eum totam aliquid maiores nemo minus
              ipsa neque, quam officiis enim veniam sequi harum repellendus provident Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Rem illum velit ipsa voluptas adipisci veritatis, odit explicabo quo aliquam
              nihil distinctio aliquid ullam. Iusto maxime, corrupti blanditiis nostrum delectus Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Unde quia a architecto voluptatibus aperiam eveniet in voluptas quis
              eaque harum, cupiditate ipsa, exercitationem pariatur maiores dolorem quasi quos, et
              repudianda//eslint-disable-next-lineimport/no-extraneous-dependencies\n//importmaxime, corrupti blanditiis
              nostrum delectus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quia a architecto
              voluptatibus aperiam eveniet in voluptas quis eaque harum, cupiditate ipsa, exercitationem pariatur
              maiores dolorem quasi quos, et
              repudianda//eslint-disable-next-lineimport/no-extraneous-dependencies\n//import uptas quis eaque harum,
              cupiditate ipsa, exercitationem pariatur maiores dolorem quasi quos, et
              repudianda//eslint-disable-next-lineimport/no-extraneous-dependencies\n//import
            </div>
          </div>
          {/* last */}
          <div className="w-[55%] px-[40px] ">
            <Card bodyClassName="p-[35px]">
              <div className="flex flex-row items-center">
                <Image src={'/assets/images/resources_more/person.svg'} width={60} height={60} alt="" />
                <div className="flex flex-col px-[20px]">
                  <div className="font-semibold">Wade Warren</div>
                  <div className="text-gray-400">Art Director</div>
                </div>
              </div>
              <div className="pt-[20px] text-gray-400">
                Crafting visual narratives that captivate and inspire, weaving creativity into every chapter of the
                design journey.
              </div>
              <div className="animation-element appear bg-[#1F1F1F] flex flex-row items-center rounded-xl p-[15px] mt-[20px]">
                <Image src={'/assets/images/resources_more/twitter.svg'} width={32} height={32} alt="" />
                <div className="flex flex-row justify-between ">
                  <div className="pl-1 text-gray-400">@wadewarren</div>
                  <Image
                    src={'/assets/images/common/arrow.svg'}
                    width={30}
                    height={30}
                    alt=""
                    className="flex justify-end ml-[80px]"
                  />
                </div>
              </div>
            </Card>
            <Card bodyClassName="mt-[10px] py-[10px] px-[15px]  text-gray-400">
              <div>
                <div className="flex flex-row items-center">
                  <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-lg border border-[#333333] p-[26px] ">
                    <Image
                      src={'/assets/images/resources_more/heart.svg'}
                      width={30}
                      height={30}
                      alt=""
                      className="absolute"
                    />
                  </div>
                  <div className="flex justify-between p-[15px] rounded-xl bg-[#1F1F1F] items-center ml-[10px]">
                    <div>LIKED BY</div>
                    <div className="flex flex-row ml-[45px] items-center gap-[3px]">
                      <div className="text-semibold text-white pr-1">2.6K </div>
                      <div className="border-l-[1px] px-[5px] py-0 border-gray-400">USERS</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card bodyClassName="mt-[10px] py-[10px] px-[15px] text-gray-400">
              <div>
                <div className="flex flex-row items-center">
                  <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-lg border border-[#333333] p-[26px] ">
                    <Image
                      src={'/assets/images/resources_more/share.svg'}
                      width={30}
                      height={30}
                      alt=""
                      className="absolute"
                    />
                  </div>
                  <div className="flex justify-between p-[15px] rounded-xl bg-[#1F1F1F] items-center ml-[10px]">
                    <div>SHARED BY</div>
                    <div className="flex flex-row ml-[32px] items-center">
                      <div className="text-semibold text-white pr-1">120</div>
                      <div className="border-l-[1px] px-[5px] py-0 border-gray-400">USERS</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Container containerClassName="p-[20px] flex flex-col gap-[20px]">
        <Card bodyClassName="p-[50px] flex flex-col text-white text-[50px] gap-[20px] w-full">RELATED RESOURCES</Card>
        <div className="flex gap-[20px]">
          <Card bodyClassName="w-[55%] p-[25px] ">
            <div className="w-full ">
              <Image
                src={'/assets/images/resources_more/first.svg'}
                layout="responsive"
                width={450}
                height={150}
                alt=""
              />
            </div>
            <div className="px-[10px]">
              <div className="text-[#F9EFEC] text-[30px] h-[150px] pt-[40px]">lOREM EPSUM DOLOR SIT AMET</div>
              <div className="text-[#B3B3B2] text-[20px] pt-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem porro hic laboriosam itaque mollitia.
                Sunt ea ducimus repellendus, itaque aut soluta voluptate porro id voluptatibus temporibus tempora
                quisquam numquam. Reiciendis!
              </div>
            </div>
            <div className="flex pt-4 items-center ">
              <ArrowButton
                arrowType="normal"
                hoverColor="#ffffff81"
                arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
                title="VIEW ALL"
                titleClassName="text-[#B3B3B2] text-[20px]"
              />
            </div>
          </Card>
          <Card bodyClassName="w-[55%] p-[25px]">
            <div className="w-full">
              <Image
                src={'/assets/images/resources_more/second.svg'}
                layout="responsive"
                width={450}
                height={150}
                alt=""
              />
            </div>
            <div className="px-[10px]">
              {' '}
              <div className="text-[#F9EFEC] text-[30px] h-[150px] pt-[40px]">lOREM EPSUM DOLOR SIT AMET</div>
              <div className="text-[#B3B3B2] text-[20px] pt-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem porro hic laboriosam itaque mollitia.
                Sunt ea ducimus repellendus, itaque aut soluta voluptate porro id voluptatibus temporibus tempora
                quisquam numquam. Reiciendis!
              </div>
            </div>
            <div className="flex pt-4 items-center ">
              <ArrowButton
                arrowType="normal"
                hoverColor="#ffffff81"
                arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
                title="READ FULL"
                titleClassName="text-[#B3B3B2] text-[20px]"
              />
            </div>
          </Card>
          <Card bodyClassName="w-[55%] p-[25px]">
            <div className="w-full">
              <Image
                src={'/assets/images/resources_more/third.svg'}
                width={450}
                layout="responsive"
                height={150}
                alt=""
              />
            </div>
            <div className="px-[10px]">
              {' '}
              <div className="text-[#F9EFEC] text-[30px] h-[150px] pt-[40px]">lOREM EPSUM DOLOR SIT AMET</div>
              <div className="text-[#B3B3B2] text-[20px] pt-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem porro hic laboriosam itaque mollitia.
                Sunt ea ducimus repellendus, itaque aut soluta voluptate porro id voluptatibus temporibus tempora
                quisquam numquam. Reiciendis!
              </div>
            </div>
            <div className="flex pt-4 items-center ">
              <ArrowButton
                arrowType="normal"
                hoverColor="#ffffff81"
                arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
                title="READ FULL"
                titleClassName="text-[#B3B3B2] text-[20px]"
              />
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
