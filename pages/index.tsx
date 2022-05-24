import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { CardList } from "../components";
import { Page } from "../components/Page";
import useApiData from "../hooks/use-api-data";
import { Job } from "../lib/types";
import { NextSeo, ProfilePageJsonLd } from "next-seo";
import { PageProps } from "../lib/types";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      canonicalUrl: new URL("/", process.env.BASE_URL).href,
    },
  };
};

const Home: NextPage<PageProps> = ({ canonicalUrl }) => {
  const jobs = useApiData<Job[]>("api/jobs", []);

  return (
    <div>
      <NextSeo
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "charlesouverleaux.co | Home",
        }}
      />
      <ProfilePageJsonLd
        lastReviewed="2022-05-24T19:30"
        breadcrumb={[
          {
            position: 1,
            name: "charlesouverleaux.co",
            item: "https://charlesouverleaux.co",
          },
          {
            position: 2,
            name: "about",
            item: "https://charlesouverleaux.co/about",
          },
          {
            position: 3,
            name: "contact",
            item: "https://charlesouverleaux.co/contact",
          },
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
