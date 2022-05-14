import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import React, { FC } from "react";
import clsx from "clsx";
import Link from "next/link";

interface NavigationProps {
  navigationData: { name: string; href: string }[];
}

const navigationData: { name: string; href: string }[] = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NameInitials: FC = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Link href="/" passHref>
        <div className="flex flex-row w-full">
          <Image
            src="/C.svg"
            alt="Charles"
            width={45}
            height={75}
            className="animate-introY1"
          />
          <Image
            src="/A.svg"
            alt="Antoine"
            width={45}
            height={75}
            className="animate-introY2"
          />
          <Image
            src="/O.svg"
            alt="Ouverleaux"
            width={45}
            height={75}
            className="animate-introY3"
          />
        </div>
      </Link>
    </div>
  );
};

const NavigationBar: FC<NavigationProps> = ({ navigationData }) => {
  return (
    <div className="hidden sm:block sm:mr-6 animate-introX1">
      <div className="flex space-x-4">
        {navigationData.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={clsx(
              "text-black",
              "hover:text-gray-500",
              "px-3 py-2 rounded-md text-2xl font-bold",
              "uppercase"
            )}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </div>
  );
};

const NavigationBarMobile: FC<NavigationProps> = ({ navigationData }) => {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1">
      {navigationData.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={clsx(
            "text-black hover:text-gray-500",
            "block px-3 py-2 text-4xl font-bold",
            "uppercase",
            "last:border-b-[0.9px] border-gray-200"
          )}
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
  );
};

export const Header: FC = () => {
  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className={clsx("px-4 mx-auto  max-w-7xl sm:px-6 lg:px-8")}>
              <div className="relative flex items-center justify-between h-32">
                {/* Initials*/}
                <div>
                  <NameInitials />
                </div>
                <div className="flex mr-2 overflow-hidden">
                  {/* Desktop navigation */}
                  {open ? (
                    <NavigationBar navigationData={navigationData} />
                  ) : (
                    <></>
                  )}
                  <div className="inset-y-0 flex items-center">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <Image
                          src="/CrossBlack.svg"
                          alt="CrossBlack"
                          width={26}
                          height={26}
                          className="duration-500 ease-in-out rotate-45 hover:rotate-[135deg]"
                        />
                      ) : (
                        <Image
                          src="/CrossBlack.svg"
                          alt="CrossBlack"
                          width={26}
                          height={26}
                          className="duration-500 ease-in-out hover:rotate-90"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              {/* Mobile navigation */}
              <NavigationBarMobile navigationData={navigationData} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
