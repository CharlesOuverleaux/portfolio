import type { NextPage } from "next";
import Head from "next/head";
import { Page } from "../components/Page";
import memeJson from "../data/meme.json";
import Lottie from "react-lottie-player";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="404 Woups" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-center w-full h-64 sm:h-80">
            <Lottie loop animationData={memeJson} play />
          </div>
          <h1 className="text-4xl uppercase">Woups, page not found</h1>
          <div className="flex justify-center pt-6">
            <Link href="/" passHref>
              <a className="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white uppercase border border-transparent shadow-sm bg-blue-co hover:opacity-100 opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-co sm:w-auto notched">
                Back home
              </a>
            </Link>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default About;
