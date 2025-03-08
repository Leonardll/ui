"use client";

import Layout from "@/components/layout";
import PortfolioHeader from "@/components/portfolio1/portfolioHeader";
import PortfolioGrid from "@/components/portfolio1/portfolioGrid";
import useSWR from "swr";
import { useRef, RefObject } from "react";

export const metadata = {
  title: "Portfolio - Modern Website Template",
  description: "Explore our portfolio of projects and case studies",
};

interface PortfolioItem {
  _id: string;
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  github: string;
}

interface DataResponse {
    data: any;
    data2: PortfolioItem[];
}

const fetcher = async (url: string) => fetch(url).then((res) => res.json());

export default function PortfolioPage() {
  const { data, error } = useSWR<DataResponse>("/api/hello", fetcher);
  const mainRef = useRef<HTMLDivElement>(null);

  if (error) return <div>Failed to load</div>;
  if (!data) return null;
  return (
    <Layout ref={mainRef}>
        <PortfolioHeader />
        <PortfolioGrid data={data.data2} />
    </Layout>
  );
}
