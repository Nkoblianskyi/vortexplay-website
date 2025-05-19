"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
}

export function VideoPlayer({ src, poster, className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const controlsTimeout = useRef<NodeJS.Timeout | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    return () => {
      if (controlsTimeout.current) {
        clearTimeout(controlsTimeout.current)
      }
    }
  }, [])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
      setShowControls(false)
    }
  }

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
    setShowControls(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  const handleMouseMove = () => {
    setShowControls(true)
    if (controlsTimeout.current) {
      clearTimeout(controlsTimeout.current)
    }

    if (isPlaying) {
      controlsTimeout.current = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }
  }

  const handleTimeUpdate = () => {
    if (
      videoRef.current &&
      videoRef.current.duration &&
      isFinite(videoRef.current.duration) &&
      videoRef.current.duration > 0
    ) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(isFinite(progress) ? progress : 0)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget
      const rect = progressBar.getBoundingClientRect()
      const pos = (e.clientX - rect.left) / rect.width

      // Upewnij się, że pos jest w zakresie 0-1
      const clampedPos = Math.max(0, Math.min(1, pos))

      // Upewnij się, że duration jest poprawną liczbą
      if (videoRef.current.duration && isFinite(videoRef.current.duration) && videoRef.current.duration > 0) {
        videoRef.current.currentTime = clampedPos * videoRef.current.duration
      }
    }
  }

  const handleLoadedMetadata = () => {
    setIsLoaded(true)
  }

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-zinc-800 aspect-video hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        onEnded={handleVideoEnded}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        playsInline
      >
        <source src={src} type="video/mp4" />
        Twoja przeglądarka nie obsługuje odtwarzania wideo.
      </video>

      {/* Nakładka z kontrolkami */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-black/40 transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1 flex items-center justify-center">
          <div className="relative z-10 text-center space-y-4">
            {!isPlaying && (
              <>
                <div className="animate-pulse">
                  <Play className="mx-auto text-white h-16 w-16" />
                </div>
                <p className="text-white font-bold text-xl">Kliknij, aby odtworzyć</p>
              </>
            )}
          </div>
        </div>

        <div className="w-full px-4 pb-4">
          {/* Pasek postępu */}
          {isLoaded && (
            <div className="w-full h-1 bg-zinc-700 rounded-full mb-4 cursor-pointer" onClick={handleProgressClick}>
              <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }} />
            </div>
          )}

          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 hover:text-white"
              onClick={handlePlayPause}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 hover:text-white"
                onClick={handleMuteToggle}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 hover:text-white"
                onClick={handleFullscreen}
              >
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
