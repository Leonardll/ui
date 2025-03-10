"use client";
import FadeIn from "@/components/animations/fade-in";

export default function PortfolioHeader() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <FadeIn direction="up">
          <div className="inline-block rounded-lg bg-background px-3 py-3 text-sm">Portfolio</div>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recent Projects</h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of our most recent projects, showcasing our expertise in web design and development.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
