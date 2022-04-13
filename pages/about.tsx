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
          <div className="fixed h-screen text-white max-w-7xl mix-blend-difference">
            <p className="text-5xl uppercase">
              Building <br />
              is more <br />
              than <br />
              a <br />
              passion
            </p>
            <div className="grid w-full grid-cols-3 pt-12 italic uppercase">
              <p>Beautiful Frontend Applications</p>
              <p>Innovative Tech Products</p>
              <p>Sustainable Wooden Surfboard</p>
            </div>
            <h1 className="py-12 text-5xl uppercase">Charles Ouverleaux</h1>
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
