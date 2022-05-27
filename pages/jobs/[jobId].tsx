import { GetStaticProps, NextPage } from "next";
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

interface Params extends ParsedUrlQuery {
  jobId: string;
}


export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { jobId } = params!;
  const job = await findJobById(jobId);

  const jobs = await allJobs(); 

  return {
    props: {
      job,
      jobs
    },
  };
};


interface Props {
  job: Job;
  jobs: Job[]
}

const JobPage: NextPage<Props> = ({ job, jobs }) => {
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
