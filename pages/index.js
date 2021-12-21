import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TerminalScreen from '../components/teminal_screen'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" CrossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Sora&display=swap" rel="stylesheet" /> 
      </Head>
      <div>
        <TerminalScreen />
      </div>
    </div>
  )
}
