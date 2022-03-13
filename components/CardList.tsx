import { FC } from "react";
import { Card } from "./Card";
import { Job } from "../lib/types";

const jobs: Job[] = [
  {
    id: 1,
    company: "OneFootball",
    title: "Frontend Engineer",
    href: "#",
    imageSrc: "/OneFootballLogo.svg",
    imageAlt: "OneFootball Logo",
  },
  {
    id: 2,
    company: "SurfEasy - Le Wagon",
    title: "FullStack Engineer",
    href: "#",
    imageSrc: "/SurfEasyLogo.svg",
    imageAlt: "SurfEasy Logo",
  },
  {
    id: 3,
    company: "Rent a Techy - Le Wagon",
    title: "FullStack Engineer",
    href: "#",
    imageSrc: "/RentaTechyLogo.svg",
    imageAlt: "Rent a Techy Logo",
  },
  {
    id: 4,
    company: "Amazon",
    title: "Strategic Startup Manager",
    href: "#",
    imageSrc: "/AmazonLogo.svg",
    imageAlt: "Amazon Logo",
  },
  {
    id: 5,
    company: "nu3",
    title: "Head of CRM",
    href: "#",
    imageSrc: "/nu3Logo.svg",
    imageAlt: "nu3 Logo",
  },
  {
    id: 6,
    company: "Home24",
    title: "Int. Category Manager",
    href: "#",
    imageSrc: "/Home24Logo.svg",
    imageAlt: "Home24 Logo",
  },
];

export const CardList: FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2
          id="work"
          className="text-2xl font-extrabold tracking-tight text-gray-900 uppercase"
        >
          Work
        </h2>

        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {jobs.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};
