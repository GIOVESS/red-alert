"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Layers, ZoomIn, ZoomOut, AlertTriangle } from "lucide-react"

export function AlertsMap() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="relative h-[300px] w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
          {/* Placeholder for the actual map */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=800')] bg-cover bg-center opacity-30"></div>

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

          {/* Sample alert markers */}
          <div className="absolute left-[30%] top-[40%]">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Flash Flood Warning</div>
            </div>
          </div>

          <div className="absolute left-[60%] top-[30%]">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Wildfire Alert</div>
            </div>
          </div>

          <div className="absolute left-[45%] top-[60%]">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Landslide Risk</div>
            </div>
          </div>

          {/* Map legend */}
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

          {/* Alert summary */}
          <div className="absolute bottom-4 right-4 w-48 rounded-md bg-background/90 p-2 shadow-md backdrop-blur-sm">
            <h4 className="mb-2 text-xs font-medium">Alert Summary</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span>Critical Alerts</span>
                <Badge className="bg-red-500">1</Badge>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>High Alerts</span>
                <Badge className="bg-orange-500">2</Badge>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>Medium Alerts</span>
                <Badge className="bg-yellow-500">2</Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

