import Head from "next/head"
import NavBar from "../navbar"
import MastHead from "../header/"
import Footer from "../footer"
import myImageLoader from "../../loader"
import { forwardRef } from "react"
const Layout = forwardRef(({ children, active }, ref) => {
    return (
        <div className="flex flex-1 min-h-screen  flex-col items-center justify-center">
            <Head>
                <title>Full Stack Developer</title>
                <meta
                    name="description"
                    property="og:description"
                    content="Generated by create next app"
                />
                <meta name="title" property="og:title" content="Full Stack Developer" />
                <meta
                    name="image"
                    property="og:image"
                    content="https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Favatar.svg?alt=media&token=8e5d9915-c16e-42ee-8506-365ed98ce3b7"
                />
                <meta name="author" content="Leonard Lator" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar active={active} />
            <MastHead loader={myImageLoader} ref={ref} />
            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
                {children}
            </main>
            <Footer />
        </div>
    )
})

export default Layout
