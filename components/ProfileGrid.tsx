import React, { FC } from "react";
import Lottie from "react-lottie-player";
import programmingJson from "../data/programming.json";
import nftJson from "../data/nft.json";
import surfJson from "../data/surf.json";
import woodworkJson from "../data/woodwork.json";
import earphonesJson from "../data/earphones.json";

export const ProfileGrid: FC = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="hidden">More about me</h1>
      <div className="grid-cols-4 sm:grid">
        <div className="bg-[#4895ef] h-2"></div>
        <div className="bg-[#3a0ca3] h-2"></div>
        <div className="bg-[#7209b7] h-2"></div>
        <div className="bg-[#f72585] h-2"></div>
      </div>
      <div className="grid-cols-4 grid-rows-2 sm:grid">
        <div className="group flex relative items-center justify-center h-full col-start-1 col-end-3 row-start-1 row-end-3 hover:bg-[#7209b7]">
          <Lottie loop animationData={programmingJson} play />
          <div className="absolute flex items-center invisible w-full h-full group-hover:visible">
            <div className="text-center">
              <h2 className="text-3xl text-white uppercase sm:text-5xl">
                Programming
              </h2>
              <p className="text-white uppercase">
                Building is more than a passion. I love to create great products
                from scratch and add my 6 years of experience in sales and
                marketing to create the best user services and experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="group flex relative items-center justify-center col-start-3 col-end-4 row-start-1 row-end-2 hover:bg-[#3a0ca3]">
          <Lottie loop animationData={surfJson} play />
          <div className="absolute flex items-center invisible w-full h-full group-hover:visible">
            <div className="text-center">
              <h2 className="text-3xl text-white uppercase">Surfing</h2>
              <p className="text-white uppercase">
                If I am not behind my computer, you will find me in the water.
              </p>
            </div>
          </div>
        </div>
        <div className="group flex relative items-center justify-center col-start-3 col-end-4 row-start-2 row-end-3 hover:bg-[#7209b7]">
          <Lottie loop animationData={woodworkJson} play />
          <div className="absolute flex items-center invisible w-full h-full group-hover:visible">
            <div className="text-center">
              <h2 className="text-3xl text-white uppercase">WoodWorking</h2>
              <p className="text-white uppercase">
                From building skateboards, to shaping sustainable wooden
                surfboards.
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex items-start justify-center col-start-4 col-end-5 row-start-1 row-end-2 hover:bg-[#4895ef]">
          <Lottie loop animationData={nftJson} play />
          <div className="absolute flex items-center invisible w-full h-full group-hover:visible">
            <div className="text-center">
              <h2 className="text-3xl text-white uppercase">NFT / WEB3</h2>
              <p className="text-white uppercase">
                This technology will challenge our society and enable to empower
                creators.
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex items-center justify-center col-start-4 col-end-5 row-start-2 row-end-3 hover:bg-[#3a0ca3]">
          <Lottie loop animationData={earphonesJson} play />
          <div className="absolute flex items-center invisible w-full h-full group-hover:visible">
            <div className="text-center">
              <h2 className="text-3xl text-white uppercase">Music</h2>
              <p className="text-white uppercase">
                In my free time I love to go to concerts, play the guitar and
                the bass.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
