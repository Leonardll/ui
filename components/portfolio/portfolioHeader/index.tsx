"use client";
import FadeIn from "@/components/animations/fade-in";

export default function PortfolioHeader() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 px-4">
      <div className="space-y-4">
        <FadeIn direction="up">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
            The Journey
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display text-foreground">
            Progression & Interests
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl leading-relaxed">
            A non-linear display of the experiments, projects, and deep-dives that shaped my career.
            From early code explorations to institutional fintech—this isn&apos;t about perfection, but the
            progression of interests that lead to today.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
