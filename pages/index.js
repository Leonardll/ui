import Head from "next/head"
import { useState } from "react"
import NavBar from "./components/navbar"
import MastHead from "./components/header"
import Footer from "./components/footer"
import StackSection from "./components/stackSection"
import About from "./components/about"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
// import clientPromise from "../lib/mongodb"

export default function Home({ data }) {
    const [stackdata, setStackdata] = useState(data)
    //console.log(stackdata)
    //isConnected = isConnected
    //? console.log("Connected to MongoDB", stackdata)
    //: console.log("Not Connected to MongoDB")
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
                <StackSection stackData={stackdata} />
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
        //const client = await clientPromise
        //const db = client.db("my_Database")

        //const collection = await db.collection("test").find({}).toArray()
        //const newCollection = await db.createCollection("test")
        //const data = await collection
        //console.log(db.collection("test"))
        //const newData = await db.collection("test").insertOne({ cardData })
        //
        // Then you can execute queries against your database like so:
        const res = await fetch("http://localhost:3000/api/hello")
        const data = await res.json()
        //console.log(data)
        //const stack = JSON.parse(JSON.stringify(data))
        if (data === null || data === undefined) {
            return {
                notFound: true,
            }
        }
        return {
            props: { data: data },
        }
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false },
        }
    }
}
