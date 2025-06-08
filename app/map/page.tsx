import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { InteractiveMap } from "@/components/map/interactive-map"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Map | RedAlert",
  description: "Interactive disaster map",
}

export default function MapPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Interactive Map" description="View and analyze disaster data geographically" />

      <Tabs defaultValue="live" className="mt-6">
        <TabsList>
          <TabsTrigger value="live">Live Incidents</TabsTrigger>
          <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
          <TabsTrigger value="resources">Resource Deployment</TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="mt-4 space-y-4">
          <InteractiveMap />
        </TabsContent>

        <TabsContent value="risk" className="mt-4 space-y-4">
          <InteractiveMap />
          <Card>
            <CardHeader>
              <CardTitle>Risk Analysis</CardTitle>
              <CardDescription>
                Areas with high probability of disasters based on historical data and current conditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium">Flood Risk Zones</div>
                    <div className="mt-1 text-2xl font-bold text-primary">12</div>
                    <div className="text-xs text-muted-foreground">4 critical, 8 high</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium">Landslide Risk Areas</div>
                    <div className="mt-1 text-2xl font-bold text-primary">8</div>
                    <div className="text-xs text-muted-foreground">2 critical, 6 high</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium">Fire Hazard Zones</div>
                    <div className="mt-1 text-2xl font-bold text-primary">5</div>
                    <div className="text-xs text-muted-foreground">1 critical, 4 high</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="mt-4 space-y-4">
          <InteractiveMap />
          <Card>
            <CardHeader>
              <CardTitle>Resource Distribution</CardTitle>
              <CardDescription>Current deployment of emergency resources across regions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium">Emergency Vehicles</div>
                    <div className="mt-1 text-2xl font-bold text-primary">24</div>
                    <div className="text-xs text-muted-foreground">12 ambulances, 8 fire trucks, 4 police</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium">Medical Teams</div>
                    <div className="mt-1 text-2xl font-bold text-primary">15</div>
                    <div className="text-xs text-muted-foreground">5 trauma, 10 general</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium">Supply Centers</div>
                    <div className="mt-1 text-2xl font-bold text-primary">8</div>
                    <div className="text-xs text-muted-foreground">3 major, 5 satellite</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

