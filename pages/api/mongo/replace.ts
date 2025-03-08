// /root/Projects/crelatorDesign/ui/pages/api/mongo/replace.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "@/lib/mongodb";
import { PortfolioItem } from "@/types/portfolio";
import { myportfolioItems } from "@/data/myporfolioData"; // Import your data
import { InsertManyResult, DeleteResult, Collection, Document } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string } | { message: string; error: string }>
) {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("my_Database");
      const collection: Collection<PortfolioItem> = db.collection<PortfolioItem>(
        "portfolio"
      );

      // Clear the existing collection
      const deleteResult: DeleteResult = await collection.deleteMany({});

      // Insert the new data
      const insertResult: InsertManyResult<PortfolioItem> =
        await collection.insertMany(myportfolioItems);

      if (insertResult.acknowledged) {
        res.status(200).json({
          message: `Database updated successfully! ${deleteResult.deletedCount} items deleted, ${insertResult.insertedCount} items inserted.`,
        });
      } else {
        throw new Error("Insertion was not acknowledged by the database.");
      }
    } catch (error) {
      console.error("Error updating the database:", error);
      res
        .status(500)
        .json({
          message: "Error updating the database",
          error: (error as Error).message,
        });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
