import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Job } from "../../lib/types";
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
  previousJob: Job[];
  previousJobId: string;
  nextJob: Job[];
  nextJobId: string;
}

// Ref: https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(getJobsSlugs);

  return {
    paths: paths.map((jobId: string) => ({ params: { jobId } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const jobId = params!.jobId ? params!.jobId.toString() : "onefootball";
  // Sanity
  const job: Job | null = await client.fetch(getJob, { jobId: jobId });
  const jobs: Job[] = await client.fetch(getAllJobs);

  if (!job) {
    return {
      props: {
        job: null,
      },
    };
  }

  const previousJobId = getPreviousJob(job.jobId, jobs);
  const nextJobId = getNextJob(job.jobId, jobs);

  const previousJob = jobs.filter((job) => {
    return job.jobId == previousJobId;
  });

  const nextJob = jobs.filter((job) => {
    return job.jobId == nextJobId;
  });

  return {
    props: {
      job,
      previousJob,
      previousJobId,
      nextJob,
      nextJobId,
    },
    // Ref: https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    revalidate: 10, // In seconds
  };
};

const JobPage: NextPage<JobPageProps> = ({
  job = null,
  previousJob,
  previousJobId,
  nextJob,
  nextJobId,
}) => {
  library.add(faYoutube, faGithub, faChrome);

  return (
    <Page>
      {job && (
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
      )}
    </Page>
  );
};

export default JobPage;
