const getNextJob = (jobId: number, arrlength: number) => {
  if (jobId === arrlength) {
    return 1;
  } else {
    return jobId + 1;
  }
};

export default getNextJob;
