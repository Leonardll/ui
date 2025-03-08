import type { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "@/lib/mongodb";

interface StackItem {
  _id: string;
  title: string;
  url: string;
  description?: string;
  category?: string;
  name: string;
}

interface PortfolioItem {
  _id?: string;
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  github: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db("my_Database");
    const data: StackItem[] = await db.collection<StackItem>("test").find({}).limit(30).toArray();
    const data2: PortfolioItem[] = await db.collection<PortfolioItem>("portfolio").find({}).limit(30).toArray();
    return res.status(200).json({ data, data2 });
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}
