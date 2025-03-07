import React, { forwardRef, Ref, RefAttributes } from "react"
import Footer from "../footer"
import { ThemeProvider } from "../themeProvider"
import Header from "../header"
import AnimatedCursor from "../animations/animated-cursor"
//import Hero from "@/components/hero"
interface LayoutProps {
  children: React.ReactNode
  active?: string
}

const Layout = forwardRef(
  ( { children, active }: LayoutProps, ref: Ref<HTMLDivElement>) => {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Header />
        {/* <NavBar active={active} /> */}
        {/* <MastHead loader={myImageLoader} ref={ref} />  */}
        <main className="flex w-full  flex-1 flex-col  justify-center px-4 md:px6">
          {children}
        </main>
        <Footer />
        <AnimatedCursor />
      </ThemeProvider>
    )
  }
)

export default Layout as <T>(props: LayoutProps  & RefAttributes<T>) => React.ReactElement | null;
