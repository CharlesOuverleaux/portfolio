import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Job } from "../../lib/types";
import { allJobs, findJobById } from "../../models/job";
import { ParsedUrlQuery } from "querystring";
import { Page } from "../../components/Page";
import getPreviousJob from "../../helpers/getPreviousJob";
import getNextJob from "../../helpers/getNextJob";
import {
  faYoutube,
  faGithub,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { JobButton, JobDetails } from "../../components/.";
import client from "../../client";
import { getAllJobs, getJob, getJobsSlugs } from "../../lib/sanity/queries";

interface JobPageProps {
  job: Job;
  jobs: Job[];
}

// Ref: https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(getJobsSlugs);

  return {
    paths: paths.map((jobId: string) => ({ params: { jobId } })),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const jobId = params!.jobId as string;
  // Sanity
  const job = await client.fetch(getJob, {jobId: jobId});
  const jobs = await client.fetch(getAllJobs);

  return {
    props: {
      job,
      jobs,
    },
  };
};

const JobPage: NextPage<JobPageProps> = ({ job, jobs }) => {
  library.add(faYoutube, faGithub, faChrome);

  const previousJobId = getPreviousJob(job.jobId, jobs);
  const nextJobId = getNextJob(job.jobId, jobs);

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
          <h1 className="hidden">
            {job.company} {job.title}
          </h1>
          <JobDetails job={job} />
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

export default JobPage;
