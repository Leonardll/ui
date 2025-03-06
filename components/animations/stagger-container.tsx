"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerChildren?: number
  once?: boolean
}

export default function StaggerContainer({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

