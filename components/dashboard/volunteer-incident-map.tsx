"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Layers, MapPin, Navigation } from "lucide-react"

export function VolunteerIncidentMap() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Nearby Incidents</CardTitle>
            <CardDescription>Incidents in your assigned area</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Layers className="mr-2 h-4 w-4" />
            Layers
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative h-[400px] w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
          {/* Placeholder for the actual map */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-30"></div>

          {/* Current location marker */}
          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
              <Navigation className="h-4 w-4" />
            </div>
            <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Your Location</div>
          </div>

          {/* Sample incident markers */}
          <div className="absolute left-[30%] top-[40%]">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Building Fire (0.8km)</div>
            </div>
          </div>

          <div className="absolute left-[60%] top-[30%]">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">
                Traffic Accident (1.2km)
              </div>
            </div>
          </div>

          <div className="absolute left-[70%] top-[60%]">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Gas Leak (1.5km)</div>
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
          </div>

          {/* Nearby incidents list */}
          <div className="absolute bottom-4 right-4 w-48 rounded-md bg-background/90 p-2 shadow-md backdrop-blur-sm">
            <h4 className="mb-2 text-xs font-medium">Nearby Incidents</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span>Building Fire</span>
                <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
                  0.8km
                </Badge>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>Traffic Accident</span>
                <Badge variant="outline" className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                  1.2km
                </Badge>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>Gas Leak</span>
                <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                  1.5km
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

