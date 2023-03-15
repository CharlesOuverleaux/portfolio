import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { CardList } from "../components";
import { Page } from "../components/Page";
import { Job } from "../lib/types";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
import { PageProps } from "../lib/types";
import client from "../client";
import { getAllJobs } from "../lib/sanity/queries";

export const getStaticProps: GetStaticProps = async () => {
  const jobs = await client.fetch(getAllJobs);

  if (!jobs) {
    return {
      props: {
        canonicalUrl: new URL("/", process.env.BASE_URL).href,
        jobs: null,
      },
    };
  }

  return {
    props: {
      canonicalUrl: new URL("/", process.env.BASE_URL).href,
      jobs,
    },
    // Ref: https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    revalidate: 10, // In seconds
  };
};

const Home: NextPage<PageProps & { jobs: Job[] }> = ({
  canonicalUrl,
  jobs,
}) => {
  return (
    <div>
      <NextSeo
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "charlesouverleaux.co | Home",
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Charles Ouverleaux"
        url="http://charlesouverleaux.com"
        sameAs={[
          "https://www.linkedin.com/in/charlesouverleaux/",
          "https://github.com/CharlesOuverleaux",
          "https://twitter.com/CO_IN_TECH",
          "https://stackoverflow.com/users/16106763/charles-ouverleaux",
        ]}
      />
      <Head>
        <link rel="icon" href="/C.svg" />
      </Head>
      <Page>
        <main>
          <h1 className="hidden">Charles Ouverleaux | Frontend Engineer</h1>
          <CardList jobs={jobs} />
        </main>
      </Page>
    </div>
  );
};

export default Home;
