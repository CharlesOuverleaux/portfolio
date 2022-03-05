/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="px-4 pt-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
        <div>Menu</div>
      </div>
    </>
  );
}
