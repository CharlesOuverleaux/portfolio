import { GetServerSideProps, NextPage } from "next";
import { Job } from "../../lib/types";
import { findJobById } from "../../models/job";
import { ParsedUrlQuery } from "querystring";
import { Page } from "../../components/Page";
import Image from "next/image";
import { CameraIcon } from "@heroicons/react/solid";
import useApiData from "../../hooks/use-api-data";
import getPreviousJob from "../../helpers/getPreviousJob";
import getNextJob from "../../helpers/getNextJob";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { JobButton, SvgPattern, JobDetails } from "../../components/.";
interface Props {
  job: Job;
}

const JobPage: NextPage<Props> = ({ job }) => {
  const jobs = useApiData<Job[]>("/api/jobs", []);
  library.add(faYoutube, faGithub);
  const previousJobId = getPreviousJob(job.jobId, jobs.length);
  const nextJobId = getNextJob(job.jobId, jobs.length);

  const previousJob = jobs.filter((job) => {
    return job.jobId == previousJobId;
  });

  const nextJob = jobs.filter((job) => {
    return job.jobId == nextJobId;
  });

  return (
    <Page>
      <div className="overflow-hidden bg-white">
        <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <JobDetails job={job} />
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
              </div>
            </div>
          </div>
          <div className="flex justify-around w-full ">
            <a key="GitHub" href="/" target="_blank" rel="noreferrer">
              <span className="sr-only">GitHub</span>
              <FontAwesomeIcon
                icon={["fab", "github" as IconName]}
                size={"2x"}
              />
            </a>
            <a key="Youtube" href="/" target="_blank" rel="noreferrer">
              <span className="sr-only">Youtube</span>
              <FontAwesomeIcon
                icon={["fab", "youtube" as IconName]}
                size={"2x"}
              />
            </a>
          </div>
          <JobButton
            previousJob={previousJob}
            previousJobId={previousJobId}
            nextJob={nextJob}
            nextJobId={nextJobId}
          />
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
