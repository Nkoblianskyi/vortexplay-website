"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Przewiń stronę na górę przy zmianie ścieżki
    window.scrollTo({
      top: 0,
      behavior: "instant", // Użyj "instant" zamiast "smooth" dla natychmiastowego przewijania
    })
  }, [pathname])

  return null
}
