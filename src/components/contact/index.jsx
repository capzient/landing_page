import Image from 'next/image';
import Card from '../atoms/card';

export default function Contact() {
  return (
    <div className="gap-[50px] bg-black px-[60px] py-[100px] pt-[200px] pb-[600px] flex flex-col font-sans">
      <div className="animation-element appear flex items-end  relative justify-">
        <Image
          src={'/assets/images/contact/subContainer.svg'}
          width={1500}
          height={1000}
          layout="responsive"
          alt=""
          className=""
        />
        <div className="text-white text-[70px] absolute p-[30px] w-[750px]">
          LET&apos;S <br /> CONNECT
        </div>
      </div>
      <Card bodyClassName="animation-element appear p-[40px] flex flex-col justify-end">
        <div className="grid grid-cols-2 gap-x-16 gap-y-16 p-16 ">
          <div className="animation-element appear flex flex-col gap-4">
            <span className=" text-base text-[#F3DFD8]  ">FIRST NAME</span>
            <input
              className="text-base border-[1px] rounded-xl border-gray-700 bg-[#1F1F1F]  p-4"
              type="text"
              placeholder="ENTER FIRST NAME"
              name="firstname"
              required
            />
          </div>
          <div className="animation-element appear flex flex-col gap-4">
            <span className=" text-base text-[#F3DFD8] ">LAST NAME</span>
            <input
              className="text-base border-[1px] rounded-xl border-gray-700 bg-[#1F1F1F]  p-4"
              type="text"
              placeholder="ENTER LAST NAME"
              name="lastname"
              required
            />
          </div>
          <div className="animation-element appear flex flex-col gap-4">
            <span className=" text-base text-[#F3DFD8] ">JOB TITLE</span>
            <input
              className="text-base border-[1px] rounded-xl border-gray-700 bg-[#1F1F1F]  p-4"
              type="text"
              placeholder="ENTER JOB TITLE"
              name="jobtitle"
              required
            />
          </div>
          <div className="animation-element appear flex flex-col gap-4">
            <span className=" text-base text-[#F3DFD8] ">COMPANY NAME</span>
            <input
              className="text-base border-[1px] rounded-xl border-gray-700 bg-[#1F1F1F]  p-4"
              type="text"
              placeholder="ENTER COMPANY NAME"
              name="companyname"
              required
            />
          </div>
          <div className="animation-element appear flex flex-col gap-4">
            <span className=" text-base text-[#F3DFD8] ">EMAIL</span>
            <input
              className="text-base border-[1px] rounded-xl border-gray-700 bg-[#1F1F1F]  p-4"
              type="email"
              placeholder="ENTER EMAIL"
              name="firstname"
              required
            />
          </div>
          <div className="animation-element appear">
            <span className=" text-base mb-4 text-[#F3DFD8] ">PHONE NUMBER</span>
            <div className="flex flex-row gap-4 my-4 items-center">
              <div className="w-[40px] h-[40px]">
                <Image src={'/assets/images/contact/flag.svg'} width={40} height={40} alt="" className="pt" />
              </div>
              <span className=" ">
                <Image src={'/assets/images/contact/down.svg'} width={25} height={25} alt="" className="pt-2" />
              </span>
              <span className="w-full">
                <input
                  className="text-base w-full border-[1px] rounded-xl border-gray-700 bg-[#1F1F1F]  p-4"
                  type="tel"
                  placeholder="ENTER PHONE NUMBER"
                  name="phonenumber"
                  required
                />
              </span>
            </div>
          </div>
          <div className="animation-element appear flex flex-col gap-4 col-span-2">
            <span className=" text-base text-[#F3DFD8] ">MESSAGE</span>
            <input
              className="border-[1px] border-gray-700 rounded-xl bg-[#1F1F1F] pl-[20px] pt-[20px] pb-[100px]  w-full"
              type="text"
              placeholder="ENTER YOUR MESSAGE"
              name="message"
              required
            />
          </div>
        </div>
        <div className=" flex flex-row justify-between items-center px-16 mx-8 mt-2">
          <div className="animation-element appear flex flex-row items-center">
            <input type="checkbox" id="custom-checkbox" className="hidden" />
            <label
              htmlFor="custom-checkbox"
              className="h-6 w-6 bg-[#333333] rounded-md cursor-pointer flex items-center justify-center"
            >
              <svg className="hidden w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <span className="text-base text-gray-400 pl-4  ">I agree with use of term and Privacy Policy</span>
          </div>
          <div className="animation-element appear">
            <button className="bg-[#F51101] rounded-2xl px-6 py-4 flex flex-row items-center space-x-5">
              SEND YOUR MESSAGE
              <Image src={'/assets/images/contact/arrow_icon.svg'} width={23} height={23} alt="" className="ml-2" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
