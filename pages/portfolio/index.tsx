

import Layout from "@/components/layout";
import PortfolioHeader from "@/components/portfolio/portfolioHeader";
import PortfolioGrid from "@/components/portfolio/portfolioGrid";
import { useRef } from "react";
import { GetStaticProps } from "next";
import { clientPromise } from "@/lib/mongodb";
import type { PortfolioItem } from "@/types/portfolio";

export const metadata = {
  title: "Portfolio - Modern Website Template",
  description: "Explore our portfolio of projects and case studies",
};

interface PortfolioPageProps {
  portfolioItems: PortfolioItem[];
}

export default function PortfolioPage({ portfolioItems }: PortfolioPageProps) {
  const mainRef = useRef<HTMLDivElement>(null);

  if (!portfolioItems) return null; // Or a loading spinner if preferred

  return (
    <Layout ref={mainRef}>
      <PortfolioHeader />
      <PortfolioGrid data={portfolioItems} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PortfolioPageProps> = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("my_Database");
    const portfolioItems: PortfolioItem[] = await db
      .collection<PortfolioItem>("portfolio")
      .find({})
      .limit(30)
      .toArray();

    return {
      props: {
        portfolioItems: JSON.parse(JSON.stringify(portfolioItems)), // Serialize data
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (e: any) {
    console.error("Error fetching data in getStaticProps for PortfolioPage:", e);
    return {
      props: {
        portfolioItems: [],
      },
    };
  }
};

