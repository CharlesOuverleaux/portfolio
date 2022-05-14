// Ref: https://tailwindui.com/components/marketing/page-examples/contact-pages#component-b2b99a39b231970b58c51fb20e23953d

import type { NextPage } from "next";
import Head from "next/head";
import { EmailForm } from "../components";
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
        <EmailForm />
      </Page>
    </div>
  );
};

export default Contact;
