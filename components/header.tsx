"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-16 max-w-screen-xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 group">
            <motion.span
              className="text-xl font-bold sm:inline-block group-hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VortexPlay Studio
            </motion.span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          <NavLink href="/" active={isActive("/")}>
            STRONA GŁÓWNA
          </NavLink>
          <NavLink href="/o-nas" active={isActive("/o-nas")}>
            O NAS
          </NavLink>
          <NavLink href="/nasze-uslugi" active={isActive("/nasze-uslugi")}>
            NASZE USŁUGI
          </NavLink>
          <NavLink href="/knightblade" active={isActive("/knightblade")}>
            KNIGHTBLADE
          </NavLink>
          <NavLink href="/kontakt" active={isActive("/kontakt")}>
            SKONTAKTUJ SIĘ Z NAMI
          </NavLink>
        </nav>
      </div>
    </motion.header>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  active: boolean
}

function NavLink({ href, children, active }: NavLinkProps) {
  const handleClick = () => {
    // Przewiń stronę na górę przy kliknięciu w link
    window.scrollTo({
      top: 0,
      behavior: "instant",
    })
  }

  return (
    <Link
      href={href}
      className="relative text-sm font-medium transition-colors hover:text-primary"
      onClick={handleClick}
    >
      <span className={active ? "text-primary" : ""}>{children}</span>
      {active && (
        <motion.span
          className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
          layoutId="underline"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  )
}
