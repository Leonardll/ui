import React, { forwardRef, Ref, RefAttributes } from "react";
import Footer from "../footer";
import { ThemeProvider } from "../themeProvider";
import Header from "../header";
import AnimatedCursor from "../animations/animated-cursor";
interface LayoutProps {
  children: React.ReactNode;
  active?: string;
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  ({ children, active }: LayoutProps, ref: Ref<HTMLDivElement>) => {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Header />
        <main ref={ref} className="flex w-full flex-1 flex-col justify-center px-4 md:px-6">
            <div className="w-full">
                {children}
            </div>
        </main>
        <Footer />
        <AnimatedCursor className ="hidden md:block" />
      </ThemeProvider>
    );
  }
);
Layout.displayName = "Layout";
export default Layout as <T>(
  props: LayoutProps & RefAttributes<T>
) => React.ReactElement | null;