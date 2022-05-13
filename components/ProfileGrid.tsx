import React, { FC } from "react";
import Image from "next/image";
import programmingPic from "../public/profile/Programming.png";

export const ProfileGrid: FC = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid-cols-4 grid-rows-5 sm:grid">
        <div className="bg-[#4895ef] ">Color 1</div>
        <div className="bg-[#3a0ca3]">Color 2</div>
        <div className="bg-[#7209b7]">Color 3</div>
        <div className="bg-[#f72585]">Color 4</div>
        <div className="relative h-[267px] col-start-1 col-end-3 row-start-2 row-end-4">
          <Image
            src={programmingPic}
            alt="Programming"
            layout="responsive"
            width={1180}
            height={534}
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
          />
          <h2 className="text-white">Programming</h2>
        </div>
        <div className="col-start-3 col-end-4 row-start-2 row-end-3">
          Github
        </div>
        <div className="col-start-3 col-end-4 row-start-3 row-end-4">
          Twitter
        </div>
        <div className="col-start-4 col-end-5 row-start-2 row-end-4">
          Dream big
        </div>
        <div className="col-start-1 col-end-2 row-start-4 row-end-6">
          Surfing
        </div>
        <div className="col-start-2 col-end-3 row-start-4 row-end-5">
          Find your passion
        </div>
        <div className="col-start-2 col-end-3 row-start-5 row-end-6">Music</div>
        <div className="col-start-3 col-end-5 row-start-4 row-end-6">
          Woodworking
        </div>
      </div>
    </div>
  );
};
