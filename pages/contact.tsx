import type { NextPage } from "next";
import Head from "next/head";
import { Page } from "../components/Page";

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Charles Ouverleaux</title>
        <meta name="description" content="Welcome to my profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <h1>Contact me</h1>
      </Page>
    </div>
  );
};

export default Contact;
