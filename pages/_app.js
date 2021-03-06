import Head from 'next/head'
import Script from 'next/script'
import NavBar from '../src/components/Shared/NavBar'
import '../src/styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Distribuição de Vacinas MG</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://kit.fontawesome.com/937c5f2506.js" crossOrigin="anonymous" />
      <NavBar />
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </>
  )
}
