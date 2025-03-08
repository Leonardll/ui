"use client";

import { cn } from "@/lib/utils";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/uiElemts/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { Button } from "../uiElemts/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const routes = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#stack", label: "Stack" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed top-0 w-full h-16 z-50 border-b bg-background/95 backdrop-blur-sm">
      <nav className="container flex items-center h-full px-4 md:px-6">
        <Link href="/" className="font-bold text-2xl">
          Full Stack Developer
        </Link>
        <div className="ml-auto flex items-center space-x-6">
          {routes.map((route) => {
            const isActive =
              pathname === route.href ||
              (pathname === "/" && route.href === "#about");
            return route.href.startsWith("#") ? (
              <LinkScroll
                to={route.href.substring(1)}
                smooth={true}
                offset={-100}
                key={route.label}
                className={cn(
                  "transition-all duration-300 hover:text-primary",
                  isActive ? "text-primary" : ""
                )}
              >
                {route.label}
              </LinkScroll>
            ) : (
              <Link
                href={route.href}
                key={route.label}
                className={cn(
                  "transition-all duration-300 hover:text-primary",
                  isActive ? "text-primary" : ""
                )}
              >
                {route.label}
              </Link>
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
      </nav>
    </header>
  );
}
