"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ScreenshotSliderProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
}

export function ScreenshotSlider({ images, className = "" }: ScreenshotSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        const isLastSlide = currentIndex === images.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying, images.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(slideIndex)
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg border border-zinc-800 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full h-10 w-10 hover:scale-110 transition-transform duration-300"
          onClick={goToPrevious}
          aria-label="Poprzedni zrzut ekranu"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full h-10 w-10 hover:scale-110 transition-transform duration-300"
          onClick={goToNext}
          aria-label="Następny zrzut ekranu"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, slideIndex) => (
          <motion.button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full ${currentIndex === slideIndex ? "bg-primary" : "bg-zinc-600"}`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Przejdź do zrzutu ekranu ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
