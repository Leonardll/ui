// /root/Projects/crelatorDesign/ui/pages/api/mongo/update.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "@/lib/mongodb";
import fs from "fs/promises";
import path from "path";

interface StackItem {
    _id?: string; // Make _id optional for new items
    id: string;
    name: string;
    description: string;
    url?: string;
    category: string;
  }

interface UrlMap {
  [key: string]: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const client = await clientPromise;
    const db = client.db("my_Database");
    const collection = db.collection("test");
    if (req.method === "POST") {
        try {
        // Read the mapping from urls.json
        const currentDir = path.resolve("./public");
        const filePath = path.join(currentDir, "urls.json");
        const fileData = await fs.readFile(filePath, "utf-8");
        const urlMap: UrlMap = JSON.parse(fileData);

        // Read all documents from the collection
        const allItems = await collection.find({}).toArray();
        // Prepare bulk update operations
            const bulkOperations = allItems.flatMap((item) => {
                //correct the item id if needed
                let itemId = item.id
                if(item.id === "framer-motion"){
                    itemId = "framer"
                }
                if (Object.keys(urlMap).includes(itemId)) {
                return {
                    updateOne: {
                    filter: { _id: item._id }, // Find by _id
                    update: { $set: { url: urlMap[itemId] } }, // Update url
                    },
                };
                } else {
                    return [];
                }
            });

        // Execute bulk update
        if (bulkOperations.length > 0) {
            await collection.bulkWrite(bulkOperations);
        }

        return res.status(200).json({ message: "Data updated successfully!" });
        } catch (e) {
        res.status(500).json({ message: (e as Error).message });
        }
    }else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
