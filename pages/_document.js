import Document, {Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
        <Html>
          <Head>
            <title>Joyteka</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
                rel="stylesheet" type="text/css"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
                rel="stylesheet" type="text/css"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"
                rel="stylesheet" type="text/css"/>
          </Head>
          <body>
          <Main/>
          <NextScript/>
          </body>
        </Html>
    );
  }
}

export default MyDocument;