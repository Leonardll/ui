import type { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "@/lib/mongodb";

interface StackItem {
  name: string;
  description: string;
  url?: string;
  category: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const newItem: StackItem = req.body; // Get the new item data from the request body

        // API-Side Validation: Check if newItem.name is empty
      if (!newItem.name) {
        return res
          .status(400)
          .json({ message: "Item name is required." });
      }
        // API-Side Validation: Check if newItem.description is empty
      if (!newItem.description) {
        return res
          .status(400)
          .json({ message: "Item description is required." });
      }

        // API-Side Validation: Check if newItem.category is empty
      if (!newItem.category) {
        return res
          .status(400)
          .json({ message: "Item category is required." });
      }

      const client = await clientPromise;
      const db = client.db("my_Database");
      const collection = db.collection<StackItem>("test");

        // Check if the item already exists (by name )
      const existingItem = await collection.findOne({ name: newItem.name });
      if (existingItem) {
        return res
          .status(409)
          .json({ message: `Item with name ${newItem.name} already exists.` });
      }

      // Insert the new item
      const result = await collection.insertOne(newItem);

      return res.status(201).json({
        message: "Item added successfully!",
        insertedId: result.insertedId,
      });
    } catch (e) {
      res.status(500).json({ message: (e as Error).message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
