import React, { FC } from "react";
import { CardProps } from "../lib/types";
import Image from "next/image";
import Hover from "react-3d-hover";

export const Card: FC<CardProps> = ({ product }) => {
  return (
    <div className="container" key={product.id}>
      <Hover scale={1.05} perspective={900} speed={1000}>
        <div className="relative group">
          <div className="flex w-full overflow-hidden bg-[url('/BlueTexture.svg')] bg-repeat rounded-md min-h-80 aspect-w-1 aspect-h-1 lg:h-80 lg:aspect-none justify-center self-center">
            <Image
              src={"/OneFootballLogo.svg"}
              alt={"OneFootballLogo"}
              width={250}
              height={250}
              className="hover:z-50"
            />
          </div>
        </div>
      </Hover>
    </div>
  );
};
