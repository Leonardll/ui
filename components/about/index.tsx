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
    "Responsive design for all devices",
    "Modern, clean code architecture",
    "Performance optimized for speed",
  ];

  return (
    <section ref={ref} id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <FadeIn direction="up">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                I build beautiful digital experiences
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My skills combines creativity and technical expertise to deliver stunning websites and
                applications that drive results.
              </p>
            </FadeIn>
            <StaggerContainer delay={0.3} staggerChildren={0.1}>
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
            <FadeIn direction="up" delay={0.6}>
              <Button asChild>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  My Services
                </motion.a>
              </Button>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.4} className="mx-auto lg:order-last">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Avatar />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
});

export default About;
About.displayName = 'About'; 
