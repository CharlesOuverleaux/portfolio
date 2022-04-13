// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { allJobs } from "../../models/job";

const getAllJobs = async (_req: NextApiRequest, res: NextApiResponse) => {
  const jobs = await allJobs();
  res.status(200).json(jobs);
};

export default getAllJobs;
