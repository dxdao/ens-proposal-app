// pages/_document.js
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='version' content={process.env.GIT_REVISION} />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          crossOrigin='anonymous'
          href='https://fonts.gstatic.com'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
        />
        <link rel='icon' href='./favicon.png' />
        <link rel='alternate icon' type='image/png' href='./favicon.png' />
        <link
          rel='icon'
          sizes='any'
          type='image/svg+xml'
          href='./favicon.svg'
        />
        <link rel='apple-touch-icon' href='./logo192.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
