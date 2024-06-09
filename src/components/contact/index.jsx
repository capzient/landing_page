import Form from "./form";
import Image from "next/image";
export default function contact() {
  return (
    <div className=" bg-neutral-950 ">
      <div className="mx-16">
        <Image
          src={"/assets/images/contact/photo.jpg"}
          width={4000}
          height={3000}
          alt=""
          className="rounded-3xl"
        />
      </div>
      <div className="mt-16 ">
        <Form />
      </div>
    </div>
  );
}
