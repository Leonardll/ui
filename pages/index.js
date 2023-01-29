import Head from "next/head"
import NavBar from "../components/navbar"
import MastHead from "../components/header"
import Footer from "../components/footer"
import StackSection from "../components/stackSection"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
// import clientPromise from "../lib/mongodb"
import myImageLoader from "../loader"
import useSWR from "swr"
import { use } from "react"
import Layout from "../components/layout"

const fetcher = async (url) => fetch(url).then((res) => res.json())
export default function Home() {
    const { data, error } = useSWR("/api/hello", fetcher)

    if (error) return <div>Loading...</div>
    if (!data) return null

    return (
        <Layout>
            <StackSection data={data} loader={myImageLoader} />
            <About />
            <Portfolio loader={myImageLoader} />
            <Contact />
        </Layout>
    )
}
