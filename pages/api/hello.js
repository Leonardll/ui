// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../../lib/mongodb"
export default async function handler(req, res) {
    try {
        const client = await clientPromise
        const db = client.db("my_Database")

        const collection = await db.collection("test")
        const collection2 = await db.collection("portfolio")
        const data = await collection.find({}).limit(20).toArray()
        const data2 = await collection2.find({}).limit(20).toArray()

        return res.status(200).json({ data, data2 })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
