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
      title: "Web Design",
      description: "Beautiful, responsive websites that engage your audience and represent your brand effectively.",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance and scalability.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "SEO Optimization",
      description: "Optimizing your website to rank higher on search engines and drive organic traffic to your site.",
    },
    {
      icon: <Link className="h-8 w-8 text-primary" />,
      title: "Smart Contract Integration",
      description: "Making the brigde between web3 and web2, I can help you integrate smart contracts into your applications.",
    },
  ];

  return (
    <section ref={ref} id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <FadeIn direction="up">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">My Services</div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What I Bring</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I provide comprehensive digital solutions to help your business thrive in the digital landscape.
              </p>
            </FadeIn>
          </div>
        </div>
        <StaggerContainer
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12"
          delay={0.3}
          staggerChildren={0.15}
        >
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
});

export default Services;
