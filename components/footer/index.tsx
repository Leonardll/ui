import Link from "next/link"
import { X, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"
import Logo from "../uiElemts/logo"

export default function Footer() {
  return (
    <footer className="w-full glass border-t border-white/10 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-12 md:h-28 md:flex-row md:py-0 px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-4">
          <Link href="/">
            <Logo />
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left border-l border-white/10 pl-4">
            &copy; {new Date().getFullYear()} Leonard Lator. Pioneering the Digital Frontier.
          </p>
        </div>
        <div className="flex gap-6">
          {[
            { Icon: Github, href: "https://github.com/Leonardll", label: "Github" },
            { Icon: X, href: "https://x.com/Leo74356050", label: "X" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/leonardlator/", label: "LinkedIn" }
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="h-6 w-6" />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}

