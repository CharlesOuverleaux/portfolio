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
          <div className="fixed w-screen h-screen text-white mix-blend-difference">
            <h1 className="text-5xl uppercase">Charles Ouverleaux</h1>
          </div>
          <section className="w-screen h-screen bg-black"></section>
          <section className="w-screen h-screen bg-white"></section>
        </div>
      </Page>
    </div>
  );
};

export default About;
