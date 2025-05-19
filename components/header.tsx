"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMobile()

  // Zamknij menu mobilne po zmianie ścieżki
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Zablokuj przewijanie strony, gdy menu mobilne jest otwarte
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const isActive = (path: string) => {
    return pathname === path
  }

  const handleClick = () => {
    // Przewiń stronę na górę przy kliknięciu w link
    window.scrollTo({
      top: 0,
      behavior: "instant",
    })
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 group" onClick={handleClick}>
            <motion.span
              className="text-xl font-bold sm:inline-block group-hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VortexPlay Studio
            </motion.span>
          </Link>
        </div>

        {/* Nawigacja na dużych ekranach */}
        <nav className="hidden md:flex items-center space-x-4">
          <NavLink href="/" active={isActive("/")} onClick={handleClick}>
            STRONA GŁÓWNA
          </NavLink>
          <NavLink href="/o-nas" active={isActive("/o-nas")} onClick={handleClick}>
            O NAS
          </NavLink>
          <NavLink href="/nasze-uslugi" active={isActive("/nasze-uslugi")} onClick={handleClick}>
            NASZE USŁUGI
          </NavLink>
          <NavLink href="/knightblade" active={isActive("/knightblade")} onClick={handleClick}>
            KNIGHTBLADE
          </NavLink>
          <NavLink href="/kontakt" active={isActive("/kontakt")} onClick={handleClick}>
            SKONTAKTUJ SIĘ Z NAMI
          </NavLink>
        </nav>

        {/* Przycisk menu mobilnego */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Menu mobilne */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-16 z-40 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container py-6 flex flex-col space-y-4">
              <MobileNavLink href="/" active={isActive("/")} onClick={handleClick}>
                STRONA GŁÓWNA
              </MobileNavLink>
              <MobileNavLink href="/o-nas" active={isActive("/o-nas")} onClick={handleClick}>
                O NAS
              </MobileNavLink>
              <MobileNavLink href="/nasze-uslugi" active={isActive("/nasze-uslugi")} onClick={handleClick}>
                NASZE USŁUGI
              </MobileNavLink>
              <MobileNavLink href="/knightblade" active={isActive("/knightblade")} onClick={handleClick}>
                KNIGHTBLADE
              </MobileNavLink>
              <MobileNavLink href="/kontakt" active={isActive("/kontakt")} onClick={handleClick}>
                SKONTAKTUJ SIĘ Z NAMI
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  active: boolean
  onClick?: () => void
}

function NavLink({ href, children, active, onClick }: NavLinkProps) {
  return (
    <Link href={href} className="relative text-sm font-medium transition-colors hover:text-primary" onClick={onClick}>
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

function MobileNavLink({ href, children, active, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`block py-3 px-4 text-lg font-medium rounded-md transition-colors ${active ? "bg-primary/20 text-primary" : "hover:bg-zinc-800/50"
        }`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
