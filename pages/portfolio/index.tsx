

import Layout from "@/components/layout";
import PortfolioHeader from "@/components/portfolio/portfolioHeader";
import PortfolioGrid from "@/components/portfolio/portfolioGrid";
import { useRef } from "react";
import { GetStaticProps } from "next";
import { clientPromise } from "@/lib/mongodb";
import type { PortfolioItem } from "@/types/portfolio";



interface PortfolioPageProps {
  portfolioItems: PortfolioItem[];
  isError?: boolean;
}

export default function PortfolioPage({ portfolioItems, isError }: PortfolioPageProps) {
  const mainRef = useRef<HTMLDivElement>(null);

  if (!portfolioItems) return null; // Or a loading spinner if preferred

  return (
    <Layout ref={mainRef}>
      <PortfolioHeader />
      <PortfolioGrid data={portfolioItems} isError={isError} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PortfolioPageProps> = async () => {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const portfolioItems: PortfolioItem[] = await db
      .collection<PortfolioItem>("portfolio")
      .find({})
      .limit(30)
      .toArray();

    return {
      props: {
        portfolioItems: JSON.parse(JSON.stringify(portfolioItems)), // Serialize data
        isError: false,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (e: any) {
    console.error("Error fetching data in getStaticProps for PortfolioPage:", e);
    return {
      props: {
        portfolioItems: [],
        isError: true,
      },
    };
  }
};

