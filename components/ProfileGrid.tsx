import React, { FC } from "react";
import Image from "next/image";
import fuelPic from "../public/profile/Fuel.png";
import dreamBigPic from "../public/profile/DreamBig.png";
import woodWorkingPic from "../public/profile/WoodWorking.png";
import githubPic from "../public/profile/Github.png";
import twitterPic from "../public/profile/Twitter.png";
import surfingPic from "../public/profile/Surfing.png";
import musicPic from "../public/profile/Music.png";
import Lottie from "react-lottie-player";
import programmingJson from "../data/programming.json";

export const ProfileGrid: FC = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid-cols-4 sm:grid">
        <div className="bg-[#4895ef] h-12">Color 1</div>
        <div className="bg-[#3a0ca3] h-12">Color 2</div>
        <div className="bg-[#7209b7] h-12">Color 3</div>
        <div className="bg-[#f72585] h-12">Color 4</div>
      </div>
      <div className="grid-cols-4 grid-rows-5 sm:grid">
        <div className="h-full col-start-1 col-end-3 row-start-1 row-end-3">
          <Lottie loop animationData={programmingJson} play />
        </div>
        <div className="col-start-3 col-end-4 row-start-2 row-end-3">
          <Image
            src={githubPic}
            alt="GitHub"
            layout="responsive"
            width={512}
            height={524}
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
          />
        </div>
        <div className="col-start-3 col-end-4 row-start-3 row-end-4">
          <Image
            src={twitterPic}
            alt="Twitter"
            layout="responsive"
            width={512}
            height={512}
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
          />
        </div>
        <div className="relative col-start-4 col-end-5 row-start-2 row-end-4">
          <div className="absolute z-10 flex items-center justify-center w-full h-full">
            <h2 className="text-2xl font-bold text-white uppercase">
              NFT - WEB3
            </h2>
          </div>
          <Image
            src={dreamBigPic}
            alt="Dream Big"
            layout="responsive"
            width={578}
            height={626}
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
          />
        </div>
        <div className="col-start-1 col-end-2 row-start-4 row-end-6">
          <Image
            src={surfingPic}
            alt="surfing"
            layout="responsive"
            width={674}
            height={522}
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-4 row-end-5">
          <Image
            src={fuelPic}
            alt="Fuel your passion"
            layout="responsive"
            width={592}
            height={268}
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-5 row-end-6">
          <Image
            src={musicPic}
            alt="Music"
            layout="responsive"
            width={590}
            height={536}
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
          />
        </div>
        <div className="col-start-3 col-end-5 row-start-4 row-end-6">
          <Image
            src={woodWorkingPic}
            alt="Woodworking"
            layout="responsive"
            width={592}
            height={268}
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};
