import Head from "next/head"
import { useState } from "react"
import NavBar from "./components/navbar"
import MastHead from "./components/header"
import Footer from "./components/footer"
import Stack from "./components/stackSection"
import About from "./components/about"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import clientPromise from "../lib/mongodb"
import dynamic from "next/dynamic"

export default function Home({ isConnected, stack }) {
    const [stackdata, setStackdata] = useState(stack)
    const DynamicStack = dynamic(() => import("./components/stackSection"), {
        stackData: stackdata,
    })

    isConnected = isConnected
        ? console.log("Connected to MongoDB")
        : console.log("Not Connected to MongoDB")
    return (
        <div className="flex flex-1 min-h-screen  flex-col items-center justify-center scroll-smooth">
            <Head>
                <title>Create Next App</title>
                <meta name="CreLatorDesign" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <MastHead />

            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
                {/* <Stack stackData={stack} /> */}
                <DynamicStack stackData={stack} />
                <About />
                <Portfolio />
                <Contact />
            </main>

            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    try {
        // await clientPromise
        // `await clientPromise` will use the default database passed in the MONGODB_URI
        // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
        //
        const client = await clientPromise
        const db = client.db("my_Database")

        const collection = await db.collection("test").find({}).toArray()
        //const newCollection = await db.createCollection("test")
        const data = await collection
        //console.log(db.collection("test"))
        //const newData = await db.collection("test").insertOne({ cardData })
        //
        // Then you can execute queries against your database like so:

        const stack = JSON.parse(JSON.stringify(data))

        return {
            props: { isConnected: true, stack: stack },
        }
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false },
        }
    }
}
