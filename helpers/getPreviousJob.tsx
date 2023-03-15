import { Job } from "../lib/types";

const getPreviousJob = (jobId: string, jobArray: Job[]) => {
  const jobIndex = jobArray.findIndex((item) => item.jobId === jobId);
  let newIndex;
  if (jobIndex === 0) {
    newIndex = jobArray.length - 1;
  } else {
    newIndex = jobIndex - 1;
  }
  return jobArray[newIndex].jobId;
};

export default getPreviousJob;
