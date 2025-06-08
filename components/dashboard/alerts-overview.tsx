"use client"

import { AlertTriangle, CloudRain, Flame, Waves } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AlertsOverviewProps {
  className?: string
}

export function AlertsOverview({ className }: AlertsOverviewProps) {
  return (
    <Tabs defaultValue="active" className={className}>
      <div className="flex items-center justify-between">
        <CardTitle>Active Alerts</CardTitle>
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="predicted">Predicted</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="active" className="mt-2 space-y-4">
        <Card className="border-l-4 border-l-red-600">
          <CardHeader className="p-4 pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium">Flash Flood Warning</CardTitle>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Waves className="h-4 w-4" />
              </div>
            </div>
            <CardDescription>Nairobi County - Issued 2 hours ago</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm">
              Heavy rainfall expected to cause flash flooding in low-lying areas. Evacuate immediately.
            </p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="p-4 pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium">Wildfire Alert</CardTitle>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <Flame className="h-4 w-4" />
              </div>
            </div>
            <CardDescription>Nakuru County - Issued 5 hours ago</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm">Wildfire spreading in northern regions. Prepare for possible evacuation.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="predicted" className="mt-2 space-y-4">
        <Card className="border-l-4 border-l-yellow-500">
          <CardHeader className="p-4 pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium">Potential Landslide</CardTitle>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
                <AlertTriangle className="h-4 w-4" />
              </div>
            </div>
            <CardDescription>Muranga County - 80% probability within 48 hours</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm">
              ML models predict high probability of landslides due to soil saturation and continued rainfall.
            </p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="p-4 pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium">Heavy Rainfall</CardTitle>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                <CloudRain className="h-4 w-4" />
              </div>
            </div>
            <CardDescription>Mombasa County - 90% probability within 24 hours</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm">Weather models predict heavy rainfall exceeding 100mm in the next 24 hours.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

