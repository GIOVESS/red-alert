"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Flame, Waves, AlertTriangle, Car, WormIcon as Virus, Mountain, CloudOff, Shield } from "lucide-react"

export function RecentIncidents() {
  const incidents = [
    {
      id: 1,
      title: "Building Fire",
      location: "Westlands, Nairobi",
      time: "10 minutes ago",
      status: "critical",
      icon: Flame,
    },
    {
      id: 2,
      title: "Traffic Accident",
      location: "Mombasa Road",
      time: "45 minutes ago",
      status: "high",
      icon: Car,
    },
    {
      id: 3,
      title: "Flooding",
      location: "Kisumu CBD",
      time: "2 hours ago",
      status: "medium",
      icon: Waves,
    },
    {
      id: 4,
      title: "Gas Leak",
      location: "Industrial Area, Nairobi",
      time: "3 hours ago",
      status: "high",
      icon: AlertTriangle,
    },
    {
      id: 5,
      title: "Cholera Outbreak",
      location: "Mombasa County",
      time: "5 hours ago",
      status: "critical",
      icon: Virus,
    },
    {
      id: 6,
      title: "Landslide",
      location: "Muranga County",
      time: "1 day ago",
      status: "high",
      icon: Mountain,
    },
    {
      id: 7,
      title: "Drought Alert",
      location: "Turkana County",
      time: "2 days ago",
      status: "medium",
      icon: CloudOff,
    },
    {
      id: 8,
      title: "Terrorist Threat",
      location: "Garissa County",
      time: "6 hours ago",
      status: "critical",
      icon: Shield,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-red-500 text-white hover:bg-red-600"
      case "high":
        return "bg-orange-500 text-white hover:bg-orange-600"
      case "medium":
        return "bg-yellow-500 text-white hover:bg-yellow-600"
      default:
        return "bg-blue-500 text-white hover:bg-blue-600"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle>Recent Incidents</CardTitle>
          <CardDescription>Latest reported emergencies</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {incidents.map((incident) => (
            <div key={incident.id} className="flex items-start space-x-4">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full ${
                  incident.status === "critical"
                    ? "bg-red-100 text-red-600"
                    : incident.status === "high"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-yellow-100 text-yellow-600"
                }`}
              >
                <incident.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium leading-none">{incident.title}</p>
                  <Badge className={getStatusColor(incident.status)}>{incident.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{incident.location}</p>
                <p className="text-xs text-muted-foreground">{incident.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

