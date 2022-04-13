import { FC } from "react";
import { Job } from "../lib/types";
import { SvgPattern } from "./.";
import { IconsBar } from "./IconsBar";
import { Slider } from "./index";

interface JobDetailsProps {
  job: Job;
}
interface MultipleJobsProps {
  multipleJobs: { title: string; descriptions: string[] }[];
}

const MultipleJobs: FC<MultipleJobsProps> = ({ multipleJobs }) => {
  return (
    <>
      {multipleJobs.map((content) => (
        <li key={content.title}>
          {content.title}
          {
            <ul>
              {content.descriptions.map((description, i) => (
                <li key={i}>{description}</li>
              ))}
            </ul>
          }
        </li>
      ))}
    </>
  );
};

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
              <Slider featuredImages={job.featuredImages} />
            </figure>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
            <p className="text-gray-500 ">{job.companyDescription}</p>
          </div>
          <div className="mx-auto mt-5 prose text-gray-500 prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1">
            {job.isTechnicalJob && (
              <>
                <h3>Tech Stack</h3>
                <div className="grid grid-cols-2 p-0 sm:grid-cols-3">
                  {job.techStack.map((tech) => (
                    <span key={tech} className="">
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}
            <h3>Work | {job.dates} </h3>
            <ul role="list" className="list-square">
              {job.multipleJobs ? (
                <MultipleJobs multipleJobs={job.multipleJobs} />
              ) : (
                job.jobDescription.map((item) => (
                  <li key={item} className="pl-0">
                    {item}
                  </li>
                ))
              )}
            </ul>
            <IconsBar links={job.links} />
          </div>
        </div>
      </div>
    </>
  );
};
