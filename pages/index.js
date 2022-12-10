import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import NavBar from "./components/navbar"
import { AiFillStar } from "react-icons/ai"
import MastHead from "./components/header"
import Footer from "./components/footer"
import Stack from "./components/stackSection"
import About from "./components/about"

export default function Home() {
    return (
        <div className="flex flex-1 min-h-screen flex-col items-center justify-center scroll-smooth">
            <Head>
                <title>Create Next App</title>
                <meta name="CreLatorDesign" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <MastHead />

            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
                <Stack />
                <About />
            </main>

            <Footer />
        </div>
    )
}
