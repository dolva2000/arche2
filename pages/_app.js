import Head from "next/head";
import Layout from "../components/layouts";

function MyApp({ Component, pageProps }) {
  return (

    <>

      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Eglise Arche</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />

        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/ticker-style.css" />
        <link rel="stylesheet" href="css/flaticon.css" />
        <link rel="stylesheet" href="css/slicknav.css" />
        <link rel="stylesheet" href="css/animate.min.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="css/themify-icons.css" />
        <link rel="stylesheet" href="css/slick.css" />
        <link rel="stylesheet" href="css/nice-select.css" />
        <link rel="stylesheet" href="css/style.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
