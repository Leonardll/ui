// /root/Projects/crelatorDesign/ui/pages/api/firebase/upload.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { uploadToFirebase, downloadUrl } from "@/lib/uploadFile";
import path from "path";
import fs from "fs/promises";
import { IncomingForm, Files } from "formidable"; // Import IncomingForm

// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Use path.resolve to create an absolute path
const uploadDir = path.resolve("./tmp");

// Helper function to ensure the directory exists
const mkdir = async () => {
  try {
    await fs.access(uploadDir);
  } catch (e) {
    await fs.mkdir(uploadDir, { recursive: true });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await mkdir();
      const form = new IncomingForm({
        uploadDir, // Use the absolute path here
        filename: (_name, _ext, part) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
          return `${part.name || "unknown"}-${uniqueSuffix}${path.extname(
            part.originalFilename || ""
          )}`;
        },
      });

      const { files } = await new Promise<{ files: Files }>(
        (resolve, reject) => {
          form.parse(req, (err, _, files) => {
            if (err) {
              reject(err);
            } else {
              resolve({ files });
            }
          });
        }
      );
      console.log("Files:", files);

      if (Object.keys(files).length === 0) {
        throw new Error("No file uploaded.");
      }

      const fileKey = Object.keys(files)[0];
      const file = Array.isArray(files[fileKey])
        ? files[fileKey][0]
        : files[fileKey]!;

      const name = file.originalFilename || "unknown";
      const type = file.mimetype || "unknown";

      const newFile: File = new File(
        [await fs.readFile(file.filepath)],
        name,
        { type: type }
      );

      await uploadToFirebase(newFile);
      const url = await downloadUrl();

      return res
        .status(200)
        .json({ url, message: "File uploaded successfully!" });
    } catch (error) {
      console.error("Error uploading file:", error);
      return res.status(500).json({ message: (error as Error).message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
