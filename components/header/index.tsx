"use client";

import { cn } from "@/lib/utils";
import { Link as LinkScroll, Events } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/uiElemts/dropdown-menu";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "../uiElemts/button";
import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
export default function Header() {
  const pathname = usePathname();
  // Normalize pathname to remove trailing slash if necessary.
  const normalizedPathname =
    pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isTopPage, setIsTopPage] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const routes = useMemo(() => [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#stack", label: "Stack" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ], []);

  useEffect(() => {
    setMounted(true);
    Events.scrollEvent.register("begin", function (to, element) { });
    Events.scrollEvent.register("end", function (to, element) {
      if (to) {
        setActiveSection(to);
      }
      const isTop = window.scrollY < 100;
      setIsTopPage(isTop);
    });
    const checkScrollPosition = () => {
      const isTop = window.scrollY < 100;
      setIsTopPage(isTop);
    };
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleRouteChange = () => {
      closeMobileMenu();
    };
    window.addEventListener("hashchange", handleRouteChange);
    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
    };
  }, [isMobileMenuOpen]);

  // IntersectionObserver for homepage sections
  useEffect(() => {
    if (normalizedPathname !== "/") return;

    const sectionIds = routes
      .filter((route) => route.href.startsWith("#"))
      .map((route) => route.href.substring(1));

    const observer = new IntersectionObserver(
      (entries) => {
        // Only update activeSection if not at the very top
        if (window.scrollY < 100) return;
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const bestEntry = visibleEntries.reduce((prev, current) =>
            prev.intersectionRatio > current.intersectionRatio ? prev : current
          );
          setActiveSection(bestEntry.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [normalizedPathname, routes]);

  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 glass border-b border-white/10">
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href="/" className="font-display font-bold text-2xl tracking-tight text-foreground uppercase">
            Leonard <span className="text-primary truncate">Lator</span>
          </Link>
        </motion.div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden ml-auto">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:ml-auto md:flex md:items-center md:space-x-6">
          {routes.map((route) => {
            // Only activate hash links when not at top.
            const isLinkScrollActive =
              route.href.startsWith("#") &&
              !isTopPage &&
              activeSection === route.href.substring(1);
            const isLinkActive =
              !route.href.startsWith("#") &&
              route.href !== "/" &&
              normalizedPathname === route.href;
            const isHomeActive =
              route.href === "/" && normalizedPathname === "/" && isTopPage;

            let isActive = isLinkScrollActive || isLinkActive || isHomeActive;

            return (
              <div key={route.label}>
                {route.href.startsWith("#") ? (
                  normalizedPathname === "/" ? (
                    <LinkScroll
                      to={route.href.substring(1)}
                      smooth={true}
                      offset={-100}
                      onClick={closeMobileMenu}
                      className={cn(
                        "relative transition-colors duration-300 hover:text-primary cursor-pointer",
                        isActive ? "text-primary" : "font-medium"
                      )}
                    >
                      {route.label}
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                          <span className="absolute -bottom-3.5 left-0 right-0 h-0.5  bg-primary" />
                        </motion.div>
                      )}
                    </LinkScroll>
                  ) : (
                    <Link
                      href={`/${route.href}`}
                      onClick={closeMobileMenu}
                      className={cn(
                        "relative  transition-colors duration-300 hover:text-primary",
                        isActive ? "text-primary" : "font-medium"
                      )}
                    >
                      {route.label}
                    </Link>
                  )
                ) : (
                  <Link
                    href={route.href}
                    onClick={() => {
                      closeMobileMenu();
                      if (route.href === "/") setActiveSection(null);
                    }}
                    className={cn(
                      "relative transition-colors duration-300 hover:text-primary",
                      isActive ? "text-primary" : "font-medium"
                    )}
                  >
                    {route.label}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <span className="absolute -bottom-3.5 left-0 right-0 h-0.5  bg-primary" />
                      </motion.div>
                    )}
                  </Link>
                )}
              </div>
            );
          })}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun
                  className={cn(
                    "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                    resolvedTheme === "dark" && "rotate-180 scale-0"
                  )}
                />
                <Moon
                  className={cn(
                    "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                    resolvedTheme === "dark" && "rotate-0 scale-100"
                  )}
                />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden fixed top-16 left-0 w-full h-screen bg-background z-40 transition-all duration-300",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-6 p-6">
            {routes.map((route) => {
              const isLinkScrollActive =
                route.href.startsWith("#") &&
                !isTopPage &&
                activeSection === route.href.substring(1);
              const isLinkActive =
                !route.href.startsWith("#") &&
                route.href !== "/" &&
                normalizedPathname === route.href;
              const isHomeActive =
                route.href === "/" && normalizedPathname === "/" && isTopPage;

              let isActive = isLinkScrollActive || isLinkActive || isHomeActive;

              return (
                <div key={route.label} className="relative">
                  {route.href.startsWith("#") ? (
                    normalizedPathname === "/" ? (
                      <LinkScroll
                        to={route.href.substring(1)}
                        smooth={true}
                        offset={-100}
                        onClick={closeMobileMenu}
                        className={cn(
                          "block  transition-colors duration-300  cursor-pointer",
                          isActive ? "text-primary" : "font-medium"
                        )}
                      >
                        {route.label}

                      </LinkScroll>
                    ) : (
                      <Link
                        href={`/${route.href}`}
                        onClick={closeMobileMenu}
                        className={cn(
                          "block w-full transition-colors duration-300",
                          isActive ? "text-primary" : "font-medium"
                        )}
                      >
                        {route.label}
                      </Link>
                    )
                  ) : (
                    <Link
                      href={route.href}
                      onClick={() => {
                        closeMobileMenu();
                        if (route.href === "/") setActiveSection(null);
                      }}
                      className={cn(
                        "block w-full  transition-colors duration-300 relative",
                        isActive ? "text-primary" : "font-medium"
                      )}
                    >
                      {route.label}

                    </Link>
                  )}
                </div>
              );
            })}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Sun
                    className={cn(
                      "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                      resolvedTheme === "dark" && "rotate-180 scale-0"
                    )}
                  />
                  <Moon
                    className={cn(
                      "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                      resolvedTheme === "dark" && "rotate-0 scale-100"
                    )}
                  />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  );
}
