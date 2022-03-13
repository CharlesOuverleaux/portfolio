import React, { FC } from "react";
import { CardProps } from "../lib/types";
import Image from "next/image";
import Hover from "react-3d-hover";

const CardBack: FC = () => {
  return (
    <div className="card-back">
      <div className="relative group">
        <div className="grid w-full overflow-hidden bg-[#183DF2] rounded-md min-h-80 aspect-w-1 aspect-h-1 lg:h-80 lg:aspect-none">
          <div className="relative w-5/6 font-bold text-white uppercase border-8 border-white place-self-center h-5/6">
            <div className="absolute top-0 left-0 m-4">
              <p>Frontend engineer</p>
              <p>OneFootball</p>
            </div>
            <p className="absolute bottom-0 right-0 m-4 animate-introX1">
              Read more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Card: FC<CardProps> = ({ product }) => {
  return (
    <div className="container" key={product.id}>
      <Hover>
        <div className="group card-front">
          <div className="relative group">
            <div className="group-hover:hidden grid w-full overflow-hidden bg-[url('/BlueTexture.svg')] bg-repeat rounded-md min-h-80 aspect-w-1 aspect-h-1 lg:h-80 lg:aspect-none justify-center self-center">
              <div className="place-self-center">
                <Image
                  src={"/OneFootballLogo.svg"}
                  alt={"OneFootballLogo"}
                  width={250}
                  height={250}
                />
              </div>
            </div>
            <div className="hidden group-hover:block">
              <CardBack />
            </div>
          </div>
        </div>
      </Hover>
    </div>
  );
};
