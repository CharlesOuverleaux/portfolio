import { FC } from "react";
import { Card } from "./Card";
import { Job } from "../lib/types";

interface CardListProps {
  jobs: Job[];
}

export const CardList: FC<CardListProps> = ({ jobs }) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-6 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h2
          id="work"
          className="text-2xl font-extrabold tracking-tight text-gray-900 uppercase"
        >
          Work
        </h2>

        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {jobs
            .slice()
            .sort((a, b) => a.gridOrder - b.gridOrder)
            .map((job) => (
              <Card key={job.jobId} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};
