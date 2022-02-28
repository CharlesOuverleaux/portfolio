/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="px-4 pt-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-row sm:flex-col sm:w-[75px]">
          <Image
            src="/C.svg"
            alt="C"
            width={75}
            height={75}
            className="animate-introY1 sm:animate-introX1"
          />
          <Image
            src="/A.svg"
            alt="A"
            width={75}
            height={75}
            className="animate-introY2 sm:animate-introX2"
          />
          <Image
            src="/O.svg"
            alt="O"
            width={75}
            height={75}
            className="animate-introY3 sm:animate-introX3"
          />
        </div>
      </div>
    </>
  );
}
