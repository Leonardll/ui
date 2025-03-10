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
import { useEffect, useState } from "react";
import { Button } from "@/components/uiElemts/button";

interface StackItem {
  _id: string;
  id: string;
  name: string;
  url: string | null;
  description: string;
  category: string;
}

interface StackCategory {
  category: string;
  icon: React.ReactNode;
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

export default function Stack(props) {
  const { data } = props;
  const [stackData, setStackData] = useState<StackCategory[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (data && data.length > 0) {
      const formattedData: StackCategory[] = allCategories.map(
        (category) => ({
          category,
          icon: categoryIcons[category] || null,
          items: data.filter((item: StackItem) => item.category === category),
        })
      );

      setStackData(formattedData);

      const initialExpandedState: { [key: string]: boolean } = {};
      formattedData.forEach((cat) => {
        initialExpandedState[cat.category] = false;
      });
      setExpandedCategories(initialExpandedState);
    }
  }, [data]);

  const toggleCategoryExpansion = (category: string) => {
    setExpandedCategories((prevExpanded) => ({
      ...prevExpanded,
      [category]: !prevExpanded[category],
    }));
  };
  return (
    <section id="stack" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <FadeIn direction="up">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                My Stack
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Technologies I Use
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I leverage cutting-edge technologies to build robust and
                scalable applications.
              </p>
            </FadeIn>
          </div>
        </div>
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
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
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="h-full">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      {category.icon}
                      <CardTitle className="text-xl">
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      {displayedItems.map((item, itemIndex) => (
                        <motion.div
                          key={item._id}
                          className="grid gap-1"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex gap-2">
                            {item.url && (
                              <Image
                                src={item.url}
                                alt={item.name}
                                width={30}
                                height={30}
                                className="rounded-full"
                              />
                            )}
                            <div className="font-medium">{item.name}</div>
                          </div>

                          <CardDescription>
                            {item.description}
                          </CardDescription>
                        </motion.div>
                      ))}
                    </CardContent>
                    {category.items.length > 4 && (
                      <CardFooter className="pt-0">
                        <Button
                          size="sm"
                          onClick={() =>
                            toggleCategoryExpansion(category.category)
                          }
                        >
                          {isExpanded
                            ? "See Less"
                            : `See ${category.items.length - 4} More`}
                        </Button>
                      </CardFooter>
                    )}
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

