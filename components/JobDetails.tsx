import { FC } from "react";
import { Job } from "../lib/types";

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
    </>
  );
};
