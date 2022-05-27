let jobs = require("../data/jobs.json");
import { Job } from "../lib/types";

// List all
export const allJobs = async (): Promise<Job[]> => {
  // we filter out the few events where jobid is not present
  return jobs.filter((job: Job) => !!job.jobId);
};

// Select One
export const findJobById = async (jobId: string): Promise<Job> => {
  return jobs.find((job: Job) => job.jobId === jobId);
};
