"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Search, Filter } from "lucide-react"

interface Volunteer {
  id: string
  name: string
  skills: string[]
  location: string
  status: "active" | "inactive" | "deployed"
  joinedAt: string
  contactInfo: string
}

export function VolunteersList() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([
    {
      id: "VOL-001",
      name: "John Doe",
      skills: ["First Aid", "Search & Rescue"],
      location: "Nairobi",
      status: "active",
      joinedAt: "2023-01-15T10:30:00Z",
      contactInfo: "+254 712 345 678",
    },
    {
      id: "VOL-002",
      name: "Jane Smith",
      skills: ["Medical", "Logistics"],
      location: "Mombasa",
      status: "deployed",
      joinedAt: "2022-11-05T14:45:00Z",
      contactInfo: "+254 723 456 789",
    },
    {
      id: "VOL-003",
      name: "Michael Johnson",
      skills: ["Firefighting", "First Aid"],
      location: "Kisumu",
      status: "active",
      joinedAt: "2023-02-20T09:15:00Z",
      contactInfo: "+254 734 567 890",
    },
    {
      id: "VOL-004",
      name: "Sarah Williams",
      skills: ["Medical", "Counseling"],
      location: "Nakuru",
      status: "inactive",
      joinedAt: "2022-08-10T11:30:00Z",
      contactInfo: "+254 745 678 901",
    },
    {
      id: "VOL-005",
      name: "Robert Brown",
      skills: ["Logistics", "Communications"],
      location: "Eldoret",
      status: "active",
      joinedAt: "2023-03-05T16:20:00Z",
      contactInfo: "+254 756 789 012",
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
      case "deployed":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Deployed</Badge>
      case "inactive":
        return <Badge variant="outline">Inactive</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Volunteers</CardTitle>
        <CardDescription>Manage and track volunteer information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search volunteers..." className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Skills</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {volunteers.map((volunteer) => (
              <TableRow key={volunteer.id}>
                <TableCell className="font-medium">{volunteer.name}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {volunteer.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-muted">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{volunteer.location}</TableCell>
                <TableCell>{getStatusBadge(volunteer.status)}</TableCell>
                <TableCell>{formatDate(volunteer.joinedAt)}</TableCell>
                <TableCell>{volunteer.contactInfo}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit Details</DropdownMenuItem>
                      <DropdownMenuItem>Assign to Incident</DropdownMenuItem>
                      <DropdownMenuItem>Change Status</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

