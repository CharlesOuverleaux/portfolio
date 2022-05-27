import { GetStaticProps, NextPage } from "next";
import { Job } from "../../lib/types";
import { findJobById } from "../../models/job";
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
import useSWR from 'swr'
import { fetcher } from "../../helpers/fetcher";

interface Props {
  job: Job;
}

const JobPage: NextPage<Props> = ({ job }) => {
  library.add(faYoutube, faGithub, faChrome);

  const { data: jobs, error } = useSWR<Job[]>('/api/jobs', fetcher)

  if (error) return <div>failed to load</div>
  if (!jobs) return <div>loading...</div>
  
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

interface Params extends ParsedUrlQuery {
  jobId: string;
}

// replace by get static path instead of server side props
// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { jobId: "onefootball" } },
      { params: { jobId: "surfeasy" } },
      { params: { jobId: "rent-a-techy" } },
      { params: { jobId: "amazon" } },
      { params: { jobId: "nu3" } },
      { params: { jobId: "home24" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { jobId } = params!;
  const job = await findJobById(jobId);

  return {
    props: {
      job,
    },
  };
};

export default JobPage;
