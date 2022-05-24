import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Page } from "../components/Page";
import { ProfileGrid } from "../components/.";
import { NextSeo, ProfilePageJsonLd } from "next-seo";
import { PageProps } from "../lib/types";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      canonicalUrl: new URL("/about", process.env.BASE_URL).href,
    },
  };
};

const About: NextPage<PageProps> = ({ canonicalUrl }) => {
  return (
    <div>
      <NextSeo
        title="charlesouverleaux.co | About me | Building is more than a passion"
        canonical={canonicalUrl}
        openGraph={{
          title: "charlesouverleaux.co | About",
          url: canonicalUrl,
          type: "profile",
          profile: {
            firstName: "Charles",
            lastName: "Ouverleaux",
            gender: "male",
            username: "charlesOuverleaux",
          },
        }}
      />
      <ProfilePageJsonLd
        lastReviewed="2022-05-24T19:30"
        breadcrumb={[
          {
            position: 1,
            name: "charlesouverleaux.co",
            item: "https://www.charlesouverleaux.co",
          },
          {
            position: 2,
            name: "about",
            item: "https://www.charlesouverleaux.co/about",
          },
          {
            position: 3,
            name: "contact",
            item: "https://www.charlesouverleaux.co/contact",
          },
        ]}
      />
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
