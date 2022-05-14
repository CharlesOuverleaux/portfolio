import type { NextPage } from "next";
import Head from "next/head";
import { Page } from "../components/Page";
import { ProfileGrid } from "../components/.";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <ProfileGrid />
      </Page>
    </div>
  );
};

export default About;
