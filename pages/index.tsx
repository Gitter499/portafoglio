
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Box } from '../components/canvas/Box'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
      <title>Rafayel Amirkhanyan</title>
        <meta property="og:title" content="Rafayel Amirkhanyan" />
        <meta property="og:site_name" content="Rafayel Amirkhanyan Portfolio" />
        <meta property="og:url" content="https://rafayel.codes/" />
        <meta
          property="og:description"
          content="Hi! My name is Rafayel Amirkhanyan and here is my home on the internet!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
// @ts-ignore
Home.r3f = (props) => {
  return (
   <>
    <Box />
   </>
  )
}
export default Home
