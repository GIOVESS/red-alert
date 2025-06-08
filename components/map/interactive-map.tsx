"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Layers, ZoomIn, ZoomOut, MapPin } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface MapIncident {
  id: number
  lat: number
  lng: number
  title: string
  type: string
  severity: "low" | "medium" | "high" | "critical"
}

export function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [activeLayers, setActiveLayers] = useState({
    incidents: true,
    risks: true,
    resources: true,
  })

  // Sample incident data
  const incidents: MapIncident[] = [
    { id: 1, lat: -1.286389, lng: 36.817223, title: "Building Fire", type: "fire", severity: "critical" },
    { id: 2, lat: -1.292066, lng: 36.821945, title: "Traffic Accident", type: "accident", severity: "high" },
    { id: 3, lat: -1.3, lng: 36.83, title: "Flooding", type: "flood", severity: "medium" },
    { id: 4, lat: -1.27, lng: 36.81, title: "Gas Leak", type: "hazmat", severity: "high" },
  ]

  useEffect(() => {
    // This code simulates the map loading
    // In a real implementation, you would use Leaflet or another mapping library
    const loadMap = async () => {
      // Simulate loading delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setMapLoaded(true)
    }

    loadMap()
  }, [])

  const handleLayerToggle = (layer: keyof typeof activeLayers) => {
    setActiveLayers((prev) => ({
      ...prev,
      [layer]: !prev[layer],
    }))
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-500"
      case "high":
        return "bg-orange-500"
      case "medium":
        return "bg-yellow-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute right-4 top-4 z-10 flex space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Layers className="mr-2 h-4 w-4" />
              Layers
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem
              checked={activeLayers.incidents}
              onCheckedChange={() => handleLayerToggle("incidents")}
            >
              Incidents
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={activeLayers.risks} onCheckedChange={() => handleLayerToggle("risks")}>
              Risk Zones
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={activeLayers.resources}
              onCheckedChange={() => handleLayerToggle("resources")}
            >
              Resources
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" size="icon">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <ZoomOut className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-4 z-10 flex flex-col space-y-1">
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <span className="text-xs">Critical</span>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-orange-500"></div>
          <span className="text-xs">High</span>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <span className="text-xs">Medium</span>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <span className="text-xs">Low</span>
        </div>
      </div>

      <div ref={mapRef} className="h-[600px] w-full bg-slate-100 dark:bg-slate-800">
        {!mapLoaded ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">
              <div className="mb-2 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto"></div>
              <p>Loading map...</p>
            </div>
          </div>
        ) : (
          <div className="relative h-full w-full">
            {/* This is a placeholder for the actual map */}
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center opacity-30"></div>

            {/* Simulated map markers */}
            {activeLayers.incidents &&
              incidents.map((incident) => (
                <div
                  key={incident.id}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${((incident.lng - 36.8) / 0.1) * 100}%`,
                    top: `${((incident.lat + 1.3) / 0.1) * 100}%`,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full ${getSeverityColor(incident.severity)} text-white`}
                  >
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">{incident.title}</div>
                </div>
              ))}

            {/* Simulated risk zones */}
            {activeLayers.risks && (
              <>
                <div className="absolute left-[40%] top-[30%] h-24 w-24 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="absolute left-[60%] top-[50%] h-32 w-32 rounded-full bg-orange-500/20 border border-orange-500/50"></div>
                <div className="absolute left-[20%] top-[60%] h-40 w-40 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              </>
            )}

            {/* Simulated resources */}
            {activeLayers.resources && (
              <>
                <div className="absolute left-[45%] top-[40%] h-5 w-5 rounded-full bg-green-500 border-2 border-white"></div>
                <div className="absolute left-[55%] top-[45%] h-5 w-5 rounded-full bg-green-500 border-2 border-white"></div>
                <div className="absolute left-[35%] top-[55%] h-5 w-5 rounded-full bg-green-500 border-2 border-white"></div>
              </>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}

