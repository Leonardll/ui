import type { NextApiRequest, NextApiResponse } from "next";
import { clientPromise } from "@/lib/mongodb";

interface StackItem {
  id: string; // id is the first item now
  name: string;
  description: string;
  url?: string; // url is optional
  category: string; // category is required
}

interface StackCategory {
  category: string;
  items: StackItem[];
}

const stackData: StackCategory[] = [
  {
    category: "Frontend",
    items: [
      {
        id: "next",
        name: "Next.js",
        description: "React framework for production",
        category: "Frontend"
      },
      {
        id: "react",
        name: "React",
        description: "JavaScript library for user interfaces",
        category: "Frontend"
      },
      {
        id: "typescript",
        name: "TypeScript",
        description: "Typed programming language",
        category: "Frontend"
      },
      {
        id: "scaffold-eth",
        name: "Scaffold-ETH",
        description: "A full stack dapp starter kit",
        category: "Frontend"
      },
      {
        id: "web3-scaffold",
        name: "Web3 Scaffold",
        description: "A full stack dapp starter kit",
        category: "Frontend"
      },
    ],
  },
  {
    category: "Backend",

    items: [
      {
        id: "node",
        name: "Node.js",
        description: "JavaScript runtime environment",
        category: "Backend"
      },
      { id: "mongo", name: "MongoDB", description: "Open source database", category: "Backend" },
      { id: "python", name: "Python", description: "General-purpose programming language", category: "Backend" },
      {
        id: "solidity",
        
        
        
        name: "Solidity",
        description: "Smart contract development",
        category: "Backend"
      },
      {
        id: "hardhat",
        name: "Hardhat",
        description: "Smart contract development",
        category: "Backend"
      },
      {
        id: "web3js",
        name: "Web3.js",
        description: "Ethereum JavaScript API",
        category: "Backend"
      },
    ],
  },
    {
    category: "Development Tools",
    items: [
      { id: "git", name: "Git", description: "Version control system", category: "Development Tools" },
      { id: "vscode", name: "VS Code", description: "Code editor", category: "Development Tools" },
      { id: "docker", name: "Docker", description: "Containerization platform", category: "Development Tools" },
      {
        id: "github-actions",
        name: "GitHub Actions",
        description: "CI/CD automation",
        category: "Development Tools"

      },
    ],
  },
  {
    category: "UI/UX",
    items: [
      { id: "figma", name: "Figma", description: "Design tool", category: "UI/UX"},
      {
        id: "framer-motion",
        
        name: "Framer Motion",        
        category: "UI/UX",
        description: "Animation library",
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        category: "UI/UX",
        description: "Utility-first CSS framework",
      },
      {
        id: "web3uikit",
        name: "Web3uiKit",
        category: "UI/UX",
        description: "lightweight UI components for web3",
      },
      {
        id: "shadcn",
        name: "Shadcn/ui",
        category: "UI/UX",        
        description: "Re-usable components",
      },
    ],
  },
    {
      category: "Testing",
      items: [{ id: "jest", name: "Jest", description: "JavaScript testing framework", category: "Testing" }],
    },
    {
      category: "DevOps",
      items: [
      { id: "vercel", name: "Vercel", description: "Deployment platform", category: "DevOps" },
      { id: "aws", name: "AWS", description: "Cloud services", category: "DevOps" },
      { category: "DevOps",
        id: "fleek",
        name: "Fleek",
        description: "Deployment platform for web3",
      },
    ],
  },
];

const myStack = [
  {
    id: "next",
    title: "Next.js",
    url: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fnext.svg?alt=media&token=6869b93d-2411-4399-990e-6338e9c8ab39",
  },
  {
    id: "js",
    title: "JavaScript",
    url: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fjs.svg?alt=media&token=9991bb62-abad-4b7c-930b-7bc836da5daf",
  },
  {
    id: "hardhat",
    title: "Hardhat",
    url: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fhardhat.svg?alt=media&token=0621eaf4-8919-47aa-ae4c-91bbb95d8df5",
  },
  {
    id: "mongo",
    title: "MongoDB",
    url: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fmongo.svg?alt=media&token=1b9b994d-8591-412a-8fc7-d658a1a21a54",
  },
  {
    id: "moralis",
    title: "Moralis",
    url: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fmoralis1.svg?alt=media&token=16f1f706-f863-4334-8e12-2a2242f1bef3",
  },
  {
    id: "html",
    title: "HTML",
    url: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fhtml.svg?alt=media&token=3a503f07-1f6f-4527-9bc6-be4d56279c9d",
  },
  {
    id: "css",
    title: "CSS",
    url: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2FCSS3.svg?alt=media&token=da685e1d-4865-430c-96b7-61ad3725e4b2",
  },
  {
    id: "node",
    title: "Node.js",
    url: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fnode.svg?alt=media&token=9b0d834b-7542-43ea-96e2-d2aff02fcabd",
  },
  {
    id: "firebase",
    title: "Firebase",
    url: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Ffirebase.svg?alt=media&token=04bc1ce8-2ee7-4475-a291-558eb59d017c",
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    url: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fbootstrap.svg?alt=media&token=2ab4dbcd-3904-44a5-a516-c5317860021f",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    url: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Ftailwind.svg?alt=media&token=e4e3ba78-e7f4-4b17-87b6-b65867023f35",
  },
  {
    id: "solidity",
    title: "Solidity",
    url: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fsolidity.svg?alt=media&token=38be89ea-aab1-477c-a7b8-13a82682b346",
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("my_Database");
      const collection = db.collection("test");

      await collection.deleteMany({}); // Empty the collection

      const updatedData: StackItem[] = [];

      // Iterate through every item in stackData and add or update accordingly
      for (const category of stackData) {
        for (const item of category.items) {
          // Try to find a matching item in myStack (by id)
          const foundItemInMyStack = myStack.find(
            (dbItem) => dbItem.id === item.id
          );

          if (foundItemInMyStack) {
            // If a match is found, use the URL from myStack and add description and category
            updatedData.push({
              id: foundItemInMyStack.id,
              name: foundItemInMyStack.title, // change title to name to match structure.
              url: foundItemInMyStack.url,
              description: item.description,
              category: item.category, // <-- ADDED THIS HERE
            });
          } else {
            // If no match is found in myStack, it's a new item. Add it with the data from stackData.
            updatedData.push({
              id: item.id, // use id from stackData
              name: item.name, // use name from stackData
              description: item.description, //use description from stackData

              category: category.category, // use category from stackData
              url: undefined // Add `url: undefined` here (or `url: null` or `url:""`)
            });
          }
        }
      }

      await collection.insertMany(updatedData); // Insert all items (new and updated)

      return res.status(200).json({ message: "Data updated successfully!" });
    } catch (e) {
      res.status(500).json({ message: (e as Error).message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

