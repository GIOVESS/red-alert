"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Layers, ZoomIn, ZoomOut, MapPin, Users, Truck } from "lucide-react"

export function AdminIncidentMap() {
  const [activeTab, setActiveTab] = useState("incidents")

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Command Center Map</CardTitle>
            <CardDescription>Real-time incident and resource tracking</CardDescription>
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
        <Tabs defaultValue="incidents" onValueChange={setActiveTab}>
          <div className="border-b px-4">
            <TabsList className="w-full justify-start rounded-none border-b-0 p-0">
              <TabsTrigger
                value="incidents"
                className="rounded-b-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Incidents
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="rounded-b-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Resources
              </TabsTrigger>
              <TabsTrigger
                value="risks"
                className="rounded-b-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Risk Zones
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="incidents" className="m-0">
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

              {/* Incident details panel */}
              <div className="absolute right-4 top-4 w-64 rounded-md bg-background/90 p-3 shadow-md backdrop-blur-sm">
                <h4 className="mb-2 text-sm font-medium">Active Incidents</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <span className="ml-2 text-xs">Critical</span>
                    </div>
                    <span className="text-xs font-medium">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                      <span className="ml-2 text-xs">High</span>
                    </div>
                    <span className="text-xs font-medium">10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <span className="ml-2 text-xs">Medium</span>
                    </div>
                    <span className="text-xs font-medium">6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="ml-2 text-xs">Low</span>
                    </div>
                    <span className="text-xs font-medium">4</span>
                  </div>
                </div>
                <Button size="sm" className="mt-3 w-full" variant="outline">
                  View All Incidents
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="m-0">
            <div className="relative h-[400px] w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
              {/* Placeholder for the resource map */}
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-30"></div>

              {/* Sample resource markers */}
              <div className="absolute left-[35%] top-[45%]">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Medical Team</div>
                </div>
              </div>

              <div className="absolute left-[55%] top-[35%]">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Supply Truck</div>
                </div>
              </div>

              <div className="absolute left-[65%] top-[55%]">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">Rescue Team</div>
                </div>
              </div>

              {/* Map legend */}
              <div className="absolute bottom-4 left-4 z-10 flex flex-col space-y-1">
                <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-xs">Medical Teams</span>
                </div>
                <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-xs">Supply Vehicles</span>
                </div>
                <div className="flex items-center space-x-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
                  <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  <span className="text-xs">Rescue Teams</span>
                </div>
              </div>

              {/* Resource details panel */}
              <div className="absolute right-4 top-4 w-64 rounded-md bg-background/90 p-3 shadow-md backdrop-blur-sm">
                <h4 className="mb-2 text-sm font-medium">Deployed Resources</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="ml-2 text-xs">Medical Teams</span>
                    </div>
                    <span className="text-xs font-medium">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="ml-2 text-xs">Supply Vehicles</span>
                    </div>
                    <span className="text-xs font-medium">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      <span className="ml-2 text-xs">Rescue Teams</span>
                    </div>
                    <span className="text-xs font-medium">15</span>
                  </div>
                </div>
                <Button size="sm" className="mt-3 w-full" variant="outline">
                  Manage Resources
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="risks" className="m-0">
            <div className="relative h-[400px] w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
              {/* Placeholder for the risk zone map */}
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-30"></div>

              {/* Sample risk zones */}
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

              {/* Risk details panel */}
              <div className="absolute right-4 top-4 w-64 rounded-md bg-background/90 p-3 shadow-md backdrop-blur-sm">
                <h4 className="mb-2 text-sm font-medium">Risk Assessment</h4>
                <div className="space-y-2">
                  <div className="rounded-md border p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">Nairobi County</span>
                      <Badge className="bg-red-500">High</Badge>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Flooding risk due to heavy rainfall</p>
                  </div>
                  <div className="rounded-md border p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">Nakuru County</span>
                      <Badge className="bg-orange-500">Medium</Badge>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Wildfire risk due to dry conditions</p>
                  </div>
                  <div className="rounded-md border p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">Muranga County</span>
                      <Badge className="bg-yellow-500">Low</Badge>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Landslide risk in hilly areas</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

