import "../styles/globals.css"
import Head from "next/head"
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
    return (
        <>
            <Head>
                <title>Leo&apos;s Digital Home</title>
                <meta
                    property="og:description"
                    name="description"
                    content="Leo Lator - Full Stack Developer | Building Web Applications and Innovative Solutions"
                />
                <meta property="og:title" name="title" content="Leo's Digital Home" />
                <meta
                    name="image"
                    property="og:image"
                    content="https://www.leonardlator.dev/api/og"
                />
                <meta name="author" content="Leonard Lator" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
            <Analytics />
        </>
    )
}

export default MyApp
