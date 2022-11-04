import Head from 'next/head'
import NavBar from './components/NavBar/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech Blog - Rafael Uribe</title>
        <meta name="description" content="Technologie Blog." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
    </div>
  )
}
