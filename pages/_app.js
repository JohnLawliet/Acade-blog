import GlobalStyle from '../styles/GlobalStyles'
import Head from 'next/head'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto&family=Source+Sans+Pro:wght@300&display=swap" />   
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
