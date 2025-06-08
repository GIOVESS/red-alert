"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Layers, ZoomIn, ZoomOut, Droplets } from "lucide-react"

export function FloodMonitoringMap() {
  const [activeLayer, setActiveLayer] = useState("risk")

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Placeholder for the actual map */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-30"></div>

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
      <div className="absolute left-4 top-4 z-10 flex space-x-2">
        <Button
          variant={activeLayer === "risk" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveLayer("risk")}
        >
          Risk Zones
        </Button>
        <Button
          variant={activeLayer === "sensors" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveLayer("sensors")}
        >
          Water Sensors
        </Button>
        <Button
          variant={activeLayer === "rainfall" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveLayer("rainfall")}
        >
          Rainfall
        </Button>
      </div>

      {/* Sample flood risk zones */}
      <div className="absolute left-[30%] top-[40%] h-32 w-32 rounded-full bg-red-500/30 border border-red-500/50"></div>
      <div className="absolute left-[50%] top-[30%] h-48 w-48 rounded-full bg-orange-500/30 border border-orange-500/50"></div>
      <div className="absolute left-[20%] top-[60%] h-40 w-40 rounded-full bg-yellow-500/30 border border-yellow-500/50"></div>

      {/* Sample water level sensors */}
      <div className="absolute left-[35%] top-[45%]">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <Droplets className="h-5 w-5" />
          </div>
          <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Tana River (4.8m)</div>
        </div>
      </div>

      <div className="absolute left-[55%] top-[35%]">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <Droplets className="h-5 w-5" />
          </div>
          <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Nyando River (3.2m)</div>
        </div>
      </div>

      <div className="absolute left-[25%] top-[65%]">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
            <Droplets className="h-5 w-5" />
          </div>
          <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Nzoia River (2.8m)</div>
        </div>
      </div>

      {/* Map legend */}
      <div className="absolute bottom-4 left-4 z-10 flex flex-col space-y-1">
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <span className="text-xs">Critical (Above 4.5m)</span>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-orange-500"></div>
          <span className="text-xs">Warning (3.5-4.5m)</span>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <span className="text-xs">Alert (2.5-3.5m)</span>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="text-xs">Normal (Below 2.5m)</span>
        </div>
      </div>

      {/* Flood risk summary */}
      <div className="absolute bottom-4 right-4 w-64 rounded-md bg-background/90 p-3 shadow-md backdrop-blur-sm">
        <h4 className="mb-2 text-sm font-medium">Flood Risk Summary</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Badge className="mr-2 bg-red-500">Critical</Badge>
              <span className="text-xs">3 Regions</span>
            </div>
            <span className="text-xs font-medium">15,200 people</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Badge className="mr-2 bg-orange-500">Warning</Badge>
              <span className="text-xs">5 Regions</span>
            </div>
            <span className="text-xs font-medium">22,500 people</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Badge className="mr-2 bg-yellow-500">Alert</Badge>
              <span className="text-xs">8 Regions</span>
            </div>
            <span className="text-xs font-medium">7,580 people</span>
          </div>
        </div>
        <Button size="sm" className="mt-3 w-full">
          View Detailed Report
        </Button>
      </div>
    </div>
  )
}

