import { GetServerSideProps, NextPage } from "next";
import { Job } from "../../lib/types";
import { findJobById } from "../../models/job";
import { ParsedUrlQuery } from "querystring";
import { Page } from "../../components/Page";
import useApiData from "../../hooks/use-api-data";
import getPreviousJob from "../../helpers/getPreviousJob";
import getNextJob from "../../helpers/getNextJob";
import {
  faYoutube,
  faGithub,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { JobButton, JobDetails } from "../../components/.";
interface Props {
  job: Job;
}

const JobPage: NextPage<Props> = ({ job }) => {
  const jobs = useApiData<Job[]>("/api/jobs", []);
  library.add(faYoutube, faGithub, faChrome);
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
