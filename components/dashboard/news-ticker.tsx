"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { AlertTriangle } from "lucide-react"

interface NewsTickerProps {
  className?: string
}

export function NewsTicker({ className }: NewsTickerProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const newsItems = [
    "BREAKING: Flash floods reported in Nairobi's Eastlands area. Residents advised to evacuate.",
    "WARNING: Wildfire spreading in Nakuru County. Emergency services deployed.",
    "UPDATE: Landslide risk high in Muranga County due to continued rainfall.",
    "ALERT: Tropical storm approaching Mombasa coastline. Expected landfall in 48 hours.",
    "NOTICE: Relief supplies being distributed in Kisumu flood-affected areas.",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % newsItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [newsItems.length])

  return (
    <div className={cn("relative overflow-hidden rounded-md border bg-background p-1", className)}>
      <div className="flex items-center">
        <div className="flex h-6 min-w-6 items-center justify-center rounded bg-primary p-1">
          <AlertTriangle className="h-4 w-4 text-primary-foreground" />
        </div>
        <div className="relative ml-2 flex-1 overflow-hidden">
          <div
            className="animate-marquee whitespace-nowrap text-sm font-medium"
            style={{ animationPlayState: "running" }}
          >
            {newsItems.map((item, index) => (
              <span
                key={index}
                className={cn(
                  "inline-block px-4",
                  index === activeIndex ? "text-primary font-semibold" : "text-foreground",
                )}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

