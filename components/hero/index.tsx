"use client"

import Link from "next/link"
import { Button } from "@/components/uiElemts/button"
import AnimatedText from "@/components/animations/animated-text"
import FadeIn from "@/components/animations/fade-in"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <FadeIn direction="up">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4 border border-primary/20">
                Founder, Engineer & Active Trader
              </span>
            </FadeIn>

            <AnimatedText
              text="Architecting the Future of Trading"
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground"
            />

            <FadeIn delay={0.4} direction="up">
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl leading-relaxed">
                Engineering institutional-grade
                <span className="text-foreground font-semibold"> FinTech, </span>
                <span className="text-foreground font-semibold"> Web3, </span>
                and high-performance
                <span className="text-foreground font-semibold"> Modern Apps </span>
                informed by a career in professional trading.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.6} direction="up">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-lg shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                <Link href="#contact">
                  Let&apos;s Build
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-8 h-12 text-lg glass transition-all hover:bg-background/80 hover:scale-105 active:scale-95">
                <Link href="#portfolio">
                  View Work
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}

