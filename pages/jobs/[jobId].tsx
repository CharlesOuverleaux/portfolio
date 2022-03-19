import { GetServerSideProps, NextPage } from "next";
import { Job } from "../../lib/types";
import { findJobById } from "../../models/job";
import { ParsedUrlQuery } from "querystring";
import { Page } from "../../components/Page";
import Image from "next/image";
import { CameraIcon } from "@heroicons/react/solid";
import useApiData from "../../hooks/use-api-data";
import clsx from "clsx";
import getPreviousJob from "../../helpers/getPreviousJob";
import getNextJob from "../../helpers/getNextJob";

interface Props {
  job: Job;
}

const JobPage: NextPage<Props> = ({ job }) => {
  const jobs = useApiData<Job[]>("/api/jobs", []);
  const previousJob = getPreviousJob(job.jobId, jobs.length);
  const nextJob = getNextJob(job.jobId, jobs.length);

  return (
    <Page>
      <div className="overflow-hidden bg-white">
        <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 hidden w-screen lg:block bg-gray-50 left-3/4" />
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
              <svg
                className="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
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
                <p>LINK AERA.ONEFOOTBALL.IO</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mx-auto mt-4 max-w-prose lg:max-w-none">
            <a
              href={"/jobs/" + previousJob}
              className={clsx(
                "bg-[#183DF2]",
                "relative notched overflow-hidden",
                "px-8 py-3 z-50 w-36",
                "items-center text-center justify-self-start",
                "opacity-80 hover:opacity-100"
              )}
            >
              <span className="text-white uppercase">Previous</span>
            </a>
            <a
              href={"/jobs/" + nextJob}
              className={clsx(
                "bg-[#183DF2]",
                "relative notched overflow-hidden",
                "px-8 py-3 z-50 w-36",
                "items-center text-center justify-self-end",
                "opacity-80 hover:opacity-100"
              )}
            >
              <span className="text-white uppercase">Next</span>
            </a>
          </div>
        </div>
      </div>
    </Page>
  );
};

interface Params extends ParsedUrlQuery {
  jobId: string;
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}) => {
  const { jobId } = params!;
  const job = await findJobById(parseInt(jobId));

  return {
    props: {
      job,
    },
  };
};

export default JobPage;
