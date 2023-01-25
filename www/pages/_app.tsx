import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../style.css'

function AppWrapper({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Working Title</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default AppWrapper
