import type { NextPage } from "next";
import Head from "next/head";
import { CardList, Header } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Charles Ouverleaux</title>
        <meta name="description" content="Welcome to my profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <CardList />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
