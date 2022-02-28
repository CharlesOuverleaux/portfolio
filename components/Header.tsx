/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="px-4 pt-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col w-[75px] sm:flex-row sm:w-full">
          <Image
            src="/C.svg"
            alt="C"
            width={75}
            height={75}
            className="animate-introX1 sm:animate-introY1"
          />
          <Image
            src="/A.svg"
            alt="A"
            width={75}
            height={75}
            className="animate-introX2 sm:animate-introY2"
          />
          <Image
            src="/O.svg"
            alt="O"
            width={75}
            height={75}
            className="animate-introX3 sm:animate-introY3"
          />
        </div>
      </div>
    </>
  );
}
