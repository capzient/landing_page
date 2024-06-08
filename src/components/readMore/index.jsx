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
              <p>AUTHOR</p>
              <p>LOREM IPSUM</p>
            </div>
            <div className="bg-[#1F1F1F] flex justify-between rounded-lg px-4 py-6 ">
              <p>Published Date</p>
              <p>25TH OCTOBER 2023</p>
            </div>
            <div className="bg-[#1F1F1F] flex justify-between rounded-lg px-4 py-6 ">
              <p>Category</p>
              <p>LOREM</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Image
          src={"/assets/images/readMore/readmore.png"}
          width={1500}
          height={1500}
          alt=""
        />
      </div>
      <div className="p-[20px] rounded-lg border-[#1F1F1F] border-[2px] flex flex-col gap-[20px]">
        <div className="bg-[#1A1A1A] p-[50px] flex flex-col text-white text-[50px] gap-[20px] w-full rounded-lg">
          RELATED RESOURCES
        </div>
        <div className="flex gap-[20px]">
          <div className="w-[55%] bg-[#1A1A1A] rounded-lg p-[40px]">
            <Image
              src={"/assets/images/readMore/first.png"}
              width={300}
              height={400}
              alt=""
            />
            <div className="text-[#F9EFEC] text-[30px] h-[150px] pt-[40px]">
              lOREM EPSUM DOLOR SIT AMET
            </div>
            <div className="text-[#B3B3B2] text-[20px] pt-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              porro hic laboriosam itaque mollitia. Sunt ea ducimus repellendus,
              itaque aut soluta voluptate porro id voluptatibus temporibus
              tempora quisquam numquam. Reiciendis!
            </div>
            <div className="flex pt-4 items-center ">
              <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full border border-gray-700 p-7 ">
                <Image
                  src={"/assets/images/readMore/icon.png"}
                  width={20}
                  height={20}
                  alt=""
                  className="absolute"
                />
              </div>
              <div className="pl-3 text-white">READ FULL</div>
            </div>
          </div>
          <div className="w-[55%] bg-[#1A1A1A] rounded-lg p-[40px]">
            <Image
              src={"/assets/images/readMore/second.png"}
              width={300}
              height={400}
              alt=""
            />
            <div className="text-[#F9EFEC] text-[30px] h-[150px] pt-[40px]">
              lOREM EPSUM DOLOR SIT AMET
            </div>
            <div className="text-[#B3B3B2] text-[20px] pt-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              porro hic laboriosam itaque mollitia. Sunt ea ducimus repellendus,
              itaque aut soluta voluptate porro id voluptatibus temporibus
              tempora quisquam numquam. Reiciendis!
            </div>
            <div className="flex pt-4 items-center ">
              <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full border border-gray-700 p-7 ">
                <Image
                  src={"/assets/images/readMore/icon.png"}
                  width={20}
                  height={20}
                  alt=""
                  className="absolute"
                />
              </div>
              <div className="pl-3 text-white">READ FULL</div>
            </div>
          </div>
          <div className="w-[55%] bg-[#1A1A1A] rounded-lg p-[40px]">
            <Image
              src={"/assets/images/readMore/third.png"}
              width={300}
              height={400}
              alt=""
            />
            <div className="text-[#F9EFEC] text-[30px] h-[150px] pt-[40px]">
              lOREM EPSUM DOLOR SIT AMET
            </div>
            <div className="text-[#B3B3B2] text-[20px] pt-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              porro hic laboriosam itaque mollitia. Sunt ea ducimus repellendus,
              itaque aut soluta voluptate porro id voluptatibus temporibus
              tempora quisquam numquam. Reiciendis!
            </div>
            <div className="flex pt-4 items-center ">
              <div className="relative flex justify-center items-center bg-[#1F1F1F] rounded-full border border-gray-700 p-7 ">
                <Image
                  src={"/assets/images/readMore/icon.png"}
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
