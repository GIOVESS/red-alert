"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Bell, CheckCircle, Clock, Filter, MapPin, Search, Users } from "lucide-react"

// Sample flood alerts data
const floodAlerts = [
  {
    id: "FL-001",
    severity: "critical",
    location: "Tana River Basin, Garissa County",
    timestamp: "2023-04-15T08:30:00Z",
    description:
      "Severe flooding expected in the next 6-12 hours. Water levels have exceeded critical threshold. Immediate evacuation required.",
    affectedPopulation: 8500,
    status: "active",
    instructions:
      "Evacuate to higher ground immediately. Emergency shelters have been established at Garissa Primary School and Garissa University.",
    coordinates: { lat: -0.4536, lng: 39.6401 },
  },
  {
    id: "FL-002",
    severity: "warning",
    location: "Nyando River Basin, Kisumu County",
    timestamp: "2023-04-15T09:15:00Z",
    description:
      "Rising water levels approaching warning threshold. Flooding possible in the next 12-24 hours if rainfall continues.",
    affectedPopulation: 12000,
    status: "active",
    instructions:
      "Prepare for possible evacuation. Secure belongings and livestock. Monitor official channels for updates.",
    coordinates: { lat: -0.1022, lng: 34.7617 },
  },
  {
    id: "FL-003",
    severity: "alert",
    location: "Nzoia River Basin, Bungoma County",
    timestamp: "2023-04-15T07:45:00Z",
    description:
      "Water levels rising steadily. Alert level reached. Potential for flooding in low-lying areas within 24-48 hours.",
    affectedPopulation: 5000,
    status: "active",
    instructions:
      "Be prepared to move to higher ground. Avoid river banks and flood-prone areas. Keep emergency supplies ready.",
    coordinates: { lat: 0.5636, lng: 34.5691 },
  },
  {
    id: "FL-004",
    severity: "warning",
    location: "Sabaki River, Malindi",
    timestamp: "2023-04-15T06:20:00Z",
    description:
      "Heavy rainfall upstream causing rapid rise in water levels. Flooding expected in the next 18-24 hours.",
    affectedPopulation: 7800,
    status: "active",
    instructions:
      "Prepare for evacuation. Secure important documents and valuables. Livestock should be moved to higher ground.",
    coordinates: { lat: -3.2138, lng: 40.1169 },
  },
  {
    id: "FL-005",
    severity: "critical",
    location: "Kuja River, Migori County",
    timestamp: "2023-04-15T10:05:00Z",
    description: "Dam overflow imminent. Flash flooding expected in downstream areas within 3-6 hours.",
    affectedPopulation: 6700,
    status: "active",
    instructions:
      "Evacuate immediately to designated safe zones. Emergency response teams are being deployed to assist.",
    coordinates: { lat: -1.0635, lng: 34.4731 },
  },
  {
    id: "FL-006",
    severity: "warning",
    location: "Athi River, Machakos County",
    timestamp: "2023-04-15T08:50:00Z",
    description:
      "Sustained rainfall causing water levels to rise. Flooding possible in low-lying areas within 24 hours.",
    affectedPopulation: 4200,
    status: "active",
    instructions:
      "Prepare for possible evacuation. Move valuable items to higher levels in buildings. Keep emergency contacts handy.",
    coordinates: { lat: -1.5177, lng: 37.2634 },
  },
  {
    id: "FL-007",
    severity: "alert",
    location: "Ewaso Ng'iro River, Isiolo County",
    timestamp: "2023-04-15T07:30:00Z",
    description: "Moderate rainfall upstream causing gradual rise in water levels. Monitoring ongoing.",
    affectedPopulation: 3000,
    status: "active",
    instructions:
      "No immediate action required. Stay informed through official channels. Avoid unnecessary travel near riverbanks.",
    coordinates: { lat: 0.3536, lng: 37.5833 },
  },
  {
    id: "FL-008",
    severity: "resolved",
    location: "Mara River, Narok County",
    timestamp: "2023-04-14T14:20:00Z",
    description: "Water levels have receded below alert threshold. Situation has stabilized.",
    affectedPopulation: 2500,
    status: "resolved",
    instructions:
      "Safe to return to homes. Exercise caution around damaged structures. Report any infrastructure damage to local authorities.",
    coordinates: { lat: -1.0919, lng: 35.8112 },
  },
]

export function FloodAlertsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Filter alerts based on search query and active tab
  const filteredAlerts = floodAlerts.filter((alert) => {
    const matchesSearch =
      alert.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.id.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "critical") return matchesSearch && alert.severity === "critical"
    if (activeTab === "warning") return matchesSearch && alert.severity === "warning"
    if (activeTab === "alert") return matchesSearch && alert.severity === "alert"
    if (activeTab === "resolved") return matchesSearch && alert.status === "resolved"

    return matchesSearch
  })

  // Get severity badge
  const getSeverityBadge = (severity) => {
    switch (severity) {
      case "critical":
        return <Badge className="bg-red-500">Critical</Badge>
      case "warning":
        return <Badge className="bg-orange-500">Warning</Badge>
      case "alert":
        return <Badge className="bg-yellow-500">Alert</Badge>
      case "resolved":
        return <Badge className="bg-green-500">Resolved</Badge>
      default:
        return null
    }
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Flood Alerts</CardTitle>
        <CardDescription>Active and recent flood alerts across all monitored regions</CardDescription>

        <div className="mt-4 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search alerts by location or ID..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="all" className="mt-4" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="critical">Critical</TabsTrigger>
            <TabsTrigger value="warning">Warning</TabsTrigger>
            <TabsTrigger value="alert">Alert</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {filteredAlerts.length === 0 ? (
            <div className="flex h-40 flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
              <Bell className="h-10 w-10 text-muted-foreground/40" />
              <h3 className="mt-4 text-lg font-semibold">No alerts found</h3>
              <p className="text-sm text-muted-foreground">No flood alerts match your current filters.</p>
            </div>
          ) : (
            filteredAlerts.map((alert) => (
              <Card
                key={alert.id}
                className={`border-l-4 ${
                  alert.severity === "critical"
                    ? "border-l-red-500"
                    : alert.severity === "warning"
                      ? "border-l-orange-500"
                      : alert.severity === "alert"
                        ? "border-l-yellow-500"
                        : "border-l-green-500"
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {alert.severity === "critical" && <AlertTriangle className="h-5 w-5 text-red-500" />}
                      <CardTitle className="text-base">
                        {alert.id}: {alert.location}
                      </CardTitle>
                    </div>
                    {getSeverityBadge(alert.severity)}
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {formatDate(alert.timestamp)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{alert.description}</p>

                  <div className="mt-4 flex flex-wrap gap-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{alert.affectedPopulation.toLocaleString()} people affected</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>
                        Coordinates: {alert.coordinates.lat.toFixed(4)}, {alert.coordinates.lng.toFixed(4)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium">Instructions:</h4>
                    <p className="text-sm text-muted-foreground">{alert.instructions}</p>
                  </div>

                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View on Map
                    </Button>
                    {alert.status === "active" && (
                      <Button size="sm">
                        <Bell className="mr-2 h-4 w-4" />
                        Send Alert
                      </Button>
                    )}
                    {alert.status === "resolved" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700"
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Resolved
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}

