import Image from "next/image";
export default function Form() {
  return (
    <div className="font-poppins">
      <div className="bg-neutral-800 text-neutral-50  rounded-[22px] ">
        <div className="grid grid-cols-2 gap-x-16 gap-y-16  mx-8  ">
          <div className="flex flex-col gap-4 mt-16">
            <span className="text-xl">FIRST NAME </span>
            <input
              className="border-2 border-slate-400 bg-neutral-700 text-neutral-50 h-11 rounded-md p-4 "
              type="text"
              id="First Name"
              name="Enter First Name:"
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="flex flex-col gap-4 mt-16">
            <span className="text-xl">LAST NAME </span>
            <input
              className="border-2 border-gray-500 h-11 rounded-md bg-neutral-700 p-4 "
              type="text"
              id="First Name"
              name="Enter Last Name:"
              placeholder="Enter Last Name"
              required
            />
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xl">JOB TITLE </span>
            <input
              className="border-2 border-gray-500 h-11 rounded-md bg-neutral-700 p-4"
              type="text"
              id="First Name"
              name="Enter  Job Title:"
              placeholder="Enter Job Title"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl">COMPANY NAME </span>
            <input
              className="border-2 border-gray-500 h-11 rounded-md bg-neutral-700 p-4"
              type="text"
              id="Company Name"
              name="Enter Company Name:"
              placeholder="Enter Company Name"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl">EMAIL </span>
            <input
              className="border-2 border-gray-500 h-11 rounded-md bg-neutral-700 p-4 "
              type="email"
              id=""
              name="Enter Email:"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl">PHONE NUMBER </span>
            <div className="flex flex-row gap-2">
              <Image
                src={"/assets/images/contact/photo2.jpg"}
                width={40}
                height={40}
                alt=""
                className="rounded-md"
              />
              <span className="pt-4 pr-4">
                <ion-icon name="arrow-down-outline"></ion-icon>
              </span>
              <input
                className="border-2 border-gray-500 h-11 rounded-md bg-neutral-700 p-4"
                type="int"
                id="Phone Number"
                name="Enter Phone Number:"
                placeholder="Enter Phone Number"
                required
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-4">
              <span className="text-xl">MESSAGE </span>

              <input
                className="border-2 border-gray-500 justify-self stretch h-28 bg-neutral-700  pb-16 pl-4 "
                type="text"
                id="Message"
                name="Enter Message:"
                placeholder="Enter Message"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mx-8 mt-16 ">
          <div className="text-xl flex flex-row gap-4">
            <div>
              <input type="checkbox" className=" bg-neutral-700 h-6 w-6" />
            </div>
            <div className="pb-2">I Agree Terms of Use And Privacy Policy</div>
          </div>
          <button className="bg-orange-700 rounded-lg mb-16 ">
            <div className="m-4">SEND YOUR MESSAGE ↗</div>
          </button>
        </div>
      </div>
      <div>
        <script
          type="module"
          async
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          async
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </div>
    </div>
  );
}
