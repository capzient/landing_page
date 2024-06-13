import Image from 'next/image';
import Card from '../common/atoms/card';
import Container from '../common/atoms/container';
import ArrowButton from '@/components/common/atoms/arrowButton';

export default function Careers() {
  return (
    <div className="gap-[50px] bg-black px-[60px] py-[100px] pt-[200px] flex flex-col ">
      <div className="animation-element appear flex items-end  relative justify-">
        <Image
          src={'/assets/images/about/subContainer.svg'}
          width={1500}
          height={1000}
          alt=""
          className=""
          layout="responsive"
        />
        <div className="text-white text-[70px] absolute p-[30px] w-[650px]">JOIN OUR TEAM sit amet </div>
      </div>
      <div className="animation-element appear p-[40px] flex flex-col justify-end">
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
      </div>
      <Container containerClassName="gap-[50px] bg-black px-[30px] py-[50px]  pb-[100px] flex flex-col">
        <Card bodyClassName="px-[30px] py-[30px]  font-semibold text-white text-[50px] uppercase bg-[#1A1A1A] flex flex-row justify-between items-center">
          OPEN POSITIONS
          <div className="animation-element appear bg-[#0F0F0F] flex flex-row px-3 py-2 rounded-lg space-x-2 items-center font-normal">
            {' '}
            <Image src={'/assets/images/careers/drop.svg'} width={25} height={25} alt="" className="" />
            <div className="text-[20px]">FILTER</div>
          </div>
        </Card>
        <Card bodyClassName="px-[38px] py-[38px] flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center space-x-3">
              <div className="relative flex rounded-xl border-[#333333] bg-[#1F1F1F] border-[2px] justify-center items-center p-3">
                <Image src={'/assets/images/careers/drop.svg'} width={25} height={25} alt="" className="" />
              </div>
              <div className="text-[25px] text-white/90">LOREM IPSUM DOLOR</div>
            </div>
            <ArrowButton
              arrowType="normal"
              hoverColor="#ffffff81"
              arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
              title="VIEW DETAILS"
              titleClassName="text-[#B3B3B2] text-[20px]"
            />
          </div>
          <div className="flex flex-row items-center gap-3 text-[#E6E6E6] py-6 ">
            <div className="flex flex-row items-center space-x-2 bg-[#1F1F1F] px-3 py-2  rounded-3xl">
              <div>Salary</div>
              <Image src={'/assets/images/careers/dot.svg'} width={5} height={5} alt="" />
              <div>$45,000 - $60,000 per year</div>
            </div>
            <div className="flex flex-row items-center space-x-2 bg-[#1F1F1F] px-3 py-2 rounded-3xl">
              <div>Salary</div>
              <Image src={'/assets/images/careers/dot.svg'} width={5} height={5} alt="" />
              <div>$45,000 - $60,000 per year</div>
            </div>
            <div className="flex flex-row items-center space-x-2 bg-[#1F1F1F] px-3 py-2  rounded-3xl">
              <div>Salary</div>
              <Image src={'/assets/images/careers/dot.svg'} width={5} height={5} alt="" />
              <div>$45,000 - $60,000 per year</div>
            </div>
          </div>
          <div className="text-[20px] text-[#F9EFEC] py-1">SKILLS</div>
          <div className="text-[#B3B3B2] py-2">
            Lorem ipsum dolor sit amet consectetur. Leo aliquam mi at tristique pulvinar sed nunc.
          </div>
          <button className="bg-[#F51101] py-4 px-4 rounded-xl mt-5 font-medium">APPLY NOW</button>
        </Card>
        {/* 2 */}
        <Card bodyClassName="px-[38px] py-[38px] flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center space-x-3">
              <div className="relative flex rounded-xl border-[#333333] bg-[#1F1F1F] border-[2px] justify-center items-center p-3">
                <Image src={'/assets/images/careers/drop.svg'} width={25} height={25} alt="" className="" />
              </div>
              <div className="text-[25px] text-white/90">LOREM IPSUM DOLOR</div>
            </div>
            <ArrowButton
              arrowType="normal"
              hoverColor="#ffffff81"
              arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
              title="VIEW DETAILS"
              titleClassName="text-[#B3B3B2] text-[20px]"
            />
          </div>
          <div className="flex flex-row items-center gap-3 text-[#E6E6E6] py-6 ">
            <div className="flex flex-row items-center space-x-2 bg-[#1F1F1F] px-3 py-2  rounded-3xl">
              <div>Salary</div>
              <Image src={'/assets/images/careers/dot.svg'} width={5} height={5} alt="" />
              <div>$45,000 - $60,000 per year</div>
            </div>
            <div className="flex flex-row items-center space-x-2 bg-[#1F1F1F] px-3 py-2 rounded-3xl">
              <div>Salary</div>
              <Image src={'/assets/images/careers/dot.svg'} width={5} height={5} alt="" />
              <div>$45,000 - $60,000 per year</div>
            </div>
            <div className="flex flex-row items-center space-x-2 bg-[#1F1F1F] px-3 py-2  rounded-3xl">
              <div>Salary</div>
              <Image src={'/assets/images/careers/dot.svg'} width={5} height={5} alt="" />
              <div>$45,000 - $60,000 per year</div>
            </div>
          </div>
          <div className="text-[20px] text-[#F9EFEC] py-1">SKILLS</div>
          <div className="text-[#B3B3B2] py-2">
            Lorem ipsum dolor sit amet consectetur. Leo aliquam mi at tristique pulvinar sed nunc.
          </div>
          <button className="bg-[#F51101] py-4 px-4 rounded-xl mt-5 font-medium">APPLY NOW</button>
        </Card>
        {/* 3 */}
        <Card bodyClassName="px-[38px] py-[38px] flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center space-x-3">
              <div className="relative flex rounded-xl border-[#333333] bg-[#1F1F1F] border-[2px] justify-center items-center p-3">
                <Image src={'/assets/images/careers/drop.svg'} width={25} height={25} alt="" className="" />
              </div>
              <div className="text-[25px] text-white/90">LOREM IPSUM DOLOR</div>
            </div>
            <ArrowButton
              arrowType="normal"
              hoverColor="#ffffff81"
              arrowClassName="duration-500 color-white border-[#262626] border-[1px]  p-[15px] rounded-full bg-transparent"
              title="VIEW DETAILS"
              titleClassName="text-[#B3B3B2] text-[20px]"
            />
          </div>
          <div className="flex flex-row items-center gap-3 text-[#E6E6E6] py-6 ">
            <div className="flex flex-row items-center space-x-2 bg-[#1F1F1F] px-3 py-2  rounded-3xl">
              <div>Salary</div>
              <Image src={'/assets/images/careers/dot.svg'} width={5} height={5} alt="" />
              <div>$45,000 - $60,000 per year</div>
            </div>
            <div className="flex flex-row items-center space-x-2 bg-[#1F1F1F] px-3 py-2 rounded-3xl">
              <div>Salary</div>
              <Image src={'/assets/images/careers/dot.svg'} width={5} height={5} alt="" />
              <div>$45,000 - $60,000 per year</div>
            </div>
            <div className="flex flex-row items-center space-x-2 bg-[#1F1F1F] px-3 py-2  rounded-3xl">
              <div>Salary</div>
              <Image src={'/assets/images/careers/dot.svg'} width={5} height={5} alt="" />
              <div>$45,000 - $60,000 per year</div>
            </div>
          </div>
          <div className="text-[20px] text-[#F9EFEC] py-1">SKILLS</div>
          <div className="text-[#B3B3B2] py-2">
            Lorem ipsum dolor sit amet consectetur. Leo aliquam mi at tristique pulvinar sed nunc.
          </div>
          <button className="bg-[#F51101] py-4 px-4 rounded-xl mt-5 font-medium">APPLY NOW</button>
        </Card>
      </Container>
    </div>
  );
}
