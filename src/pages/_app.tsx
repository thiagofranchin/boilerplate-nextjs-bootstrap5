import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NextNprogress from 'nextjs-progressbar'

import Layout from '../components/Layout'

import '../styles/global.scss'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  let path

  if (router.pathname == '/') {
    path = router.pathname.replace('/', 'home')
    path = path[0].toUpperCase() + path.substr(1)
  } else {
    path = router.pathname.replace('/', '')
    path = path[0].toUpperCase() + path.substr(1)
  }

  return (
    <Layout>
      <Head>
        <title>{path} | Template for Dev</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Template for dev" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Montserrat:wght@400;600;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyles />
      <NextNprogress
        color="#15b1d7"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
