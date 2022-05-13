import React, { FC } from "react";
import Lottie from "react-lottie-player";
import programmingJson from "../data/programming.json";
import nftJson from "../data/nft.json";
import surfJson from "../data/surf.json";
import woodworkJson from "../data/woodwork.json";
import musicJson from "../data/music.json";

export const ProfileGrid: FC = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid-cols-4 sm:grid">
        <div className="bg-[#4895ef] h-2 rounded-l-md"></div>
        <div className="bg-[#3a0ca3] h-2"></div>
        <div className="bg-[#7209b7] h-2"></div>
        <div className="bg-[#f72585] h-2 rounded-r-md"></div>
      </div>
      <div className="grid-cols-4 grid-rows-2 sm:grid">
        <div className="flex items-center justify-center h-full col-start-1 col-end-3 row-start-1 row-end-3 hover:bg-[#f72585] rounded-md">
          <Lottie loop animationData={programmingJson} play />
        </div>
        <div className="flex items-center justify-center col-start-3 col-end-4 row-start-1 row-end-2 hover:bg-[#3a0ca3] rounded-md">
          <Lottie loop animationData={surfJson} play />
        </div>
        <div className="flex items-center justify-center col-start-3 col-end-4 row-start-2 row-end-3 hover:bg-[#7209b7] rounded-md">
          <Lottie loop animationData={woodworkJson} play />
        </div>
        <div className="relative flex items-start justify-center col-start-4 col-end-5 row-start-1 row-end-2 hover:bg-[#4895ef] rounded-md">
          <Lottie loop animationData={nftJson} play />
        </div>
        <div className="relative flex items-center justify-center col-start-4 col-end-5 row-start-2 row-end-3 hover:bg-[#f72585] rounded-md">
          <Lottie loop animationData={musicJson} play />
        </div>
      </div>
    </div>
  );
};
