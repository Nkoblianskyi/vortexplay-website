"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function StaggerItem({ children, className = "", direction = "up" }: StaggerItemProps) {
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 20 }
      case "down":
        return { y: -20 }
      case "left":
        return { x: 20 }
      case "right":
        return { x: -20 }
      case "none":
        return {}
      default:
        return { y: 20 }
    }
  }

  const item = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}
