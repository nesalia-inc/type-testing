"use client"

import React, { useRef, useEffect, CSSProperties } from "react"

// Type definitions
interface ResponsiveImage {
  src: string
  alt?: string
  srcSet?: string
}

interface AnimationConfig {
  preview?: boolean
  scale: number
  speed: number
}

interface NoiseConfig {
  opacity: number
  scale: number
}

interface ShadowOverlayProps {
  type?: "preset" | "custom"
  presetIndex?: number
  customImage?: ResponsiveImage
  sizing?: "fill" | "stretch"
  color?: string
  animation?: AnimationConfig
  noise?: NoiseConfig
  style?: CSSProperties
  className?: string
}

function mapRange(
  value: number,
  fromLow: number,
  fromHigh: number,
  toLow: number,
  toHigh: number
): number {
  if (fromLow === fromHigh) {
    return toLow
  }
  const percentage = (value - fromLow) / (fromHigh - fromLow)
  return toLow + percentage * (toHigh - toLow)
}

export function Component({
  animation,
  style,
  className
}: ShadowOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const timeRef = useRef<number>(0)

  const pixelSize = animation ? mapRange(animation.scale, 1, 100, 4, 20) : 8
  const speed = animation ? mapRange(animation.speed, 1, 100, 0.05, 0.5) : 0.1

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const draw = () => {
      const width = canvas.width
      const height = canvas.height

      // Clear canvas
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, width, height)

      // Draw pixels with wave effect
      for (let y = 0; y < height; y += pixelSize) {
        for (let x = 0; x < width; x += pixelSize) {
          // Multiple sine waves for more organic wave effect
          const wave1 = Math.sin(timeRef.current * speed + x * 0.02 + y * 0.01)
          const wave2 = Math.cos(timeRef.current * speed * 0.7 + x * 0.01 - y * 0.02)
          const wave3 = Math.sin(timeRef.current * speed * 1.3 + (x + y) * 0.015)

          // Add some randomness
          const noise = Math.sin(x * 0.1) * Math.cos(y * 0.1) * 0.3

          // Combine waves and noise
          const value = wave1 * 0.4 + wave2 * 0.3 + wave3 * 0.3 + noise
          const isWhite = value > 0.3

          ctx.fillStyle = isWhite ? "oklch(1 0 0)" : "oklch(0.145 0 0)"
          ctx.fillRect(x, y, pixelSize, pixelSize)
        }
      }

      timeRef.current += 1
      animationFrameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [pixelSize, speed])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div
      className={className}
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100%",
        ...style
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          imageRendering: "pixelated"
        }}
      />
    </div>
  )
}
