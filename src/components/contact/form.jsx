import Image from "next/image";
export default function form() {
  return (
    <div className="bg-neutral-800 text-neutral-50 mx-16 pb-8 rounded-[16px] font-roboto ">
      <div className="grid grid-cols-2 gap-x-16 gap-y-16 p-16 ">
        <div className="flex flex-col gap-4">
          <span className=" text-xl">FIRST NAME</span>
          <input
            className="border-4 border-grey-500 bg-neutral-700  p-4"
            type="text"
            placeholder="ENTER FIRST NAME"
            name="firstname"
            required
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className=" text-xl">LAST NAME</span>
          <input
            className="border-4 border-grey-500 bg-neutral-700  p-4"
            type="text"
            placeholder="ENTER LAST NAME"
            name="lastname"
            required
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className=" text-xl">JOB TITLE</span>
          <input
            className="border-4 border-grey-500 bg-neutral-700  p-4"
            type="text"
            placeholder="ENTER JOB TITLE"
            name="jobtitle"
            required
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className=" text-xl">COMPANY NAME</span>
          <input
            className="border-4 border-grey-500 bg-neutral-700  p-4"
            type="text"
            placeholder="ENTER COMPANY NAME"
            name="companyname"
            required
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className=" text-xl">EMAIL</span>
          <input
            className="border-4 border-grey-500 bg-neutral-700  p-4"
            type="email"
            placeholder="ENTER EMAIL"
            name="firstname"
            required
          />
        </div>
        <div>
          <span className=" text-xl mb-4">PHONE NUMBER</span>
          <div className="flex flex-row gap-4 my-4">
            <div className="w-[40px] h-[40px]">
              <Image
                src={"/assets/images/contact/photo2.jpg"}
                width={40}
                height={40}
                alt=""
                className="pt-2"
              />
            </div>
            <span className=" pt-4 pr-4">↓</span>
            <input
              className="border-4 border-grey-500 bg-neutral-700  p-4"
              type="NUMBER"
              placeholder="ENTER PHONE NUMBER"
              name="phonenumber"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 col-span-2">
          <span className=" text-xl">MESSAGE</span>
          <input
            className="border-4 border-grey-500 bg-neutral-700  p-4 h-32 w-full"
            type="text"
            placeholder="ENTER YOUR MESSAGE"
            name="message"
            required
          />
        </div>
      </div>
      <div className=" flex flex-row justify-between px-16 mx-8 mt-16">
        <div>
          <input type="checkbox" className="h-8 w-8 pt-2" />
          <span className="text-3xl pl-4 mb-8 ">
            I agree with use of term and Privacy Policy
          </span>
        </div>
        <div className="mb-8">
          <button className="bg-orange-700 rounded-lg p-4">
            SEND YOUR MESSAGE ↗
          </button>
        </div>
      </div>
    </div>
  );
}
