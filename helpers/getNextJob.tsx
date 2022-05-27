import { Job } from "../lib/types";

const getNextJob = (jobId: string, jobArray: Job[]) => {
  const jobIndex = jobArray.findIndex((item) => item.jobId === jobId);
  let newIndex;
  if (jobIndex === jobArray.length - 1) {
    newIndex = 0;
  } else {
    newIndex = jobIndex + 1;
  }
  return jobArray[newIndex].jobId;
};

export default getNextJob;
