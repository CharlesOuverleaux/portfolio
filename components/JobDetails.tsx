import { FC } from "react";
import { Job } from "../lib/types";
import Image from "next/image";
import { CameraIcon } from "@heroicons/react/solid";
import { SvgPattern } from "./.";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-brands-svg-icons";

interface JobDetailsProps {
  job: Job;
}

export const JobDetails: FC<JobDetailsProps> = ({ job }) => {
  return (
    <>
      <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h2 className="text-base font-semibold tracking-wide text-[#183DF2] uppercase">
            {job.company}
          </h2>
          <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            {job.title}
          </h3>
        </div>
      </div>
      <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="relative lg:row-start-1 lg:col-start-2">
          <SvgPattern />
          <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
            <figure>
              <div className="relative overflow-hidden rounded-lg shadow-co-blue aspect-w-12 aspect-h-7">
                <Image
                  src={job.jobImageSrc}
                  alt={job.jobImageAlt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <figcaption className="flex mt-3 text-sm text-gray-500">
                <CameraIcon
                  className="flex-none w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-2">{job.jobImageAlt}</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
            <p className="text-gray-500 ">{job.companyDescription}</p>
          </div>
          <div className="mx-auto mt-5 prose text-gray-500 prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1">
            <h3>Tech Stack</h3>
            <ul className="p-0 list-none">
              {job.techStack.map((tech) => (
                <span key={tech} className="m-2 first:m-0">
                  {tech}
                </span>
              ))}
            </ul>
            <h3>Work | {job.dates} </h3>
            <ul role="list" className="list-square">
              {job.jobDescription.map((item) => (
                <li key={item} className="pl-0">
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex justify-center w-full py-4">
              <a
                key="GitHub"
                href="/"
                target="_blank"
                rel="noreferrer"
                className="mx-5 text-gray-500 hover:text-black"
              >
                <span className="sr-only">GitHub</span>
                <FontAwesomeIcon
                  icon={["fab", "github" as IconName]}
                  size={"2x"}
                />
              </a>
              <a
                key="GitHub"
                href="/"
                target="_blank"
                rel="noreferrer"
                className="mx-5 text-gray-500 hover:text-black"
              >
                <span className="sr-only">GitHub</span>
                <FontAwesomeIcon
                  icon={["fab", "github" as IconName]}
                  size={"2x"}
                />
              </a>
              <a
                key="Youtube"
                href="/"
                target="_blank"
                rel="noreferrer"
                className="mx-5 text-gray-500 hover:text-black"
              >
                <span className="sr-only">Youtube</span>
                <FontAwesomeIcon
                  icon={["fab", "youtube" as IconName]}
                  size={"2x"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
