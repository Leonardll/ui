// /root/Projects/crelatorDesign/ui/pages/api/mongo/insert.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "@/lib/mongodb";
import { PortfolioItem, PortfolioItemWithId } from "@/types/portfolio"; // Import both types
import { InsertOneResult, UpdateResult, ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; insertedId?: string } | { message: string }>
) {
  if (req.method === "POST") {
    try {
      const newItem: PortfolioItem = req.body;

      // API-Side Validation: Check if newItem.title is empty
      if (!newItem.title) {
        return res.status(400).json({ message: "Item title is required." });
      }
      if (!newItem.description) {
        return res.status(400).json({ message: "Item description is required." });
      }
      if (!newItem.category) {
        return res.status(400).json({ message: "Item category is required." });
      }

      const client = await clientPromise;
      const db = client.db("my_Database");
      const collection = db.collection<PortfolioItem>("portfolio");

      // Check if the item already exists (by title )
      const existingItem = await collection.findOne({ title: newItem.title });

      if (existingItem) {
        // Update the existing item
         // Remove _id from newItem to avoid trying to modify it
        const itemToUpdate: Partial<PortfolioItem> = { ...newItem };
        delete itemToUpdate._id;

        const result: UpdateResult = await collection.updateOne(
          { title: newItem.title },
          { $set: itemToUpdate }
        );

        if (result.modifiedCount > 0) {
          return res
            .status(200)
            .json({ message: `Item with title ${newItem.title} updated successfully.` });
        } else {
          return res.status(200).json({ message: `No item modified` });
        }
      }

      // Insert the new item
      const result: InsertOneResult<PortfolioItem> = await collection.insertOne(newItem);

      return res.status(201).json({
        message: "Item added successfully!",
        insertedId: result.insertedId.toString(),
      });
    } catch (e) {
      res.status(500).json({ message: (e as Error).message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
