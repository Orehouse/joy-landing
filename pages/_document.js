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
            <link href="http://fonts.googleapis.com/css?family=Roboto"
                  rel="stylesheet" type="text/css"/>
            <link href="http://fonts.googleapis.com/css?family=Russo+One"
                  rel="stylesheet" type="text/css"/>
            <link href="http://fonts.googleapis.com/css?family=Lora"
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