import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const { pathname } = Router;
        if (pathname === "/") {
            Router.push("/login");
        }
    });

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
