// Ref: https://tailwindui.com/components/marketing/page-examples/contact-pages#component-b2b99a39b231970b58c51fb20e23953d

import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { EmailForm } from "../components";
import { Page } from "../components/Page";
import { NextSeo, ProfilePageJsonLd } from "next-seo";
import { PageProps } from "../lib/types";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      canonicalUrl: new URL("/contact", process.env.BASE_URL).href,
    },
  };
};

const Contact: NextPage<PageProps> = ({ canonicalUrl }) => {
  return (
    <div>
      <NextSeo
        title="Contact me | Get in touch with me directly"
        canonical={canonicalUrl}
        openGraph={{
          title: "charlesouverleaux.co | Contact",
          url: canonicalUrl,
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <EmailForm />
      </Page>
    </div>
  );
};

export default Contact;
