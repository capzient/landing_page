import Form from "./form";
import Image from "next/image";
export default function contact() {
  return (
    <div className=" pb-64 ">
      <div className="m-16 ">
        <Image
          src={"/assets/images/contact/photo.jpg"}
          width={4000}
          height={2000}
          alt=""
        />
      </div>

      <div className="mt-8 mx-16">
        <Form />
      </div>
    </div>
  );
}
