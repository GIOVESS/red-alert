"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  AlertTriangle,
  Droplets,
  Flame,
  Wind,
  WormIcon as Virus,
  CloudLightning,
  Mountain,
  Skull,
  Zap,
} from "lucide-react"
import { IncidentMap } from "@/components/dashboard/incident-map"

export function MultiHazardOverview() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Multi-Hazard Overview</CardTitle>
            <CardDescription>Active and predicted hazards across all categories</CardDescription>
          </div>
          <Button>
            <AlertTriangle className="mr-2 h-4 w-4" />
            Issue Alert
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="map">
          <div className="px-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="map">Incident Map</TabsTrigger>
              <TabsTrigger value="active">Active Hazards</TabsTrigger>
              <TabsTrigger value="predicted">Predicted Hazards</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="map" className="m-0">
            <div className="px-6 pt-4">
              <p className="text-sm text-muted-foreground">
                Current view showing all active incidents across the country. Use the layer controls to filter by hazard
                type.
              </p>
            </div>
            <div className="mt-4">
              <IncidentMap />
            </div>
          </TabsContent>

          <TabsContent value="active" className="m-0 p-6">
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Droplets className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Flooding</h3>
                      <Badge className="bg-red-500">Critical</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">4 active incidents affecting 15,200 people</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-2 md:grid-cols-2">
                  <div className="rounded-md bg-muted p-2 text-xs">
                    <span className="font-medium">Tana River Basin:</span> Water levels at 4.8m (Critical)
                  </div>
                  <div className="rounded-md bg-muted p-2 text-xs">
                    <span className="font-medium">Nyando River:</span> Water levels at 3.2m (Warning)
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                    <Flame className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Wildfires</h3>
                      <Badge className="bg-orange-500">Warning</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">2 active incidents affecting 3,500 people</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-2 md:grid-cols-2">
                  <div className="rounded-md bg-muted p-2 text-xs">
                    <span className="font-medium">Mt. Kenya Forest:</span> 250 hectares affected
                  </div>
                  <div className="rounded-md bg-muted p-2 text-xs">
                    <span className="font-medium">Aberdare Range:</span> 120 hectares affected
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <Virus className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Disease Outbreaks</h3>
                      <Badge className="bg-yellow-500">Alert</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">3 active outbreaks affecting 8,700 people</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-2 md:grid-cols-3">
                  <div className="rounded-md bg-muted p-2 text-xs">
                    <span className="font-medium">Cholera:</span> 450 cases
                  </div>
                  <div className="rounded-md bg-muted p-2 text-xs">
                    <span className="font-medium">Dengue Fever:</span> 280 cases
                  </div>
                  <div className="rounded-md bg-muted p-2 text-xs">
                    <span className="font-medium">Respiratory Illness:</span> 620 cases
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
                    <Wind className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Severe Weather</h3>
                      <Badge className="bg-orange-500">Warning</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">1 active incident affecting 12,000 people</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-2 md:grid-cols-2">
                  <div className="rounded-md bg-muted p-2 text-xs">
                    <span className="font-medium">Coastal Region:</span> Tropical storm approaching
                  </div>
                  <div className="rounded-md bg-muted p-2 text-xs">
                    <span className="font-medium">Expected Impact:</span> Heavy rainfall, strong winds
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="predicted" className="m-0 p-6">
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Droplets className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Predicted Flooding</h3>
                      <Badge variant="outline" className="border-orange-500 text-orange-500">
                        75% Probability
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Expected in Western Kenya within 48-72 hours</p>
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                    <Mountain className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Landslide Risk</h3>
                      <Badge variant="outline" className="border-red-500 text-red-500">
                        85% Probability
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      High risk in Murang'a County due to continued rainfall
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
                    <CloudLightning className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Thunderstorms</h3>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                        60% Probability
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Expected in Central Kenya within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                    <Skull className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Security Threat</h3>
                      <Badge variant="outline" className="border-purple-500 text-purple-500">
                        40% Probability
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Potential civil unrest in urban centers</p>
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                    <Zap className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Power Outages</h3>
                      <Badge variant="outline" className="border-slate-500 text-slate-500">
                        55% Probability
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Potential widespread outages due to forecasted storms
                    </p>
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

