import type { NextPage } from "next";
import Head from "next/head";
import { Page } from "../components/Page";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Charles Ouverleaux</title>
        <meta name="description" content="Welcome to my profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Ref: https://daily-dev-tips.com/posts/css-text-color-difference-based-on-background/ */}
          <div className="fixed h-screen text-black max-w-7xl">
            <p className="text-5xl uppercase bg-[url('/surf2.svg')] bg-no-repeat bg-cover bg-clip-text text-transparent">
              Building is more <br />
              than a passion
            </p>
            <div className="grid w-full grid-cols-3 pt-12 italic uppercase">
              <p>Beautiful Frontend Applications</p>
              <p>Innovative Tech Products</p>
              <p>Sustainable Wooden Surfboard</p>
            </div>
            <h1 className="py-12 uppercase text-7xl font-bebas">
              Charles Ouverleaux
            </h1>
          </div>
          <div className="grid grid-cols-3">
            <div className="w-full h-48 col-span-1 bg-white"></div>
            <div className="w-full h-48 col-span-1 bg-white"></div>
            <div className="w-full h-48 col-span-1 bg-black"></div>
            <div className="w-full col-span-1 bg-white h-96"></div>
            <div className="w-full col-span-1 bg-black h-96"></div>
            <div className="w-full col-span-1 bg-white h-96"></div>
            <div className="w-full h-48 col-span-1 bg-black"></div>
            <div className="w-full h-48 col-span-1 bg-white"></div>
            <div className="w-full h-48 col-span-1 bg-white"></div>
            <div className="w-full h-screen col-span-3 bg-white"></div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default About;
