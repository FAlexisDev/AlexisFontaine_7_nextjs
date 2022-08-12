import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Groupomania</title>
                <meta name="description" content="Réseau social privé et interne de l'entreprise groupomania" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
