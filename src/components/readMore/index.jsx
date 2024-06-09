import Image from "next/image";

export default function ReadMore() {
  return (
    <div className="flex flex-col gap-[50px] bg-black px-[130px] py-[100px] pt-[200px]">
      <div className="flex gap-[40px]">
        <div className="grow w-[60%] bg-[#1A1A1A] rounded-lg">
          <div className="flex gap-[15px] p-[80px]">
            <div>
              <div className="flex items-start flex-wrap">
                <div className="text-[50px] max-w-[70%] font-bold text-white">
                  LOREM IPSUM SIT CONSECTECTUR
                </div>
                <div className="cursor-pointer pt-[20px] flex w-[30%] gap-[20px] items-center">
                  <div className="w-[40px] h-[40px]">
                    <Image
                      src={"/assets/images/readMore/shape.svg"}
                      width={40}
                      height={40}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="text-red-500">SEE ALL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg w-[40%] h-grow bg-[#1A1A1A]">
          <div className="flex flex-col p-8 gap-[40px] text-white">
            <div className="bg-[#1F1F1F] flex justify-between rounded-lg px-4 py-6 ">
              <p className="text-gray-400">AUTHOR</p>
              <p>LOREM IPSUM</p>
            </div>
            <div className="bg-[#1F1F1F] flex justify-between rounded-lg px-4 py-6 ">
              <p className="text-gray-400">Published Date</p>
              <p>25TH OCTOBER 2023</p>
            </div>
            <div className="bg-[#1F1F1F] flex justify-between rounded-lg px-4 py-6 ">
              <p className="text-gray-400">Category</p>
              <p>LOREM</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Image
          src={"/assets/images/readMore/readmore.svg"}
          width={1500}
          height={1500}
          alt=""
        />
      </div>
      {/* middle */}
      <div className="px-[10px] rounded-lg flex flex-col">
        <div className="flex text-white bg-black  justify-between ">
          <div className="w-[25%]  px-[20px] flex justify-start items-end flex-col">
            {" "}
            <div className="flex pt-2 items-center ">
              <div
                className="relative flex justify-center items-center bg-[#1F1F1F] rounded-xl
               border border-gray-700 p-7 "
              >
                <Image
                  src={"/assets/images/readMore/twitter.svg"}
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
               border border-gray-700 p-7 "
              >
                <Image
                  src={"/assets/images/readMore/facebook.svg"}
                  width={18}
                  height={18}
                  alt=""
                  className="absolute"
                />
              </div>
            </div>
          </div>
          <div className="w-[75%]  p-[40px] flex flex-col justify-end bg-[#1A1A1A] rounded-lg">
            <div className="text-[30px]">
              THE ESSENCE OF MINIMALISM IN DESIGN.
            </div>
            <div className="pl-[40px] pt-2 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quae expedita obcaecati, quisquam, aliquid repellat labore, animi
              odit at temporibus ea iusto fuga possimus culpa ullam porro quam
              maxime? Commodi?Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Cum eum totam aliquid maiores nemo minus ipsa
              neque, quam officiis enim veniam sequi harum repellendus provident
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              illum velit ipsa voluptas adipisci veritatis, odit explicabo quo
              aliquam nihil distinctio aliquid ullam. Iusto maxime, corrupti
              blanditiis nostrum delectus Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Unde quia a architecto voluptatibus
              aperiam eveniet in voluptas quis eaque harum, cupiditate ipsa,
              exercitationem pariatur maiores dolorem quasi quos, et
              repudianda//eslint-disable-next-lineimport/no-extraneous-dependencies\n//importmaxime,
              corrupti blanditiis nostrum delectus Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Unde quia a architecto voluptatibus
              aperiam eveniet in voluptas quis eaque harum, cupiditate ipsa,
              exercitationem pariatur maiores dolorem quasi quos, et
              repudianda//eslint-disable-next-lineimport/no-extraneous-dependencies\n//import
              uptas quis eaque harum, cupiditate ipsa, exercitationem pariatur
              maiores dolorem quasi quos, et
              repudianda//eslint-disable-next-lineimport/no-extraneous-dependencies\n//import
            </div>
          </div>
          {/* last */}
          <div className="w-[55%] px-[40px] ">
            <div className="bg-[#1A1A1A] p-[35px] rounded-xl">
              <div className="flex flex-row items-center">
                <Image
                  src={"/assets/images/readMore/person.svg"}
                  width={60}
                  height={60}
                  alt=""
                />
                <div className="flex flex-col px-[20px]">
                  <div className="font-semibold">Wade Warren</div>
                  <div className="text-gray-400">Art Director</div>
                </div>
              </div>
              <div className="pt-[20px] text-gray-400">
                Crafting visual narratives that captivate and inspire, weaving
                creativity into every chapter of the design journey.
              </div>
              <div className="bg-[#1F1F1F] flex flex-row items-center rounded-xl p-[15px] mt-[20px]">
                <Image
                  src={"/assets/images/readMore/twitter.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
                <div className="flex flex-row justify-between ">
                  <div className="pl-1 text-gray-400">@wadewarren</div>
                  <Image
                    src={"/assets/images/readMore/icon.svg"}
                    width={30}
                    height={30}
                    alt=""
                    className="flex justify-end ml-[80px]"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#1A1A1A] mt-[10px] py-[10px] px-[15px] rounded-xl text-gray-400">
              <div>
                <div className="flex flex-row items-center">
                  <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-lg border border-gray-700 p-[26px] ">
                    <Image
                      src={"/assets/images/readMore/heart.svg"}
                      width={30}
                      height={30}
                      alt=""
                      className="absolute"
                    />
                  </div>
                  <div className="flex justify-between p-[15px] rounded-xl bg-[#1F1F1F] items-center ml-[10px]">
                    <div>LIKED BY</div>
                    <div className="flex flex-row ml-[45px] items-center">
                      <div className="text-semibold pr-1">2.6K </div>
                      <div> | USERS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1A1A] mt-[10px] py-[10px] px-[15px] rounded-xl text-gray-400">
              <div>
                <div className="flex flex-row items-center">
                  <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-lg border border-gray-700 p-[26px] ">
                    <Image
                      src={"/assets/images/readMore/share.svg"}
                      width={30}
                      height={30}
                      alt=""
                      className="absolute"
                    />
                  </div>
                  <div className="flex justify-between p-[15px] rounded-xl bg-[#1F1F1F] items-center ml-[10px]">
                    <div>SHARED BY</div>
                    <div className="flex flex-row ml-[32px] items-center">
                      <div className="text-semibold pr-1">120 </div>
                      <div> | USERS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[20px] rounded-lg border-[#1F1F1F] border-[2px] flex flex-col gap-[20px]">
        <div className="bg-[#1A1A1A] p-[50px] flex flex-col text-white text-[50px] gap-[20px] w-full rounded-lg">
          RELATED RESOURCES
        </div>
        <div className="flex gap-[20px]">
          <div className="w-[55%] bg-[#1A1A1A] rounded-lg p-[25px]">
            <div className="w-full ">
              <Image
                src={"/assets/images/readMore/first.svg"}
                width={450}
                height={150}
                alt=""
              />
            </div>
            <div className="px-[10px]">
              <div className="text-[#F9EFEC] text-[30px] h-[150px] pt-[40px]">
                lOREM EPSUM DOLOR SIT AMET
              </div>
              <div className="text-[#B3B3B2] text-[20px] pt-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                porro hic laboriosam itaque mollitia. Sunt ea ducimus
                repellendus, itaque aut soluta voluptate porro id voluptatibus
                temporibus tempora quisquam numquam. Reiciendis!
              </div>
            </div>
            <div className="flex pt-4 items-center ">
              <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full border border-gray-700 p-7 ">
                <Image
                  src={"/assets/images/readMore/icon.svg"}
                  width={20}
                  height={20}
                  alt=""
                  className="absolute"
                />
              </div>
              <div className="pl-3 text-white">READ FULL</div>
            </div>
          </div>
          <div className="w-[55%] bg-[#1A1A1A] rounded-lg p-[25px]">
            <div className="w-full">
              <Image
                src={"/assets/images/readMore/second.svg"}
                width={450}
                height={150}
                alt=""
              />
            </div>
            <div className="px-[10px]">
              {" "}
              <div className="text-[#F9EFEC] text-[30px] h-[150px] pt-[40px]">
                lOREM EPSUM DOLOR SIT AMET
              </div>
              <div className="text-[#B3B3B2] text-[20px] pt-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                porro hic laboriosam itaque mollitia. Sunt ea ducimus
                repellendus, itaque aut soluta voluptate porro id voluptatibus
                temporibus tempora quisquam numquam. Reiciendis!
              </div>
            </div>
            <div className="flex pt-4 items-center ">
              <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full border border-gray-700 p-7 ">
                <Image
                  src={"/assets/images/readMore/icon.svg"}
                  width={20}
                  height={20}
                  alt=""
                  className="absolute"
                />
              </div>
              <div className="pl-3 text-white">READ FULL</div>
            </div>
          </div>
          <div className="w-[55%] bg-[#1A1A1A] rounded-lg p-[25px]">
            <div className="w-full">
              <Image
                src={"/assets/images/readMore/third.svg"}
                width={450}
                height={150}
                alt=""
              />
            </div>
            <div className="px-[10px]">
              {" "}
              <div className="text-[#F9EFEC] text-[30px] h-[150px] pt-[40px]">
                lOREM EPSUM DOLOR SIT AMET
              </div>
              <div className="text-[#B3B3B2] text-[20px] pt-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                porro hic laboriosam itaque mollitia. Sunt ea ducimus
                repellendus, itaque aut soluta voluptate porro id voluptatibus
                temporibus tempora quisquam numquam. Reiciendis!
              </div>
            </div>
            <div className="flex pt-4 items-center ">
              <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full border border-gray-700 p-7 ">
                <Image
                  src={"/assets/images/readMore/icon.svg"}
                  width={20}
                  height={20}
                  alt=""
                  className="absolute"
                />
              </div>
              <div className="pl-3 text-white">READ FULL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
