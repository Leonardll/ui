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
  isError?: boolean;
}

export default function PortfolioGrid({ data, isError }: PortfolioGridProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <section className="w-full py-20 bg-background/50 backdrop-blur-sm">
      <div className="container px-4 md:px-6 mx-auto">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center h-64 space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-muted-foreground animate-pulse font-medium">Loading masterpieces...</p>
          </div>
        ) : isError ? (
          <div className="flex flex-col justify-center items-center h-64 text-center space-y-4 border-2 border-dashed border-destructive/30 rounded-2xl bg-destructive/5">
            <div className="bg-destructive/10 p-4 rounded-full">
              <span className="text-2xl">📡</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold tracking-tight text-destructive">Connection Interrupted</h3>
              <p className="text-muted-foreground max-w-[400px]">
                I&apos;m having trouble connecting to the showcase gallery.
                Please try refreshing the page in a moment.
              </p>
            </div>
          </div>
        ) : data && data.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <StaggerContainer
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              staggerChildren={0.1}
            >
              {data.map((item) => {
                const key =
                  typeof item._id === "object" ? item._id.toString() : item._id;

                return (
                  <StaggerItem key={key} className="h-full">
                    <PortfolioItemComponent item={item} />
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </motion.div>
        ) : (
          <div className="flex flex-col justify-center items-center h-64 text-center space-y-4 border-2 border-dashed border-border rounded-2xl bg-muted/30">
            <div className="bg-primary/10 p-4 rounded-full">
              <Loader2 className="h-8 w-8 text-primary/50" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold tracking-tight">Focusing the Lens</h3>
              <p className="text-muted-foreground max-w-[300px]">New projects are being prepared for showcase. Stay tuned!</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
