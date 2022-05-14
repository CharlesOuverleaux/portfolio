import type { NextPage } from "next";
import Head from "next/head";
import { CardList } from "../components";
import { Page } from "../components/Page";
import useApiData from "../hooks/use-api-data";
import { Job } from "../lib/types";

const Home: NextPage = () => {
  const jobs = useApiData<Job[]>("api/jobs", []);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
