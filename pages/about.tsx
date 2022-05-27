import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Page } from "../components/Page";
import { ProfileGrid } from "../components/.";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <ProfileGrid />
      </Page>
    </div>
  );
};

export default About;
