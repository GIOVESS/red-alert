import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle2, Clock, Filter, MapPin, Plus } from "lucide-react"
import { TaskList } from "@/components/tasks/task-list"
import { TaskCalendar } from "@/components/tasks/task-calendar"

export const metadata: Metadata = {
  title: "Tasks | RedAlert",
  description: "Manage your emergency response tasks",
}

export default function TasksPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Tasks" description="Manage your assigned emergency response tasks">
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Task
          </Button>
        </div>
      </DashboardHeader>

      <div className="mt-6 grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-3 text-xl font-bold">5</h3>
            <p className="text-sm text-muted-foreground">Assigned Tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
              <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="mt-3 text-xl font-bold">3</h3>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="mt-3 text-xl font-bold">12</h3>
            <p className="text-sm text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mt-3 text-xl font-bold">2</h3>
            <p className="text-sm text-muted-foreground">Upcoming</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="list" className="mt-6">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="mt-4">
          <TaskList />
        </TabsContent>
        <TabsContent value="calendar" className="mt-4">
          <TaskCalendar />
        </TabsContent>
        <TabsContent value="map" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Task Map</CardTitle>
              <CardDescription>Geographic view of your assigned tasks</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative h-[500px] w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
                {/* Placeholder for the actual map */}
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=800')] bg-cover bg-center opacity-30"></div>

                {/* Sample task markers */}
                <div className="absolute left-[30%] top-[40%]">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">
                      Verify Flooding Report
                    </div>
                  </div>
                </div>

                <div className="absolute left-[60%] top-[30%]">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">
                      Distribute Relief Supplies
                    </div>
                  </div>
                </div>

                <div className="absolute left-[45%] top-[60%]">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="mt-1 rounded-md bg-background/90 px-2 py-1 text-xs shadow-sm">
                      Assess Building Damage
                    </div>
                  </div>
                </div>

                {/* Task summary */}
                <div className="absolute right-4 top-4 w-64 rounded-md bg-background/90 p-3 shadow-md backdrop-blur-sm">
                  <h4 className="mb-2 text-sm font-medium">Nearby Tasks</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Badge className="mr-2 bg-red-500">High</Badge>
                        <span className="text-xs">Verify Flooding</span>
                      </div>
                      <span className="text-xs">0.8km</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Badge className="mr-2 bg-orange-500">Medium</Badge>
                        <span className="text-xs">Distribute Supplies</span>
                      </div>
                      <span className="text-xs">1.2km</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Badge className="mr-2 bg-blue-500">Low</Badge>
                        <span className="text-xs">Assess Damage</span>
                      </div>
                      <span className="text-xs">1.5km</span>
                    </div>
                  </div>
                  <Button size="sm" className="mt-3 w-full">
                    Navigate to Nearest
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

