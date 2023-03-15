import { FC } from "react";
import clsx from "clsx";
import { Job } from "../lib/types";

interface JobButtonProps {
  previousJob: Job[];
  previousJobId: string;
  nextJob: Job[];
  nextJobId: string;
}

export const JobButton: FC<JobButtonProps> = ({
  previousJob,
  previousJobId,
  nextJob,
  nextJobId,
}) => {
  return (
    <div className="grid grid-cols-2 mx-auto mt-4 max-w-prose lg:max-w-none">
      <a
        href={"/jobs/" + previousJobId}
        className={clsx(
          "bg-blue-co",
          "relative notched overflow-hidden",
          "px-8 py-3 z-50 w-36",
          "items-center text-center justify-self-start truncate text-white",
          "opacity-80 hover:opacity-100"
        )}
      >
        <span className="text-white uppercase truncate">
          {previousJob[0] ? previousJob[0].company : "Previous"}
        </span>
      </a>
      <a
        href={"/jobs/" + nextJobId}
        className={clsx(
          "bg-blue-co",
          "relative notched overflow-hidden",
          "px-8 py-3 z-50 w-36",
          "items-center text-center justify-self-end",
          "opacity-80 hover:opacity-100"
        )}
      >
        <p className="text-white uppercase truncate">
          {nextJob[0] ? nextJob[0].company : "Next"}
        </p>
      </a>
    </div>
  );
};
