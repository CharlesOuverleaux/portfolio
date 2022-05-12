import type { NextPage } from "next";
import Head from "next/head";
import { Page } from "../components/Page";
import { ProfileGrid } from "../components/ProfileGrid";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Charles Ouverleaux</title>
        <meta name="description" content="Welcome to my profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <ProfileGrid />
      </Page>
    </div>
  );
};

export default About;
