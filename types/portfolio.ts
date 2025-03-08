import { ObjectId } from "mongodb";

export interface PortfolioItem {
  _id?: string | ObjectId; // Allow _id to be a string (client-side) or ObjectId (database-side)
  imgSrc: string;
  title: string;
  description: string;
  link?: string;
  github?: string;
  shortDescription: string;
  category: string;
  tags: string[]; // Keep as string[]
  features: string[]; // Keep as string[]
}

export type PortfolioItemWithId = PortfolioItem & { _id: ObjectId };
