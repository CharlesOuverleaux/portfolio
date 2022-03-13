import { Job } from "../../lib/types";
import { GetServerSideProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { findJobById } from "../../models/job";

// TODO: Build a fake api, make sure job pages are built from the server side
// (jobId page, Models, Data)

interface JobPageProps {
  job: Job | undefined;
}

export const JobPage: NextPage<JobPageProps> = ({ job }) => {
  return (
    <div>
      <h1>Company: {job?.company}</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      jobs: [],
    },
  };
}
