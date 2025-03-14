"use client"

import Link from "next/link"
import { Button } from "@/components/uiElemts/button"
import AnimatedText from "@/components/animations/animated-text"
import FadeIn from "@/components/animations/fade-in"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <AnimatedText
              text="Leo's Digital Home"
              className="text-3xl font-bold  sm:text-4xl md:text-5xl lg:text-6xl/none"
            />
            <FadeIn delay={0.5} direction="up">
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Full Stack Developer with expertise in blockchain, contract integration, music rights analyst, and trading.              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.8} direction="up">
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Get Started
                  </motion.span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#about">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Learn More
                  </motion.span>
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

