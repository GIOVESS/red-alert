"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Ambulance, Users, Truck } from "lucide-react"

export function ResourceStatus() {
  const resources = [
    {
      name: "Emergency Vehicles",
      available: 12,
      total: 15,
      icon: Ambulance,
    },
    {
      name: "Volunteers",
      available: 45,
      total: 60,
      icon: Users,
    },
    {
      name: "Supply Kits",
      available: 120,
      total: 200,
      icon: Truck,
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Resource Status</CardTitle>
        <CardDescription>Available emergency resources</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {resources.map((resource) => (
            <div key={resource.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <resource.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{resource.name}</span>
                </div>
                <span className="text-sm font-medium">
                  {resource.available}/{resource.total}
                </span>
              </div>
              <Progress value={(resource.available / resource.total) * 100} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

