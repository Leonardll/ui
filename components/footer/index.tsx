import Link from "next/link"
import { X, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Leo&apos;s Digital Home. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 ">
        <Link href="https://github.com/Leonardll" className="text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
            <span className="sr-only">Github</span>
          </Link>
          <Link href="https://x.com/Leo74356050" className="text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
            <span className="sr-only">X</span>
          </Link>
          <Link href="https://www.linkedin.com/in/leonardlator/" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      
      </div>
    </footer>
  )
}

