import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { clientPromise } from "@/lib/mongodb";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY || "");

interface ContactData {
  Name: string;
  Email: string;
  Phone: string;
  Message: string;
  created: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
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
      );
      const body = JSON.parse(JSON.stringify(req.body));
      const data: ContactData = body.data;
      const message = `
        Name: ${data.Name}\r\n
        Email: ${data.Email}\r\n
        Phone:${data.Phone}
        Message: ${data.Message}\r\n
        createdAt: ${new Date(Date.now()).toString()}
      `;

      const mailData = {
        to: "convex@leonardlator.dev",
        from: "convex@leonardlator.dev",
        subject: `New message from ${data.Name} ${data.Phone}`,
        text: message,
        html: message.replace(/\r\n/g, "<br />"),
        createdAt: data.created,
      };

      const client = await clientPromise;
      const db = client.db(process.env.NEXT_PUBLIC_MONGODB_DB);
      const collection = db.collection("messages");
      await collection.insertOne(data);
      await sendgrid.send(mailData);
      res.status(200).json({ status: "OK" });
    } catch (error: any) {
      console.error("server error", error);
      res.status(400).json({ status: "ERROR", message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
