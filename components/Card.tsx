import React, { FC } from "react";
import { CardProps } from "../lib/types";
import Image from "next/image";
// import Hover from "react-3d-hover";

const CardFront: FC<CardProps> = ({ job }) => {
  return (
    <div className="grid w-full overflow-hidden bg-[url('/BlueTexture.svg')] bg-repeat rounded-md h-80 aspect-square justify-center self-center">
      <div className="place-self-center">
        <Image src={job.imageSrc} alt={job.imageAlt} width={250} height={250} />
      </div>
    </div>
  );
};

const CardBack: FC<CardProps> = ({ job }) => {
  return (
    <div className="grid w-full overflow-hidden rounded-md bg-blue-co h-80 aspect-square">
      <div className="relative w-5/6 font-bold text-white uppercase border-8 border-white place-self-center h-5/6">
        <div className="absolute top-0 left-0 m-4 animate-introX2">
          <p>{job.title}</p>
          <p>{job.company}</p>
          <h3 className="hidden">
            {job.company} - {job.title}
          </h3>
        </div>
        <div className="absolute bottom-0 right-0 m-4 animate-introX1">
          <p>Read more</p>
        </div>
      </div>
    </div>
  );
};

export const Card: FC<CardProps> = ({ job }) => {
  return (
    // <Hover>
    <a href={"jobs/" + job.jobId.toString()}>
      <div className="container" key={job.jobId}>
        <div className="shadow-2xl group card">
          <div className="block group-hover:hidden">
            <CardFront job={job} />
          </div>
          <div className="hidden group-hover:block">
            <CardBack job={job} />
          </div>
        </div>
      </div>
    </a>
    // </Hover>
  );
};
