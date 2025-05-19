"use client"

import { useState, useEffect } from "react"

export function useMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Funkcja sprawdzająca szerokość ekranu
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Sprawdź przy pierwszym renderowaniu
    checkIfMobile()

    // Nasłuchuj zmiany rozmiaru okna
    window.addEventListener("resize", checkIfMobile)

    // Sprzątanie
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [breakpoint])

  return isMobile
}
