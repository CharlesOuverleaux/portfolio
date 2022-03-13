import React, { FC } from "react";
import { CardProps } from "../lib/types";
import Image from "next/image";
import Hover from "react-3d-hover";

const CardFront: FC<CardProps> = ({ job }) => {
  return (
    <div className="grid w-full overflow-hidden bg-[url('/BlueTexture.svg')] bg-repeat rounded-md min-h-80 aspect-square lg:h-80 lg:aspect-none justify-center self-center">
      <div className="place-self-center">
        <Image src={job.imageSrc} alt={job.imageAlt} width={250} height={250} />
      </div>
    </div>
  );
};

const CardBack: FC<CardProps> = ({ job }) => {
  return (
    <div className="grid w-full overflow-hidden bg-[#183DF2] rounded-md min-h-80 aspect-square lg:h-80 lg:aspect-none">
      <div className="relative w-5/6 font-bold text-white uppercase border-8 border-white place-self-center h-5/6">
        <div className="absolute top-0 left-0 m-4 animate-introX2">
          <p>{job.title}</p>
          <p>{job.company}</p>
        </div>
        <p className="absolute bottom-0 right-0 m-4 animate-introX1">
          Read more
        </p>
      </div>
    </div>
  );
};

export const Card: FC<CardProps> = ({ job }) => {
  return (
    <div className="container" key={job.id}>
      <Hover>
        <div className="relative shadow-2xl group card">
          <div className="group-hover:hidden">
            <CardFront job={job} />
          </div>
          <div className="hidden group-hover:block">
            <CardBack job={job} />
          </div>
        </div>
      </Hover>
    </div>
  );
};
