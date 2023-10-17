import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/images/layout-2/logo/im-logo.png" />
          <link
            href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&amp;display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway&amp;display=swap"
            rel="stylesheet"
          />

          {/* blog page links */}
          {/* <!-- Google Fonts --> */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap"
            rel="stylesheet"
          />

          {/* <!-- CSS Libraries --> */}
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
            rel="stylesheet"
          />
          <link href="/blog-page-assets/lib/slick/slick.css" rel="stylesheet" />
          <link
            href="/blog-page-assets/lib/slick/slick-theme.css"
            rel="stylesheet"
          />

          {/* <!-- Template Stylesheet --> */}
          <link href="/blog-page-assets/css/style.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* <!-- JavaScript Libraries --> */}
          <script src="/blog-page-assets/lib/easing/easing.min.js"></script>
          <script src="/blog-page-assets/lib/slick/slick.min.js"></script>

          {/* <!-- Template Javascript --> */}
          <script src="/blog-page-assets/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
