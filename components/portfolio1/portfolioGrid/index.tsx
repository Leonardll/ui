"use client";

import PortfolioItemComponent from "../portfolioItem";
import FadeIn from "@/components/animations/fade-in";
import StaggerContainer from "@/components/animations/stagger-container";
import StaggerItem from "@/components/animations/stagger-item";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { PortfolioItem, PortfolioItemWithId } from "@/types/portfolio"; // Import both types

interface PortfolioGridProps {
  data: PortfolioItem[];
}

export default function PortfolioGrid({ data }: PortfolioGridProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [data]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-10 w-10 animate-spin" />
          </div>
        ) : (
          <motion.div>
            <StaggerContainer
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              staggerChildren={0.1}
            >
              {data?.map((item) => {
                const key =
                  typeof item._id === "object" ? item._id.toString() : item._id;

                return (
                  <StaggerItem key={key}>
                    <PortfolioItemComponent item={item} />
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </motion.div>
        )}
      </div>
    </section>
  );
}
