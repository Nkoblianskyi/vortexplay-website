"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Maximize } from "lucide-react"
import Image from "next/image"

interface HoverVideoPlayerProps {
  src: string
  poster?: string
  className?: string
  title?: string
}

export function HoverVideoPlayer({ src, poster, className = "", title }: HoverVideoPlayerProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [showControls, setShowControls] = useState(false)
  const playPromiseRef = useRef<Promise<void> | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Obsługa odtwarzania wideo po najechaniu myszką z opóźnieniem
  useEffect(() => {
    // Anuluj poprzedni timeout jeśli istnieje
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }

    if (videoRef.current) {
      if (isHovering) {
        // Dodaj małe opóźnienie przed rozpoczęciem odtwarzania, aby uniknąć niepotrzebnych wywołań
        // przy szybkim przesunięciu myszy nad elementem
        hoverTimeoutRef.current = setTimeout(() => {
          if (videoRef.current && !isPlaying(videoRef.current)) {
            // Zapisz promise z metody play()
            try {
              playPromiseRef.current = videoRef.current.play()
              if (playPromiseRef.current) {
                playPromiseRef.current.catch((error) => {
                  console.error("Autoplay failed:", error)
                  playPromiseRef.current = null
                })
              }
            } catch (error) {
              console.error("Error during play:", error)
              playPromiseRef.current = null
            }
          }
        }, 100)
      } else {
        // Bezpieczne zatrzymanie wideo
        const safelyPauseVideo = () => {
          if (videoRef.current) {
            try {
              videoRef.current.pause()
              if (!isFullscreen && videoRef.current) {
                videoRef.current.currentTime = 0
              }
            } catch (error) {
              console.error("Error during pause:", error)
            }
          }
        }

        // Sprawdź czy istnieje aktywny promise przed wywołaniem pause()
        if (playPromiseRef.current) {
          playPromiseRef.current
            .then(() => {
              safelyPauseVideo()
              playPromiseRef.current = null
            })
            .catch(() => {
              playPromiseRef.current = null
            })
        } else {
          safelyPauseVideo()
        }
      }
    }

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [isHovering, isFullscreen])

  // Sprawdza czy wideo jest aktualnie odtwarzane
  const isPlaying = (video: HTMLVideoElement): boolean => {
    return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)
  }

  // Obsługa trybu pełnoekranowego
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
      if (!document.fullscreenElement && videoRef.current) {
        videoRef.current.pause()
        setIsHovering(false)
      }
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch((err) => {
          console.error(`Błąd podczas przechodzenia do trybu pełnoekranowego: ${err.message}`)
        })
      } else {
        document.exitFullscreen()
      }
    }
  }

  const handleLoadedMetadata = () => {
    setIsLoaded(true)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
    setShowControls(true)
  }

  const handleMouseLeave = () => {
    if (!isFullscreen) {
      setIsHovering(false)
      setShowControls(false)
    }
  }

  const handleMouseMove = () => {
    setShowControls(true)
    // Ukryj kontrolki po 3 sekundach bezczynności
    const timer = setTimeout(() => {
      if (isHovering && !isFullscreen) {
        setShowControls(false)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg border border-zinc-800 aspect-video group hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Poster image shown before hover */}
      {!isHovering && poster && (
        <div className="absolute inset-0 z-10 transition-opacity duration-300">
          <Image src={poster || "/placeholder.svg"} alt={title || "Video thumbnail"} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="rounded-full bg-primary/80 p-4 inline-block animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              {title && <p className="text-white font-bold text-xl">{title}</p>}
              <p className="text-white text-sm">Najedź myszką, aby odtworzyć</p>
            </div>
          </div>
        </div>
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        muted={isMuted}
        playsInline
        loop
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={src} type="video/mp4" />
        Twoja przeglądarka nie obsługuje odtwarzania wideo.
      </video>

      {/* Controls overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${showControls && isHovering ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="flex justify-between items-center">
          <div className="text-white text-sm">{title && <span className="font-medium">{title}</span>}</div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 hover:text-white h-8 w-8"
              onClick={handleMuteToggle}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 hover:text-white h-8 w-8"
              onClick={handleFullscreen}
            >
              <Maximize className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
