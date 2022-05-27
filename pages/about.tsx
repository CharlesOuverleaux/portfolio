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
        title="About me | Building is more than a passion"
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
