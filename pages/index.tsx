import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Charles Ouverleaux</title>
        <meta name="description" content="Welcome to my profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my profile
        </h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
