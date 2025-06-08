"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Layers, ZoomIn, ZoomOut, Droplets, Flame, Wind, WormIcon } from "lucide-react"

export function IncidentMap() {
  const [activeLayer, setActiveLayer] = useState("all")

  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Placeholder for the actual map */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-30"></div>

      {/* Map controls */}
      <div className="absolute right-4 top-4 z-10 flex space-x-2">
        <Button variant="outline" size="icon">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm">
          <Layers className="mr-2 h-4 w-4" />
          Layers
        </Button>
      </div>

      {/* Layer selection */}
      <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
        <Button variant={activeLayer === "all" ? "default" : "outline"} size="sm" onClick={() => setActiveLayer("all")}>
          All Incidents
        </Button>
        <Button
          variant={activeLayer === "flood" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveLayer("flood")}
        >
          <Droplets className="mr-1 h-4 w-4" />
          Floods
        </Button>
        <Button
          variant={activeLayer === "fire" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveLayer("fire")}
        >
          <Flame className="mr-1 h-4 w-4" />
          Fires
        </Button>
        <Button
          variant={activeLayer === "disease" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveLayer("disease")}
        >
          <WormIcon className="mr-1 h-4 w-4" />
          Disease
        </Button>
        <Button
          variant={activeLayer === "weather" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveLayer("weather")}
        >
          <Wind className="mr-1 h-4 w-4" />
          Weather
        </Button>
      </div>

      {/* Sample incident markers */}
      <div className="absolute left-[30%] top-[40%]">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
            <Droplets className="h-5 w-5" />
          </div>
          <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Flood (Critical)</div>
        </div>
      </div>

      <div className="absolute left-[55%] top-[35%]">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <Flame className="h-5 w-5" />
          </div>
          <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Wildfire (Warning)</div>
        </div>
      </div>

      <div className="absolute left-[25%] top-[65%]">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white">
            <WormIcon className="h-5 w-5" />
          </div>
          <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Cholera Outbreak</div>
        </div>
      </div>

      <div className="absolute left-[70%] top-[55%]">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
            <Wind className="h-5 w-5" />
          </div>
          <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Severe Storm</div>
        </div>
      </div>

      {/* Map legend */}
      <div className="absolute bottom-4 left-4 z-10 flex flex-col space-y-1">
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <span className="text-xs">Floods</span>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <span className="text-xs">Fires</span>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-purple-500"></div>
          <span className="text-xs">Disease Outbreaks</span>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <span className="text-xs">Weather Events</span>
        </div>
      </div>

      {/* Incident summary */}
      <div className="absolute bottom-4 right-4 w-64 rounded-md bg-background/90 p-3 shadow-md backdrop-blur-sm">
        <h4 className="mb-2 text-sm font-medium">Active Incidents</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Badge className="mr-2 bg-blue-500">Floods</Badge>
              <span className="text-xs">4 Active</span>
            </div>
            <span className="text-xs font-medium">15,200 affected</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Badge className="mr-2 bg-red-500">Fires</Badge>
              <span className="text-xs">2 Active</span>
            </div>
            <span className="text-xs font-medium">3,500 affected</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Badge className="mr-2 bg-purple-500">Disease</Badge>
              <span className="text-xs">3 Active</span>
            </div>
            <span className="text-xs font-medium">8,700 affected</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Badge className="mr-2 bg-yellow-500">Weather</Badge>
              <span className="text-xs">1 Active</span>
            </div>
            <span className="text-xs font-medium">12,000 affected</span>
          </div>
        </div>
        <Button size="sm" className="mt-3 w-full">
          View All Incidents
        </Button>
      </div>
    </div>
  )
}

