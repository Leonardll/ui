import "../styles/globals.css"
import Head from "next/head"
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
    return (
        <>
            <Head>
                <title>Leonard Lator | Founder, Trader & Engineer</title>
                <meta
                    name="description"
                    content="Official portfolio of Leonard Lator. London-based Founder of TradeStrata, Institutional Trader, and Full Stack Engineer specializing in FinTech and Web3 solutions."
                />
                <meta property="og:title" content="Leonard Lator | Founder, Trader & Engineer" />
                <meta
                    property="og:description"
                    content="Official portfolio of Leonard Lator. London-based Founder of TradeStrata, Institutional Trader, and Full Stack Engineer specializing in FinTech and Web3 solutions."
                />
                <meta
                    property="og:image"
                    content="/og-image.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Leonard Lator | Founder, Trader & Engineer" />
                <meta name="twitter:description" content="Engineering the future of capital and code." />
                <meta name="twitter:image" content="/og-image.png" />
                <meta name="author" content="Leonard Lator" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <Component {...pageProps} />
            <Analytics />
        </>
    )
}

export default MyApp
