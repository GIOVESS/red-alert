import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Bell, Filter, Droplets, CloudRain, Waves, AlertTriangle } from "lucide-react"
import { FloodMonitoringMap } from "@/components/flood-monitoring/flood-monitoring-map"
import { WaterLevelChart } from "@/components/flood-monitoring/water-level-chart"
import { RainfallForecastChart } from "@/components/flood-monitoring/rainfall-forecast-chart"
import { FloodAlertsList } from "@/components/flood-monitoring/flood-alerts-list"

export const metadata: Metadata = {
  title: "Flood Monitoring | RedAlert",
  description: "Early warning system for flood monitoring and prediction",
}

export default function FloodMonitoringPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Flood Early Warning System"
        description="Monitor water levels, rainfall, and flood risks"
      >
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Bell className="mr-2 h-4 w-4" />
            Issue Alert
          </Button>
        </div>
      </DashboardHeader>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-blue-50 dark:bg-blue-900/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Level Status</CardTitle>
            <Droplets className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 Rivers</div>
            <p className="text-xs text-muted-foreground">4 at critical levels</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 dark:bg-blue-900/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rainfall Forecast</CardTitle>
            <CloudRain className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85mm</div>
            <p className="text-xs text-muted-foreground">Expected in next 24 hours</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 dark:bg-blue-900/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Flood Alerts</CardTitle>
            <Waves className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 critical, 5 warning</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 dark:bg-blue-900/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Population at Risk</CardTitle>
            <AlertTriangle className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,280</div>
            <p className="text-xs text-muted-foreground">In flood-prone areas</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="map" className="mt-6">
        <TabsList>
          <TabsTrigger value="map">Flood Risk Map</TabsTrigger>
          <TabsTrigger value="water-levels">Water Levels</TabsTrigger>
          <TabsTrigger value="rainfall">Rainfall Forecast</TabsTrigger>
          <TabsTrigger value="alerts">Flood Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="map" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Flood Risk Monitoring</CardTitle>
              <CardDescription>Real-time flood risk assessment across regions</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <FloodMonitoringMap />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="water-levels" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>River Water Levels</CardTitle>
              <CardDescription>Real-time monitoring of water levels in major rivers</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <WaterLevelChart />
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Tana River</CardTitle>
                <CardDescription>Current Status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Current Level</p>
                    <p className="text-2xl font-bold">4.8m</p>
                  </div>
                  <Badge className="bg-red-500">Critical</Badge>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium">Threshold: 4.5m</p>
                  <p className="text-sm text-muted-foreground">Rising 0.2m per hour</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Nyando River</CardTitle>
                <CardDescription>Current Status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Current Level</p>
                    <p className="text-2xl font-bold">3.2m</p>
                  </div>
                  <Badge className="bg-orange-500">Warning</Badge>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium">Threshold: 3.5m</p>
                  <p className="text-sm text-muted-foreground">Rising 0.1m per hour</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Nzoia River</CardTitle>
                <CardDescription>Current Status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Current Level</p>
                    <p className="text-2xl font-bold">2.8m</p>
                  </div>
                  <Badge className="bg-yellow-500">Alert</Badge>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium">Threshold: 3.2m</p>
                  <p className="text-sm text-muted-foreground">Rising 0.05m per hour</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rainfall" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Rainfall Forecast</CardTitle>
              <CardDescription>Predicted rainfall over the next 7 days</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <RainfallForecastChart />
            </CardContent>
          </Card>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Satellite Imagery</CardTitle>
                <CardDescription>Latest weather satellite data</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-[300px] w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
                  {/* Placeholder for satellite imagery */}
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=600')] bg-cover bg-center opacity-30"></div>

                  <div className="absolute bottom-4 left-4 z-10 rounded-md bg-background/80 p-2 backdrop-blur-sm">
                    <p className="text-xs font-medium">Last Updated: Today, 10:30 AM</p>
                    <p className="text-xs text-muted-foreground">Source: Kenya Meteorological Department</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weather Stations</CardTitle>
                <CardDescription>Real-time data from weather stations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-md border p-3">
                    <div>
                      <p className="font-medium">Nairobi Station</p>
                      <p className="text-sm text-muted-foreground">Central Kenya</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">45mm</p>
                      <p className="text-sm text-muted-foreground">Last 24h</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-md border p-3">
                    <div>
                      <p className="font-medium">Kisumu Station</p>
                      <p className="text-sm text-muted-foreground">Western Kenya</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">78mm</p>
                      <p className="text-sm text-muted-foreground">Last 24h</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-md border p-3">
                    <div>
                      <p className="font-medium">Mombasa Station</p>
                      <p className="text-sm text-muted-foreground">Coastal Region</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">32mm</p>
                      <p className="text-sm text-muted-foreground">Last 24h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="mt-4">
          <FloodAlertsList />
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

