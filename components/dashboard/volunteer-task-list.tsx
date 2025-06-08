"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Clock, AlertTriangle, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Task {
  id: string
  title: string
  location: string
  priority: "high" | "medium" | "low"
  status: "assigned" | "in-progress" | "completed"
  dueDate: string
  type: "verification" | "response" | "assessment"
}

export function VolunteerTaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "TASK-001",
      title: "Verify Flooding Report",
      location: "Eastlands, Nairobi",
      priority: "high",
      status: "assigned",
      dueDate: "2023-06-15T14:00:00Z",
      type: "verification",
    },
    {
      id: "TASK-002",
      title: "Distribute Relief Supplies",
      location: "Kibera, Nairobi",
      priority: "medium",
      status: "in-progress",
      dueDate: "2023-06-15T16:00:00Z",
      type: "response",
    },
    {
      id: "TASK-003",
      title: "Assess Building Damage",
      location: "CBD, Nairobi",
      priority: "low",
      status: "assigned",
      dueDate: "2023-06-16T10:00:00Z",
      type: "assessment",
    },
    {
      id: "TASK-004",
      title: "First Aid Support",
      location: "Westlands, Nairobi",
      priority: "high",
      status: "assigned",
      dueDate: "2023-06-15T15:30:00Z",
      type: "response",
    },
    {
      id: "TASK-005",
      title: "Traffic Accident Verification",
      location: "Mombasa Road",
      priority: "medium",
      status: "completed",
      dueDate: "2023-06-14T09:00:00Z",
      type: "verification",
    },
  ])

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-500 hover:bg-red-600">High</Badge>
      case "medium":
        return <Badge className="bg-orange-500 hover:bg-orange-600">Medium</Badge>
      case "low":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Low</Badge>
      default:
        return <Badge>{priority}</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "assigned":
        return <Clock className="h-4 w-4 text-muted-foreground" />
      case "in-progress":
        return <AlertTriangle className="h-4 w-4 text-orange-500" />
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "verification":
        return <AlertTriangle className="h-4 w-4 text-primary" />
      case "response":
        return <Clock className="h-4 w-4 text-primary" />
      case "assessment":
        return <CheckCircle2 className="h-4 w-4 text-primary" />
      default:
        return null
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const activeTasks = tasks.filter((task) => task.status !== "completed")
  const completedTasks = tasks.filter((task) => task.status === "completed")

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Assigned Tasks</CardTitle>
        <CardDescription>Your current assignments and responsibilities</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="active">
          <TabsList className="mb-4 w-full">
            <TabsTrigger value="active" className="flex-1">
              Active Tasks ({activeTasks.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex-1">
              Completed ({completedTasks.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeTasks.length === 0 ? (
              <div className="flex h-32 flex-col items-center justify-center rounded-md border border-dashed">
                <p className="text-sm text-muted-foreground">No active tasks</p>
              </div>
            ) : (
              activeTasks.map((task) => (
                <div key={task.id} className="rounded-md border">
                  <div className="flex items-center justify-between border-b p-4">
                    <div className="flex items-center">
                      {getTypeIcon(task.type)}
                      <span className="ml-2 font-medium">{task.title}</span>
                    </div>
                    {getPriorityBadge(task.priority)}
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {task.location}
                    </div>
                    <div className="mb-4 flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      Due: {formatDate(task.dueDate)}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {getStatusIcon(task.status)}
                        <span className="ml-1 text-sm capitalize">{task.status.replace("-", " ")}</span>
                      </div>
                      <Button size="sm" asChild>
                        <Link href={`/tasks/${task.id}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedTasks.length === 0 ? (
              <div className="flex h-32 flex-col items-center justify-center rounded-md border border-dashed">
                <p className="text-sm text-muted-foreground">No completed tasks</p>
              </div>
            ) : (
              completedTasks.map((task) => (
                <div key={task.id} className="rounded-md border bg-muted/30">
                  <div className="flex items-center justify-between border-b p-4">
                    <div className="flex items-center">
                      {getTypeIcon(task.type)}
                      <span className="ml-2 font-medium">{task.title}</span>
                    </div>
                    {getPriorityBadge(task.priority)}
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {task.location}
                    </div>
                    <div className="mb-4 flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      Completed: {formatDate(task.dueDate)}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="ml-1 text-sm">Completed</span>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/tasks/${task.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

