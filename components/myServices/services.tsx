"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/uiElemts/card";
import { Code, Layout, Globe, Link } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";
import StaggerContainer from "@/components/animations/stagger-container";
import StaggerItem from "@/components/animations/stagger-item";
import { motion } from "framer-motion";
import { forwardRef } from "react";

// Add forwardRef and specify the ref type
const Services = forwardRef<HTMLElement>((props, ref) => {
  const services = [
    {
      icon: <Layout className="h-8 w-8 text-primary" />,
      title: "Product Architecture",
      description: "Designing end-to-end systems for capital-heavy environments, focusing on scalability, security, and institutional performance.",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Advanced Development",
      description: "Building high-performance applications with Next.js, TypeScript, and robust backend engineering for seamless execution.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "FinTech Solutions",
      description: "Architecting trading journals, risk engines, and financial analytics tools that harmonize performance and psychology.",
    },
    {
      icon: <Link className="h-8 w-8 text-primary" />,
      title: "Web3 & DeFi Wizardry",
      description: "Bridging the gap between Web3 and Web2 with smart contract integration and decentralized protocol expertise.",
    },
  ];

  return (
    <section ref={ref} id="services" className="w-full py-24 bg-muted/50 transition-colors duration-500">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4">
            <FadeIn direction="up">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
                My Expertise
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-display">
                What I Bring to the Table
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
                I provide comprehensive digital solutions to help your business thrive in the digital landscape.
              </p>
            </FadeIn>
          </div>
        </div>
        <StaggerContainer
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          delay={0.3}
          staggerChildren={0.15}
        >
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="h-full"
              >
                <Card className="h-full glass-card hover:bg-card/80 transition-all border-white/10 flex flex-col">
                  <CardHeader className="flex flex-col gap-4 pb-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
);
Services.displayName = "Services";
export default Services;
