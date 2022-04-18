import type { NextPage } from "next";
import Head from "next/head";
import { Page } from "../components/Page";

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
          <div className="fixed h-screen text-white max-w-7x mix-blend-difference">
            <h1 className="py-12 tracking-widest uppercase text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bebas bg-[url('/surf2.svg')] bg-bottom bg-cover bg-clip-text text-transparent">
              Charles Ouverleaux <br />
              Building is more <br />
              than a passion
            </h1>
            <div className="w-full pt-12 sm:grid sm:grid-cols-12">
              <p className="col-span-3 py-2 font-bold tracking-wide">
                I am a Frontend engineer with a strong business background
                (Amazon, Berlin start-ups, ICHEC Business School).
              </p>
              <p className="col-span-6 py-2">
                Common Senses Festival, is a first-of-its-kind, festival that
                explores the human senses through interactive installations,
                live performances, and more. This month-long festival, is
                presented by local non-profit Autism Action Partnership.
              </p>
              <p className="col-span-2 py-2">
                LG, Hobbies (Sustainable Wooden Surfboard), Location, contact me
                button
              </p>
            </div>
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
