"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, AlertTriangle, CloudRain, Flame, Waves, Send } from "lucide-react"

interface Alert {
  id: string
  title: string
  type: string
  severity: "critical" | "high" | "medium" | "low"
  status: "active" | "scheduled" | "expired"
  region: string
  channels: string[]
  createdAt: string
}

export function AlertManagement() {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: "ALERT-001",
      title: "Flash Flood Warning",
      type: "flood",
      severity: "critical",
      status: "active",
      region: "Nairobi County",
      channels: ["SMS", "WhatsApp", "Social Media"],
      createdAt: "2023-06-15T10:30:00Z",
    },
    {
      id: "ALERT-002",
      title: "Wildfire Alert",
      type: "fire",
      severity: "high",
      status: "active",
      region: "Nakuru County",
      channels: ["SMS", "Radio", "Social Media"],
      createdAt: "2023-06-15T11:45:00Z",
    },
    {
      id: "ALERT-003",
      title: "Heavy Rainfall Advisory",
      type: "weather",
      severity: "medium",
      status: "scheduled",
      region: "Mombasa County",
      channels: ["SMS", "WhatsApp"],
      createdAt: "2023-06-15T09:15:00Z",
    },
    {
      id: "ALERT-004",
      title: "Landslide Risk",
      type: "landslide",
      severity: "high",
      status: "active",
      region: "Muranga County",
      channels: ["SMS", "Radio", "WhatsApp", "Social Media"],
      createdAt: "2023-06-14T16:20:00Z",
    },
  ])

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge className="bg-red-500 hover:bg-red-600">Critical</Badge>
      case "high":
        return <Badge className="bg-orange-500 hover:bg-orange-600">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Medium</Badge>
      case "low":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Low</Badge>
      default:
        return <Badge>{severity}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge
            variant="outline"
            className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300"
          >
            Active
          </Badge>
        )
      case "scheduled":
        return (
          <Badge
            variant="outline"
            className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300"
          >
            Scheduled
          </Badge>
        )
      case "expired":
        return (
          <Badge
            variant="outline"
            className="bg-gray-100 text-gray-800 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
          >
            Expired
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "flood":
        return <Waves className="h-4 w-4 text-blue-500" />
      case "fire":
        return <Flame className="h-4 w-4 text-orange-500" />
      case "weather":
        return <CloudRain className="h-4 w-4 text-blue-500" />
      case "landslide":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      default:
        return <Bell className="h-4 w-4 text-primary" />
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

  const activeAlerts = alerts.filter((alert) => alert.status === "active")
  const scheduledAlerts = alerts.filter((alert) => alert.status === "scheduled")

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Alert Management</CardTitle>
            <CardDescription>Manage and issue emergency alerts</CardDescription>
          </div>
          <Button>
            <Bell className="mr-2 h-4 w-4" />
            New Alert
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="active">
          <TabsList className="mb-4 w-full">
            <TabsTrigger value="active" className="flex-1">
              Active Alerts ({activeAlerts.length})
            </TabsTrigger>
            <TabsTrigger value="scheduled" className="flex-1">
              Scheduled ({scheduledAlerts.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeAlerts.map((alert) => (
              <div key={alert.id} className="rounded-md border">
                <div className="flex items-center justify-between border-b p-4">
                  <div className="flex items-center">
                    {getAlertIcon(alert.type)}
                    <span className="ml-2 font-medium">{alert.title}</span>
                  </div>
                  {getSeverityBadge(alert.severity)}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Region: {alert.region}</p>
                      <p className="text-sm text-muted-foreground">Issued: {formatDate(alert.createdAt)}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {alert.channels.map((channel) => (
                          <Badge key={channel} variant="outline" className="bg-muted text-xs">
                            {channel}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button size="sm" variant="outline">
                        <Send className="mr-2 h-4 w-4" />
                        Resend
                      </Button>
                      <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                        Cancel Alert
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-4">
            {scheduledAlerts.map((alert) => (
              <div key={alert.id} className="rounded-md border">
                <div className="flex items-center justify-between border-b p-4">
                  <div className="flex items-center">
                    {getAlertIcon(alert.type)}
                    <span className="ml-2 font-medium">{alert.title}</span>
                  </div>
                  {getSeverityBadge(alert.severity)}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Region: {alert.region}</p>
                      <p className="text-sm text-muted-foreground">Scheduled: {formatDate(alert.createdAt)}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {alert.channels.map((channel) => (
                          <Badge key={channel} variant="outline" className="bg-muted text-xs">
                            {channel}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

