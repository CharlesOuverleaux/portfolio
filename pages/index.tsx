import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Charles Ouverleaux</title>
        <meta name="description" content="Welcome to my profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Header />
      </nav>

      <main>
        <h1>Welcome to my profile</h1>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
