"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/uiElemts/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/uiElemts/sheet"
import { Menu } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { motion } from "framer-motion"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#stack",
    label: "Stack",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
  },
  {
    href: "#contact",
    label: "Contact",
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/" className="font-bold text-xl">
              Full Stack Developer
            </Link>
          </motion.div>
        </div>

        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <div key={route.href} className="relative">
              <Link
                href={route.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setActiveLink(route.href)}
              >
                {route.label}
              </Link>
              {activeLink === route.href && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          ))}
          <ModeToggle />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <SheetTitle>Menu</SheetTitle>
            <div className="px-7">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <span className="font-bold text-xl">Full Stack Developer</span>
              </Link>
            </div>
            <nav className="flex flex-col gap-4 px-7 mt-10">
              {routes.map((route) => (
                <motion.div
                  key={route.href}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    href={route.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => {
                      setIsOpen(false)
                      setActiveLink(route.href)
                    }}
                  >
                    {route.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-2">
                <ModeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}

