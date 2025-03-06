"use client"

import { Code2, Database, Layout, Palette, Settings2, Terminal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/uiElemts/card"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"
import { motion } from "framer-motion"

const stackData = [
  {
    category: "Frontend",
    icon: <Layout className="h-8 w-8 text-primary" />,
    items: [
      { name: "Next.js", description: "React framework for production" },
      { name: "React", description: "JavaScript library for user interfaces" },
      { name: "TypeScript", description: "Typed programming language" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" },
    ],
  },
  {
    category: "Backend",
    icon: <Database className="h-8 w-8 text-primary" />,
    items: [
      { name: "Node.js", description: "JavaScript runtime environment" },
      { name: "PostgreSQL", description: "Open source database" },
      { name: "Prisma", description: "Next-generation ORM" },
      { name: "tRPC", description: "End-to-end typesafe APIs" },
    ],
  },
  {
    category: "Development Tools",
    icon: <Terminal className="h-8 w-8 text-primary" />,
    items: [
      { name: "Git", description: "Version control system" },
      { name: "VS Code", description: "Code editor" },
      { name: "Docker", description: "Containerization platform" },
      { name: "GitHub Actions", description: "CI/CD automation" },
    ],
  },
  {
    category: "UI/UX",
    icon: <Palette className="h-8 w-8 text-primary" />,
    items: [
      { name: "Figma", description: "Design tool" },
      { name: "Framer Motion", description: "Animation library" },
      { name: "Radix UI", description: "Unstyled accessible components" },
      { name: "Shadcn/ui", description: "Re-usable components" },
    ],
  },
  {
    category: "Testing",
    icon: <Code2 className="h-8 w-8 text-primary" />,
    items: [
      { name: "Jest", description: "JavaScript testing framework" },
      { name: "Cypress", description: "End-to-end testing" },
      { name: "Playwright", description: "Browser automation" },
      { name: "Testing Library", description: "Testing utilities" },
    ],
  },
  {
    category: "DevOps",
    icon: <Settings2 className="h-8 w-8 text-primary" />,
    items: [
      { name: "Vercel", description: "Deployment platform" },
      { name: "AWS", description: "Cloud services" },
      { name: "Kubernetes", description: "Container orchestration" },
      { name: "Terraform", description: "Infrastructure as code" },
    ],
  },
]

export default function Stack(data) {
  console.log(data)
  return (
    <section id="stack" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <FadeIn direction="up">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Our Stack</div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technologies We Use</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We leverage cutting-edge technologies to build robust and scalable applications.
              </p>
            </FadeIn>
          </div>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" delay={0.3}>
          {stackData.map((category, index) => (
            <StaggerItem key={index}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    {category.icon}
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="grid gap-1"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="font-medium">{item.name}</div>
                        <CardDescription>{item.description}</CardDescription>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

