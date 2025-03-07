import type { NextApiRequest, NextApiResponse } from "next";
import {
  getStorage,
  ref,
  getDownloadURL,
  listAll,
  FirebaseStorage,
  StorageReference,
} from "firebase/storage";
import { app } from "@/firebaseConfig";
import fs from "fs/promises";
import path from "path";

interface StackItem {
  id: string;
  title: string;
}

// Initialize storage with app
const storage: FirebaseStorage = getStorage(app);

const myStack: StackItem[] = [
  { id: "next", title: "Next.js" },
  { id: "js", title: "JavaScript" },
  { id: "react", title: "React" },
  { id: "typescript", title: "TypeScript" },
  { id: "hardhat", title: "Hardhat" },
  { id: "mongo", title: "MongoDB" },
  { id: "moralis", title: "Moralis" },
  { id: "html", title: "HTML" },
  { id: "css", title: "CSS" },
  { id: "node", title: "Node.js" },
  { id: "firebase", title: "Firebase" },
  { id: "bootstrap", title: "Bootstrap" },
  { id: "tailwind", title: "Tailwind CSS" },
  { id: "solidity", title: "Solidity" },
  { id: "docker", title: "Docker" },
  { id: "git", title: "Git" },
  { id: "vscode", title: "VS Code" },
  { id: "figma", title: "Figma" },
  { id: "web3uikit", title: "Web3uiKit" },
  { id: "framer", title: "Framer Motion" },
  { id: "web3js", title: "Web3.js" },
  { id: "vercel", title: "Vercel" },
  { id: "github-actions", title: "Github actions" },
  { id: "aws", title: "aws" },
  { id: "fleek", title: "Fleek" },
  { id: "jest", title: "Jest" },
  { id: "python", title: "Python" },
  { id: "scaffold-eth", title: "Scaffold-ETH" },
  { id: "web3-scaffold", title: "Web3 Scaffold" },
  { id: "postman", title: "Postman" },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Get all image URLs from Firebase Storage
      const storageRef: StorageReference = ref(storage, "images/");
      const resList = await listAll(storageRef);

      const urlsPromises = resList.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return { name: itemRef.name, url };
      });

      const allImages = await Promise.all(urlsPromises);

      // Create a mapping object
      const urlMap: { [key: string]: string } = {};
      myStack.forEach((item) => {
        const matchingImage = allImages.find((image) => {
          // Remove file extension and convert to lowercase for comparison
          const imageName = image.name
            .split(".")
            .slice(0, -1)
            .join(".")
            .toLowerCase();
          const itemId = item.id.toLowerCase();

          // Check for exact or partial match
          if (imageName === itemId) return true;
           if (imageName.includes(itemId)) {
              const itemIdIndex = imageName.indexOf(itemId);

               //check if the index is at the beginning
              const beforeChar = itemIdIndex === 0 ? "" : imageName[itemIdIndex - 1];

              //check if the index is at the end
               const afterChar = itemIdIndex + itemId.length === imageName.length ? "" : imageName[itemIdIndex + itemId.length]

               return (beforeChar === "" || beforeChar === "-") && (afterChar === "" || afterChar === "-");
          }

            return false;
        });
        if (matchingImage) {
          urlMap[item.id] = matchingImage.url;
        }
      });
      console.log("urlMap:", urlMap);
      // Get the directory of the current file (uploadFile.ts)
      const currentDir = path.resolve("./public");

      // Construct the path to the data.json file in the same directory
      const filePath = path.join(currentDir, "urls.json");

      // Write the mapping to a JSON file
      const jsonData = JSON.stringify(urlMap, null, 2);
      await fs.writeFile(filePath, jsonData);

      console.log(`Firebase Storage URLs written to: ${filePath}`);

      return res
        .status(200)
        .json({ message: "Firebase Storage URLs written to file successfully." });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: (error as Error).message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
