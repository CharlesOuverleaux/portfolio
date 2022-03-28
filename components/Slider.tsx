import { FC, useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

type FeaturedImage = {
  imageSrc: string;
  imageAlt: string;
};

interface SliderProps {
  featuredImages: FeaturedImage[];
}

let count = 0;

export const Slider: FC<SliderProps> = ({ featuredImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      count = (count + 1) % featuredImages.length;
      setCurrentIndex(count);
    }, 3500);
    return () => clearInterval(interval);
  }, [currentIndex, featuredImages.length]);

  return (
    <div className="relative w-full" id="Slider">
      <div className="relative overflow-hidden rounded-lg shadow-co-blue aspect-w-12 aspect-h-7">
        <Image
          src={featuredImages[currentIndex].imageSrc}
          alt={featuredImages[currentIndex].imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute bottom-0 flex items-center justify-center w-full px-3 text-white transform -translate-y-1/2">
        {featuredImages.map((_item, i) => {
          return (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={clsx(
                "w-3 h-3 sm:w-4 sm:h-4 m-1 sm:m-2 rounded-full shadow-lg opacity-80 hover:opacity-100",
                currentIndex == i ? "bg-[#183DF2] opacity-100" : "bg-white"
              )}
            ></button>
          );
        })}
      </div>
    </div>
  );
};
