"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DiseaseOutbreakMap } from "./disease-outbreak-map"
import { DiseaseTimelineChart } from "./disease-timeline-chart"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowUpRight, Bell, Eye, Filter } from "lucide-react"

export function DiseaseSurveillanceDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Tabs defaultValue="overview" className="col-span-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="alerts">
              Alerts
              <Badge className="ml-2 bg-red-500">3</Badge>
            </TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </Button>
          </div>
        </div>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Outbreaks</CardTitle>
                <AlertCircle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">+2 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Confirmed Cases</CardTitle>
                <AlertCircle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,284</div>
                <p className="text-xs text-muted-foreground">+324 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Affected Counties</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+3 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Fatality Rate</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4%</div>
                <p className="text-xs text-muted-foreground">-0.3% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Disease Outbreak Map</CardTitle>
                <CardDescription>Geographic distribution of current outbreaks</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <DiseaseOutbreakMap />
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Disease Trends</CardTitle>
                <CardDescription>Case numbers over the past 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <DiseaseTimelineChart />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>Latest disease surveillance reports from health facilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">Cholera Outbreak - Tana River County</p>
                    <p className="text-sm text-muted-foreground">
                      Reported by Hola County Hospital - 24 new cases in the past 48 hours
                    </p>
                  </div>
                  <Badge className="bg-red-500">Critical</Badge>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">Dengue Fever - Mombasa County</p>
                    <p className="text-sm text-muted-foreground">
                      Reported by Coast General Hospital - 18 new cases in the past 24 hours
                    </p>
                  </div>
                  <Badge className="bg-orange-500">High</Badge>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">Respiratory Illness - Nairobi County</p>
                    <p className="text-sm text-muted-foreground">
                      Reported by Kenyatta National Hospital - 42 new cases in the past 72 hours
                    </p>
                  </div>
                  <Badge className="bg-yellow-500">Medium</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  View All Reports
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-red-800 dark:text-red-400">Critical Alert: Cholera Outbreak</CardTitle>
                <Badge className="bg-red-500">Critical</Badge>
              </div>
              <CardDescription className="text-red-700 dark:text-red-300">
                Issued 6 hours ago - Tana River County
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-red-700 dark:text-red-300">
                A severe cholera outbreak has been reported in Tana River County with 24 new cases in the past 48 hours.
                The outbreak is spreading rapidly due to contaminated water sources following recent flooding.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-md bg-red-100 p-2 dark:bg-red-900/20">
                  <span className="font-medium text-red-800 dark:text-red-300">Affected Areas:</span>
                  <span className="text-red-700 dark:text-red-300">Hola, Garsen, Bura</span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-red-100 p-2 dark:bg-red-900/20">
                  <span className="font-medium text-red-800 dark:text-red-300">Total Cases:</span>
                  <span className="text-red-700 dark:text-red-300">78</span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-red-100 p-2 dark:bg-red-900/20">
                  <span className="font-medium text-red-800 dark:text-red-300">Fatalities:</span>
                  <span className="text-red-700 dark:text-red-300">3</span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button className="bg-red-600 hover:bg-red-700">View Response Plan</Button>
                <Button
                  variant="outline"
                  className="border-red-300 text-red-700 hover:bg-red-100 dark:border-red-800 dark:text-red-300 dark:hover:bg-red-900/20"
                >
                  Send Alert
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50 dark:border-orange-900 dark:bg-orange-950/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-orange-800 dark:text-orange-400">High Alert: Dengue Fever</CardTitle>
                <Badge className="bg-orange-500">High</Badge>
              </div>
              <CardDescription className="text-orange-700 dark:text-orange-300">
                Issued 12 hours ago - Mombasa County
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-orange-700 dark:text-orange-300">
                An increase in Dengue Fever cases has been reported in Mombasa County with 18 new cases in the past 24
                hours. The outbreak is concentrated in urban areas with poor drainage systems.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-md bg-orange-100 p-2 dark:bg-orange-900/20">
                  <span className="font-medium text-orange-800 dark:text-orange-300">Affected Areas:</span>
                  <span className="text-orange-700 dark:text-orange-300">Mvita, Nyali, Kisauni</span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-orange-100 p-2 dark:bg-orange-900/20">
                  <span className="font-medium text-orange-800 dark:text-orange-300">Total Cases:</span>
                  <span className="text-orange-700 dark:text-orange-300">42</span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-orange-100 p-2 dark:bg-orange-900/20">
                  <span className="font-medium text-orange-800 dark:text-orange-300">Fatalities:</span>
                  <span className="text-orange-700 dark:text-orange-300">0</span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button className="bg-orange-600 hover:bg-orange-700">View Response Plan</Button>
                <Button
                  variant="outline"
                  className="border-orange-300 text-orange-700 hover:bg-orange-100 dark:border-orange-800 dark:text-orange-300 dark:hover:bg-orange-900/20"
                >
                  Send Alert
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-yellow-800 dark:text-yellow-400">
                  Medium Alert: Respiratory Illness
                </CardTitle>
                <Badge className="bg-yellow-500">Medium</Badge>
              </div>
              <CardDescription className="text-yellow-700 dark:text-yellow-300">
                Issued 18 hours ago - Nairobi County
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-yellow-700 dark:text-yellow-300">
                An increase in respiratory illness cases has been reported in Nairobi County with 42 new cases in the
                past 72 hours. The cases are primarily affecting children under 5 years and adults over 65 years.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-md bg-yellow-100 p-2 dark:bg-yellow-900/20">
                  <span className="font-medium text-yellow-800 dark:text-yellow-300">Affected Areas:</span>
                  <span className="text-yellow-700 dark:text-yellow-300">Westlands, Kibera, Eastleigh</span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-yellow-100 p-2 dark:bg-yellow-900/20">
                  <span className="font-medium text-yellow-800 dark:text-yellow-300">Total Cases:</span>
                  <span className="text-yellow-700 dark:text-yellow-300">64</span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-yellow-100 p-2 dark:bg-yellow-900/20">
                  <span className="font-medium text-yellow-800 dark:text-yellow-300">Fatalities:</span>
                  <span className="text-yellow-700 dark:text-yellow-300">1</span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button className="bg-yellow-600 hover:bg-yellow-700">View Response Plan</Button>
                <Button
                  variant="outline"
                  className="border-yellow-300 text-yellow-700 hover:bg-yellow-100 dark:border-yellow-800 dark:text-yellow-300 dark:hover:bg-yellow-900/20"
                >
                  Send Alert
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

