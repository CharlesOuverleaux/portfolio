import { GetServerSideProps, NextPage } from "next";
import { Job } from "../../lib/types";
import { findJobById } from "../../models/job";
import { ParsedUrlQuery } from "querystring";

// TODO: Build a fake api, make sure job pages are built from the server side
// (jobId page, Models, Data)

interface Props {
  job: Job | undefined;
}

const JobPage: NextPage<Props> = ({ job }) => {
  return <h1>{job?.company}</h1>;
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
