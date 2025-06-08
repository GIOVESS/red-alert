import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Calendar, Filter } from "lucide-react"
import { IncidentTrendsChart } from "@/components/analytics/incident-trends-chart"
import { ResponseTimeChart } from "@/components/analytics/response-time-chart"
import { ResourceUtilizationChart } from "@/components/analytics/resource-utilization-chart"
import { GeographicDistributionMap } from "@/components/analytics/geographic-distribution-map"

export const metadata: Metadata = {
  title: "Analytics | RedAlert",
  description: "Disaster management analytics and insights",
}

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Analytics" description="Insights and statistics for disaster management">
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 Days
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </DashboardHeader>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Incidents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28 min</div>
            <p className="text-xs text-muted-foreground">-5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resources Deployed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,024</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Affected Population</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,450</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="incidents">Incidents</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="geographic">Geographic</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Incident Trends</CardTitle>
                <CardDescription>Monthly incident reports by type</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <IncidentTrendsChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
                <CardDescription>Average response time by incident type</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponseTimeChart />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Resource Utilization</CardTitle>
                <CardDescription>Resource allocation and usage</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResourceUtilizationChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Incident distribution by region</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <GeographicDistributionMap />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="incidents" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Incident Analytics</CardTitle>
              <CardDescription>Comprehensive analysis of incident data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] flex items-center justify-center">
                <p className="text-muted-foreground">Detailed incident analytics will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Resource Analytics</CardTitle>
              <CardDescription>Detailed resource allocation and efficiency metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] flex items-center justify-center">
                <p className="text-muted-foreground">Resource analytics will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="geographic" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Geographic Analysis</CardTitle>
              <CardDescription>Spatial analysis of incidents and response</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] flex items-center justify-center">
                <p className="text-muted-foreground">Geographic analysis will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

