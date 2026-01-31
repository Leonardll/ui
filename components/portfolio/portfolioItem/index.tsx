"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/uiElemts/card";
import { Button } from "@/components/uiElemts/button";
import { Badge } from "@/components/uiElemts/badge"; // Import Badge
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/uiElemts/dialogu";
import { ExternalLink, Eye } from "lucide-react";
import type { PortfolioItem } from "@/types/portfolio";
import { motion } from "framer-motion";
import myImageLoader from "@/loader";

interface PortfolioItemProps {
  item: PortfolioItem;
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full"
      >
        <Card className="overflow-hidden group h-full flex flex-col">
          <div className="relative overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={item.imgSrc || item.ogImage || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-[200px] object-cover"
                loader={myImageLoader}
                priority={true}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="secondary"
                size="sm"
                className="mr-2"
                onClick={() => setOpen(true)}
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              {item.link && (
                <Button variant="secondary" size="sm" asChild>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit
                  </a>
                </Button>
              )}
            </motion.div>
          </div>
          <CardHeader className="p-4 pb-2 flex-grow">
            <CardTitle className="text-xl">{item.title}</CardTitle>
            <CardDescription>{item.shortDescription}</CardDescription>
          </CardHeader>
          {/* Pill Tags on Card */}
          <div className="flex flex-wrap gap-2 px-4 pb-4">
            {/*added padding and margin*/}
            {item.tags &&
              item.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
          </div>
        </Card>
      </motion.div>

      {/* Project Details Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{item.title}</DialogTitle>
            <DialogDescription>{item.category}</DialogDescription>
          </DialogHeader>
          <motion.div
            className="grid gap-4 py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={item.imgSrc || item.ogImage || "/placeholder.svg"}
              alt={item.title}
              width={1200}
              height={675}
              className="w-full rounded-lg object-cover aspect-video"
              loader={myImageLoader}
            />
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Project Overview</h3>
              <p className="text-muted-foreground">{item.description}</p>

              {item.features && item.features.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-bold">Features:</p>
                  <ul className="list-disc pl-4">
                    {item.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.tags && item.tags.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-bold">Tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-muted-foreground px-2 py-1 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
          {item.github && (
            <div className="flex justify-end pt-0">
              <Button asChild variant="outline">
                <motion.a
                  href={item.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </motion.a>
              </Button>
            </div>
          )}
          {item.link && (
            <div className="flex justify-end">
              <Button asChild>
                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Project
                </motion.a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
