import cookie from "cookie"
import clientPromise from "../../lib/mongodb"
const mail = require("@sendgrid/mail")

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", req.body.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            expires: new Date(0),
            maxAge: 60 * 60,
            sameSite: "strict",
            path: "/",
        })
    )
    const body = JSON.parse(JSON.stringify(req.body))
    const message = `
  Name: ${body.data.Name}\r\n
  Email: ${body.data.Email}\r\n
  Phone:${body.data.Phone}
  Message: ${body.data.Message}\r\n
  createdAt: ${new Date(Date.now() * 1000).toString()}
  
`

    const data = {
        to: "convex@leonardlator.dev",
        from: "convex@leonardlator.dev",
        subject: `New message from ${body.data.Name} ${body.data.Phone}`,
        text: message,
        html: message.replace(/\r\n/g, "<br />"),
        createdAt: body.data.created,
    }

    try {
        const client = await clientPromise
        const db = client.db(process.env.NEXT_PUBLIC_MONGODB_DB)

        const collection = db.collection("messages")
        await collection.insertOne(body.data)
        console.log(data)
        await mail.send(data)
        res.status(200).json({ status: "OK" })
    } catch (error) {
        console.log("server error", error)
        if (error.response) {
            console.log(error.response.body)
            res.status(400).json({ status: "ERROR", message: error.message })
        }
    }
}
