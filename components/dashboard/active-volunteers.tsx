"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock } from "lucide-react"

export function ActiveVolunteers() {
  const volunteers = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "active",
      location: "Westlands, Nairobi",
      assignment: "Building Fire",
      lastActive: "5 minutes ago",
      skills: ["First Aid", "Search & Rescue"],
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "active",
      location: "Mombasa Road",
      assignment: "Traffic Accident",
      lastActive: "12 minutes ago",
      skills: ["Medical", "Logistics"],
    },
    {
      id: 3,
      name: "Michael Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "active",
      location: "Kisumu CBD",
      assignment: "Flooding",
      lastActive: "20 minutes ago",
      skills: ["Firefighting", "First Aid"],
    },
    {
      id: 4,
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "standby",
      location: "Nakuru",
      assignment: "On Standby",
      lastActive: "2 minutes ago",
      skills: ["Medical", "Counseling"],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Active Volunteers</CardTitle>
            <CardDescription>Currently deployed personnel</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {volunteers.map((volunteer) => (
            <div key={volunteer.id} className="flex items-start justify-between rounded-md border p-3">
              <div className="flex items-start">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
                  <AvatarFallback>{volunteer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <div className="flex items-center">
                    <p className="text-sm font-medium">{volunteer.name}</p>
                    <Badge
                      variant="outline"
                      className={
                        volunteer.status === "active"
                          ? "ml-2 bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300"
                          : "ml-2 bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300"
                      }
                    >
                      {volunteer.status === "active" ? "Active" : "Standby"}
                    </Badge>
                  </div>
                  <div className="mt-1 flex items-center text-xs text-muted-foreground">
                    <MapPin className="mr-1 h-3 w-3" />
                    {volunteer.location}
                  </div>
                  <div className="mt-1 flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    Last active: {volunteer.lastActive}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {volunteer.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-muted text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium">Assignment</p>
                <p className="text-sm">{volunteer.assignment}</p>
                <Button size="sm" variant="outline" className="mt-2">
                  Contact
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

