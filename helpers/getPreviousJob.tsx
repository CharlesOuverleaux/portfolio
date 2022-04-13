const getPreviousJob = (jobId: number, arrlength: number) => {
  if (jobId === 1) {
    return arrlength;
  } else {
    return jobId - 1;
  }
};

export default getPreviousJob;
