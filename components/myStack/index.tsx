"use client";

import { Code2, Database, Layout, Palette, Settings2, Terminal } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/uiElemts/card";
import FadeIn from "@/components/animations/fade-in";
import StaggerContainer from "@/components/animations/stagger-container";
import StaggerItem from "@/components/animations/stagger-item";
import { motion } from "framer-motion";
import Image from "next/image";
import { forwardRef, useEffect, useState } from "react";
import { Button } from "@/components/uiElemts/button";

interface StackItem {
  _id?: string;
  id?: string;
  name: string;
  url: string | null;
  description: string;
  category: string;
}

interface StackCategory {
  category: string;
  icon: any; // Using any to avoid complex ReactNode vs JSX.Element conflicts in filter
  items: StackItem[];
}

// Define a map for the icons based on category
const categoryIcons: { [key: string]: React.ReactNode } = {
  Frontend: <Layout className="h-8 w-8 text-primary" />,
  Backend: <Database className="h-8 w-8 text-primary" />,
  "Development Tools": <Terminal className="h-8 w-8 text-primary" />,
  "UI/UX": <Palette className="h-8 w-8 text-primary" />,
  Testing: <Code2 className="h-8 w-8 text-primary" />,
  DevOps: <Settings2 className="h-8 w-8 text-primary" />,
};

const allCategories = [
  "Frontend",
  "Backend",
  "Development Tools",
  "UI/UX",
  "Testing",
  "DevOps"
];

const Stack = forwardRef<HTMLElement, { data: StackItem[], isError?: boolean }>((props, ref) => {
  const { data, isError } = props;
  const [stackData, setStackData] = useState<StackCategory[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (data && data.length > 0) {
      // Dynamically get all unique categories from data
      const dynamicCategories = Array.from(new Set(data.filter(item => item.category).map(item => item.category as string)));

      // Merge with predefined categories to maintain order if they exist
      const displayCategories = Array.from(new Set([...allCategories, ...dynamicCategories]));

      const formattedData: StackCategory[] = displayCategories
        .map((category) => {
          const items = data.filter((item: StackItem) => item.category === category);
          if (items.length === 0 && !allCategories.includes(category)) return null;

          return {
            category,
            icon: categoryIcons[category] || <Code2 className="h-8 w-8 text-primary" />,
            items: items,
          };
        })
        .filter((cat): cat is StackCategory => {
          return cat !== null && (cat.items.length > 0 || allCategories.includes(cat.category));
        });

      setStackData(formattedData);

      const initialExpandedState: { [key: string]: boolean } = {};
      formattedData.forEach((cat) => {
        initialExpandedState[cat.category] = false;
      });
      setExpandedCategories(initialExpandedState);
    } else if (data) {
      // Handle case where data is an empty array
      setStackData([]);
    }
  }, [data]);

  const toggleCategoryExpansion = (category: string) => {
    setExpandedCategories((prevExpanded) => ({
      ...prevExpanded,
      [category]: !prevExpanded[category],
    }));
  };
  return (
    <section id="stack" ref={ref} className="w-full py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4">
            <FadeIn direction="up">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
                Technical Arsenal
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-display text-foreground">
                Technologies I Use
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
                I leverage cutting-edge technologies to build robust and
                scalable applications.
              </p>
            </FadeIn>
          </div>
        </div>
        {isError ? (
          <div className="flex flex-col items-center justify-center py-12 px-6 rounded-3xl border-2 border-dashed border-destructive/30 bg-destructive/5">
            <div className="bg-destructive/10 p-4 rounded-full mb-4">
              <Terminal className="h-8 w-8 text-destructive/60" />
            </div>
            <h3 className="text-xl font-bold font-display mb-2 text-destructive">Arsenal Connectivity Offline</h3>
            <p className="text-muted-foreground max-w-sm text-center">I&apos;m unable to retrieve the technical breakdown from the database. Please verify the connection or try again later.</p>
          </div>
        ) : stackData.length > 0 ? (
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            delay={0.3}
          >
            {stackData.map((category, index) => {
              const isExpanded = expandedCategories[category.category] || false;
              const displayedItems = isExpanded
                ? category.items
                : category.items.slice(0, 4);
              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="h-full"
                  >
                    <Card className="h-full glass-card hover:bg-card/70 transition-all border-white/10">
                      <CardHeader className="flex flex-row items-center gap-4 pb-4">
                        <div className="bg-primary/10 p-2 rounded-xl border border-primary/20">
                          {category.icon}
                        </div>
                        <CardTitle className="text-2xl font-display">
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-6">
                        {displayedItems.length > 0 ? displayedItems.map((item, itemIndex) => (
                          <motion.div
                            key={item._id}
                            className="flex items-center gap-4 group"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <div className="relative w-10 h-10 flex-shrink-0 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 overflow-hidden group-hover:scale-110 transition-transform">
                              {item.url ? (
                                <Image
                                  src={item.url}
                                  alt={item.name}
                                  width={24}
                                  height={24}
                                  className="object-contain"
                                />
                              ) : (
                                <Code2 className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="flex flex-col">
                              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</span>
                              <span className="text-xs text-muted-foreground line-clamp-1">{item.description}</span>
                            </div>
                          </motion.div>
                        )) : (
                          <p className="text-sm text-muted-foreground italic">Coming soon to the stack...</p>
                        )}
                      </CardContent>
                      {category.items.length > 4 && (
                        <CardFooter className="pt-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full hover:bg-primary/10 hover:text-primary rounded-xl"
                            onClick={() =>
                              toggleCategoryExpansion(category.category)
                            }
                          >
                            {isExpanded
                              ? "See Less"
                              : `Show ${category.items.length - 4} more`}
                          </Button>
                        </CardFooter>
                      )}
                    </Card>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 px-6 rounded-3xl border-2 border-dashed border-border/50 bg-muted/20">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Terminal className="h-8 w-8 text-primary/60" />
            </div>
            <h3 className="text-xl font-bold font-display mb-2">Expanding the Arsenal</h3>
            <p className="text-muted-foreground max-w-sm">The technology list is being updated. Check back soon for the full technical breakdown.</p>
          </div>
        )}
      </div>
    </section>
  );
});

export default Stack;

