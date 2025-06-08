"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CloudRain, Flame, Waves, Info, ExternalLink } from "lucide-react"
import { useUserRole } from "@/hooks/use-user-role"

interface Alert {
  id: string
  title: string
  description: string
  type: "flood" | "fire" | "weather" | "landslide" | "other"
  severity: "critical" | "high" | "medium" | "low"
  location: string
  issuedAt: string
  expiresAt: string
  source: string
  instructions: string
}

export function AlertsList() {
  const { role } = useUserRole()
  const [activeTab, setActiveTab] = useState("active")

  const alerts: Alert[] = [
    {
      id: "ALERT-001",
      title: "Flash Flood Warning",
      description:
        "Heavy rainfall causing flash flooding in low-lying areas. Evacuate immediately if in affected areas.",
      type: "flood",
      severity: "critical",
      location: "Nairobi County - Eastlands, South B, South C",
      issuedAt: "2023-06-15T10:30:00Z",
      expiresAt: "2023-06-16T10:30:00Z",
      source: "Kenya Meteorological Department",
      instructions:
        "Move to higher ground immediately. Do not attempt to cross flooded areas. Follow evacuation routes.",
    },
    {
      id: "ALERT-002",
      title: "Wildfire Alert",
      description: "Wildfire spreading in northern regions. Prepare for possible evacuation.",
      type: "fire",
      severity: "high",
      location: "Nakuru County - Northern regions",
      issuedAt: "2023-06-15T11:45:00Z",
      expiresAt: "2023-06-17T11:45:00Z",
      source: "Kenya Forest Service",
      instructions:
        "Be prepared to evacuate. Gather essential items. Keep windows and doors closed to prevent smoke inhalation.",
    },
    {
      id: "ALERT-003",
      title: "Heavy Rainfall Advisory",
      description: "Persistent heavy rainfall expected over the next 48 hours. Potential for flooding and landslides.",
      type: "weather",
      severity: "medium",
      location: "Mombasa County - Coastal regions",
      issuedAt: "2023-06-14T09:15:00Z",
      expiresAt: "2023-06-16T09:15:00Z",
      source: "Kenya Meteorological Department",
      instructions:
        "Avoid flood-prone areas. Secure loose objects that could be blown away. Stay updated with weather reports.",
    },
    {
      id: "ALERT-004",
      title: "Landslide Risk",
      description: "High risk of landslides due to soil saturation and continued rainfall in hilly areas.",
      type: "landslide",
      severity: "high",
      location: "Muranga County - Hilly regions",
      issuedAt: "2023-06-14T16:20:00Z",
      expiresAt: "2023-06-16T16:20:00Z",
      source: "National Disaster Management Unit",
      instructions:
        "Evacuate from steep slopes and areas with visible land movement. Report any signs of land movement.",
    },
    {
      id: "ALERT-005",
      title: "Drought Conditions",
      description: "Persistent drought conditions affecting water supply and agriculture.",
      type: "other",
      severity: "medium",
      location: "Turkana County",
      issuedAt: "2023-06-10T08:00:00Z",
      expiresAt: "2023-07-10T08:00:00Z",
      source: "National Drought Management Authority",
      instructions: "Conserve water. Follow water rationing schedules. Report water shortages to local authorities.",
    },
  ]

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "flood":
        return <Waves className="h-5 w-5" />
      case "fire":
        return <Flame className="h-5 w-5" />
      case "weather":
        return <CloudRain className="h-5 w-5" />
      case "landslide":
        return <AlertTriangle className="h-5 w-5" />
      default:
        return <Info className="h-5 w-5" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "high":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "low":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const activeAlerts = alerts.filter((alert) => new Date(alert.expiresAt) > new Date())
  const expiredAlerts = alerts.filter((alert) => new Date(alert.expiresAt) <= new Date())

  return (
    <Card>
      <CardHeader>
        <CardTitle>Emergency Alerts</CardTitle>
        <CardDescription>Current and recent emergency alerts for your region</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="active" onValueChange={setActiveTab}>
          <TabsList className="mb-4 w-full">
            <TabsTrigger value="active" className="flex-1">
              Active Alerts ({activeAlerts.length})
            </TabsTrigger>
            <TabsTrigger value="expired" className="flex-1">
              Past Alerts ({expiredAlerts.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`rounded-md border-l-4 border-l-${alert.severity === "critical" ? "red" : alert.severity === "high" ? "orange" : alert.severity === "medium" ? "yellow" : "blue"}-500`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${getSeverityColor(alert.severity)}`}
                      >
                        {getAlertIcon(alert.type)}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">{alert.title}</h3>
                        <p className="text-sm text-muted-foreground">{alert.location}</p>
                      </div>
                    </div>
                    {getSeverityBadge(alert.severity)}
                  </div>

                  <div className="mt-4">
                    <p className="text-sm">{alert.description}</p>
                  </div>

                  <div className="mt-4 grid gap-2 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Issued</p>
                      <p className="text-sm">{formatDate(alert.issuedAt)}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Expires</p>
                      <p className="text-sm">{formatDate(alert.expiresAt)}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-medium text-muted-foreground">Instructions</p>
                    <p className="text-sm">{alert.instructions}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">Source: {alert.source}</p>
                    <Button size="sm" variant="outline">
                      More Details
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="expired" className="space-y-4">
            {expiredAlerts.map((alert) => (
              <div key={alert.id} className="rounded-md border opacity-70">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${getSeverityColor(alert.severity)}`}
                      >
                        {getAlertIcon(alert.type)}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">{alert.title}</h3>
                        <p className="text-sm text-muted-foreground">{alert.location}</p>
                      </div>
                    </div>
                    <Badge variant="outline">Expired</Badge>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm">{alert.description}</p>
                  </div>

                  <div className="mt-4 grid gap-2 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Issued</p>
                      <p className="text-sm">{formatDate(alert.issuedAt)}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Expired</p>
                      <p className="text-sm">{formatDate(alert.expiresAt)}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">Source: {alert.source}</p>
                    <Button size="sm" variant="outline">
                      View Archive
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
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

