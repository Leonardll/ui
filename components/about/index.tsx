"use client";

import Image from "next/image";
import { Button } from "@/components/uiElemts/button";
import { CheckCircle } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";
import StaggerContainer from "@/components/animations/stagger-container";
import StaggerItem from "@/components/animations/stagger-item";
import { motion } from "framer-motion";
import { forwardRef, Ref } from "react";

function Avatar() {
  return (
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Favatar.svg?alt=media&token=8e5d9915-c16e-42ee-8506-365ed98ce3b7"
      alt="avatar"
      width={450}
      height={450}
      className="rounded-full mb-5 w-60"
      priority={true}
      placeholder="blur"
      blurDataURL="https://picsum.photos/id/870/200/300?grayscale&blur=2"
    />
  );
}

// Add forwardRef and specify the ref type
const About = forwardRef<HTMLElement>((props, ref) => {
  const features = [
    "Institutional-Grade Fintech Tools",
    "Active Futures & Crypto Trader",
    "Web3 & Smart Contract Wizardry",
    "Music Rights & Licensing Expert",
  ];

  return (
    <section ref={ref} id="about" className="w-full py-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <FadeIn direction="up">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
                  Behind the Code
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.1}>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-display text-foreground">
                  Fusing Finance, Code, and Strategy
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-muted-foreground md:text-xl leading-relaxed">
                  I operate at the intersection of capital markets and high-performance engineering. My journey is rooted in
                  <span className="text-foreground font-semibold"> Futures and Crypto trading</span>, specifically focusing on Prop Firm environments and technical analysis.
                  This dual lens allows me to build tools like <span className="text-foreground font-semibold"> TradeStrata </span>
                  that solve real problems for serious traders.
                </p>
              </FadeIn>
            </div>

            <StaggerContainer delay={0.3} staggerChildren={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-3 bg-muted/30 p-4 rounded-2xl border border-border/50 transition-colors hover:bg-muted/50">
                      <div className="bg-primary/10 p-1 rounded-full">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground/80">{feature}</span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <FadeIn direction="up" delay={0.6}>
              <div className="flex gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <motion.a
                    href="#services"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    My Services
                  </motion.a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 glass border-primary/20" asChild>
                  <motion.a
                    href="https://www.linkedin.com/in/leonardlator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    LinkedIn
                  </motion.a>
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.4} className="order-1 lg:order-2 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-2"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative glass p-1 rounded-full border-2 border-primary/30 shadow-2xl">
                <Avatar />
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
);

export default About;
About.displayName = 'About'; 
