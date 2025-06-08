"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { format } from "date-fns"

interface CalendarTask {
  id: string
  title: string
  date: Date
  priority: "high" | "medium" | "low"
  status: "assigned" | "in-progress" | "completed" | "cancelled"
}

export function TaskCalendar() {
  const [date, setDate] = useState<Date>(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Sample tasks data
  const tasks: CalendarTask[] = [
    {
      id: "TASK-001",
      title: "Verify Flooding Report",
      date: new Date(2023, 5, 15, 14, 0),
      priority: "high",
      status: "assigned",
    },
    {
      id: "TASK-002",
      title: "Distribute Relief Supplies",
      date: new Date(2023, 5, 15, 16, 0),
      priority: "medium",
      status: "in-progress",
    },
    {
      id: "TASK-003",
      title: "Assess Building Damage",
      date: new Date(2023, 5, 16, 10, 0),
      priority: "low",
      status: "assigned",
    },
    {
      id: "TASK-004",
      title: "First Aid Support",
      date: new Date(2023, 5, 15, 15, 30),
      priority: "high",
      status: "assigned",
    },
    {
      id: "TASK-005",
      title: "Traffic Accident Verification",
      date: new Date(2023, 5, 14, 9, 0),
      priority: "medium",
      status: "completed",
    },
  ]

  // Filter tasks for the selected date
  const selectedDateTasks = selectedDate
    ? tasks.filter(
        (task) =>
          task.date.getDate() === selectedDate.getDate() &&
          task.date.getMonth() === selectedDate.getMonth() &&
          task.date.getFullYear() === selectedDate.getFullYear(),
      )
    : []

  // Function to determine if a date has tasks
  const hasTasksOnDate = (day: Date) => {
    return tasks.some(
      (task) =>
        task.date.getDate() === day.getDate() &&
        task.date.getMonth() === day.getMonth() &&
        task.date.getFullYear() === day.getFullYear(),
    )
  }

  // Function to get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500 hover:bg-red-600"
      case "medium":
        return "bg-orange-500 hover:bg-orange-600"
      case "low":
        return "bg-blue-500 hover:bg-blue-600"
      default:
        return ""
    }
  }

  // Function to get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "assigned":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            Assigned
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            In Progress
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            Completed
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
            Cancelled
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-1">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">{format(date, "MMMM yyyy")}</h3>
            <div className="flex space-x-1">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  const newDate = new Date(date)
                  newDate.setMonth(newDate.getMonth() - 1)
                  setDate(newDate)
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  const newDate = new Date(date)
                  newDate.setMonth(newDate.getMonth() + 1)
                  setDate(newDate)
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            month={date}
            onMonthChange={setDate}
            className="rounded-md border"
            modifiers={{
              hasTasks: (day) => hasTasksOnDate(day),
            }}
            modifiersStyles={{
              hasTasks: {
                fontWeight: "bold",
                backgroundColor: "hsl(var(--primary) / 0.1)",
                color: "hsl(var(--primary))",
              },
            }}
          />
          <Button className="w-full mt-4">
            <Plus className="mr-2 h-4 w-4" />
            Add Task
          </Button>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">
              {selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : "Select a date"}
            </h3>
            <Button variant="outline" size="sm">
              Today
            </Button>
          </div>

          {selectedDateTasks.length === 0 ? (
            <div className="flex h-64 flex-col items-center justify-center rounded-md border border-dashed">
              <p className="text-sm text-muted-foreground">No tasks scheduled for this date</p>
              <Button variant="outline" size="sm" className="mt-4">
                <Plus className="mr-2 h-4 w-4" />
                Add Task
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {selectedDateTasks.map((task) => (
                <div key={task.id} className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{task.title}</h4>
                    <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-muted-foreground">{format(task.date, "h:mm a")}</span>
                    </div>
                    {getStatusBadge(task.status)}
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button size="sm">Update Status</Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

