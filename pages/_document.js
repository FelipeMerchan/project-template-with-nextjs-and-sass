import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="index,follow" />
          <meta name="description" content="" />
          <meta name="keywords" content="Películas, online, estrenos, streaming" />
          <meta property="og:title" content="Mi proyecto del curso de flexbox layout y componentes" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Interfaz de Spotifu, una de las apps más famosas de la industria musical." />
          <meta property="og:url" content="https://redesign-spotifu.vercel.app/" />
          <meta property="og:image" content="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1619323822/spotifu/open-graph-spotifu_nqztzl.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument