/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="px-4 pt-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex">
          <div className="flex flex-row w-full">
            <Image
              src="/C.svg"
              alt="C"
              width={45}
              height={75}
              className="animate-introY1"
            />
            <Image
              src="/A.svg"
              alt="A"
              width={45}
              height={75}
              className="animate-introY2"
            />
            <Image
              src="/O.svg"
              alt="O"
              width={45}
              height={75}
              className="animate-introY3"
            />
          </div>
          <div className="mr-6 sm:mr-24">
            <Image
              src="/ButtonCross.svg"
              alt="Button"
              width={45}
              height={75}
              className="hover:rotate-45 ease-in-out duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}
