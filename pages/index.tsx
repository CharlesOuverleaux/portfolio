import type { NextPage } from "next";
import Head from "next/head";
import { CardList, Header } from "../components";
import useApiData from "../hooks/use-api-data";
import { Job } from "../lib/types";

const Home: NextPage = () => {
  const jobs = useApiData<Job[]>("api/jobs", []);
  console.log(jobs);

  return (
    <div>
      <Head>
        <title>Charles Ouverleaux</title>
        <meta name="description" content="Welcome to my profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <CardList jobs={jobs} />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
