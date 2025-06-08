"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Layers, ZoomIn, ZoomOut, MapPin } from "lucide-react"

export function PublicIncidentMap() {
  const [activeTab, setActiveTab] = useState("live")

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Disaster Map</CardTitle>
            <CardDescription>View active incidents and alerts</CardDescription>
          </div>
          <div className="flex space-x-2">
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
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="live" onValueChange={setActiveTab}>
          <div className="border-b px-4">
            <TabsList className="w-full justify-start rounded-none border-b-0 p-0">
              <TabsTrigger
                value="live"
                className="rounded-b-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Live Incidents
              </TabsTrigger>
              <TabsTrigger
                value="predictions"
                className="rounded-b-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Predictions
              </TabsTrigger>
              <TabsTrigger
                value="historical"
                className="rounded-b-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Historical
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="live" className="m-0">
            <div className="relative h-[400px] w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
              {/* Placeholder for the actual map */}
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-30"></div>

              {/* Sample incident markers */}
              <div className="absolute left-[30%] top-[40%]">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Building Fire</div>
                </div>
              </div>

              <div className="absolute left-[60%] top-[30%]">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Traffic Accident</div>
                </div>
              </div>

              <div className="absolute left-[45%] top-[60%]">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Flooding</div>
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
            </div>
          </TabsContent>

          <TabsContent value="predictions" className="m-0">
            <div className="relative h-[400px] w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
              {/* Placeholder for the prediction map */}
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-30"></div>

              {/* Sample prediction zones */}
              <div className="absolute left-[40%] top-[30%] h-24 w-24 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="absolute left-[60%] top-[50%] h-32 w-32 rounded-full bg-orange-500/20 border border-orange-500/50"></div>
              <div className="absolute left-[20%] top-[60%] h-40 w-40 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>

              {/* Map legend */}
              <div className="absolute bottom-4 left-4 z-10 flex flex-col space-y-1">
                <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
                  <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
                  <span className="text-xs">High Risk (80%+)</span>
                </div>
                <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
                  <div className="h-3 w-3 rounded-full bg-orange-500/50"></div>
                  <span className="text-xs">Medium Risk (50-80%)</span>
                </div>
                <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
                  <span className="text-xs">Low Risk (20-50%)</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="historical" className="m-0">
            <div className="relative h-[400px] w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
              {/* Placeholder for the historical map */}
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-30"></div>

              {/* Sample heatmap overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/20 to-yellow-500/10"></div>

              {/* Map legend */}
              <div className="absolute bottom-4 left-4 z-10 flex flex-col space-y-1">
                <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
                  <div className="h-3 w-3 bg-gradient-to-r from-red-500 to-orange-500"></div>
                  <span className="text-xs">High Frequency</span>
                </div>
                <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
                  <div className="h-3 w-3 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                  <span className="text-xs">Medium Frequency</span>
                </div>
                <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
                  <div className="h-3 w-3 bg-gradient-to-r from-yellow-500 to-green-500"></div>
                  <span className="text-xs">Low Frequency</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

