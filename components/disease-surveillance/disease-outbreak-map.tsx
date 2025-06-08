"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Layers, ZoomIn, ZoomOut, AlertCircle } from "lucide-react"

export function DiseaseOutbreakMap() {
  const [activeLayer, setActiveLayer] = useState("all")

  return (
    <div className="relative h-[300px] w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Placeholder for the actual map */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=600')] bg-cover bg-center opacity-30"></div>

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
          All Diseases
        </Button>
        <Button
          variant={activeLayer === "cholera" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveLayer("cholera")}
        >
          Cholera
        </Button>
        <Button
          variant={activeLayer === "dengue" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveLayer("dengue")}
        >
          Dengue
        </Button>
        <Button
          variant={activeLayer === "respiratory" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveLayer("respiratory")}
        >
          Respiratory
        </Button>
      </div>

      {/* Sample outbreak markers */}
      <div className="absolute left-[30%] top-[40%]">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <AlertCircle className="h-5 w-5" />
          </div>
          <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Cholera (78 cases)</div>
        </div>
      </div>

      <div className="absolute left-[55%] top-[35%]">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <AlertCircle className="h-5 w-5" />
          </div>
          <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Dengue (42 cases)</div>
        </div>
      </div>

      <div className="absolute left-[25%] top-[65%]">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
            <AlertCircle className="h-5 w-5" />
          </div>
          <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Respiratory (64 cases)</div>
        </div>
      </div>

      {/* Map legend */}
      <div className="absolute bottom-4 left-4 z-10 flex flex-col space-y-1">
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <span className="text-xs">Cholera</span>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-orange-500"></div>
          <span className="text-xs">Dengue Fever</span>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <span className="text-xs">Respiratory Illness</span>
        </div>
      </div>
    </div>
  )
}

