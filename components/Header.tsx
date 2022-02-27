/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="px-4 pt-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <Image src="/Logo.svg" alt="CAO" width={75} height={75} />
        </div>
      </div>
    </>
  );
}
